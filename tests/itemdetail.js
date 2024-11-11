class itemdetail{

    elements ={

        itemDetail : () =>  cy.get('[data-test=item-4-title-link]'),
        itemDetailRemoveCart : () => cy.get('[data-test="remove"]'),
        itemDetailAddCart : () => cy.get('[data-test="add-to-cart"]')

        
    }

    selectItemDetail(){

        this.elements.itemDetail().click();
    }

    addItemtoCart(){
        this.elements.itemDetailAddCart().click();


    }

    removeItemCart()
    {
       this.elements.itemDetailRemoveCart().click();

    }




}

module.exports= new itemdetail();