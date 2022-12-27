import axios from 'axios';
import {
  USER_REGISTER_DATA,
  GET_DATA,
  PRODUCT_DATA,
  UPDATE_DATA,
} from '../../constants/constantData';

export const userRegister = (data) => async (dispatch) => {
  try {
    const user = await axios.post(`/signup`, { data });
    dispatch({ type: USER_REGISTER_DATA, payload: user.data });
  } catch (error) {
    console.log(error);
  }
};

export const getData = () => async (dispatch) => {
  try {
    const res = await axios.get(`/getdata`);
    dispatch({ type: GET_DATA, payload: res.data.newData });
  } catch (error) {
    console.log(error.message);
  }
};

export const getproduct = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`/getproduct/${id}`);
    dispatch({ type: PRODUCT_DATA, payload: res?.data });
    console.log(res.data);
  } catch (error) {
    console.log(error);
  }
};

export const updateproductData = (id, data) => async (dispatch) => {
  try {
    const res = await axios.patch(`/updateproduct/${id}`, {
      data,
    });
    dispatch({ type: UPDATE_DATA, payload: res });
    console.log(res);
  } catch (error) {
    console.log('error while calling update data', error);
  }
};
