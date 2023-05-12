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

  it('Check finding elements by traveling throug DOM', ()=>{
    cy.get('input[name="username"]').parents('form').find('button').should('contain', 'Login').click;
  })

  it.only('check different type of asserions', ()=>{
    cy.get("#wooden_spoon")
    .should('contain', 'Login')
    .and('have.class', "btn btn-primary");

    cy.get("#wooden_spoon").then((element)=>{
      expect(element).to.have.text('Login');
      expect(element).to.have.class('btn btn-primary');

    })
    

  })

})