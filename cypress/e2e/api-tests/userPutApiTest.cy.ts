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
            let usersData: any[] = response.body;
            Object.keys(usersData).forEach(
                entry => {
                    if (entry === 'id')
                        userPayLoad['id'] = usersData['id'];
                    cy.log(`${entry} : ${usersData[entry]}`)
                }
            )
        })
    })
})