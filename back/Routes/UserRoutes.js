import express from 'express';
import User from '../model/mongoschema.js';
import jsonwebtoken from 'jsonwebtoken';
const router = express();

router.post('/signup', async (req, res) => {
  console.log(req);
  try {
    await User.create({
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

router.post('/login', async (req, res) => {
  console.log(req.body);
  const user = await User.findOne({
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
export default router;
