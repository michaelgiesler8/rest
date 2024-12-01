import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'

class RatsService {
  async getRats() {
    try {
      console.log('Attempting to get rats...')
      const rats = await dbContext.Rats.find()
      console.log('Found rats:', rats)
      return rats
    } catch (error) {
      console.error('Error in getRats:', error)
      throw error
    }
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