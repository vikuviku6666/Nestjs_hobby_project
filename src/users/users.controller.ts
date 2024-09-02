import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateUserDto } from './dtos/CreateUser.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}
  @Get()
  getUsers() {
    return this.userService.fetchUsers();
  }
  @Get('role')
  findAll(@Query('role') role?: 'INTERN' | 'ENGINEER' | 'ADMIN') {
    return [role];
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    const user = this.userService.fetchUserById(id);
    if (!user)
      throw new HttpException('User not found', HttpStatus.BAD_REQUEST);
    return user;
  }

  @Post('create')
  @UsePipes(new ValidationPipe())
  create(@Body() user: CreateUserDto) {
    console.log(user);
    this.userService.createUsers(user);
    return `New user Created with Name: ${user.username} and Email: ${user.email}`;
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() userUpdate: object) {
    return { id, ...userUpdate };
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return { id };
  }
}
