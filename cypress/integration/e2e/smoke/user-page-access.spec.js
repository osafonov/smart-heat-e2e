context('Check user can access the property-survey page and page load properly', () => {
    beforeEach(() => {
        cy.visit('/user-form/')
    })

    it('Your Details Page: property form  should contain required title', () => {
        cy.get('h2 span').should('contain', 'Your details')
    })

    it('Your Details Page: property form  should contain required elements', () => {
        cy.get('form').within(() => {
            cy.get('div.form-group label span').should('contain', 'First name')
            cy.get('div.form-group label span').should('contain', 'Surname')
            cy.get('div.form-group label span').should('contain', 'Phone number')
            cy.get('div.form-group label span').should('contain', 'Email')
            cy.get('button:button').should('contain', 'Your address').and('be.enabled')
        })
    })
})