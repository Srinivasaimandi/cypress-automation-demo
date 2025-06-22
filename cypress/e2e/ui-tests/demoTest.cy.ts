/// <reference types = "cypress" />
/// <reference types = "cypress-xpath" />

import * as CONSTANTS from "../pageobjects/Constants";
import { LoginPage } from "../pageobjects/sauce_demo/LoginPage.pageobject";

/**
 * @author: srinivasaimandi
 */

const validUser = CONSTANTS.SAUCE_LABS.USERS["standard user"];
const password = CONSTANTS.SAUCE_LABS.PASSWORD;

describe("desc 1", async function () {
    it("test 1", async function () {

        let loginPage = new LoginPage();
        loginPage.load();
        loginPage.login(validUser, password);
    })
})