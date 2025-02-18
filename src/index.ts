console.log('Hello, TypeScript!');
import { Builder, By, Key, until } from "selenium-webdriver";

async function main() {
  const driver = await new Builder().forBrowser("chrome").build();
  try {
    await driver.get("https://www.monkkee.com");
    await driver.wait(until.titleContains("monkkee"), 10000);
    console.log("Сайт открыт успешно!");
    await driver.quit();
  } catch (error) {
    console.error("Ошибка:", error);
    await driver.quit();
  }
}

main();
