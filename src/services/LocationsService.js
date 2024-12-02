import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'

class LocationsService {
  async getLocations() {
    const locations = await dbContext.Locations.find()
    return locations
  }

  async getLocationById(locationId) {
    const locations = await dbContext.Locations.findById(locationId)
    if (!location) throw new BadRequest('Invalid Location Id')
    return location
  }

  async getMissionsByLocationId(locationId) {
    const missions = await dbContext.Missions.find({ locationId })
      .populate('rat', 'callsign specialties')
    return missions
  }
}

export const locationsService = new LocationsService()