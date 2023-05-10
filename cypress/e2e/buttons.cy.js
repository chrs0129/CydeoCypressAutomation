/// <reference types="cypress" />

describe('Context: My First Tests', () => {
    beforeEach(() => {
        cy.clearCookies();
        cy.visit('/multiple_buttons');
    })
  
    it('Check Different Button Actions', () => {
        // select a button with text
        cy.contains('Button 2').should('be.visible').click();
        cy.contains('Clicked on button two!').should('be.visible');


        cy.get('.btn.btn-pimary').then((buttons)=>{
            cy.wrap(buttons).eq(2).click();
            cy.contains('Clicked on button three!').should('be.visible');
        })
        cy.get('button').each((item, index, list)=>{
            expect(list).to.have.length(6);
            expect(item).to.have.attr('onclick');
        })
        cy.get('button').each((item, index, list)=>{
            if(item.text()== 'Button 4'){
                cy.log(item.text());
                cy.wrap(item).click();
                cy.contains('Clicked be on button 4').should('be.visible');
            }
        })
    })
  
})