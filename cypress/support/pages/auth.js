class Auth{
    login(user_name, password){
        cypress.get('[name="username"]').type(user_name);
        cypress.get('[name="password"]').type(password);
        cypress.get('#wooden_spoon').click();

    }
    logout(){
        cy.contains('Logout').should('be.visible').click();

    }
}

const auth = new Auth();

class Locators{
    get userName(){
        return cy.get('[name="username"]',{timeot: 10000} );
    }
    get password(){
        return  cy.get('[name="password"]');
    }
    get submit (){
        return cy.get('#wooden_spoon');
    }
}
module.exports = {
    auth,
    locators
};

