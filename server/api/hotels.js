// server/api/hotels.js
import connectDB from "../configs/db.js";
import { registerHotel } from "../controllers/hotelController.js";
import { protect } from "../middleware/authMiddleware.js";
import { getAuth } from "@clerk/nextjs/server"; // Clerk helper

// Middleware runner for Vercel
function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) return reject(result);
      return resolve(result);
    });
  });
}

export default async function handler(req, res) {
  await connectDB();
  req.auth = getAuth(req); // Attach Clerk auth

  if (req.method === "POST") {
    try {
      await runMiddleware(req, res, protect);
      return registerHotel(req, res);
    } catch (err) {
      return res.status(401).json({ success: false, message: err.message });
    }
  }

  res.setHeader("Allow", ["POST"]);
  res.status(405).end(`Method ${req.method} Not Allowed`);
}
