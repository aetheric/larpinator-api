import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';

@Module({
	imports: [
		TypeOrmModule.forRoot({
			name: 'mysql',
			type: 'mysql',
			host: 'localhost',
			port: 3304,
			username: 'test',
			password: 'test',
			database: 'larp',
			entities: ['dist/**/*.entity{.ts,.js}'],
			synchronize: false,
			migrations: ['dist/migration/*.js'],
			cli: {
				migrationsDir: 'src/migration',
			},
		}),
		TypeOrmModule.forRoot({
			name: 'mongodb',
			type: 'mongodb',
			host: 'localhost',
			port: 27017,
			username: 'root',
			password: 'password',
			database: 'larpinator',
			synchronize: false,
			logging: false,
			entities: ['data/**/*.ts'],
			migrations: ['data/migration/**/*.js'],
			cli: {
				migrationsDir: 'data/migration',
			},
		}),
		ConfigModule.forRoot({
			isGlobal: true,
		}),
		UsersModule,
		AuthModule,
		GraphQLModule.forRoot({
			autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
		}),
	],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
