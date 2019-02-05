Feature: Automated scenarios for second exercise

     Scenario: 1-Check that the Kaboo signup is working properly
      Given user is on /signup page
      When fills all fields with valid data on step 1
      And clicks NEXT
      And fills all fields with valid data from step 2
      Then register button is enable and clickable

     Scenario: 2-Check that the Kaboo login is working properly (user registered or use autouk / Autotest1 )
      Given user is on /login page
      When fills username
      When fills password
      And clicks Log in button
      Then user should be redirected to account page "/profile"