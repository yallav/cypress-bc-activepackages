Feature: Active Package Order

Scenario: User opens the Bluecrest application to create active package order

Given the user opens the Bluecrest homepage
When the user enters "Brighton and Hove,England,GB" and click search button
And the user click continue button after selecting venue and time
And the user click continue button on Order Summary page
Then the user should be landed on Personal Details page