import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { UsersModule } from './users/users.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from "@nestjs/graphql";
import { join } from "path";
import {UsersResolver} from "./users/users.resolver";

@Module({
	imports: [
		TypeOrmModule.forRoot(),
		ConfigModule.forRoot({
			isGlobal: true,
		}),
		UsersModule,
		AuthModule,
		GraphQLModule.forRoot({
			autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
		})
	],
	controllers: [AppController],
	providers: [AppService, UsersResolver],
})
export class AppModule {
	constructor(private readonly connection: Connection) {}
}
