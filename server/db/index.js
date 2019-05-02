import pg, { Pool } from "pg";
import dotenv from "dotenv";

import { contactsTable } from "./tables";

dotenv.config();

let poolOptions;
if (process.env.DATABASE_URL) {
    poolOptions = {
        connectionString:process.env.DATABASE_URL
    }
}
else {
    poolOptions = {
        user: process.env.PGUSER,
        host: process.env.PGHOST,
        database: process.env.PGDB,
        password: process.env.PGPASS
    };    
}


class Db {
  constructor() {
    this.pool = new Pool(poolOptions);
    this.connect = async () => this.pool.connect();

    this.initDb();
  }

  async query(sql, data = []) {
    const conn = await this.connect();
    try {
      if (data.length) {
        return await conn.query(sql, data);
      }
      return await conn.query(sql);
    } catch (err) {
      return err;
    } finally {
      conn.release();
    }
  }

  async initDb() {
    await this.query(contactsTable);
    console.log("Tables initialized!");
  }
}

export default new Db();
