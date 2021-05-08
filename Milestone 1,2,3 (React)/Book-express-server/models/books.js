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
    price: {
        type: String
    },
    rating: {
        type: String,
        max: 5
    },
    description: {
        type: String
    },
    cover: {
        type: String
    }
});
var dbSchema = mongoose_1.default.model('books', bookSchema);
exports.default = dbSchema;
