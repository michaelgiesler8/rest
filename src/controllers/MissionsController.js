import BaseController from '../utils/BaseController'
import { missionsService } from '../services/MissionsService'
import { locationsService } from '../services/LocationsService'

export class MissionsController extends BaseController {
  constructor() {
    super('api/missions')
    this.router
      .get('', this.getMissions)
      .get('/missionId' this.getMissionById)
      .post('', this.createMission)
      .put('/:missionId, this.updateMission')
  }

  async getMissions(req, res, next) {
    try {
      const missions = await missionsService.getMissions()
      res.send(missions)
    } catch (error) {
      next(error)
    }
  }

  async getMissionsById(req, res, next) {
    try {
      const mission = await missionsService.getMissionById(req.params.missionsId)
      res.send(mission)
    } catch (error) {
      next(error)
    }
  }

  async createMission(req, res, next) {
    try {
      const mission = await missionsService.createMission(req.body)
      res.send(mission)
    } catch (error) {
      next(error)
    }
  }

  async updateMission(req, res, next) {
    try {
      const mission = await missionsService.updateMission(req.params.missionId, req.body)
      res.send(mission)
    } catch (error) {
      next(error)
    }
  }
}