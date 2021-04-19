"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var bookSchema = new mongoose_1.default.Schema({
    title: {
        type: String
    },
    author: {
        type: String
    },
    pages: {
        type: Number
    },
    price: {
        type: Number
    },
    rating: {
        type: Number,
        max: 5
    },
    votes: {
        type: Number
    },
    description: {
        type: String
    },
    tags: {
        type: Array
    },
    series: {
        type: String
    },
    seriesIndex: {
        type: Number
    },
    releaseDate: {
        type: Date
    },
    cover: {
        type: String
    }
});
var dbSchema = mongoose_1.default.model('Books', bookSchema);
exports.default = dbSchema;
