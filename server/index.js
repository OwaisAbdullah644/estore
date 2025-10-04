const cateModel = require("./models/category");
const userModel = require("./models/user");
const connectDb = require("./config/db_connection");
const express = require("express");
const cors = require("cors");
const path = require("path");
const multer = require("multer");
const bcrypt = require("bcrypt");
const fs = require("fs"); // For deleting old images on update/delete

const app = express();
connectDb();
app.use(express.json());
app.use(cors());

// Serve uploads statically
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads');
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage });

// Register user
app.post("/register", async (req, res) => {
  try {
    const { name, email, password, role } = req.body;
    const hashPassword = await bcrypt.hash(password, 10);
    await userModel.insertOne({ name, email, password: hashPassword, role: role });
    res.status(200).json({ message: "Registered successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Registration failed" });
  }
});

// Add category
app.post("/addcategory", upload.single("image"), async (req, res) => {
  try {
    const { name, description } = req.body;
    const image = req.file ? req.file.filename : null;

    if (!name || !description) {
      return res.status(400).json({ message: "Name and description are required" });
    }
    if (!image) {
      return res.status(400).json({ message: "Image is required" });
    }

    await cateModel.insertOne({ name: name, description: description, image: image });
    res.status(200).json({ message: "Category Inserted" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Failed to insert category" });
  }
});

// Get all categories
app.get("/categories", async (req, res) => {
  try {
    const fetch = await cateModel.find();
    res.status(200).send(fetch);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Failed to fetch categories" });
  }
});

// Update category (POST /updatecategory/:id)
app.post("/updatecategory/:id", upload.single("image"), async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description } = req.body;
    const newImage = req.file ? req.file.filename : null;

    if (!name || !description) {
      return res.status(400).json({ message: "Name and description are required" });
    }

    // Find existing category
    const existingCate = await cateModel.findById(id);
    if (!existingCate) {
      return res.status(404).json({ message: "Category not found" });
    }

    // Prepare update
    const updateData = { name, description };
    if (newImage) {
      // Delete old image
      const oldImagePath = path.join(__dirname, "uploads", existingCate.image);
      if (fs.existsSync(oldImagePath)) {
        fs.unlinkSync(oldImagePath);
      }
      updateData.image = newImage;
    }

    await cateModel.updateOne({ _id: id }, { $set: updateData });
    res.status(200).json({ message: "Category updated successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Failed to update category" });
  }
});

// Delete category (DELETE /deletecategory/:id)
app.delete("/deletecategory/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const existingCate = await cateModel.findById(id);
    if (!existingCate) {
      return res.status(404).json({ message: "Category not found" });
    }

    // Delete image file
    if (existingCate.image) {
      const imagePath = path.join(__dirname, "uploads", existingCate.image);
      if (fs.existsSync(imagePath)) {
        fs.unlinkSync(imagePath);
      }
    }

    await cateModel.deleteOne({ _id: id });
    res.status(200).json({ message: "Category deleted successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Failed to delete category" });
  }
});

app.listen(8080, () => {
  console.log('Server Started');
});