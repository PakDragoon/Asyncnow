import faker from 'faker';
import { sample } from 'lodash';
// utils
import { mockImgAvatar } from '../utils/mockImages';

const axios = require('axios');

// ----------------------------------------------------------------------

const config = {
  method: 'get',
  url: 'http://localhost:3000/users',
  headers: {
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWNiMjI3MzAzMDU4ODY4NWY0YzQ1YzgiLCJpYXQiOjE2NDA3MDI3NjF9.AnLbTpxaqf_wMGA36pvwFWxXXVOJ5YlRji0aM9PJ7hY'
  }
};
axios(config)
  .then(function (response) {
    console.log(JSON.stringify(response.data));
  })
  .catch(function (error) {
    console.log(error);
  });

const users = [...Array(24)].map((_, index) => ({
  id: faker.datatype.uuid(),
  avatarUrl: mockImgAvatar(index + 1),
  name: faker.name.findName(),
  company: faker.company.companyName(),
  isVerified: faker.datatype.boolean(),
  status: sample(['active', 'banned']),
  role: sample([
    'Leader',
    'Hr Manager',
    'UI Designer',
    'UX Designer',
    'UI/UX Designer',
    'Project Manager',
    'Backend Developer',
    'Full Stack Designer',
    'Front End Developer',
    'Full Stack Developer'
  ])
}));

export default users;
