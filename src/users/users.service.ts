import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './models/user.model';

@Injectable()
export class UsersService {

  constructor(@InjectModel(User) private readonly userModel: typeof User) { }

  create(createUserDto: CreateUserDto): Promise<User> {
    return this.userModel.create({ ...createUserDto });
  }

  findAll() {
    return this.userModel.findAll();
  }

  async findOne(id: number): Promise<User> {
    const user = await this.userModel.findOne({
      where: {
        userId: id,
      }
    });
    if (!user) {
      throw new NotFoundException("This user not found!");
    }
    return user;
  }

  async update(id: number, updateUserDto: UpdateUserDto): Promise<string> {
    const [updateCount] = await this.userModel.update(updateUserDto, {
      where: {
        userId: id
      }
    });

    console.log('hello')
    if (!updateCount) {
      return "not found"
    } else {

      return "This user successfully edited!";
    }
  }

  async remove(id: number) {
    const user = await this.findOne(id);
    user.destroy();
    return "User successfully deleted!";
  }
}
