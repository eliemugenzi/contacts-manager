import Db from "../db";

class Contact {
  constructor(_contact) {
    this.contact = _contact;
  }

  static async findAll() {
    const result = await Db.query("SELECT * FROM contacts");
    return result.rows;
  }

  async save() {
    const { name, phone } = this.contact;
    const values = [name, phone, new Date()];

    const sql =
      "INSERT INTO contacts(name,phone,createdOn) VALUES($1,$2,$3) RETURNING *";
    const { rows } = await Db.query(sql, values);
    this.contact = rows[0];
    return rows[0];
  }

  static async find(contact) {
    const sql = `SELECT * FROM contacts WHERE id='${contact.id}'`;
    const { rows } = await Db.query(sql);
    if (rows.length) {
      this.contact = rows[0];
      return rows[0];
    } else {
      return {};
    }
  }

  async updateName({ name }) {
    const sql = `UPDATE contacts SET name='${name}' WHERE id='${
      this.contact.id
    }' RETURNING *`;
    const { rows } = await Db.query(sql);
    return rows[0];
  }

  async updatePhone({ phone }) {
    const sql = `UPDATE contacts SET phone='${phone}' WHERE id='${
      this.contact.id
    }' RETURNING *`;
    const { rows } = await Db.query(sql);
    console.log(rows);
    return rows[0];
  }

  async delete() {
    const sql = `DELETE FROM contacts WHERE id='${this.contact.id}'`;
    await Db.query(sql);
  }

  static async search(keyword) {
    const sql = `SELECT * FROM contacts WHERE name LIKE '%${keyword}%'`;
    const { rows } = await Db.query(sql);
    return rows;
  }
}

export default Contact;
