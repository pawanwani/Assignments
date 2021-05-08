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
var users_1 = __importDefault(require("../models/users"));
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var bcrypt_1 = __importDefault(require("bcrypt"));
var utils_1 = require("../authentication/utils");
router.post("/register", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var addUser_1, _a, name_1, email_1, password_1, newUser_1, error_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                _a = req.body, name_1 = _a.name, email_1 = _a.email, password_1 = _a.password;
                return [4 /*yield*/, utils_1.findEmail(email_1, res)];
            case 1:
                if ((_b.sent()) === true) {
                    newUser_1 = new users_1.default();
                    bcrypt_1.default.hash(password_1, 9, function (err, hash) { return __awaiter(void 0, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    if (err) {
                                        console.log(err);
                                        return [2 /*return*/, false];
                                    }
                                    password_1 = hash;
                                    newUser_1 = { name: name_1, email: email_1, password: password_1 };
                                    return [4 /*yield*/, users_1.default.create(newUser_1)];
                                case 1:
                                    addUser_1 = _a.sent();
                                    res.status(201).send(addUser_1);
                                    return [2 /*return*/];
                            }
                        });
                    }); });
                }
                else {
                    res.status(409).end("Email id already exists, try to login");
                }
                return [3 /*break*/, 3];
            case 2:
                error_1 = _b.sent();
                res.status(406).send(error_1.message);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
router.post("/login", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, email, password, User, passwordMatch, token, error_2;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 5, , 6]);
                _a = req.body, email = _a.email, password = _a.password;
                return [4 /*yield*/, utils_1.findEmail(email, res)];
            case 1:
                User = _b.sent();
                if (!User) return [3 /*break*/, 3];
                return [4 /*yield*/, bcrypt_1.default.compare(password, User.password)];
            case 2:
                passwordMatch = _b.sent();
                if (passwordMatch) {
                    token = jsonwebtoken_1.default.sign({ userId: User._id }, "" + process.env.JWTstring, { expiresIn: "1d" });
                    res.status(200).send({ "token": token });
                }
                else {
                    res.end("Password is Incorrect");
                }
                return [3 /*break*/, 4];
            case 3:
                res.status(404).end("User not Found,Please Try to LogIN");
                _b.label = 4;
            case 4: return [3 /*break*/, 6];
            case 5:
                error_2 = _b.sent();
                res.status(404).send(error_2);
                return [3 /*break*/, 6];
            case 6: return [2 /*return*/];
        }
    });
}); });
exports.default = router;
