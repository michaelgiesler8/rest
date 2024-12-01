import mongoose from 'mongoose'
const Schema = mongoose.Schema

export const RatSchema = new Schema({
  name: { type: String, required: true },
  callsign: { type: String, required: true },
  picture: { type: String, required: true },
  specialties: [{ type: String }]
}, { timestamps: true })
