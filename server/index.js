const cateModel = require("./models/category");
const connectDb = require("./config/db_connection");
const express = require("express");
const cors = require("cors");
const path  = require("path");
const multer = require("multer");


const app = express();
connectDb();
app.use(express.json());
app.use(cors());
app.use("./uploads", express.static(path.join(__dirname, "uploads")));

const storage = multer.diskStorage({
    destination: function ( req, file, cb) {
        cb(null, './uploads');
    },
    filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
  }
})

const upload = multer({storage: storage});

app.post("/addcategory", upload.single("image"), async(req, res) => {
    try {
        const {name, description} = req.body;
        const image = req.file.filename;

        await cateModel.insertOne({name: name, description: description, image: image});
        res.status(200).send({message: "Category Inserted"});
    } catch (error) {
        console.log(error)
    }
})


app.listen(8080,() => {
    console.log('Server Started');
})