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
    console.log(users);
  } catch (error) {
    console.error(error);
  }
};
const users = [...Array(10)].map((_, index) => ({
  id: faker.datatype.uuid(),
  avatarUrl: mockImgAvatar(index + 1),
  name: faker.name.findName(),
  company: faker.company.companyName(),
  status: sample(['active', 'banned']),
  email: 'abcd@gmail.com'
}));

export default users;
