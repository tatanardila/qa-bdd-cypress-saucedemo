Feature: Login
  Background:
    Given I am on the login page

  @smoke @login
  Scenario: Valid login
    When I login with username "standard_user" and password "secret_sauce"
    Then I should see the inventory page

  @smoke @login
  Scenario: Invalid credentials show generic error
    When I login with username "invalid_user" and password "wrong_pass"
    Then I should see error text "Epic sadface: Username and password do not match any user in this service"

  @smoke @login
  Scenario: Locked out user shows specific error
    When I login with username "locked_out_user" and password "secret_sauce"
    Then I should see error text "Epic sadface: Sorry, this user has been locked out."

  @smoke @login
  Scenario Outline: Required fields validations
    When I login with username "<username>" and password "<password>"
    Then I should see error text "<message>"
    Examples:
      | username      | password | message                            |
      |               |          | Epic sadface: Username is required |
      | standard_user |          | Epic sadface: Password is required |

  @smoke @login @ux
  Scenario: Submit with Enter key
    When I type username "standard_user"
    And I type password "secret_sauce"
    And I press Enter to submit
    Then I should see the inventory page

  @smoke @login @ux
  Scenario: Password field is masked
    Then the password input should have type "password"
