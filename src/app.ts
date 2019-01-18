import express from 'express';
import * as bodyParser from 'body-parser';
import 'reflect-metadata';
import { createConnection } from 'typeorm';
import * as userController from './controller/user.controller';
import * as hotelController from './controller/hotel.controller';

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

console.log('start app');
app.post('/create', userController.createUser);
app.put('/update/:id', userController.updateUser);
app.delete('/delete/:id', userController.deleteUser);
app.get('/list', userController.listUser);
app.get('/select/:id', userController.selectUser);

app.post('/hotel/create', hotelController.createHotel);
app.put('/hotel/update/:id', hotelController.updateHotel);
app.delete('/hotel/delete/:id', hotelController.deleteHotel);
app.get('/hotel/list', hotelController.listHotel);
app.get('/hotel/select/:id', hotelController.selectHotel);

app.listen(3000, () => console.log('Example app listening on port 3000!'));

createConnection()
  .then(async () => {
    console.log("Connected to DB");
  })
  .catch((error: any) => console.log(error));
