#TEST-STRATEGY 

# Test Strategy for E-Commerce Application

## Test Objectives

1. Verify users can log in with valid credentials.
2. Verify error messages for invalid login attempts.
3. Verify login fields are required.
4. Ensure users can log out and are redirected to the login page.
5. Verify correct product names, prices, and images.
6. Ensure products can be sorted by price and name.
7. Ensure products can be added, updated, or removed from the cart.
8. Verify the total price calculation is correct in the checkout process.

## Scope Test

### Pre-Condition: standard_user

- User authentication (login/logout)
- Product listing and details
- Cart functionalities (add/remove items)
- Checkout process
- Payment processing

## Test Tools

- **Automation**: Cypress for web automation testing.
- **Language**: JavaScript
- **Design Pattern**: Page Object Model 
  - **Reason**:
    - Maintainability of code
    - Ease of understanding (modular approach)
    - Use of best practices for code development

## Test Environment   

- **Browser**: Chrome


# TEST-PLANS 

# Test Cases for E-Commerce Application

## TC 1 - Successful Login with Valid Credentials

**Description**: Verify that a user can log in successfully with valid credentials.

**Preconditions**: User has a valid username and password.
- **Username**: standard_user
- **Password**: secret_sauce

**Steps**:
1. Navigate to the login page [https://www.saucedemo.com](https://www.saucedemo.com)
2. Enter valid username 'standard_user'
3. Enter valid password 'secret_sauce'
4. Click on the "Login" button.

**Expected Result**: User is successfully logged into the inventory page ([https://www.saucedemo.com/inventory.html](https://www.saucedemo.com/inventory.html)).

## TC 2 - Login with Invalid Credentials

**Preconditions**: User has a valid username and an invalid password.
- **Username**: standard_user
- **Password**: secret

**Steps**:
1. Navigate to the login page [https://www.saucedemo.com](https://www.saucedemo.com)
2. Enter valid username 'standard_user'
3. Enter invalid password 'secret'
4. Click on the "Login" button.

**Expected Result**: The system fails the login and an error message is displayed: "Username and password do not match any user in this service".

## TC 3 - Login with No Username

**Preconditions**: User uses a valid username and an empty password.
- **Username**: standard_user
- **Password**: (empty)

**Steps**:
1. Navigate to the login page [https://www.saucedemo.com](https://www.saucedemo.com)
2. Enter valid username 'standard_user'
3. Leave the password field empty.
4. Click on the "Login" button.

**Expected Result**: The system fails the login and an error message is displayed: "Epic sadface: Password is required".

## TC 4 - Login with Locked User

**Description**: Verify that a locked user can’t log in to the system.

**Preconditions**:
- **Username**: locked_out_user
- **Password**: secret_sauce

**Steps**:
1. Navigate to the login page [https://www.saucedemo.com](https://www.saucedemo.com)
2. Enter valid username 'locked_out_user'
3. Enter valid password 'secret_sauce'
4. Click on the "Login" button.

**Expected Result**: The system fails and an error message is displayed: "Epic sadface: Sorry, this user has been locked out."

## TC 5 - Logout from the Page

**Description**: Verify that a user can log out from the page.

**Preconditions**: User is logged in to SauceDemo.

**Steps**:
1. The user is logged in and on the product page.
2. Click on the three-line icon on the top left side.
3. Click the "Logout" option.

**Expected Result**: User is logged out and redirected to the login page.

## TC 6 - Logged In User Buys All Items in Inventory and Checks Out

**Description**: Verify that a logged-in user can add all items to the cart, proceed to checkout, and complete the purchase successfully.

**Preconditions**: 
- User has an active account.
- All items are available in the inventory.

**Steps**:
1. The user is logged in and on the product page.
2. Click the "Add to Cart" button for each item listed in the inventory.
3. Click the "Checkout" button.
4. Fill in the required details:
   - **First Name**: Eve
   - **Last Name**: Vela
   - **Postal Code**: 9233
5. Review the order summary and click the "Finish" button to complete the purchase.

**Expected Result**: The user is directed to the order confirmation page with the message: "THANK YOU FOR YOUR ORDER."

## TC 7 - Logged In User Filters Inventory by Name and Price

**Description**: Check if the user can filter the inventory by name and price.

**Preconditions**: 
- User has an active account.
- All items are available in the inventory.

**Steps**:
1. The user is logged in and on the product page.
2. Click the filter dropdown in the right corner of the page, and select the "Name (A to Z)" option. Verify that the inventory items are sorted by name in ascending order.
3. Click the filter dropdown in the right corner of the page, and select the "Name (Z to A)" option. Verify that the inventory items are sorted by name in descending order.
4. Click the filter dropdown and select the "Price (low to high)" option. Verify that the items are sorted by price in ascending order.
5. Click the filter dropdown once more and select the "Price (high to low)" option. Verify that the items are sorted by price in descending order.

**Expected Result**: The user is able to filter the inventory by both Name and Price.


# DECISIONS AND REASONS 

Automation: Cypress for web automation testing.
Language: JavaScript
Design Pattern: Page Object Model 
Reason: 
•	Maintainability of code
•	Ease of understanding (modular approach)
•	Use of best practices for code development




