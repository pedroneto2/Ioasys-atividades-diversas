import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { Order } from './Entity/order.entity';
import { v4 as uuidV4 } from 'uuid';

@Injectable()
export class OrdersService {
  private database: Order[] = [];

  create(createOrderDto: CreateOrderDto) {
    const newOrder = {
      id: uuidV4(),
      ...createOrderDto,
    };

    this.database.push(newOrder);
    return newOrder;
  }

  findAll() {
    return this.database;
  }

  findOne(id: string) {
    return this.database.find((item) => item.id === id);
  }

  update(id: string, updateOrderDto: UpdateOrderDto) {
    return this.database.find((item, index) => {
      if (item.id === id) {
        this.database[index] = { ...this.database[index], ...updateOrderDto };
        return true;
      }
      return false;
    });
  }

  remove(id: string) {
    let success = false;
    this.database = this.database.filter((item) => {
      if (item.id !== id) {
        success = true;
        return true;
      }
      return false;
    });
    return success;
  }
}
