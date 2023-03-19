import { MysqlConnectionOptions } from 'typeorm/driver/mysql/MysqlConnectionOptions';
require('dotenv').config()

export const config: MysqlConnectionOptions = {
    type: 'mysql',
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT) || 3306,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    synchronize: false
};
