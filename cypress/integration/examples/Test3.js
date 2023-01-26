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

    //Dynamtic dropdown
    cy.get("#autocomplete").type("ind");
    cy.get(".ui-menu-item div").each(($el, index, $list) => {
      if ($el.text() === "India") {
        $el.click();
      }
      cy.get("#autocomplete").should("have.value", "India");
    });

    //hide and show button
    cy.get("#displayed-text").should("be.visible");
    cy.get("#hide-textbox").click();
    cy.get("#displayed-text").should("not.be.visible");
    cy.get("#show-textbox").click();
    cy.get("#displayed-text").should("be.visible");

    //radio buttons
    cy.get('[value="radio2"]').check().should("be.checked");
  });
});
