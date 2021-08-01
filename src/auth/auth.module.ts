import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersModule } from '../users/users.module';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';
import { UsersService } from '../users/users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../users/entities/user.entity';
import { UserRepository } from '../users/users.repository';

@Module({
  providers: [AuthService, LocalStrategy, UsersService],
  imports: [
    UsersModule,
    PassportModule,
    TypeOrmModule.forFeature([User, UserRepository]),
  ],
})
export class AuthModule {}
