import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize'
import { resolve } from 'path';
import { CreateCatDto } from './dto/createDto-cat.dto';
import { UpdateCatDto } from './dto/updateCat.dto';
import { Cat } from './models/cat.model';

@Injectable()
export class CatsService {

  constructor(@InjectModel(Cat) private readonly catModel: typeof Cat) { }

  async getOne(id: number): Promise<Cat> {
    const cat = await this.catModel.findOne({
      where: {
        catId: id,
      },
    })
    if(!cat){
      throw new NotFoundException("This cat not found")
    }else{
      return cat;
    }
  }

  getAll() {
    return this.catModel.findAll();
  }

  create(createCatDto: CreateCatDto): Promise<Cat> {
    return this.catModel.create({ ...createCatDto });
  }

  edit(id: number, updateCatDto: UpdateCatDto) {
    return this.catModel.update(updateCatDto, {
      where: {
        catId: id,
      }
    });
  }

  async delete(id: number): Promise<void> {
    const cat = await this.getOne(id);
    if (!cat) {
      throw new NotFoundException('Not Found');
    }
    await cat.destroy();
  }

  // delete(id: number) {
  //   return new Promise((resolve, rej) => {
  //     this.getOne(id).then(cat => {
  //       cat.destroy().then(() => {
  //         resolve(null);
  //       }).catch(err => {
  //         rej(new InternalServerErrorException('Database error'))
  //       })
  //     }).catch(err => {
  //       rej(new NotFoundException('Cat not found'))
  //     })
  //   })
  // }
}
