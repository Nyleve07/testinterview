import loginPage from "./tests/login"
import inventory from "./tests/inventory"
import itemdetail from "./tests/itemdetail"
import cart from "./tests/cart"



describe('End to End Tests', function() {


  beforeEach(() => {
    
      cy.visit('https://www.saucedemo.com/')
  

     loginPage.loginUser('standard_user','secret_sauce');
    

     loginPage.elements.productTitle().should('have.text','Products');
     

     loginPage.resetData();



  });

  afterEach( () => {

    loginPage.logoutUser();

  });

  it('View Item detail', function() 
  {
    itemdetail.selectItemDetail();
    itemdetail.addItemtoCart();
    itemdetail.removeItemCart();

  })


   it('Add Items and Checkout', function() 
  {
    inventory.selectItems();
    inventory.elements.labelQuantityCart().should('have.text','6');
    cart.gotoCart();
    cart.checkOut('Evelyn','Vela','2090');
    cart.checkTotal('Total: $140.34');
    cart.finishCheckOut();
    


  })

 
 });

 
 