import { Injectable } from '@nestjs/common';
import { CreateUserType } from 'src/utils/types';

@Injectable()
export class UsersService {
  private fakeUsers = [
    { username: 'Anson', email: 'Vinay@gmail.com' },
    { username: 'Ambika', email: 'Vinay@gmail.com' },
    { username: 'Vinay', email: 'Vinay@gmail.com' },
    { username: 'Santosh', email: 'Vinay@gmail.com' },
  ];
  fetchUsers() {
    return this.fakeUsers;
  }

  createUsers(data: CreateUserType) {
    this.fakeUsers.push(data);
    return;
  }

  fetchUserById(id: number) {
    //return null;
    return {
      id: id,
      username: 'Vinay',
      email: 'anson@gmail.com',
    };
  }
}
