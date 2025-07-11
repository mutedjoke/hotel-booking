import connectDB from "../configs/db.js";
import { getUserData, storeRecentSearchedCities } from "../controllers/userController.js";
import { protect } from "../middleware/authMiddleware.js";
import { getAuth } from "@clerk/nextjs/server"; // 👈 Clerk helper to get req.auth

// Wrap middleware so we can use it in Vercel
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

  // Inject Clerk auth info (req.auth.userId)
  req.auth = getAuth(req);

  if (req.method === "GET") {
    try {
      await runMiddleware(req, res, protect);
      return getUserData(req, res);
    } catch (err) {
      return res.status(401).json({ success: false, message: err.message });
    }
  }

  if (req.method === "POST") {
    try {
      await runMiddleware(req, res, protect);
      return storeRecentSearchedCities(req, res);
    } catch (err) {
      return res.status(401).json({ success: false, message: err.message });
    }
  }

  res.setHeader("Allow", ["GET", "POST"]);
  res.status(405).end(`Method ${req.method} Not Allowed`);
}
