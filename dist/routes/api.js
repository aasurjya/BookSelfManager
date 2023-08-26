"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const request_1 = require("../models/request");
const router = express_1.default.Router();
router.get("/hello", request_1.hello);
router.get('/allbooks', request_1.getAllBooks);
router.post('/Createbooks', request_1.createBook);
exports.default = router;
