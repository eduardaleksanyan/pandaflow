import { Module } from '@nestjs/common';
import { AnimalsService } from './animals.service';
import { AnimalsController } from './animals.controller';

@Module({
  imports: [],
  controllers: [AnimalsController],
  providers: [AnimalsService],
})
export class AnimalsModule {}
