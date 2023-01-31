/// <reference types="Cypress" />

describe("My Forth test suite", function () {
  it("My forthTest case", function () {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    cy.get("#alertbtn").click();
    cy.get('[value="Confirm"]').click();
    // window:alert
    cy.on("window:alert", (str) => {
      //Mocha
      expect(str).to.equal(
        "Hello , share this practice page and share your knowledge"
      );
    });
    cy.on("window:confirm", (str) => {
      //Mocha
      expect(str).to.equal("Hello , Are you sure you want to confirm?");
    });

    //remove target attribute
    cy.get("#opentab").invoke("removeAttr", "target");

    cy.url().should("include", "rahulshettyacademy");

    cy.go("back");
  });
});
