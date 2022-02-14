import faker from 'faker';
import { sample } from 'lodash';
// utils
import { mockImgAvatar } from '../utils/mockImages';

const axios = require('axios');

// ----------------------------------------------------------------------

export const getUsers = async () => {
  try {
    const res = await axios.get('http://localhost:3000/users');
    const result = res.data;
    const registeredUsers = result.map(
      (element) => `${element.name} ${element.email} ${element.company}`
    );
    console.log(registeredUsers);
    console.log(result);
  } catch (error) {
    console.error(error);
  }
};
