import mongoose from "mongoose";

const { Schema } = mongoose;

const employeeSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: {
    type: String,
    required: true,
    unique: true,
    match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  },
  position: { type: String, required: true },
  department: { type: String },
  hireDate: { type: Date, required: true },
  salary: { type: Number, required: true },
  address: {
    street: { type: String },
    city: { type: String },
    state: { type: String },
    zip: { type: String },
    country: { type: String },
  },
  phoneNumber: { type: String },
  isActive: { type: Boolean, default: true },
  createdAt: { type: Date, default: Date.now },
});

const Employee = mongoose.model("Employee", employeeSchema);

export default Employee;
