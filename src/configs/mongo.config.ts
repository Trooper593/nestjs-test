import {ConfigService} from '@nestjs/config';
import {TypegooseModuleOptions} from 'nestjs-typegoose';

export const getMongoConfig = async(configService: ConfigService): Promise<TypegooseModuleOptions> => {
	return {
		uri: 'mongodb://' +
			configService.get('MONGO_LOGIN') +
			':' +
			configService.get('MONGO_PASSWORD') +
			'@' +
			configService.get('MONGO_HOST') +
			':' +
			configService.get('MONGO_PORT') +
			'/' +
			configService.get('MONGO_DB'),
		useNewUrlParser: true,
		useUnifiedTopology: true
	};
};