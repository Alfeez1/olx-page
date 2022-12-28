import userSchema from '../model/mongoschema.js';
import jsonwebtoken from 'jsonwebtoken';

export const newUser = async (req, res) => {
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
};
export const logUser = async (req, res) => {
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
};
