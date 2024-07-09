import { Controller, Get, Post, Delete, Body, Param } from '@nestjs/common';
import { AnimalsService } from './animals.service';
import { Animal } from '../../types/Animal';
import { AnimalDto } from './dto/animal.dto';

@Controller('animals')
export class AnimalsController {
  constructor(private readonly animalService: AnimalsService) {}

  @Get()
  findAll(): Animal[] {
    return this.animalService.findAll();
  }

  @Post()
  create(@Body() animal: AnimalDto): Animal {
    return this.animalService.create(animal);
  }

  @Delete(':name')
  remove(@Param('name') name: string): void {
    return this.animalService.remove(name);
  }
}
