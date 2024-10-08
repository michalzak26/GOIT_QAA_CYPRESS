import { Test } from "C:/Users/Michał/Desktop/QAAGOIT_Modul3/cypress/pages/login";

const TestPage = new Test();

describe("Page object example", () => {
  it("login page test", () => {
    TestPage.navigate();
    TestPage.validateLogin();
    TestPage.validateLogout();
  });
});