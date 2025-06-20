/// <reference types = "cypress" />

import * as CONSTANTS from "../pageobjects/Constants";

/**
 * @author: srinivasaimandi
 */

const validUser = CONSTANTS.SAUCE_LABS.USERS["standard user"];
const password = CONSTANTS.SAUCE_LABS.PASSWORD;

describe("desc 1", async function () {
    it("test 1", async function () {
        cy.visit("http://saucedemo.com");
        cy.url().should('include', 'saucedemo');
        cy.title().should('contains', 'Swag Labs');
        cy.get("#user-name").type(validUser);
        cy.get("#password").type(password);
        cy.get("#login-button").click();
    })
})