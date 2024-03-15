class HomePage {
  launchApplication() {
    cy.visit('/packages');
  }

  verifyPageTitle() {
    /*     cy.title().should(
      'contain',
      'Private Health Checks Packages - Starting from'
    ); */

    cy.verifyPageTitle('Private Health Checks Packages - Starting from');
  }

  closeAcceptancePopover() {
    cy.get('#onetrust-accept-btn-handler').click({ force: true });
  }
}

const homePage = new HomePage();
export default homePage;
