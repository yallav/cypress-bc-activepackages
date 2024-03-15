import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';
import homePage from '../../../pages/HomePage';
import venuePage from '../../../pages/VenuePage';
import ordeSummaryPage from '../../../pages/OrderSummaryPage';
import persoanlDetailsPage from '../../../pages/PersonalDetailsPage';

Given('the user opens the Bluecrest homepage', () => {
  homePage.launchApplication();
  homePage.verifyPageTitle();
  homePage.closeAcceptancePopover();
});

When('the user enters {string} and click search button', (venueSearch) => {
  venuePage.openActivePackage();
  venuePage.searchForVenues(venueSearch);
});

And('the user click continue button after selecting venue and time', () => {
  venuePage.selectAVenue();
  venuePage.selectAppointmentDate();
  venuePage.selectAppointmentTime();
  venuePage.clickContinueBtn();
});

And('the user click continue button on Order Summary page', () => {
  ordeSummaryPage.validateOrderSummary();
  ordeSummaryPage.clickContinueBtn();
});

Then('the user should be landed on Personal Details page', () => {
  persoanlDetailsPage.validatePersonalDetails();
});
