const shortid = require("shortid");

class Ticket {
  constructor(username) {
    this.id = shortid.generate();
    this.username = this.username;
    this.price = 10;
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }
}

module.exports = Ticket;
