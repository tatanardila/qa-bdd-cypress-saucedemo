Feature: Checkout
  Complete a purchase using valid customer data

  Background:
    Given I am logged in as "validUser"
    And I have "Sauce Labs Backpack" in the cart

  @checkout
  Scenario: Complete checkout successfully
    When I proceed to checkout
    And I fill the checkout form with:
      | firstName | lastName | postalCode |
      | Maria     | Gomez    | 110011     |
    And I finish the purchase
    Then I should see the order success message

  @checkout
  Scenario: Attempt checkout with missing postal code
    When I proceed to checkout
    And I fill the checkout form with:
      | firstName | lastName | postalCode |
      | Maria     | Gomez    |            |
    And I continue checkout
    Then I should see the error message "Error: Postal Code is required"

  @checkout
  Scenario: Cancel checkout before finishing
    When I proceed to checkout
    And I click cancel on the checkout page
    Then I should return to the cart page
