it('learning assertions', function(){
  //Implicit Assertions
cy.visit('https://example.cypress.io/')
cy.get(':nth-child(4) > .row > .col-xs-12 > .home-list > :nth-child(1) > ul > :nth-child(1) > a').click()
cy.get('#query-btn').should('contain','Button')
  .should('have.class','query-btn')
  .should('be.visible')
  .should('be.enabled')

cy.get('#query-btn').invoke('attr', 'id')
  .should('equal', 'query-btn')

cy.get('#query-btn')
  .should('contain','Button')
  .should('have.class','query-btn')

  //Explicit Assertions
  //expect
  expect(false).to.be.false
  let name = 'Ricky'
  expect(name).to.be.equal('Ricky')

  //assert
  assert.equal(4,4,'Not equal')

  let buttonName;
  cy.get('#query-btn').invoke('text').then((text) => {
      buttonName = text.trim()
      cy.log(`Button name is: ${buttonName}`)
      assert.equal(buttonName,'Button','Different')
      expect(buttonName).to.be.equal('Button')
  })



  cy.get('.query-list').contains('apples').should('have.class','first')
  cy.get('#querying').contains('li','oranges').should('have.class','second')
  cy.get('#querying').contains('ul','oranges').should('have.class','query-list')

  cy.get('.query-button')
  .contains('Save Form')
  .should('have.class', 'btn')

  cy.get('#inputName').invoke('attr', 'placeholder').should('equal', 'Name')  
  cy.get('#inputName').should('have.attr','placeholder','Name')  

  cy.get('.query-form').within(() => {
    cy.get('input:first').should('have.attr','placeholder','Email')
    cy.get('input:last').should('have.attr','placeholder','Password')
  })

  cy.get('h6').contains('Forms')

})
