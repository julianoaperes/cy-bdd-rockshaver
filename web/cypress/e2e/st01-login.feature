
Feature: Login functionality
Scenario: Login successfully with valid credentials
  Given the user is on the homepage
  When the user navigates to the login page
  And the user enters valid "Juliano Peres", "juliano@example.com", and "5511999999999"
  And click on the "Continuar" button
  Then the user should be redirected to the profile page and see the message "O LendárioBarbershop"

Scenario: Cancel the login after fill out the all credentials
  Given the user is on the homepage
  When the user navigates to the login page
  And the user enters valid "Juliano Peres", "juliano@example.com", and "5511999999999"
  And click on the "Cancelar" button
  Then the user should be redirected to the home page and see the message "O LendárioBarbershop"

Scenario: The Name field must rejects number
  Given the user is on the form page
  When the user enters numbers "John123" in the name field
  Then the field should reject the input
  And the user should see an error message "Name can only contain letters"

Scenario: The Name field must rejects special characters
  Given the user is on the form page
  When the user enters special characters "John@Doe" in the name field
  Then the field should reject the input
  And the user should see an error message "Name can only contain letters"

Scenario: The Name field must rejects partial name
  Given the user is on the form page
  When the user enters partial name "John" in the name field
  Then the field should reject the input
  And the user should see an error message "Name can only contain letters"
