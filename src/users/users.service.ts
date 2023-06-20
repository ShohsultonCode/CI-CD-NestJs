import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Model } from 'mongoose'; 
import * as Users from '../models/users.schema'
import {InjectModel} from '@nestjs/mongoose'
import UserSchemaType from 'src/types/users.type';

@Injectable()
export class UsersService {
  constructor(@InjectModel('Users') private readonly Users: Model<UserSchemaType>) { }
  
 async create(createUserDto: CreateUserDto ):Promise<UserSchemaType[]> {
   const user = await this.Users.find()
   return user
  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
