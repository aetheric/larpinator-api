import { User } from './entities/user.entity';
import { UserDto } from './dto/user.dto';

export const toUserDto = (data: User): UserDto => {
	const { id, email } = data;
	return { id, email };
};
