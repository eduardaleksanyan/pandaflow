import { IsString } from 'class-validator';

export class AnimalDto {
  @IsString()
  name: string;
}
