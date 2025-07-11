import connectDB from "../configs/db.js";
import {
  checkAvailabilityAPI,
  createBooking,
  getUserBookings,
  getHotelBookings,
} from "../controllers/bookingController.js";
import { protect } from "../middleware/authMiddleware.js";

// Wrapper to support middleware
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

  const { method, url } = req;

  try {
    if (method === "POST" && url.endsWith("/check-availability")) {
      return checkAvailabilityAPI(req, res);
    }

    if (method === "POST" && url.endsWith("/book")) {
      await runMiddleware(req, res, protect);
      return createBooking(req, res);
    }

    if (method === "GET" && url.endsWith("/user")) {
      await runMiddleware(req, res, protect);
      return getUserBookings(req, res);
    }

    if (method === "GET" && url.endsWith("/hotel")) {
      await runMiddleware(req, res, protect);
      return getHotelBookings(req, res);
    }

    res.status(404).json({ success: false, message: "Route not found" });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
}
