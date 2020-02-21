// const mongoose = require('mongoose');
// const { connectedDbs } = require('../../utils/database');

// const { Schema } = mongoose;

// const chargeSchema = new Schema({
//   name: String,
//   value: Number,
//   chargeType: {
//     type: String,
//     enum: ['net', 'percent'],
//   },
// }, { _id: false });

// const menuItemSchema = new Schema({
//   outletId: String,
//   itemId: String,
//   name: String,
//   imageUrl: String,
//   description: String,
//   isVeg: Boolean,
//   containsEgg: Boolean,
//   price: Number,
//   category: String,
//   subCategory: String,
//   ribbon: String,
//   searchTags: [String],
//   addons: [String],
//   availableForOrder: Boolean,
//   gst: Number,
//   nextAvailable: Date,
//   additionalCharges: [chargeSchema], //  need to redefine
//   deductions: [chargeSchema],
//   portionSize: Number,
//   unit: {
//     type: String,
//     enum: ['gms', 'ml'],
//   },
//   displayTags: { type: [String], default: [] },
//   imageName: String,
//   status: {
//     type: String,
//     default: 'active',
//     enum: ['active', 'inactive', 'deleted'],
//   },
//   deletedAt: Date,
// });

// const menuItems = connectedDbs.restPanel.model('menuItems', menuItemSchema);
// const menuItemsExcel = connectedDbs.restPanel.model('menuItemsExcel', menuItemSchema);

// module.exports = { menuItems, menuItemsExcel };
