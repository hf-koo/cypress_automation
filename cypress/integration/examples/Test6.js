/// <reference types="Cypress" />

describe("My Six test suite", function () {
  it("My sixTest case", function () {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    // cy.get("div.mouse-hover-content").invoke("show");
    // cy.contains("Top").click();

    cy.contains("Top").click({ force: true });
    cy.url().should("include", "top");
  });
});
