import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, Put } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto){
    return this.usersService.create(createUserDto);
  }

  @Get(':id')
  getOne(@Param('id', ParseIntPipe) id: number){
    return this.usersService.findOne(id);
  }

  @Get()
  getAll(){
    return this.usersService.findAll();
  }

  @Put(':id')
  edit(@Param('id', ParseIntPipe) id: number, @Body() updateUserDto: UpdateUserDto){
    return this.usersService.update(id, updateUserDto);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number){
    return this.usersService.remove(id);
  }

}
