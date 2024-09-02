import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { CreateItemDto } from './DTO/create-item.dto';

@Controller('items')
export class ItemsController {
  @Get()
  findAll(): string {
    return 'Get all items';
  }

  @Get(':id')
  findOne(@Param('id') id: number): string {
    return `Item ${id}`;
  }

  @Post()
  create(@Body() createItemDto: CreateItemDto): string {
    return `Name: ${createItemDto.name} Desc: ${createItemDto.description}`;
  }

  @Delete(':id')
  delete(@Param('id') id: number): string {
    return `Delete ${id}`;
  }

  @Put(':id')
  update(
    @Body() updateItemDto: CreateItemDto,
    @Param('id') id: number,
  ): string {
    return `Update ${id} - Name: ${updateItemDto.name}`;
  }
}
