const reviews = require('../support/pageData/reviews')

describe('Review Televisions', () => {
  beforeEach(() => {
    cy.visit('/televisions')
  })

  it('Should see 10 search results', () => {
    cy.get(reviews.elements.searchResultContainer).should('be.visible')
    cy.get(reviews.elements.searchResults).should('have.length', 10);
  })
//   it('Should see blurred elements for logged out user', () => {
//   })

//   it('Should see the correct result count for specific filters', () => {
//   })
})