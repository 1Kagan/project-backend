import { ConfigModule } from '@nestjs/config';
import { ConfigService } from '@nestjs/config/dist';
import { TypeOrmModuleAsyncOptions,TypeOrmModuleOptions } from '@nestjs/typeorm';




export default class TypeOrmConfig {

static getOrmConfig(configService: ConfigService): TypeOrmModuleOptions {
   
   return {

        type:'mysql',
        host: configService.get('DB_HOST'),
        port: configService.get('DB_PORT'),
        username: configService.get('DB_USERNAME'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DB_NAME'),
   };

 }

}


export const typeOrmConfigAsync: TypeOrmModuleAsyncOptions = {

    imports:[ConfigModule],

    useFactory: async (configService: ConfigService): Promise<TypeOrmModuleOptions> => TypeOrmConfig.

    getOrmConfig(configService),

    inject:[ConfigService],

};