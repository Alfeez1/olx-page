import ProductSchema from '../model/ProductSchema.js';
import fileUpload from 'express-fileupload';
import fs from 'fs';

export const addProduct = async (req, res) => {
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
};

export const getproducts = async (req, res) => {
  try {
    const newData = await ProductSchema.find();
    res.status(201).json({
      status: true,
      newData,
    });
    console.log('data got');
  } catch (error) {
    console.log(error);
  }
};

export const getItem = async (req, res) => {
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
};

export const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteProduct = await ProductSchema.findByIdAndDelete(id, req.body);
    console.log('deleted user');
    res.status(201).json(deleteProduct);
  } catch (error) {
    console.log(error);
  }
};

export const updateproduct = async (req, res) => {
  const { id } = req.params;
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
};
