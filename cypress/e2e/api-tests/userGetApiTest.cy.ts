/// <reference  types="cypress"/>

/**
 * @author: srinivasaimandi
 */

describe("fetch user test", async function () {
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
            // Assert status code
            expect(response.status).to.eq(200);
            // Assert response body is an object
            expect(response.body).to.be.an('object');
            
            // Assert all expected fields are present and match
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