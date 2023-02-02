/// <reference types="Cypress" />

describe("My Eight test suite", function () {
  before(function () {
    //runs once before all tests in the block
    cy.fixture("example").then(function (data) {
      this.data = data;
    });
  });
  it("My eightTest case", function () {
    cy.visit("https://rahulshettyacademy.com/angularpractice/");
    cy.get("form.ng-untouched > :nth-child(2)").type(this.data.name);
    cy.get("select").select(this.data.gender);
  });
});
