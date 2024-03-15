class OrderSummaryPage {
  validateOrderSummary() {
    cy.verifyUrl('order/summary');
    cy.get('h1').invoke('text').should('have.length.gt', 0);
    cy.get('h1').invoke('text').should('not.be.empty');
    cy.get('h1').should('not.have.text', '');
    cy.screenshot('order-summary-page');
  }

  clickContinueBtn() {
    cy.xpath(
      "//div[@class='venue-continue-bar']/descendant::a[@id='checkoutContinueButton']"
    ).click();
  }
}

const ordeSummaryPage = new OrderSummaryPage();
export default ordeSummaryPage;
