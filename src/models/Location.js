import mongoose from 'mongoose'
const Schema = mongoose.Schema

export const LocationSchema = new Schema({
  country: { type: String, required: true },
  area: { type: String, required: true },
  labels: [{ type: String }]
}, { timestamps: true })