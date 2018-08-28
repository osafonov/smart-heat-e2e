context('Check user can submit Initial Quote: happy flow', () => {

    it('Check  postcode validated and is eligible ', () => {
        cy.visit('/property-survey')
        //TODO: mock address service
        cy.get('input[name=\'postcode\']').type('B11 1AA')
        cy.get('.input-group-btn > .btn > span').click()
        cy.get('.alert').should('have.class', "alert alert-success error alert-notification-font-size")
            .and('contain', "Great news! Dimplex Quantum heating is available in your area")
    })

    it('Check property form is shown and property details submitted ', () => {
        cy.get('#currentHeatingSystem').select('electric-off-peak')
        cy.get('#numberOfRooms').select('3')
        cy.get('#homeType').select('bungalow')
        cy.get('#buttonPropertyForm').click()
    })

    it(' Check  \'Your Estimate\' page loaded all check-boxes checked by default', () => {
        cy.url().should('contain', '/boiler-survey')
        cy.get(':nth-child(2) > :nth-child(4) > .checkbox').get('[type="checkbox"]').check().should('be.checked')
    })

    it(' Check on \'Your Estimate\' page check-boxes can be un-checked and warning shown', () => {
        cy.get(':nth-child(6) > :nth-child(4) > .checkbox').get('input[type="checkbox"]').uncheck().should('not.be.checked')
        cy.get('#errorNoRoomsSelected').should('contain', 'You haven\'t selected any rooms in your quote. Please select which rooms you would like us to quote for')
    })

    it(' Check on \'Your Estimate\' page check-boxes can be checked', () => {
        cy.get(':nth-child(2) > :nth-child(4) > .checkbox').get('[type="checkbox"]').check().should('be.checked')
    })

    it(' Check on \'Your Estimate\' page extra rooms can be added from \'Add a room\' option', () => {
        //TODO: use inxedx instead of product ref
        cy.get('#additionalHeater').select('46178')
        cy.get('#additionalHeater').select('46161')
        cy.get('#additionalHeater').select('46154')
        cy.get('#additionalHeater').select('90713')
        cy.get('#additionalHeater').select('16270')
        cy.get('#buttonArrangeSurvey').click()
    })

    it(' Check  \'Your Details\' page loaded and user details submitted', () => {
        cy.url().should('contain', '/user-form/')
        cy.get('#firstname').type('First Name Cypress')
        cy.get('#surname').type('Surname Cypress')
        cy.get('#phone').type('+442072374088')
        cy.get('#email').type('cypress@gmail.com')
        cy.get('.pull-right > .btn').click()
    })

    it(' Check  \'Installation address\' page loaded and user address submitted', () => {
        cy.url().should('contain', '/find-address/')
        cy.get('.active-select').click()
        cy.scrollTo('bottom')
        cy.get('.pull-right > .btn').click()
    })

    it(' Check  \'Review\' page loaded and Initial Quote submitted', () => {
        cy.url().should('contain', '/review-order')
        cy.scrollTo('bottom')
        cy.get('form > :nth-child(1) > label > input').check()
        cy.get('form > :nth-child(3) > label > input').check()
        cy.get('.pull-right > .btn').click()
    })

    it(' Check  \'Thanks\' page loaded ', () => {
        //TODO: use ends with
        cy.url().should('contain', '/thanks')
    })
})
