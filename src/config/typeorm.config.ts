import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {

    host:'localhost',
    port: 3306,
    username: 'root',
    password: ''

}