class PersonalDetailsPage {
  validatePersonalDetails() {
    cy.verifyUrl('personal/details');
    cy.get('h1').should('have.text', 'Personal details');
    cy.screenshot('personal-details-page');
  }
}

const persoanlDetailsPage = new PersonalDetailsPage();
export default persoanlDetailsPage;
