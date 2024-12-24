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
Object.defineProperty(exports, "__esModule", { value: true });
console.log('Hello, TypeScript!');
const selenium_webdriver_1 = require("selenium-webdriver");
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const driver = yield new selenium_webdriver_1.Builder().forBrowser("chrome").build();
        try {
            yield driver.get("https://www.monkkee.com");
            yield driver.wait(selenium_webdriver_1.until.titleContains("monkkee"), 10000);
            console.log("Сайт открыт успешно!");
            yield driver.quit();
        }
        catch (error) {
            console.error("Ошибка:", error);
            yield driver.quit();
        }
    });
}
main();
