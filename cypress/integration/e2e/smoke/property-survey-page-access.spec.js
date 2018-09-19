context('Check user can access the property-survey page and page is loaded properly', () => {

    it('Property Survey Page: property form should have header&logo', () => {
        cy.visit('/property-survey')
        cy.get('.stripe').should('have.css','height', '15px');
        cy.get('#headerLogo').should('have.attr', 'src', '/static/media/logo.3f226471.svg')

    })

    it('Property Survey Page: property form  should have page title', () => {
        cy.get('#propertyPageTitle').should('have.css','width', '300px')
        cy.get('#propertyPageTitle > span').should('contain', 'Let\'s get a quote')
    })

    it('Property Survey Page: Initial state: should contain dropdowns ', () => {
        cy.get('#labelPostcode > :nth-child(1)').should('contain', '1. Select your address')
        cy.get('.help-block > span').should('contain','We currently only supply specific regions within the U.K.')
        cy.get('#inputPostcode').should('have.attr', 'placeholder', 'Find Address')
        cy.get('#buttonFindAddress').should('contain', 'Find').and('be.enabled')
    })

    it('Property Survey Page: With Eligible postcode: should contain survey form with elements', () => {
        cy.get('input[name=\'postCode\']').type('B11 1AA')
        cy.get('.input-group-btn > .btn > span').click()

        cy.get('#labelHomeType').should('contain', '2. Select your property type')
        cy.get('#homeType').should('have.class', "form-control")

        cy.get('#labelNumberOfRooms').should('contain', '3. How many bedrooms?')
        cy.get('#numberOfRooms').should('have.class', "form-control")

        cy.get('#labelCurrentHeatingSystem').should('contain', "4. How do you currently heat your home?")
        cy.get('#currentHeatingSystem').should('have.class', "form-control")


    })

    it('\'Current Primary Heating System\' dropdown should contain selectable options', () => {
        cy.get('#currentHeatingSystem').select('electric-off-peak').should('contain', "Electric Storage Heaters")
        cy.get('#currentHeatingSystem').select('electric-direct-acting').should('contain', "Electric Direct Acting")
        cy.get('#currentHeatingSystem').select('oil-or-lpg').should('contain', "Oil/LPG")
        cy.get('#currentHeatingSystem').select('other-heating-system').should('contain', "Other...")
        cy.get('#otherHeatingSystem').should('have.class', 'form-control').and('be.visible').type('typing......')
    })

    it('\'Number of bedrooms\' dropdown should contain selectable options', () => {
        cy.get('#numberOfRooms').select('1').should('contain', '1')
        cy.get('#numberOfRooms').select('2').should('contain', '2')
        cy.get('#numberOfRooms').select('3').should('contain', '3')
        cy.get('#numberOfRooms').select('4').should('contain', '4')
        cy.get('#numberOfRooms').select('5').should('contain', '5+')

    })

    it('\'Select Property\' dropdown should contain selectable options', () => {
        cy.get('#homeType').select('bungalow').should('contain', 'Bungalow')
        cy.get('#homeType').select('flat').should('contain', 'Flat')
        cy.get('#homeType').select('terraced').should('contain', 'Terrace')
        cy.get('#homeType').select('semi-detached').should('contain', 'Semi-Detached')
        cy.get('#homeType').select('detached').should('contain', 'Detached')
    })

    it('\'Your property\' page should contain \'Next\' button and be enabled', () => {
        cy.get('#buttonPropertyForm').should('contain', 'Next').and('be.enabled')


    })

    it('\'Your property\' page should contain Footer with: Terms&Conditions link: active', () => {
        //cy.get('ul.footer-links').its('length').should('be.gt', 2)
        cy.get('.footer-links > :nth-child(1) > a').should('contain', 'Terms & Conditions').and('have.prop', 'href').and('equal', 'https://www.ovoenergy.com/terms')
        cy.request('https://www.ovoenergy.com/terms').then((resp) => {

            expect(resp.status).to.eq(200)

        })
    })
        it('\'Your property\' page should contain Footer with: Privacy Policy & Cookies link:active', () => {
            //cy.get('ul.footer-links').its('length').should('be.gt', 2)
            cy.get('.footer-links > :nth-child(2) > a').should('contain', 'Privacy Policy & Cookies').and('have.prop', 'href').and('equal', 'https://www.ovoenergy.com/privacy-policy')
            cy.request('https://www.ovoenergy.com/privacy-policy').then((resp) => {

                expect(resp.status).to.eq(200)

            })
        })

        it('\'Your property\' page should contain Footer with: Help link:active', () => {
          //cy.get('ul.footer-links').its('length').should('be.gt', 2)
            cy.get('.footer-links > :nth-child(3) > a').should('contain', 'Help').and('have.prop', 'href').and('equal', 'https://www.ovoenergy.com/help')
            cy.request('https://www.ovoenergy.com/privacy-policy').then((resp) => {

                expect(resp.status).to.eq(200)
    })
        })
        it('\'Your property\' page should contain Footer with: OVO address-contact info', () => {
            cy.get('ul > :nth-child(1) > span').should('contain', '© 2018 OVO Energy Limited')
            cy.get('ul > :nth-child(1) > span > b > a').should('have.prop','href','mailto:hello@ovoenergy.com')
    })

            })











