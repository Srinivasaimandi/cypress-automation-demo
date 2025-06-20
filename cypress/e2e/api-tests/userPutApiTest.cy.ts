/// <reference  types="cypress"/>

/**
 * @author: srinivasaimandi
 */

describe("update user test", async function () {
    it("update user", async function () {
        const userPayLoad = {
            "email": "johndoe@xyz.com"
        }

        cy.request({
            method: 'PUT',
            url: `http://localhost:9899/api/users/1`,
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': 'b7f2e1a4-9c3d-4e8a-8f2e-2c1a7d6b5e9c'
            },
            body: userPayLoad
        }).then((response) => {
            // Assert status code
            expect(response.status).to.eq(200);

            // Assert response body is an object
            expect(response.body).to.be.an('object');

            // Assert the updated field matches the payload
            expect(response.body.email).to.equal(userPayLoad.email);

            // Optionally, assert the response contains an id and it's correct
            expect(response.body).to.have.property('id');
            expect(response.body.id).to.equal(1);
        })
    })
})