import multer from "multer";

const storage = multer.memoryStorage(); // ✅ Uses RAM, not file system

const upload = multer({ storage });

export default upload;
