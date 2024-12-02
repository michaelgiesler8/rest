import BaseController from '../utils/BaseController'
import { locationsService } from '../services/LocationsService'

export class LocationsController extends BaseController {
  constructor() {
    super('api/locations')
    this.router
      .get('', this.getLocations)
      .get('/:locationId', this.getLocationById)
      .get('/:locationId/missions', this.getLocationMissions)
  }

  async getLocations(req, res, next) {
    try {
      const locations = await locationsService.getLocations()
      res.send(locations)
    } catch (error) {
      next(error)
    }
  }

  async getLocationById(req, res, next) {
    try {
      const location = await locationsService.getLocationById(req.params.locationId)
      res.send(location)
    } catch (error) {
      next(error)
    }
  }

  async getLocationMissions(req, res, next) {
    try {
      const missions = await locationsService.getMissionsByLocationId(req.params.locationId)
      res.send(missions)
    } catch (error) {
      next(error)
    }
  }
}
