/// <reference types="Cypress" />

describe("My Forth test suite", function () {
  it("My forthTest case", function () {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

    // select particular column - search and next column and vertify as well
    cy.get("tr td:nth-child(2)").each(($el, index, $list) => {
      const text = $el.text();
      if (text.includes("Python")) {
        cy.get("tr td:nth-child(2)")
          .eq(index)
          .next()
          .then(function (price) {
            const priceText = price.text();
            expect(priceText).to.equal("25");
          });
      }
    });
  });
});
