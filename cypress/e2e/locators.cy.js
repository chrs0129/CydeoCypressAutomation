/// <reference types="cypress" />



describe("Find or Get Elements by Using Differen Locators", () => {
  before(() => {
    // runs once before all test cases in this describe block, like beforeClass in TestNG
  });
  beforeEach(() => {
    // run before each test case, beforeMethod in TestNG
    cy.clearCookies();
    cy.visit("/login");
  });

  it("Check different locators strategies", () => {
    cy.get("input[name='username']").type("CydeoStudent");
    cy.get("[type='text']").clear();
    cy.get("input").each((item, index, list) => {
      expect(list).to.have.length(2);
      expect(item).to.have.attr("type");
         });
          // by attribute name
      cy.get("[type]");
      // by className
      cy.get(".btn.btn-primary");
      // by id
      cy.get("#wooden_spoon");
      // by text
      cy.get('button').should('contain', 'Login').click();
  })

})