/// <reference  types="cypress"/>

/**
 * @author: srinivasaimandi
 */

describe("apiDemoTest: get", async function () {
    it("getApiDemoTest", async function () {
        let response = cy.request({
            method: 'GET',
            url: 'http://localhost:9899/api/users',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': 'b7f2e1a4-9c3d-4e8a-8f2e-2c1a7d6b5e9c'
            }
        }).then((response)=>{
            cy.log(JSON.stringify(response.body));
        })
        
    })
})