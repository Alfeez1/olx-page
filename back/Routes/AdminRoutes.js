import AdminSchema from '../model/AdminSchema.js';
import jsonwebtoken from 'jsonwebtoken';

export const AdminReg = async (req, res) => {
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
};

export const AdminLog = async (req, res) => {
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
};
