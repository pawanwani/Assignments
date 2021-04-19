"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var mongoose_1 = __importDefault(require("mongoose"));
var body_parser_1 = __importDefault(require("body-parser"));
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
var bookRoutes_1 = __importDefault(require("./Routers/bookRoutes"));
var app = express_1.default();
var url = "mongodb://localhost:/" + process.env.database;
app.use(body_parser_1.default.json());
mongoose_1.default.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
var db = mongoose_1.default.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.on('open', function () {
    console.log("connection establised successfully");
});
app.use('/books', bookRoutes_1.default);
app.listen(process.env.port, function () {
    console.log("server live on " + process.env.port);
});
