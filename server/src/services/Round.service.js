const { Round } = require("../db/models");

class RoundService {
  static async getAllRounds() {
    return await Round.findAll();
  }

  static async getRoundById(id) {
    return await Round.findByPk(id);
  }

  static async createRound(data) {
    return await Round.create(data);
  }

  static async updateRound(id, data) {
    const round = await Round.findByPk(id);
    if (!round) return null;
    return await round.update(data);
  }

  static async deleteRound(id) {
    const round = await Round.findByPk(id);
    if (!round) return null;
    return await round.destroy();
  }
}
module.exports = RoundService;