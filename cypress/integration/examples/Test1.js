/// <reference types="Cypress" />

describe("My first test suite", function () {
  it("My firstTest case", function () {
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
    cy.get(".search-keyword").type("ca");
    cy.wait(2000);
    //cypress get acts like find Element
    cy.get(".product:visible").should("have.length", 4);
    //Parent child chaining
    cy.get(".products").find(".product").should("have.length", 4);
    cy.get(".products").find(".product").eq(1).contains("ADD TO CART").click();

    cy.get(".products")
      .find(".product")
      .each(($el, index, $list) => {
        const textVeg = $el.find("h4.product-name").text();
        if (textVeg.includes("Cashews")) {
          cy.wrap($el).find("button").click();
        }
      });
  });
});
