const RoundService = require("../services/Round.service");

class RoundController {
  static async getAllRounds(req, res) {
    try {
      const rounds = await RoundService.getAllRounds()
      return res.status(200).json(rounds);
    } catch ({ message }) {
      return res.status(500).json(message);
    }
  }

  static async getRoundById(req, res) {
    try {
      const round = await RoundService.getRoundById(req.params.id);
      if (!round) {
        return res.status(404).json(null);
      }
      return res.status(200).json(round);
    } catch ({ message }) {
      return res.status(500).json(message);
    }
  }

  static async createRound(req, res) {
    try {
      const round = await RoundService.createRound(req.body);
      return res.status(201).json(round);
    } catch ({ message }) {
      return res.status(500).json(message);
    }
  }

  static async updateRound(req, res) {
    try {
      const count = await RoundService.updateRound(req.params.id, req.body)
      if (!count) {
        return res.status(404).json(null);
      }
      const updated = await RoundService.getRoundById(req.params.id);
      return res.status(200).json(updated);
    } catch ({ message }) {
      return res.status(500).json(message);
    }
  }

  static async deleteRound(req, res) {
    try {
      const deleted = await RoundService.deleteRound(req.params.id)
      if (!deleted) {
        return res.status(404).json(null);
      }
      return res.status(200).json("Раунд удалён");
    } catch ({ message }) {
      return res.status(500).json(message);
    }
  }
}

module.exports = RoundController;
