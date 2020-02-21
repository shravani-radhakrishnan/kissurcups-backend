// const mongoose = require('mongoose');

// const { Schema } = mongoose;
// const { addressSchema } = require('../models/address');
// const { connectedDbs } = require('../../utils/database');
// const { bankDetailsSchema, BankDetails } = require('../models/bankDetails');

// // point schema
// const pointSchema = new Schema({
//   type: {
//     type: String,
//     enum: ['Point'],
//     required: true,
//   },
//   coordinates: {
//     type: [Number],
//     required: true,
//   },
// }, { _id: false });

// // dayslot
// const daySlot = new Schema({
//   startTime: {
//     type: String,
//     default: '',
//   }, //  expected format 24hr same day as end time
//   endTime: {
//     type: String,
//     default: '',
//   },
//   prepTime: {
//     type: String,
//     default: '',
//   }, // time in minutes
// }, { _id: false });

// // operational hours
// const operationSchema = new Schema({
//   day: {
//     type: String,
//     default: '',
//   },
//   slots: { type: [daySlot], default: [] },
// }, { _id: false });

// // fssai schema
// const fssaiDetailsSchema = new Schema({
//   lic: {
//     type: String,
//     default: '',
//   },
//   companyName: {
//     type: String,
//     default: '',
//   },
//   companyAddress: [String],
//   city: {
//     type: String,
//     default: '',
//   },
//   state: {
//     type: String,
//     default: '',
//   },
//   pincode: {
//     type: String,
//     default: '',
//   },
//   ownerName: {
//     type: String,
//     default: '',
//   },
//   ownerMobile: {
//     type: String,
//     default: '',
//   },
//   validUpto: Date,
//   certificateLink: {
//     type: String,
//     default: '',
//   },
//   expired: { type: Boolean, default: false },
//   status: {
//     type: String,
//     enum: ['complete', 'incomplete'],
//     default: 'incomplete',
//   },
// }, { _id: false });
// const FssaiModel = mongoose.model('fssaidetail', fssaiDetailsSchema);

// // gstin schema
// const gstinSchema = new Schema({
//   gstinNumber: {
//     type: String,
//     default: '',
//   },
//   companyName: {
//     type: String,
//     default: '',
//   },
//   gstinEntered: { type: Boolean, default: false },
//   gstinType: { type: String, default: 'composition' },
//   status: {
//     type: String,
//     enum: ['complete', 'incomplete'],
//     default: 'incomplete',
//   },
// }, { _id: false });
// const GstinModel = mongoose.model('gstindetail', gstinSchema);

// // outlet schema
// const outletSchema = new Schema({
//   outletName: String,
//   displayName: String,
//   outletId: { type: String, unique: true },
//   address: addressSchema,
//   locality: String,
//   mobile: String,
//   email: String,
//   ownerId: String,
//   restId: String,
//   location: pointSchema,
//   menuItems: { type: [String], default: [] },
//   reviews: { type: [String], default: [] }, // should be review schema
//   rating: Number,
//   cusines: { type: [String], default: [] },
//   facilities: { type: [String], default: [] },
//   searchTags: { type: [String], default: [] },
//   operationalHours: {
//     type: [operationSchema],
//     default: [
//       { day: 0 }, { day: 1 }, { day: 2 }, { day: 3 }, { day: 4 }, { day: 5 }, { day: 6 },
//     ],
//   },
//   gallery: {
//     type: Array,
//     default: [],
//   },
//   outletLogo: {
//     type: String,
//     default: '',
//   },
//   fssaiDetails: { type: fssaiDetailsSchema, default: new FssaiModel() },
//   gstin: { type: gstinSchema, default: new GstinModel() },
//   status: {
//     type: String,
//     enum: ['active', 'inactive', 'deleted', 'suspended', 'incomplete'],
//     default: 'incomplete',
//   },
//   available: {
//     type: String,
//     enum: ['on', 'off'],
//     default: 'off',
//   },
//   preparationTime: Number,
//   minOrderAmount: Number,
//   deliveryCharge: Number,
//   bankDetails: { type: bankDetailsSchema, default: new BankDetails() },
//   itemExcelImported: {
//     type: Boolean,
//     default: false,
//   },
//   // config: {
//   //   printConfig: {
//   //     printKot: { type: Boolean, default: true },
//   //   },
//   //   notificationConfig: {
//   //     soundUrl: { type: String, default: '' },
//   //     onClickOrderAccept: { type: Boolean, default: false },
//   //   },
//   // },
// });

// module.exports = { outletSchema, Outlet: connectedDbs.restaurant.model('outlets', outletSchema) };