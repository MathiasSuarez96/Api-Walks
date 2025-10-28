import mongoose from "mongoose"; 

const walkSchema = new mongoose.Schema( {
  dogName: { type: String , required: true},
  date: { type: Date , default: Date.now},
  durationMinutes: {type: Number , required: true},
  distanceKm: {type: Number , default: 0},
  notes: {type: String , default: ""},
},
{
    timestamps: true,
    collection: "walks"
}
 );

const Walk = mongoose.model("Walk" , walkSchema);

export default Walk;