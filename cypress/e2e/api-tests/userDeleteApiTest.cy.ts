/// <reference  types="cypress"/>

/**
 * @author: srinivasaimandi
 */

describe("users delete test", async function () {
    it("delete user", async function () {

        cy.request({
            method: 'DELETE',
            url: `http://localhost:9899/api/users/2`,
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': 'b7f2e1a4-9c3d-4e8a-8f2e-2c1a7d6b5e9c'
            }
        })
    })
});