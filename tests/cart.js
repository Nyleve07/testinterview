class cart{

    elements = {

    cartButton : () =>      cy.get('[data-test=shopping-cart-link'),
    checkoutButton : () => cy.get('[data-test="checkout"]'),
    firstNameField : () => cy.get('[data-test="firstName"]'),
    lastNameField : () => cy.get('[data-test="lastName"]'),
    postCodeField : () => cy.get('[data-test="postalCode"]'),
    continueButton : () =>  cy.get('[data-test="continue"]'),
    finishButton : () =>  cy.get('[data-test="finish"]'),
    totalLabel : () =>   cy.get('[data-test="total-label"]')
    }

    checkOut(name, lastName,postCode)
    {
        //this.elements.firstNameField.type('Evelyn');
        //this.elements.lastNameField.type('Vela');
        //this.elements.postCodeField.type('2090');

        this.elements.firstNameField().type(name);
        this.elements.lastNameField().type(lastName);
        this.elements.postCodeField().type(postCode);


        this.elements.continueButton().click();

    }

    finishCheckOut()
    {
        this.elements.finishButton().click()
    }

    checkTotal(expectedTotal)
    {
        //this.elements.totalLabel().should('have.text','107.95')
        this.elements.totalLabel().should('have.text',expectedTotal)

    }
    gotoCart()
    {
        this.elements.cartButton().click();
        this.elements.checkoutButton().click();
    }



}

module.exports=new cart();