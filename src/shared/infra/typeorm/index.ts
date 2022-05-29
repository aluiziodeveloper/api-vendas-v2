import { DataSource } from 'typeorm';

import User from '@modules/users/infra/typeorm/entities/User';
import UserToken from '@modules/users/infra/typeorm/entities/UserToken';
import Customer from '@modules/customers/infra/typeorm/entities/Customer';
import Order from '@modules/orders/infra/typeorm/entities/Order';
import OrdersProducts from '@modules/orders/infra/typeorm/entities/OrdersProducts';
import Product from '@modules/products/infra/typeorm/entities/Product';

import { CreateProducts1607437608841 } from './migrations/1607437608841-CreateProducts';
import { CreateUsers1607534203339 } from './migrations/1607534203339-CreateUsers';
import { CreateUserTokens1607917238905 } from './migrations/1607917238905-CreateUserTokens';
import { CreateCustomers1608058533060 } from './migrations/1608058533060-CreateCustomers';
import { CreateOrders1609036872019 } from './migrations/1609036872019-CreateOrders';
import { AddCustomerIdToOrders1609037132700 } from './migrations/1609037132700-AddCustomerIdToOrders';
import { CreateOrdersProducts1609038202583 } from './migrations/1609038202583-CreateOrdersProducts';
import { AddOrderIdToOrdersProducts1609038414735 } from './migrations/1609038414735-AddOrderIdToOrdersProducts';
import { AddProductIdToOrdersProducts1609038674490 } from './migrations/1609038674490-AddProductIdToOrdersProducts';
import { AddOrderFieldtoOrders1619889809717 } from './migrations/1619889809717-AddOrderFieldtoOrders';

export const dataSource = new DataSource({
  type: 'postgres',
  host: 'db',
  port: 5432,
  username: 'postgres',
  password: 'docker',
  database: 'apivendas',
  entities: [User, UserToken, Customer, Order, OrdersProducts, Product],
  migrations: [
    CreateProducts1607437608841,
    CreateUsers1607534203339,
    CreateUserTokens1607917238905,
    CreateCustomers1608058533060,
    CreateOrders1609036872019,
    AddCustomerIdToOrders1609037132700,
    CreateOrdersProducts1609038202583,
    AddOrderIdToOrdersProducts1609038414735,
    AddProductIdToOrdersProducts1609038674490,
    AddOrderFieldtoOrders1619889809717,
  ],
});
