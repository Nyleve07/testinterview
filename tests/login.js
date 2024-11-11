class login{

    elements ={

        loginUsernaneField : () => cy.get('[data-test=username]'),

        loginPasswordField : () =>  cy.get('[data-test=password]'),

        loginButton : () =>  cy.get('[data-test=login-button]'),

        productTitle : () => cy.get('[data-test="title"]'),

        logoutButton : () => cy.get('[data-test="logout-sidebar-link"]'),

        ResetButton : () => cy.get ('[data-test="reset-sidebar-link"]'),

        MenuButton : () => cy.get ('[id="react-burger-menu-btn"]'),



    }

    loginUser(username,password){
        this.elements.loginUsernaneField().click();
        this.elements.loginUsernaneField().type(username);

        this.elements.loginPasswordField().click();
        this.elements.loginPasswordField().type(password);

        this.elements.loginButton().click();

    }

    logoutUser(){
        this.elements.MenuButton().click();
        this.elements.logoutButton().click();
    }

    resetData(){

        this.elements.MenuButton().click();
        this.elements.ResetButton().click();
    }



}
module.exports = new login();
