"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const api_1 = __importDefault(require("./routes/api"));
const db_1 = __importDefault(require("./db"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use('/api', api_1.default);
app.get("/hello", () => {
    console.log("hello get");
});
const PORT = 3000;
db_1.default.sync().then(() => {
    app.listen(PORT, () => {
        console.log("Server is running on port " + PORT);
    });
});
