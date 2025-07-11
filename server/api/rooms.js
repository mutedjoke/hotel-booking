// server/api/rooms.js
import connectDB from "../configs/db.js";
import { getAuth } from "@clerk/nextjs/server";
import { createRoom, getOwnerRooms, getRooms, toggleRoomAvailability } from "../controllers/roomController.js";
import upload from "../middleware/uploadMiddleware.js";
import { protect } from "../middleware/authMiddleware.js";

// Middleware runner for Vercel
function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) return reject(result);
      return resolve(result);
    });
  });
}

export const config = {
  api: {
    bodyParser: false, // needed for multer
  },
};

export default async function handler(req, res) {
  await connectDB();
  req.auth = getAuth(req);

  const method = req.method;
  const url = req.url || "";

  try {
    // POST /api/rooms
    if (method === "POST" && url === "/") {
      await runMiddleware(req, res, upload.array("images", 4));
      await runMiddleware(req, res, protect);
      return createRoom(req, res);
    }

    // GET /api/rooms
    if (method === "GET" && url === "/") {
      return getRooms(req, res);
    }

    // GET /api/rooms/owner
    if (method === "GET" && url.includes("/owner")) {
      await runMiddleware(req, res, protect);
      return getOwnerRooms(req, res);
    }

    // POST /api/rooms/toggle-availability
    if (method === "POST" && url.includes("/toggle-availability")) {
      return toggleRoomAvailability(req, res);
    }

    res.setHeader("Allow", ["GET", "POST"]);
    res.status(405).end(`Method ${method} Not Allowed`);
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
}
