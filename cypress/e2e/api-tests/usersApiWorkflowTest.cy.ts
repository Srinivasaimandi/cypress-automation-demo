/// <reference  types="cypress"/>

import { faker } from "@faker-js/faker";

/**
 * @author: srinivasaimandi
 */

describe("users api workflow", async function () {

    let randomUserDetails: any = {}
    let createUserPayload: any;
    let count;

    it("fetch all users", async function () {
        cy.request({
            method: 'GET',
            url: 'http://localhost:9899/api/users',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': 'b7f2e1a4-9c3d-4e8a-8f2e-2c1a7d6b5e9c'
            },
            log: true
        }).then((response) => {
            let usersData: any[] = response.body;
            count = usersData.length;
            cy.log(`users count: ${count}`);

            let randomIndex = getRandomIndex(count);
            randomUserDetails = usersData[randomIndex];
            cy.log(`random user details`)
            Object.keys(randomUserDetails).forEach(entry => { cy.log(`${entry} : ${randomUserDetails[entry]}`) })
        })
    })

    it("get count of users", async function () {
        cy.request({
            method: 'GET',
            url: 'http://localhost:9899/api/users/count',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': 'b7f2e1a4-9c3d-4e8a-8f2e-2c1a7d6b5e9c'
            }
        }).then((response) => {
            let usersData: any[] = response.body;
            let usersCount = usersData["count"];
            // cy.log(`users count: ${usersCount}`);
            expect(usersCount).to.greaterThan(2);
        })
    })

    it("fetch user by name", async function () {
        cy.request({
            method: 'GET',
            url: 'http://localhost:9899/api/users/search',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': 'b7f2e1a4-9c3d-4e8a-8f2e-2c1a7d6b5e9c'
            },
            qs: {
                'name': randomUserDetails.name
            }
        }).then((response) => {
            let usersData: any[] = response.body[0];
            Object.keys(usersData).forEach(
                entry => { 
                    // cy.log(`${entry} : ${usersData[entry]}`) 
                    expect(usersData[entry]).to.equals(randomUserDetails[entry])
                }
            )
        })
    })

    it("fetch user by id", async function () {
        cy.request({
            method: 'GET',
            url: `http://localhost:9899/api/users/${randomUserDetails.id}`,
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': 'b7f2e1a4-9c3d-4e8a-8f2e-2c1a7d6b5e9c'
            }
        }).then((response) => {
            let usersData: any[] = response.body;
            Object.keys(usersData).forEach(
                entry => { 
                    // cy.log(`${entry} : ${usersData[entry]}`) 
                    expect(usersData[entry]).to.equals(randomUserDetails[entry])
                }
            )
        })
    })

    it("create user", async function () {
        let firstName = faker.person.firstName();
        let lastName = faker.person.lastName();
        createUserPayload = {
                'name' : `${firstName} ${lastName}`,
                'username': `${firstName}${lastName}`.toLowerCase(),
                'password': '$test123#',
                'email': `${firstName}${lastName}`.toLowerCase() + '@example.com`'            
            }

        cy.request({
            method: 'POST',
            url: `http://localhost:9899/api/users`,
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': 'b7f2e1a4-9c3d-4e8a-8f2e-2c1a7d6b5e9c'
            },
            body: createUserPayload
        }).then((response) => {
            let usersData: any[] = response.body;
            Object.keys(usersData).forEach(
                entry => { 
                    if(entry === 'id')
                        createUserPayload['id'] = usersData['id'];
                    cy.log(`${entry} : ${usersData[entry]}`)
                }
            )
        })
    })

    it("update user", async function () {

        let updateUserPayload = {
            'email': createUserPayload['username']+"@xyz.com"
        }

        cy.request({
            method: 'PUT',
            url: `http://localhost:9899/api/users/${createUserPayload['id']}`,
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': 'b7f2e1a4-9c3d-4e8a-8f2e-2c1a7d6b5e9c'
            },
            body: updateUserPayload
        }).then((response) => {
            let usersData: any[] = response.body;
            Object.keys(usersData).forEach(
                entry => { 
                    cy.log(`${entry} : ${usersData[entry]}`)
                }
            )
        })
    })

    it("delete user", async function () {

        cy.request({
            method: 'DELETE',
            url: `http://localhost:9899/api/users/${createUserPayload['id']}`,
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': 'b7f2e1a4-9c3d-4e8a-8f2e-2c1a7d6b5e9c'
            }
        })
    })
})

function getRandomIndex(length: number): number {
    // Generate a random number between 0 (inclusive) and length (exclusive)
    const randomIndex = Math.floor(Math.random() * length);
    return randomIndex;
}