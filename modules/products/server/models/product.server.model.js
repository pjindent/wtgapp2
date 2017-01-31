'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

/**
 * Product Schema
 */
var ProductSchema = new Schema({
  turbineModel: {
    type: String,
    default: '',
    required: 'Please fill Product name',
    trim: true
  },
  manufacturer: {
    type: String,
    default: '',
    required: 'Please fill Manufacturer name',
    trim: true
  },
  IECClass: {
    type: String,
    default: '',
    required: 'Please fill IEC Class, e.g. I-A or III-C',
    trim: true
  },
  generatorType: {
    type: String,
    default: '',
    required: 'Please fill Generator type, e.g. DFIG, PMG, others',
    trim: true
  },
  driveType: {
    type: String,
    default: '',
    required: 'Please fill Drive type, e.g. Direct Drive, with Gearbox',
    trim: true
  },
  rotorSize: {
    type: Number,
    default: 0,
    required: 'Please enter rotor diameter in meters'
  },
  hubHeights: {
    type: String,
    default: 0,
    required: 'Please enter hub heights in meters.  If turbine is available in multiple tower heights, then enter comma separated numbers'
  },
  imageURL: {
    type: String
  },
  created: {
    type: Date,
    default: Date.now
  },
  user: {
    type: Schema.ObjectId,
    ref: 'User'
  }
});

mongoose.model('Product', ProductSchema);
