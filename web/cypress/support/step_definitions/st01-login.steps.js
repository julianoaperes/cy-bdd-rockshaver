import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

// *** FEATURE: Login functionality ***
// * Reusable steps * //
Given("the user is on the homepage", () => {
  cy.visit("/");
});
When("the user navigates to the login page", () => {
  cy.get('header nav a[href="entrar"]').click();
});
When(
  "the user enters valid {string}, {string}, and {string}",
  (name, email, whatsapp) => {
    cy.get('input[placeholder="Nome"]').type(name);
    cy.get('input[placeholder="E-mail"]').type(email);
    cy.get('input[placeholder="Whatsapp"]').type(whatsapp);
  }
);
When("click on the {string} button", (buttonText) => {
  cy.contains("button", buttonText).click();
});
//////////////////////////////////////////////////////////////////////////////
// *** SCENARIO: Login successfully with valid credentials ***
Then(
  "the user should be redirected to the profile page and see the message {string}",
  (text) => {
    cy.get("h1").should("contain.text", text);
  }
);
//////////////////////////////////////////////////////////////////////////////
//***  SCENARIO: Cancel the login after fill out the all credentials ***
Then(
  "the user should be redirected to the home page and see the message {string}",
  (text) => {
    cy.get("h1").should("contain.text", text);
  }
);
//////////////////////////////////////////////////////////////////////////////
// *** SCENARIO: The Name field must rejects numbers ***
Given("the user is on the form page", () => {
  cy.visit("/entrar");
});
When("the user enters numbers {string} in the name field", (name) => {
  cy.get('input[placeholder="Nome"]').clear().type(name);
});
Then("the field should reject the input", () => {
  cy.get('input[placeholder="Nome"]').should("have.class", "is-invalid");
});
Then("the user should see an error message {string}", (errorMessage) => {
  cy.get(".error-message")
    .should("be.visible")
    .and("contain.text", errorMessage);
});
//////////////////////////////////////////////////////////////////////////////
// *** SCENARIO: The Name field must rejects special characters ***
When(
  "the user enters special characters {string} in the name field",
  (name) => {
    cy.get('input[placeholder="Nome"]').clear().type(name);
  }
);

// *** SCENARIO: The Name field must rejects partial name ***
When("the user enters partial name {string} in the name field", (name) => {
  cy.get('input[placeholder="Nome"]').clear().type(name);
});
