import { Request, Response } from 'express';
import { getConnection, Repository } from 'typeorm';
import Hotel from '../entity/hotel.entity';

let repository: Repository<Hotel>;

// create hotel
export const createHotel = async (req: Request, res: Response) => {
  console.log('start createHotel');
  if (repository === undefined) {
    initialize();
  }
  const hotel = new Hotel();
  hotel.id = req.body.id;
  hotel.name = req.body.name;
  hotel.address = req.body.address;
  await repository.createQueryBuilder()
    .insert()
    .into(Hotel)
    .values(hotel)
    .execute();
  res.send(hotel);
};

// update hotel
export const updateHotel = async (req: Request, res: Response) => {
  console.log('start updateHotel');
  if (repository === undefined) {
    initialize();
  }
  const hotel = new Hotel();
  hotel.name = req.body.name;
  hotel.address = req.body.address;
  await repository.createQueryBuilder('hotel')
    .update()
    .set(hotel)
    .where('id = :id', {id: req.params.id})
    .execute();
  res.send(hotel);
};

// delete hotel
export const deleteHotel = async (req: Request, res: Response) => {
  console.log('start deleteHotol');
  if (repository === undefined) {
    initialize();
  }
  const hotel = await repository.findOne({id: req.params.id});
  await repository.createQueryBuilder('hotel')
    .delete()
    .where('id = :id', {id: req.params.id})
    .execute();
  res.send(hotel);
};

// list hotel
export const listHotel = async (req: Request, res: Response) => {
  console.log('start listHotel');
  if (repository === undefined) {
    initialize();
  }
  const hotel = await repository.createQueryBuilder('hotel')
    .select()
    .cache(true)
    .limit(400)
    .getMany();
  res.send(hotel);
};

//  select hotel
export const selectHotel = async (req: Request, res: Response) => {
  console.log('start selectHotel');
  if (repository === undefined) {
    initialize();
  }
  const hotel = await repository.createQueryBuilder('hotel')
    .select()
    .where('id = :id', {id: req.params.id})
    .cache(true)
    .getOne();
  res.send(hotel);
};

// initialize
const initialize = () => {
  console.log('start initialize');
  const connection = getConnection();
  repository = connection.getRepository(Hotel);
};