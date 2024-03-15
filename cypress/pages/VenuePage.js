import utilities from '../utils/Utilities';

class VenuePage {
  constructor() {
    this.randIdx = 0;
  }
  openActivePackage() {
    cy.scrollTo(0, 500);

    cy.xpath("//button[contains(@data-trackingid,'/packages-Active')]")
      .scrollIntoView()
      .wait(10000)
      .then((element) => {
        expect(element).to.be.visible;
        cy.wrap(element).click();
      });
  }

  searchForVenues(searchTerm) {
    cy.url().should('contain', 'choose/venue');
    cy.xpath("//input[@id='address-search']").should('be.visible');
    cy.xpath("//input[@id='address-search']").type(searchTerm, { force: true });
    cy.get('#address-search-btn').click({ force: true });
  }

  selectAVenue() {
    cy.xpath("//div[@id='venue-list']/child::div").should('have.length.gt', 0);

    cy.xpath("//div[@id='venue-list']/child::div").then((velnuesList) => {
      this.randIdx = utilities.getRandomIndex(0, velnuesList.length);
      var randomVenue = velnuesList[this.randIdx];

      cy.wrap(randomVenue).click();
    });
  }

  selectAppointmentDate() {
    cy.xpath(
      "//div[starts-with(@id,'venue') and contains(@id,'-screenings')]/child::div[@class='venue-date-flex']"
    ).should('have.length.gt', 0);

    cy.xpath(
      "//div[starts-with(@id,'venue') and contains(@id,'-screenings')]/child::div[@class='venue-date-flex']"
    ).then((datesList) => {
      this.randIdx = utilities.getRandomIndex(1, datesList.length);
      var randomDate = datesList[this.randIdx];

      cy.wrap(randomDate).click();
      cy.screenshot('venue-slot');
    });
  }

  selectAppointmentTime() {
    cy.xpath("//div[contains(@id,'pm-appointments')]/child::div").should(
      'have.length.gt',
      0
    );

    cy.xpath("//div[contains(@id,'pm-appointments')]/child::div").then(
      (appointmentsList) => {
        this.randIdx = utilities.getRandomIndex(0, appointmentsList.length);
        var randomAppointment = appointmentsList[this.randIdx];

        cy.wrap(randomAppointment).click();
      }
    );
  }

  clickContinueBtn() {
    cy.xpath(
      "//div[starts-with(@id,'venue') and contains(@id,'reservation')]/child::button[@aria-disabled='false']"
    ).should('be.visible');

    cy.xpath(
      "//div[starts-with(@id,'venue') and contains(@id,'reservation')]/child::button[@aria-disabled='false']"
    ).click();
  }
}

const venuePage = new VenuePage();
export default venuePage;
