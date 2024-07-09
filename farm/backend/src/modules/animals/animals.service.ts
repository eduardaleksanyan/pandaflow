import { Injectable, NotFoundException } from '@nestjs/common';
import { Animal } from '../../types/Animal';
import { AnimalDto } from './dto/animal.dto';

@Injectable()
export class AnimalsService {
  private animals: Animal[] = [];

  findAll(): Animal[] {
    return this.animals;
  }

  create(animalDto: AnimalDto): Animal {
    const animalExists = this.animals.some(
      (animal) => animal.name.toLowerCase() === animalDto.name.toLowerCase(),
    );

    if (animalExists) {
      throw new Error('Animal with this name already exists');
    }

    const animal = { name: animalDto.name };
    this.animals.push(animal);
    return animal;
  }

  remove(name: string): void {
    const index = this.animals.findIndex(
      (animal) => animal.name.toLowerCase() === name.toLowerCase(),
    );
    if (index === -1) {
      throw new NotFoundException('Animal not found');
    }
    this.animals.splice(index, 1);
  }
}
