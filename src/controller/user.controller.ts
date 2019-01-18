import { Request, Response } from 'express';
import { getConnection, Repository } from 'typeorm';
import User from '../entity/user.entity';
import Hotel from '../entity/hotel.entity';

let repository: Repository<User>;

// create user
export const createUser = async (req: Request, res: Response) => {
  console.log('start createUser');
  if (repository === undefined) {
    initialize();
  }
  const user = new User();
  user.id = req.body.id;
  user.password = req.body.password;
  user.name = req.body.name;
  user.email = req.body.email;
  user.type = req.body.type;
  user.hotel_id = req.body.hotel_id;
  user.ref_id = req.body.ref_id;
  await repository.createQueryBuilder()
    .insert()
    .into(User)
    .values(user)
    .execute();
  res.send(user);
};

// update user
export const updateUser = async (req: Request, res: Response) => {
  console.log('start updateUser');
  if (repository === undefined) {
    initialize();
  }
  const user = new User();
  user.password = req.body.password;
  user.name = req.body.name;
  user.email = req.body.email;
  user.type = req.body.type;
  user.hotel_id = req.body.hotel_id;
  user.ref_id = req.body.ref_id;
  await repository.createQueryBuilder('user')
    .update()
    .set(user)
    .where('id = :id', {id: req.params.id})
    .execute();
  res.send(user);
};

// delete user
export const deleteUser = async (req: Request, res: Response) => {
  console.log('start deleteUser');
  if (repository === undefined) {
    initialize();
  }
  const user = await repository.findOne({id: req.params.id});
  await repository.createQueryBuilder('user')
    .delete()
    .where('id = :id', {id: req.params.id})
    .execute();
  res.send(user);
};

// list user
export const listUser = async (req: Request, res: Response) => {
  console.log('start listUser');
  if (repository === undefined) {
    initialize();
  }
  const user = await repository.createQueryBuilder('user')
    .select()
    .cache(true)
    .limit(400)
    .getMany();
  res.send(user);
};

//  select user
export const selectUser = async (req: Request, res: Response) => {
  console.log('start selectUser');
  if (repository === undefined) {
    initialize();
  }
  const user = await repository.createQueryBuilder('user')
    .select()
    .innerJoinAndSelect(Hotel, 'hotel', 'user.hotel_id = hotel.id')
    .where('user.id = :id', {id: req.params.id})
    .cache(true)
    .getOne();
  res.send(user);
};

// initialize
const initialize = () => {
  console.log('start initialize');
  const connection = getConnection();
  repository = connection.getRepository(User);
};