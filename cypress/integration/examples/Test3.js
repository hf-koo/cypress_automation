/// <reference types="Cypress" />

describe("My Third test suite", function () {
  it("My thirdTest case", function () {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    //checked box - checking the value with assertion and double checked as well
    cy.get("#checkBoxOption1")
      .check()
      .should("be.checked")
      .and("have.value", "option1");
    cy.get("#checkBoxOption1").uncheck().should("not.be.checked");
    cy.get('input[type="checkbox"]').check(["option2", "option3"]);

    //Static Dropdown
    cy.get("select").select("option2").should("have.value", "option2");
  });
});
