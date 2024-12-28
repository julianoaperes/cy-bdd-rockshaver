// ***********************************************

require("cypress-xpath");

// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
// ********* CUSTOM COMMANDS **********

// *** CC01 *** CUSTOM COMMAND: LOG IN ***
//  This command visits the home page, navigates to the login page
//  and fills in the provided user details before submitting the form
//  @param {string} nome - The user's name
//  @param {string} email - The user's email address
//   @param {string} whatsapp - The user's Whatsapp contact number
//   @returns {void} - This function does not return a value

Cypress.Commands.add("login", (nome, email, whatsapp) => {
  cy.visit("/");
  cy.get('header nav a[href="entrar"]').click();
  cy.get('input[placeholder="Nome"]').type(nome);
  cy.get('input[placeholder="E-mail"]').type(email);
  cy.get('input[placeholder="Whatsapp"]').type(whatsapp);
  cy.get('button[type="submit"]').should("have.text", "Continuar").click();
});

//*** CC0 *** CUSTOM COMMAND: LOG OUT ***
//  Custom Cypress command to log out the user from the application.
//  This function visits the home page, locates the user's profile button
//  and clicks it to initiate the logout process
//  @returns {void} - This function does not return a value.
Cypress.Commands.add("logout", () => {
  cy.get('button[aria-haspopup="menu"]').click();
  cy.contains("div", "Logout").click();
});
