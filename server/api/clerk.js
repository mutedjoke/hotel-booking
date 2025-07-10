// server/api/clerk.js
import { Webhook } from "svix";
import mongoose from "mongoose";
import User from "../models/User.js";

let conn = null;

async function connectDB() {
  if (conn) return conn;
  conn = await mongoose.connect(`${process.env.MONGODB_URI}/hotel-booking`);
  console.log("✅ MongoDB connected");
  return conn;
}

// Tell Vercel not to parse body so we can access raw buffer
export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).end("Method Not Allowed");
  }

  try {
    await connectDB();

    const chunks = [];
    for await (const chunk of req) {
      chunks.push(chunk);
    }
    const rawBody = Buffer.concat(chunks).toString("utf8");

    const headers = {
      "svix-id": req.headers["svix-id"],
      "svix-timestamp": req.headers["svix-timestamp"],
      "svix-signature": req.headers["svix-signature"],
    };

    const webhook = new Webhook(process.env.CLERK_WEBHOOK_SECRET);
    const evt = webhook.verify(rawBody, headers);

    const { data, type } = evt;

    switch (type) {
      case "user.created": {
        const userData = {
          _id: data.id,
          email: data.email_addresses[0].email_address,
          username: data.first_name || data.last_name
  ? `${data.first_name ?? ''} ${data.last_name ?? ''}`.trim()
  : data.username,

          image: data.image_url,
        };
        await User.create(userData);
        console.log("✅ User created:", userData);
        break;
      }

      case "user.updated": {
        const userData = {
          _id: data.id,
          email: data.email_addresses[0].email_address,
          username: data.first_name || data.last_name
  ? `${data.first_name ?? ''} ${data.last_name ?? ''}`.trim()
  : data.username,

          image: data.image_url,
        };
        await User.findByIdAndUpdate(data.id, userData);
        console.log("✏️ User updated:", data.id);
        break;
      }

      case "user.deleted": {
        await User.findByIdAndDelete(data.id);
        console.log("🗑️ User deleted:", data.id);
        break;
      }

      default:
        console.log("ℹ️ Unhandled Clerk event type:", type);
    }

    res.status(200).json({ success: true });
  } catch (err) {
    console.error("❌ Clerk Webhook Error:", err.message);
    res.status(400).json({ success: false, error: err.message });
  }
}
