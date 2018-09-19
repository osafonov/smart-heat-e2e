context('Check user can access the boiler-survey page and page load properly', () => {

    it('Property details submitted', () => {
        cy.visit('/property-survey')
        cy.get('input[name=\'postCode\']').type('B11 1AA')
        cy.get('.input-group-btn > .btn > span').click()
        cy.get('#currentHeatingSystem').select('electric-off-peak')
        cy.get('#numberOfRooms').select('2')
        cy.get('#homeType').select('bungalow')
        cy.get('#buttonPropertyForm').click()
    })

    it('Your estimate page loaded and  should contain logo and title', () => {
        cy.url().should('contain', '/boiler-survey')
        cy.get('.stripe').should('have.css', 'height','15px')
        cy.get('#headerLogo').should('have.attr', 'src', '/static/media/logo.3f226471.svg')
    })

    it('Your estimate page should contain page title and bulleted info list  ', () => {
        cy.get('#boilersPageTitle > span').should('contain', 'Your estimate:')
        cy.get('#boilersInformatioList').get('#boilersInformatioList > :nth-child(1)').should('contain', 'Based on your property type and size,' +
            ' we’ve included an indicative view of how much it would cost to upgrade your whole home heating system to Dimplex Quantum Heating' +
            ' to help you understand whether it might be right for you.')

        cy.get('#boilersInformatioList').get('#boilersInformatioList > :nth-child(2)').should('contain', 'If you would like to proceed, we offer a free, ' +
            'no obligation survey of your property to help refine this quote by taking accurate heating measurements of the rooms and ' +
            'discussing your heating requirements with you. After that you\'ll be provided with a final quote to decide whether you want to go ahead with purchase.')

        cy.get('#boilersInformatioList').get('#boilersInformatioList > :nth-child(3)').should('contain', 'The installation fee includes delivery, install and ' +
            'disposal of your old heaters if you would like us to remove them.')
    })

    it('Your estimate page should contain Estimate table and column titles', () => {
        cy.get('tbody > :nth-child(1) > :nth-child(1)').should('contain', 'Room')
        cy.get('tbody > :nth-child(1) > :nth-child(2)').should('contain', 'Recommended Product')
        cy.get('tbody > :nth-child(1) > :nth-child(3)').should('contain', 'Price')
        cy.get('tbody > :nth-child(1) > :nth-child(4)').should('contain', 'Add/Remove')
    })

    it('\'Your estimate page should contain \'Add a room\' dropdown with selectable options:  ', () => {
        cy.get('#labelAdditionalHeaters > span').should('contain', "Add a room")
        cy.get('#additionalHeater').select("46178").should('contain', "Reception Room")
        cy.get('#additionalHeater').select("46161").should('contain', "Hallway")
        cy.get('#additionalHeater').select("46154").should('contain', "Landing")
        cy.get('#additionalHeater').select("90713").should('contain', "Bedroom")
        cy.get('#additionalHeater').select("16270").should('contain', "Bathroom")
    })
    it(' Your Estimate page should contain price info ', () => {
        cy.get('#totalAmount').should('contain', "VAT 20% £")
        cy.get('#totalPrice').should('contain', "Total price (inc. VAT) £")
    })

    it(' Your Estimate page should contain Back&Arrange a free survey buttons ', () => {
        cy.get('#backButtonBoilersPage > .btn').should('contain', 'Back').and('be.enabled')
        cy.get('#buttonArrangeSurvey').should('contain', 'Arrange a free survey').and('be.enabled')
    })
})

