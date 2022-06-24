const Ticket = require("../models/Ticket");
class MyDb {
  constructor() {
    this.tickets = [];
  }

  create = (name) => {
    const ticket = new Ticket(name);
    this.tickets.push(ticket);
    return ticket;
  };

  bulk = (name, quantity) => {
    const tickets = [];
    for (let i = 0; i < quantity; i++) {
      const ticket = this.create(name);
      tickets.push(ticket);
    }
    return tickets;
  };

  find = (id) => {
    const ticket = this.tickets.find(id);
    return ticket;
  };
}

const db = new MyDb();
module.exports = db;

/**
 *      - /thicket/t/:ID POST request
 *      - /thicket/t/:ID PATCH request to update ticket
 *      - /thicket/t/:ID DELETE request to update ticket
 *      - /thicket/u/:username GET request for all same user ticket
 *      - /thicket/u/:username PATCH request for all same user ticket
 *      - /thicket/u/:username DELETE request for all same user ticket
 *      - /thicket/sell POST request
 *      - /thicket/bulk POST request
 *      - /thicket/draw GET request
 *      - /tickets GET request
 */
