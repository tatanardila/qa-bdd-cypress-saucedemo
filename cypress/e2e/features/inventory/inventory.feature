Feature: Inventory
  To shop products I need to see and add items to my cart

  Background:
    Given I am logged in as "validUser"

  @inventory
  Scenario: Add an item to the cart
    When I add "Sauce Labs Backpack" to the cart
    And I open the cart
    Then I should see "Sauce Labs Backpack" in the cart

  @inventory
  Scenario: Remove an item from the cart
    When I add "Sauce Labs Backpack" to the cart
    And I open the cart
    And I remove "Sauce Labs Backpack" from the cart
    Then I should not see "Sauce Labs Backpack" in the cart

  @inventory
  Scenario: Sort products by name A to Z
    When I sort products by "Name (A to Z)"
    Then the product list should be sorted alphabetically
    
  @inventory
  Scenario: Cart badge updates when adding one item
    When I add "Sauce Labs Backpack" to the cart
    Then the cart badge should show "1"

