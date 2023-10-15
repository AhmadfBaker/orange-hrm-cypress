
describe("Test the admin tab", () => {
    beforeEach(() => {
        cy.clearCookies()
    })
    it("Changing The DOM", () => {
        cy.visit('https://example.cypress.io/todo');
        cy.get('.todo-button').invoke('show')
        cy.contains('a', 'Active').trigger('mouseover')

    })

    it('cy.getCookies() - get browser cookies for the current domain', () => {
        cy.visit('https://example.cypress.io/commands/cookies')
        cy.getCookies().should('be.empty')

        cy.get('#getCookies .set-a-cookie').click()

        cy.getCookies().should('have.length', 1).should((cookies) => {
            // each cookie has these properties
            expect(cookies[0]).to.have.property('name', 'token')
            expect(cookies[0]).to.have.property('value', '123ABC')
            expect(cookies[0]).to.have.property('httpOnly', false)
            expect(cookies[0]).to.have.property('secure', false)
            expect(cookies[0]).to.have.property('domain')
            expect(cookies[0]).to.have.property('path')
        })
    })
})


const requiredExample = require('../../../fixtures/example')

describe('Files', () => {
    beforeEach(() => {

        cy.fixture('example.json').as('example')
    })

    it('cy.fixture() - load a fixture', () => {
        cy.visit('https://example.cypress.io/commands/files')
        cy.intercept('GET', '**/comments/*', { fixture: 'example.json' }).as('getComment')
        cy.get('.fixture-btn').click()

        cy.wait('@getComment').its('response.body')
            .should('have.property', 'name')
            .and('include', 'Using fixtures to represent data')
    })


    it('cy.readFile() - read file contents', () => {
        cy.visit('https://example.cypress.io/commands/files')
        cy.readFile(Cypress.config('configFile')).then((config) => {
            expect(config).to.be.an('string')
        })
    })

    it('cy.writeFile() - write to a file', () => {
        cy.visit('https://example.cypress.io/commands/files')
        cy.request('https://jsonplaceholder.cypress.io/users')
            .then((response) => {
                cy.writeFile('cypress/fixtures/users.json', response.body)
            })

        cy.fixture('users').should((users) => {
            expect(users[0].name).to.exist
        })
        cy.writeFile('cypress/fixtures/profile.json', {
            id: 8739,
            name: 'Jane',
            email: 'jane@example.com',
        })
        cy.fixture('profile').should((profile) => {
            expect(profile.name).to.eq('Jane')
        })
    })

    it('cy.clearLocalStorage() - clear all data in localStorage for the current origin', () => {
        cy.visit('https://example.cypress.io/commands/storage')
        cy.get('.ls-btn').click().should(() => {
            expect(localStorage.getItem('prop1')).to.eq('red')
            expect(localStorage.getItem('prop2')).to.eq('blue')
            expect(localStorage.getItem('prop3')).to.eq('magenta')
        })


        cy.clearLocalStorage().should((ls) => {
            expect(ls.getItem('prop1')).to.be.null
            expect(ls.getItem('prop2')).to.be.null
            expect(ls.getItem('prop3')).to.be.null
        })

        cy.get('.ls-btn').click().should(() => {
            expect(localStorage.getItem('prop1')).to.eq('red')
            expect(localStorage.getItem('prop2')).to.eq('blue')
            expect(localStorage.getItem('prop3')).to.eq('magenta')
        })
    })

})
