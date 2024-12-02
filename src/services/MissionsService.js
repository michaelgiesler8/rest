import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'

class MissionsService {
  async getMissions() {
    const missions = await dbContext.Missions.find()
      .populate('location')
      .populate('rat', '-name -picture')
    return missions
  }

  async getMissionById(missionId) {
    const mission = await dbContext.Missions.findById(missionId)
      .populate('location')
      .populate('rat', '-name -picture')
    if (!mission) throw new BadRequest('Invalid Mission Id')
    return mission
  }

  async createMission(missionData) {
    const mission = await dbContext.Missions.create(missionData)
    await mission.populate('location')
    await mission.populate('rat', '-name -picture')
    return mission
  }

  async updateMission(missionId, updateData) {
    const mission = await this.getMissionById(missionId)

    mission.codename = updateData.codename || mission.codename
    mission.objective = updateData.objective || mission.objective
    mission.year = updateData.year || mission.year
    mission.completed = updateData.completed !== undefined ? updateData.completed : mission.completed

    await mission.save()
    await mission.populate('location')
    await mission.populate('rat', '-name -picture')
    return mission
  }
}

export const missionsService = new MissionsService()