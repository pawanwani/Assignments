"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var mongoose_1 = __importDefault(require("mongoose"));
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
var bookRoutes_1 = __importDefault(require("./Routers/bookRoutes"));
var userRoutes_1 = __importDefault(require("./Routers/userRoutes"));
var app = express_1.default();
//const url = `mongodb://localhost:/${process.env.database}`
var url = "mongodb+srv://" + process.env.username + ":" + process.env.password + "@mycluster.s83ac.mongodb.net/" + process.env.dbName + "?retryWrites=true&w=majority";
app.use(express_1.default.json());
mongoose_1.default.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
var db = mongoose_1.default.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.on('open', function () {
    console.log("connection establised successfully");
});
app.use(function (req, res, next) {
    res.header("Access-control-Allow-Origin", "*");
    res.header("Access-Control-Allow-headers", "Origin,X-Requested-With,Content-Type,Accept");
    res.header("Access-Control-Allow-Methods", "GET,POST,DELETE,PUT");
    next();
});
app.use('/books', bookRoutes_1.default);
app.use('/users', userRoutes_1.default);
app.listen(process.env.port, function () {
    console.log("server live on " + process.env.port);
});
