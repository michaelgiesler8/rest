import mongoose from 'mongoose'
import { RatSchema } from '../models/Rat'
import { LocationSchema } from '../models/Location'
import { MissionSchema } from '../models/Mission'

class DbContext {
  Rats = mongoose.model('Rat', RatSchema, 'Rats')
  Locations = mongoose.model('Location', LocationSchema, 'Locations')
  Missions = mongoose.model('Mission', MissionSchema, 'Missions')
}

export const dbContext = new DbContext()
