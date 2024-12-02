import mongoose from 'mongoose'
import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'

class LocationsService {
  async getLocations() {
    const locations = await dbContext.Locations.find()
    return locations
  } a

  async getLocationById(locationId) {
    try {
      if (!mongoose.Types.ObjectId.isValid(locationId)) {
        throw new BadRequest('Invalid Location Id Format')
      }

      console.log('Looking for location:', locationId)
      const location = await dbContext.Locations.findById(locationId)
      console.log('Found location:', location)

      if (!location) {
        throw new BadRequest(`Location not found with id: ${locationId}`)
      }
      return location
    } catch (error) {
      console.error('Error in getLocationById:', error)
      throw error
    }
  }


  async getMissionsByLocationId(locationId) {
    const missions = await dbContext.Missions.find({ locationId })
      .populate('rat', 'callsign specialties')
    return missions
  }
}

export const locationsService = new LocationsService()