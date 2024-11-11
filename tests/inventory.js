class inventory{

    elements={

        backpackIteAddCart : () =>  cy.get('[data-test=add-to-cart-sauce-labs-backpack]'),
        bikelightItemAddCart: () =>  cy.get('[data-test=add-to-cart-sauce-labs-bike-light]'),
        bolttshirtItemAddCart : () => cy.get('[data-test=add-to-cart-sauce-labs-bolt-t-shirt]'),
        fleeceJacketItemAddCart : () => cy.get('[data-test=add-to-cart-sauce-labs-fleece-jacket]'),
        onesieItemAddCart : () => cy.get('[data-test=add-to-cart-sauce-labs-onesie]'),
        tshirtRedAddCart : () => cy.get('[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]'),
        labelQuantityCart : () => cy.get('[data-test="shopping-cart-badge"]')
    }

    selectItems(){

        this.elements.backpackIteAddCart().click();
        this.elements.bikelightItemAddCart().click();
        this.elements.fleeceJacketItemAddCart().click();
        this.elements.bolttshirtItemAddCart().click();
        this.elements.onesieItemAddCart().click();
        this.elements.tshirtRedAddCart().click();

    }

    
}

module.exports = new inventory();