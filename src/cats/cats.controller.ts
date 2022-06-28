import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { CatsService } from './cats.service';
import { CreateCatDto } from './dto/createDto-cat.dto';
import { UpdateCatDto } from './dto/updateCat.dto';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Get(':id')
  getOne(@Param('id', ParseIntPipe) id: number){
    return this.catsService.getOne(id);
  }

  @Get()
  getAll(){
    return this.catsService.getAll();
  }

  @Post()
  create(@Body() createDto: CreateCatDto){
    return this.catsService.create(createDto);
  }
  
  @Put(':id')
  edit(@Param('id', ParseIntPipe) id: number, @Body() updateCatDto: UpdateCatDto){
      return this.catsService.edit(id, updateCatDto);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number){
    return this.catsService.delete(id);
  }
}
