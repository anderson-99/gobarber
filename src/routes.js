import { Router } from 'express';
import User from './app/models/User';

const routes = new Router();

routes.get('/', async (req, res) => {
  const user = await User.create({
    name: 'Anderson Soares',
    email: 'anderson.soares99@hotmail.com',
    password_hash: '123456',
  });

  return res.json({ user });
});
export default routes;
