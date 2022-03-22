import { Inject, Injectable } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { CreateOrderDto } from './dto/create-order.dto';
import { OrderCreatedEvent } from './events/order-created.event';

@Injectable()
export class OrderService {
  constructor(@Inject('BILLING_SERVICE') private readonly billingClient: ClientKafka) {
  }

  createOrder(dto: CreateOrderDto) {
    this.billingClient.emit('order_created', new OrderCreatedEvent('123', dto.userId, dto.price));
  }
}

