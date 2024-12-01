import BaseController from "../utils/BaseController";
import { ratsService } from "../services/RatsService";

export class RatsController extends BaseController {
  constructor() {
    super('api/Rats')
    this.router
      .get('', this.getRats)
      .get('/:ratId', this.getRatById)
      .get('/:ratId/missions', this.getRatMissions)
  }

  async getRats(req, res, next) {
    try {
      const rats = await ratsService.getRats()
      res.send(rats)
    } catch (error) {
      next(error)
    }
  }

  async getRatById(req, res, next) {
    try {
      const rat = await ratsService.getRatById(req.params.ratId)
      res.send(rat)
    } catch (error) {
      next(error)
    }
  }

  async getRatMissions(req, res, next) {
    try {
      const missions = await ratsService.getMissionsByRatId(req.params.ratId)
      res.send(missions)
    } catch (error) {
      next(error)
    }
  }
}