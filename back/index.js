import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import Connections from './db/db.js';
import userSchema from './model/mongoschema.js';
import ProductSchema from './model/ProductSchema.js';
import jsonwebtoken from 'jsonwebtoken';
import fileUpload from 'express-fileupload';
import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const app = express();
app.use(cors());
app.use(fileUpload());

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

const db = Connections();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
app.post('/signup', async (req, res) => {
  console.log(req.body);
  try {
    await userSchema.create({
      userName: req.body.userName,
      email: req.body.email,
      phone: req.body.phone,
      password: req.body.password,
    });

    res.json({ status: 'ok' });
  } catch (error) {
    res.json({ status: error });
  }
});

app.post('/login', async (req, res) => {
  console.log(req.body);
  const user = await userSchema.findOne({
    email: req.body.email,
    password: req.body.password,
  });
  const token = jsonwebtoken.sign({}, '123');
  if (user) {
    return res.status(201).json({
      status: 'ok',
      user: true,
      message: 'successfully logined',
      token,
    });
  } else {
    return res.status(401).json({
      status: 'error',
      user: false,
      message: 'user or password incorrect',
    });
  }
});

const PORT = 8000;

app.post('/product', (req, res) => {
  console.log(req.files);
  console.log(req.body);
  try {
    const saveImage = ProductSchema({
      price: req.body.price,
      category: req.body.category,
      item: req.body.item,
    });
    saveImage.save().then((res) => {});
    if (!req.files) {
      return res.status(500).send({ msg: 'file is not found' });
    }
    const myFile = req.files.image;
    const myFiles = saveImage._id;
    const name = '.jpg';
    const path = __dirname + '/../front/public/Images/' + myFiles + name;

    myFile.mv(path, function (err) {
      if (err) {
        console.log(err);
        return res.status(500).send({ msg: 'Error occured' });
      }
      // returing the response with file path and name
      return res.send({ status: 'success', path: path });
    });
  } catch (error) {
    console.log(error);
  }
});

app.get('/getdata', async (req, res) => {
  try {
    const newData = await ProductSchema.find();
    res.status(201).json({
      status: true,
      newData,
    });
  } catch (error) {
    console.log(error);
  }
});

app.get('/getproduct/:id', async (req, res) => {
  try {
    console.log(req.params);
    const { id } = req.params;

    const singleItem = await ProductSchema.findById({
      _id: id,
    });
    console.log(singleItem);
    res.status(201).json(singleItem);
  } catch (err) {
    console.log(err);
  }
});

app.listen(PORT, () => console.log(`running successfully ${PORT}`));
