context('Check user can register interest when non-eligible postcode is submitted', () => {

    it('Check validation is shown if non-eligible code submitted', () => {
        cy.visit('/property-survey')
        cy.get('#inputPostcode').type('B11 1AE')
        cy.get('.input-group-btn > .btn > span').click()
        cy.get('#errorPostcodeNotSupported').should('have.class', "alert alert-warning error alert-notification-font-size")
            .and('contain', "We're having trouble finding this postcode. Double check it's entered correctly, " +
                "but it might be expired or no longer in use. If you believe this is in error call us on 0330 303 5063 " +
                "and we'll try and sort it out.")
    })
    it('Check email field shown and valid email typed', () => {
        cy.get(':nth-child(2) > .form-row > .form-cols > label > span').should('contain', "E-mail address")
        cy.get('.form-cols > .form-control').type('cypress2@gmail.com')
    })

    //it('Check Interest is submitted and happy feedback shown', () => {
        //cy.get('#buttonRegisterInterest').should('contain', 'Register Interest').and('be.enabled').click()
        //cy.get('#successRegisterInterest').should('contain', 'Thank you! Your interest has been registered.')

        //TODO: add check for happy feedback is shown when interest registered  - Done - 
    })



