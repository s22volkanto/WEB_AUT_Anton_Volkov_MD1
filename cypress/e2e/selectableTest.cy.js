/// <reference types="cypress" />

Cypress.on("uncaught:exception", (err, runnable) => false);

describe('MD1 - Selectable Grid Test', () => {
  it('Selects even numbers and verifies selection', () => {
    cy.visit('https://demoqa.com/selectable');

    cy.contains('Grid').click();

    const selected = ['Two', 'Four', 'Six', 'Eight'];
    const unselected = ['One', 'Three', 'Five', 'Seven', 'Nine'];

    // Click selected items
    selected.forEach(text => {
      cy.contains('.list-group-item', text).click();
    });

    // Check that selected items are highlighted
    selected.forEach(text => {
      cy.contains('.list-group-item', text).should('have.class', 'active');
    });

    // Check that others are not selected
    unselected.forEach(text => {
      cy.contains('.list-group-item', text).should('not.have.class', 'active');
    });
  });
});
