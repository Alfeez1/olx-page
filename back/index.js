import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import path from 'path';
import Connections from './db/db.js';
import userSchema from './model/mongoschema.js';
import ProductSchema from './model/ProductSchema.js';
import AdminSchema from './model/AdminSchema.js';
import jsonwebtoken from 'jsonwebtoken';
import fileUpload from 'express-fileupload';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';
const app = express();
app.use(cors());
app.use(fileUpload());

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

const db = Connections();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
app.use(express.static(path.join(__dirname, '../front/build')));
app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, '../front/build/index.html'))
);
app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});
app.post('/signup', async (req, res) => {
  console.log(req.body.data);
  try {
    await userSchema.create({
      userName: req.body.data.userName,
      email: req.body.data.email,
      phone: req.body.data.phone,
      password: req.body.data.password,
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
      user,
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

app.post('/product', async (req, res) => {
  try {
    const saveImage = await ProductSchema({
      price: req.body.price,
      category: req.body.category,
      item: req.body.item,
      name: req.body.userName,
      phone: req.body.phone,
      email: req.body.email,
      imageLength: req.files.image,
    });
    saveImage.save();
    console.log(saveImage);
    if (!req.files) {
      return res.status(500).send({ msg: 'file is not found' });
    } else if (req.files.image.length >= 1) {
      Object.keys(req.files).map((key) => {
        req.files[key].map((a, index) => {
          const imageIndex = saveImage._id + index;
          fs.writeFile(
            `../front/public/images/${imageIndex}.jpg`,
            a.data,
            () => {}
          );
        });
      });
      res.send({});
    } else {
      Object.keys(req.files).map((key, index) => {
        fs.writeFile(
          `../front/public/images/${saveImage._id + index}.jpg`,
          req.files[key].data,
          (err) => {
            console.log(err);
          }
        );
      }),
        res.send({
          message: 'single files',
        });
    }
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
    const { id } = req.params;
    const singleItem = await ProductSchema.findById({
      _id: id,
    });
    // console.log(singleItem);
    res.status(201).json(singleItem);
  } catch (err) {
    console.log(err);
  }
});

app.post('/admin/register', async (req, res) => {
  console.log(req.body);
  try {
    await AdminSchema.create({
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

app.post('/admin/login', async (req, res) => {
  console.log(req.body);
  const admin = await AdminSchema.findOne({
    email: req.body.email,
    password: req.body.password,
  });
  const adminToken = jsonwebtoken.sign({}, '123');
  if (admin) {
    return res.status(201).json({
      status: 'ok',
      admin: true,
      message: 'successfully logined',
      adminToken,
    });
  } else {
    return res.status(401).json({
      status: 'error',
      user: false,
      message: 'user or password incorrect',
    });
  }
});

app.delete('/deleteproduct/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const deleteProduct = await ProductSchema.findByIdAndDelete(id, req.body);
    console.log('deleted user');
    res.status(201).json(deleteProduct);
  } catch (error) {
    console.log(error);
  }
});
app.patch('/updateproduct/:id', async (req, res) => {
  const { id } = req.params;
  // console.log(req.files);

  try {
    const updateproduct = await ProductSchema.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    try {
      const myFile = req.files.image;
      const myFiles = id;
      const name = '.jpg';
      const path = __dirname + '/../front/public/Images/' + myFiles + name;

      myFile.mv(path, function (err) {
        if (err) {
          console.log(err);
          return res.status(500).send({ msg: 'error occured' });
        }
      });
    } catch (error) {}
    console.log(updateproduct), res.status(201).json(updateproduct);
  } catch (error) {
    console.log(error);
  }
});

app.listen(PORT, () => console.log(`running successfully ${PORT}`));
