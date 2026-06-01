import basicAuth from 'express-basic-auth';

const username = process.env.USERNAME as string;
const password = process.env.PASSWORD as string;
const auth = basicAuth({
  users: { [username]: password },
});

export default auth;
