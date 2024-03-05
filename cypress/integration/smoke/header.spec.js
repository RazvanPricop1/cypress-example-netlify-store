/// <reference types="cypress" />

import { beforeEach } from "mocha"

describe('e-commerce site smoke tests', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('displays the homepage when clicking on \'Home\'', () => {
    cy
      .contains('a', 'All')
      .click()

    cy
      .contains('a', 'Home')
      .click()

    cy
      .location('pathname')
      .should('be.equal', '/')
  })

  it('displays the \'All\' page', () => {
    cy
      .contains('a', 'All')
      .click()

    cy
      .location('pathname')
      .should('be.equal', '/all')
  })

  it('displays the \'Women\' page', () => {
    cy
      .contains('a', 'Women')
      .click()

    cy
      .location('pathname')
      .should('be.equal', '/women')
  })
  
  it('displays the \'Men\' page', () => {
    cy
      .contains('a', 'Men')
      .click()

    cy
      .location('pathname')
      .should('be.equal', '/men')
  })
  
  it('displays the \'Cart\' page', () => {
    cy
      .contains('a', 'Cart')
      .click()

    cy
      .location('pathname')
      .should('be.equal', '/cart')
  })
})
