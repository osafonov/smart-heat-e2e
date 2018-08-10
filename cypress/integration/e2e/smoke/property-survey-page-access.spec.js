/// <reference types="Cypress" />

context('Check user can access the property-survey page and page load properly', () => {
  beforeEach(() => {
    cy.visit('/property-survey')
  })

  it('Property Survey Page: property form should have appropriate header', () => {
      cy.get('div.page-header a').should('have.attr', 'href', '/index.html')
      cy.get('div.page-header a img').should('have.attr', 'src', '/static/media/logo.57d6c87d.svg')
      cy.get('div.page-header a img').should('have.attr', 'alt', 'logo')
      cy.get('div.page-title').should('contain', 'Smart Heaters')
  })

  it('Property Survey Page: property form  should have appropriate title', () => {
      cy.get('h2 span').should('contain', 'Your property')
  })

  it('Property Survey Page: property form  should contain elements', () => {
    cy.get('form').within(() => {
       cy.get('div.form-cols label span').should('contain', 'Post code')
       cy.get('input[name=\'postcode\']').should('have.attr', 'placeholder', 'Find Address')
       cy.get('button:button').should('contain', 'Find Address')
    })
  })
})
