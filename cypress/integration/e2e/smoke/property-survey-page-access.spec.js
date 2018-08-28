/// <reference types="Cypress" />

context('Check user can access the property-survey page and page is loaded properly', () => {
    //beforeEach(() => {

    it('Property Survey Page: property form should have appropriate header', () => {
        cy.visit('/property-survey')
        cy.get('div.page-header a').should('have.attr', 'href', '/index.html')
        cy.get('div.page-header a img').should('have.attr', 'src', '/static/media/logo.57d6c87d.svg')
        cy.get('div.page-header a img').should('have.attr', 'alt', 'logo')
        cy.get('div.page-title').should('contain', 'Smart Heaters')
    })

    it('Property Survey Page: property form  should have appropriate title', () => {
        cy.get('h2 span').should('contain', 'Your property')
    })

    it('Property Survey Page: property form  should contain elements: for postcode check', () => {
        //cy.get('form').within(() => {
        cy.get('div.form-cols label span').should('contain', 'Postcode')
        cy.get('input[name=\'postcode\']').should('have.attr', 'placeholder', 'Find Address')
        cy.get('button:button').should('contain', 'Find Address').and('be.enabled')
    })

    it('Property Survey Page: property form  should contain elements: for property details', () => {
        cy.get('input[name=\'postcode\']').type('B11 1AA')
        cy.get('.input-group-btn > .btn > span').click()

        cy.get('#labelCurrentHeatingSystem > :nth-child(1)').should('contain', "Current Primary Heating System")
        cy.get('#currentHeatingSystem').should('have.class', "form-control")

        cy.get('#labelNumberOfRooms > :nth-child(1)').should('contain', 'Number of bedrooms')
        cy.get('#numberOfRooms').should('have.class', "form-control")

        cy.get('#labelHomeType > :nth-child(1)').should('contain', 'Select Property')
        cy.get('#homeType').should('have.class', "form-control")
    })

    it('\'Current Primary Heating System\' dropdown should contain selectable options', () => {
        cy.get('#currentHeatingSystem').select('electric-off-peak').should('contain', "Electric Storage Heaters")
        cy.get('#currentHeatingSystem').select('electric-direct-acting').should('contain', "Electric Direct Acting")
        cy.get('#currentHeatingSystem').select('oil-or-lpg').should('contain', "Oil/LPG")
        cy.get('#currentHeatingSystem').select('other-heating-system').should('contain', "Other...")
        cy.get('#otherHeatingSystem').should('have.class', 'form-control').type('typing......')
    })

    it('\'Number of bedrooms\' dropdown should contain selectable options', () => {
        cy.get('#numberOfRooms').select('1').should('contain', '1')
        cy.get('#numberOfRooms').select('2').should('contain', '2')
        cy.get('#numberOfRooms').select('3').should('contain', '3')
        cy.get('#numberOfRooms').select('4').should('contain', '4')
        cy.get('#numberOfRooms').select('5').should('contain', '5')
        cy.get('#numberOfRooms').select('6').should('contain', '6')
        cy.get('#numberOfRooms').select('7').should('contain', '7')
        cy.get('#numberOfRooms').select('8').should('contain', '8')
        cy.get('#numberOfRooms').select('9').should('contain', '9')
        cy.get('#numberOfRooms').select('10').should('contain', '10')

    })

    it('\'Select Property\' dropdown should contain selectable options', () => {
        cy.get('#homeType').select('bungalow').should('contain', 'Bungalow')
        cy.get('#homeType').select('flat').should('contain', 'Flat')
        cy.get('#homeType').select('terraced').should('contain', 'Terrace')
        cy.get('#homeType').select('semi-detached').should('contain', 'Semi-Detached')
        cy.get('#homeType').select('detached').should('contain', 'Detached')
    })

    it('\'Your property\' page should contain \'Your Quote\' button and be enabled', () => {
        cy.get('#buttonPropertyForm').should('contain', 'Your quote').and('be.enabled')
    })
})





