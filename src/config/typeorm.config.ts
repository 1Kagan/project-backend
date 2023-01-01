import { ConfigModule } from '@nestjs/config';
import { ConfigService } from '@nestjs/config/dist';
import { TypeOrmModuleAsyncOptions,TypeOrmModuleOptions } from '@nestjs/typeorm';




export default class TypeOrmConfig {

static getOrmConfig(configService: ConfigService): TypeOrmModuleOptions {
   
   return {

        host:'localhost',
        port: 3306,
        username: 'root',
        password: ''



   };

 }

}


export const typeOrmConfigAsync: TypeOrmModuleAsyncOptions = {

    imports:[ConfigModule],

    useFactory: async (configService: ConfigService): Promise<TypeOrmModuleOptions> => TypeOrmConfig.

    getOrmConfig(configService),

    inject:[ConfigService],

};