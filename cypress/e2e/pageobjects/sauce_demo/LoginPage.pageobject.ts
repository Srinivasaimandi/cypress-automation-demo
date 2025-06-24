/// <reference types="cypress"/>
/// <reference types="cypress-xpath"/>

import * as CONSTANTS from "../Constants";
import * as loginPageLocStrings from "../../locators/sauce_demo/LoginPage.locStrings.json";

import { LocatorBuilder } from "../../utils/LocatorBuilder";

/**
 * @author: srinivasaimandi
 * @description: contains the locators and functions of login page
 */
export class LoginPage {
    iptUsername!: () => Cypress.Chainable;
    iptPassword!: () => Cypress.Chainable;
    btnSubmit!: () => Cypress.Chainable;

    constructor() {
        Object.keys(loginPageLocStrings).forEach(key => {
            const locatorConfig = loginPageLocStrings[key as keyof typeof loginPageLocStrings];
            (this as any)[key] = () => new LocatorBuilder().buildElement(locatorConfig);
        })
    }

    /**
     * @description: loads the baseUrl and validates the title
     */
    load() {
        cy.visit(CONSTANTS.SAUCE_LABS.BASE_URL);
        cy.title().should('eq', CONSTANTS.SAUCE_LABS.TITLE);
    }

    /**
     * @param username - The username to login
     * @param password - The password to login
     * @description: logs into the application and validates the heading of the inventory or landing page
     */
    login(username: string, password: string): void {
        this.iptUsername().type(username);
        this.iptPassword().type(password);
        this.btnSubmit().click();
    }
}