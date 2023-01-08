import { Controller, Post } from '@nestjs/common';
import { Body, Delete, Get, HttpCode, Param, Patch } from '@nestjs/common/decorators';
import { FindProductDto } from './dto/find-product.dto';
import { ProductModel } from './product.model';

@Controller('product')
export class ProductController {

	@Post('create')
	async create(@Body() dto: Omit<ProductModel, '_id'>){

	}

	@Get(':id')
	async get(@Param('id') id: string){

	}

	@Delete(':id')
	async delete(@Param('id') id: string){

	}

	@Patch(':id')
	async patch(@Param('id') id: string, @Body() dto: ProductModel) {

	}

	@HttpCode(200)
	@Post()
	async find(@Body() dto: FindProductDto){

	}
}
