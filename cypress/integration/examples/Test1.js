/// <reference types="Cypress" />

describe("My First test suite", function () {
  it("My firstTest case", function () {
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
    cy.get(".search-keyword").type("ca");
    cy.wait(2000);
    //cypress get acts like find Element
    cy.get(".product:visible").should("have.length", 4);
    //Parent child chaining
    cy.get(".products").find(".product").should("have.length", 4);
    cy.get(".products").find(".product").eq(1).contains("ADD TO CART").click();
    //reuseable class as Locator
    cy.get(".products").as("productLocator");
    cy.get("@productLocator")
      .find(".product")
      .each(($el, index, $list) => {
        const textVeg = $el.find("h4.product-name").text();
        if (textVeg.includes("Cashews")) {
          cy.wrap($el).find("button").click();
        }
      });
    // assert if log text is correctly displayed
    cy.get(".brand").should("have.text", "GREENKART");

    //this is to print in logs
    const logo = cy.get(".brand").then(function (logoelement) {
      cy.log(logoelement.text());
    });
    //const logo=cy.get('.brand')
    //cy.log(cy.get('.brand').text())
    // cy.log(logo.text())
  });
});
