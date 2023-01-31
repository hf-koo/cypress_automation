/// <reference types="Cypress" />

describe("My Seven test suite", function () {
  it("My sevenTest case", function () {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    //show can't revisit same url with new window - system think it's a hack
    cy.get("#opentab").then(function (el) {
      const url = el.prop("href");
      cy.visit(url);
    });
  });
});
