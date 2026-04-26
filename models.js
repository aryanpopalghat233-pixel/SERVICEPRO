// models.js
const mongoose = require('mongoose');

// Booking Schema
const bookingSchema = new mongoose.Schema({
    customerName: { type: String, required: true },
    phone: { type: String, required: true },
    serviceType: { type: String, required: true },
    address: { type: String, required: true },
    status: { type: String, default: 'Pending' },
    createdAt: { type: Date, default: Date.now }
});

// Professional Application Schema
const applicationSchema = new mongoose.Schema({
    fullName: { type: String, required: true },
    phone: { type: String, required: true },
    expertise: { type: String, required: true },
    experienceYears: { type: Number, required: true },
    status: { type: String, default: 'Under Review' },
    appliedAt: { type: Date, default: Date.now }
});

// Worker Location Schema (For Live Tracking)
const workerLocationSchema = new mongoose.Schema({
    workerId: { type: String, required: true },
    latitude: { type: Number, required: true },
    longitude: { type: Number, required: true },
    lastUpdated: { type: Date, default: Date.now }
});

module.exports = {
    Booking: mongoose.model('Booking', bookingSchema),
    Application: mongoose.model('Application', applicationSchema),
    WorkerLocation: mongoose.model('WorkerLocation', workerLocationSchema)
};
