/// <reference types="Cypress" />

describe("My Forth test suite", function () {
  it("My forthTest case", function () {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    // cy.get("div.mouse-hover-content").invoke("show");
    // cy.contains("Top").click();

    cy.contains("Top").click({ force: true });
    cy.url().should("include", "top");
  });
});
