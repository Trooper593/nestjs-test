import { Base } from '@typegoose/typegoose/lib/defaultClasses';
import { prop } from '@typegoose/typegoose';

export enum TopLevelCategory{
	Courses,
	Services,
	Books,
	Products
}

class Hh {
	@prop()
	count: number;

	@prop()
	juniorSalary: number;

	@prop()
	middleSalary: number;

	@prop()
	seniorSalary: number;
}

class Advantages {
	@prop()
	title: string;

	@prop()
	description: string;
}

export interface TopPageModel extends Base {}
export class TopPageModel{

	@prop({enum: TopLevelCategory, type: () => Number})
	firstCategory: TopLevelCategory;

	@prop()
	secondCategory: string;

	@prop()
	alias: string;

	@prop()
	title: string;

	@prop()
	category: string;

	@prop({ type: () => Hh})
	hh?: Hh;

	@prop({ type: () => [Advantages]})
	advantages: Advantages[];

	@prop()
	seoText: string;

	@prop()
	tagsTitle: string;

	@prop({ type: () => [String]})
	tags: string[];
}