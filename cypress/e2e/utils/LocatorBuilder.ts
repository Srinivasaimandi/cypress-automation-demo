/// <reference types="cypress"/>
/// <reference types="cypress-xpath"/>

/**
 * @author: srinivasaimandi
 * @description: locator builder for all pageobjects
 */

export class LocatorBuilder {

    constructor() {
    }

    buildElement(elementLocator: any) {
        if (elementLocator.locatorType === "css") {
            // cy.log(`Returning locator of ${elementLocator.locatorType} for ${elementLocator.locator}`)
            return cy.get(elementLocator.locator);
        } else if (elementLocator.locatorType === "xpath") {
            // cy.log(`Returning locator of ${elementLocator.locatorType} for ${elementLocator.locator}`)
            return cy.xpath(elementLocator.locator);
        } else if (elementLocator.locatorType !== "css" || elementLocator.locatorType !== "xpath") {
            return this.buildElement(elementLocator.alternateLocator);
        }
    }
}
