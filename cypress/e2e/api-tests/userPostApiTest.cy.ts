/// <reference  types="cypress"/>

/**
 * @author: srinivasaimandi
 */

describe("create user test", async function () {
    it("create user", async function () {
        const userPayLoad = {
            "name": "Samuel David",
            "username": "samueldavid",
            "password": "$test123#",
            "email": "samueldavid@xyz.com"
        }

        cy.request({
            method: 'POST',
            url: `http://localhost:9899/api/users`,
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': 'b7f2e1a4-9c3d-4e8a-8f2e-2c1a7d6b5e9c'
            },
            body: userPayLoad
        }).then((response) => {
            // Assert status code
            expect(response.status).to.eq(201);

            // Assert response body is an object
            expect(response.body).to.be.an('object');

            // Assert the response contains an id
            expect(response.body).to.have.property('id');
            userPayLoad['id'] = response.body['id'];

            let usersData: any[] = response.body;
            Object.keys(usersData).forEach(
                entry => {
                    if (entry !== 'password')
                        expect(usersData[entry]).to.equal(userPayLoad[entry])
                }
            )
        })
    })
})