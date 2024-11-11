# Bug Reports

## Assumptions
- Acceptance criteria is defined, or using common e-commerce guidelines
- Severity considered Functionality impact
- Priority considered as Business Impact
- Version is 1.0

## Bug#1: Cart Quantity is Not Zero When User Logs In

- **Severity**: High
- **Priority**: High
- **Version**: 1.0

**Description**: User logs in, adds items to cart, logs out. Different user logs in, cart has items from the previous user.

### Steps
1. Log in using `standard_user`.
2. Add all items to cart, total of items is 6.
3. Log out.
4. Log in with `visual_user`.
5. Cart quantity is 6.

**Acceptance Criteria**: Cart must be empty when a user logs in.

# Bug Reports

## Assumptions
- Acceptance criteria is defined, or using common e-commerce guidelines
- Severity considered Functionality impact
- Priority considered as Business Impact
- Version is 1.0

## Bug #2: Cart Quantity is Not Zero When User Logs In

- **Severity**: High
- **Priority**: High
- **Version**: 1.0

**Description**: User logs in, adds items to cart, logs out. Different user logs in, cart has items from the previous user.

### Steps
1. Log in using `standard_user`.
2. Add all items to cart, total of items is 6.
3. Log out.
4. Log in with `visual_user`.
5. Cart quantity is 6.

**Acceptance Criteria**: Cart must be empty when a user logs in.

# Bug Reports

## Bug#3: Inventory Page - Limit of 3 Items in Cart After Login

- **Severity**: High
- **Priority**: High
- **Version**: 1.0

**Description**: User logs in, adds items to the cart, but only 3 items can be added.

### Steps
1. Log in using `problem_user`.
2. Add items to cart.
3. From the product list, 3 items are blocked.

**Acceptance Criteria**: User must be able to buy all items in the inventory list.

## Bug #4: Incorrect Product Information Displayed in Item Details

- **Severity**: Medium
- **Priority**: High
- **Version**: 1.0

**Description**: When clicking to see item details, the information displayed is from a different product.

### Steps
1. Log in using `problem_user`.
2. Select a product and open to see details.
3. Product details do not match the item name.

**Acceptance Criteria**: When the user selects a product from the list and clicks on it to view details, the product details should match the selected product.

## Bug #5: Delay in Page Response When Clicking "Back to the Product"

- **Severity**: Medium
- **Priority**: Medium
- **Version**: 1.0

**Description**: When clicking on "Back to the Product" in the product details, the page has a delay of 5 seconds in responding.

### Steps
1. Log in using `performance_glitch_user`.
2. Select a product and open to see details.
3. Experience a delay in page response when clicking "Back to the Product".

**Acceptance Criteria**: The performance load of any page should be less than 3 seconds.

# Bug Reports

## Bug #6: Items are Misaligned on Page

- **Severity**: Low
- **Priority**: Low
- **Version**: 1.0

**Description**: When the user logs in, buttons and icons are misaligned.

### Steps
1. Log in using `visual_user`.
2. Click on "Add to Cart" for any product.
3. Observe that the Cart Icon and other buttons are misaligned.

**Acceptance Criteria**: Visual components should be properly aligned to the browser area.




