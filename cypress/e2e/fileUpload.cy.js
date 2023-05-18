/// <reference types="cypress" />

const cypress = require('cypress');

describe('Context: My First Tests', () => {
  beforeEach('Navigate to upload page', () => {
    cy.clearCookies();
    cy.visit('/upload');
  });

  it('Check Upload Action', () => {
    // locator for choose file button
    cy.get('input#file-upload').attachFile('pic.png');
    // click on uıpload button
    cy.get('#file-submit').click();
    // assert that path message is displayed
    cy.get('#uploaded-files').then(() => {
      cy.contains('pic.png').should('be.visible');
    });
  });
});
