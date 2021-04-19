"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var router = express_1.default.Router();
var books_1 = __importDefault(require("../models/books"));
router.get("/", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var books, error_1, books, error_2, books, error_3, array, books, error_4, books, error_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!req.query.title) return [3 /*break*/, 5];
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, books_1.default.find({ title: req.query.title })];
            case 2:
                books = _a.sent();
                res.send(books);
                return [3 /*break*/, 4];
            case 3:
                error_1 = _a.sent();
                res.end("Error:" + error_1);
                return [3 /*break*/, 4];
            case 4: return [3 /*break*/, 23];
            case 5:
                if (!req.query.author) return [3 /*break*/, 10];
                _a.label = 6;
            case 6:
                _a.trys.push([6, 8, , 9]);
                return [4 /*yield*/, books_1.default.find({ author: req.query.author })];
            case 7:
                books = _a.sent();
                res.send(books);
                return [3 /*break*/, 9];
            case 8:
                error_2 = _a.sent();
                res.end("Error:" + error_2);
                return [3 /*break*/, 9];
            case 9: return [3 /*break*/, 23];
            case 10:
                if (!req.query.q) return [3 /*break*/, 15];
                _a.label = 11;
            case 11:
                _a.trys.push([11, 13, , 14]);
                return [4 /*yield*/, books_1.default.find({ $or: [{ title: req.query.q }, { author: req.query.q }, { description: req.query.q }] })];
            case 12:
                books = _a.sent();
                res.send(books);
                return [3 /*break*/, 14];
            case 13:
                error_3 = _a.sent();
                res.end("Error:" + error_3);
                return [3 /*break*/, 14];
            case 14: return [3 /*break*/, 23];
            case 15:
                if (!req.query["price"]) return [3 /*break*/, 20];
                _a.label = 16;
            case 16:
                _a.trys.push([16, 18, , 19]);
                array = req.query["price"];
                return [4 /*yield*/, books_1.default.find({ $and: [
                            { price: { $gte: array[0] } },
                            { price: { $lte: array[1] } }
                        ]
                    })];
            case 17:
                books = _a.sent();
                res.send(books);
                return [3 /*break*/, 19];
            case 18:
                error_4 = _a.sent();
                res.end("Error:" + error_4);
                return [3 /*break*/, 19];
            case 19: return [3 /*break*/, 23];
            case 20:
                _a.trys.push([20, 22, , 23]);
                return [4 /*yield*/, books_1.default.find()];
            case 21:
                books = _a.sent();
                res.send(books);
                return [3 /*break*/, 23];
            case 22:
                error_5 = _a.sent();
                res.end("Error:" + error_5);
                return [3 /*break*/, 23];
            case 23: return [2 /*return*/];
        }
    });
}); });
router.get("/:id", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var books, error_6;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, books_1.default.findById(req.params.id)];
            case 1:
                books = _a.sent();
                res.send(books);
                return [3 /*break*/, 3];
            case 2:
                error_6 = _a.sent();
                res.end("Error:" + error_6);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
router.post("/", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var bk, b1, error_7;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                bk = new books_1.default({
                    title: req.body.title,
                    author: req.body.author,
                    pages: req.body.pages,
                    price: req.body.price,
                    rating: req.body.rating,
                    votes: req.body.votes,
                    description: req.body.description,
                    tags: req.body.tags,
                    series: req.body.series,
                    seriesIndex: req.body.seriesIndex,
                    releaseDate: req.body.releaseDate,
                    cover: req.body.cover
                });
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, bk.save()];
            case 2:
                b1 = _a.sent();
                res.send(b1);
                return [3 /*break*/, 4];
            case 3:
                error_7 = _a.sent();
                res.send("Error: " + error_7);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
router.put("/:id", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var bookRecord, bk, UpdatedBook, error_8;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                return [4 /*yield*/, books_1.default.findById(req.params.id)];
            case 1:
                bookRecord = _a.sent();
                bk = new books_1.default({
                    _id: bookRecord._id,
                    title: req.body.title || bookRecord.title,
                    author: req.body.author || bookRecord.author,
                    pages: req.body.pages || bookRecord.pages,
                    price: req.body.price || bookRecord.price,
                    rating: req.body.rating || bookRecord.rating,
                    votes: req.body.votes || bookRecord.votes,
                    description: req.body.description || bookRecord.description,
                    tags: req.body.tags || bookRecord.tags,
                    series: req.body.series || bookRecord.series,
                    seriesIndex: req.body.seriesIndex || bookRecord.seriesIndex,
                    releaseDate: req.body.releaseDate || bookRecord.releaseDate,
                    cover: req.body.cover || bookRecord.cover
                });
                return [4 /*yield*/, books_1.default.findByIdAndUpdate(req.params.id, bk, { new: true })];
            case 2:
                UpdatedBook = _a.sent();
                res.send(UpdatedBook);
                return [3 /*break*/, 4];
            case 3:
                error_8 = _a.sent();
                res.end("Error:" + error_8);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
router.delete("/:id", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var books, error_9;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, books_1.default.findByIdAndDelete(req.params.id)];
            case 1:
                books = _a.sent();
                res.send(books);
                return [3 /*break*/, 3];
            case 2:
                error_9 = _a.sent();
                res.end("Error:" + error_9);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
exports.default = router;
