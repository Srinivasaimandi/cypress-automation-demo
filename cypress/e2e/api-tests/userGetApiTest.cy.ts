/// <reference  types="cypress"/>

/**
 * @author: srinivasaimandi
 */

describe("get user test", async function () {
    it("fetch user by id", async function () {
        let expectedUser = {
            'id': 3,
            'name': 'Srinivasa Rao Imandi',
            'username': 'srinivasaimandi',
            'password': '$test123#',
            'email': 'srinivasaimandi@example.com'
        }
        cy.request({
            method: 'GET',
            url: `http://localhost:9899/api/users/3`,
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': 'b7f2e1a4-9c3d-4e8a-8f2e-2c1a7d6b5e9c'
            }
        }).then((response) => {
            let usersData: any[] = response.body;
            Object.keys(usersData).forEach(
                entry => { 
                    // cy.log(`${entry} : ${usersData[entry]}`) 
                    expect(usersData[entry]).to.equals(expectedUser[entry])
                }
            )
        })
    })
});