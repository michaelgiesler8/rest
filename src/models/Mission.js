import mongoose from 'mongoose'
const Schema = mongoose.Schema

export const MissionSchema = new Schema({
  codename: { type: String, required: true },
  objective: { type: String, required: true },
  year: { type: String, required: true },
  ratId: { type: Schema.Types.ObjectId, ref: 'Rat', required: true },
  locationId: { type: Schema.Types.ObjectId, ref: 'Location', required: true },
  completed: { type: Boolean, default: false }
}, { timestamps: true })

MissionSchema.virtual('location', {
  localField: 'locationId',
  foreignField: '_id',
  justOne: true,
  ref: 'Location'
})

MissionSchema.virtual('rat', {
  localField: 'ratId',
  foreignField: '_id',
  justOne: true,
  ref: 'Rat',
  select: '-name -picture'
})