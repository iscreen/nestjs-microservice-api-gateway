import { Body, Controller, Post } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { OrderService } from './order.service';

@Controller('order')
export class OrderController {
  constructor(private service: OrderService) {
  }
  @Post()
  createOrder(@Body() dto: CreateOrderDto) {
    this.service.createOrder(dto);
  }
}
