import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'

class RatsService {
  async getRats() {
    const rats = await dbContext.Rats.find()
    return rats
  }

  async getRatById(ratId) {
    const rat = await dbContext.Rats.findById(ratId)
    if (!rat) throw new BadRequest('Invalid Rat ID')
    return rat
  }

  async getMissionsByRatId(ratId) {
    const missions = await dbContext.Missions.find({ ratId })
      .populate('location')
    return missions
  }
}

export const ratsService = new RatsService()