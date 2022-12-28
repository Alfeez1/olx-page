import express from 'express';
import { logUser, newUser } from './UserRoutes.js';
import {
  addProduct,
  deleteProduct,
  getItem,
  getproducts,
  updateproduct,
} from './ProductRoutes.js';
import { AdminLog, AdminReg } from './AdminRoutes.js';
const Routes = express.Router();

Routes.post('/signup', newUser);
Routes.post('/login', logUser);
Routes.post('/product', addProduct);
Routes.get('/getdata', getproducts);
Routes.get('/getproduct/:id', getItem);
Routes.delete('/deleteproduct/:id', deleteProduct);
Routes.patch('/updateproduct/:id', updateproduct);
Routes.post('/admin/register', AdminReg);
Routes.post('/admin/login', AdminLog);

export default Routes;
