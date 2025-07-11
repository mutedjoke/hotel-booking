import express from "express"
import "dotenv/config";
import cors from "cors";
import connectDB from "./configs/db.js";
import { clerkMiddleware } from '@clerk/express';
import clerkWebhooks from "./controllers/clerkWebhooks.js";
import bodyParser from "body-parser";
import userRouter from "./routes/userRoutes.js";
import hotelRouter from "./routes/hotelRoutes.js";
import connectCloudinary from "./configs/cloudinary.js";
import roomRouter from "./routes/roomRoutes.js";
import bookingRouter from "./routes/bookingRoutes.js";

connectDB()
connectCloudinary()

const app = express();
app.use(cors());

app.use(clerkMiddleware()); // Optional but fine

// Apply express.json() to all routes EXCEPT the webhook
app.use("/api/clerk", bodyParser.raw({ type: "*/*" }));
app.use("/api/clerk", clerkWebhooks);

// ✅ Apply json for other routes
app.use(express.json());

// Route


app.get('/', (req, res) => res.send("is working"));
app.use('/api/user',userRouter)
app.use('/api/hotels',hotelRouter)
app.use('/api/rooms',roomRouter)
app.use('/api/bookings',bookingRouter)
const PORT = process.env.port || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
