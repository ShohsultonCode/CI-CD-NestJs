import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { MongooseModule } from '@nestjs/mongoose';
import users from 'src/models/users.schema';

@Module({
  imports:[MongooseModule.forFeature([{name:'Users', schema:users}])],
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule {}
