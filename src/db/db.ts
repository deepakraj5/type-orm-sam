import { DataSource } from "typeorm";
import { Customers } from "../models/customers";
import { Orders } from "../models/orders";

export const AppDataSource = new DataSource({
    type: "mssql",
    host: "localhost",
    port: 1433,
    username: "username",
    password: "password",
    database: "database",
    synchronize: true,
    logging: true,
    entities: [Customers, Orders],
    subscribers: [],
    migrations: [],
})