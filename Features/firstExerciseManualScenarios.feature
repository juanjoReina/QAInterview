Feature: BDD Scenerios from business requirement
After reading this requirement I would divide the BDD test cases into the following categories:
-Acceptance tests regarding front end functionality
-Integration tests more related to back end

So positive acceptance tests would be the following:
Feature: When a user claims a reward the history section will be displayed with a maximum of 8 results
    Given a user logged into the application
    When the user claims a reward
    Then Your history section will be open
    And it will show, as maximum, the last 8 rewards (chronologically sorted) that have been claimed for that user
    And each claimed reward will have one characteristic thumbnail

Feature: When a user(who has claimed at least one reward) opens the Freebies Vault section the history of claimed reward will be shown with a maximum of 8 results
    Given a user logged into the application
    And the user has claimed at least one reward before
    When he clicks on Freebies Vault section
    Then the history section will be displayed showing , as maximum, the last 8 rewards (chronologically sorted) that the user has claimed
    And each reward claimed will have one characteristic thumbnail.

Feature: When a user claims a reward twice the history section will be displayed with a maximum of 8 results
    Given a user logged into the application
    When the user claims a reward a second time
    Then Your history section will be open
    And it will show, as maximum, the last 8 rewards (chronologically sorted) that have been claimed for that user
    And each claimed reward will have one characteristic thumbnail
    And the second time claimed reward will appear twice with the same thumbnail


Negative acceptance tests cases
Feature When a user(who has not claimed any reward ever) opens the Freebies Vault section the history of claimed reward will be shown with a maximum of 8 results
    Given a user logged into the application
    And the user has not claimed any reward ever
    When he clicks on Freebies Vault section
    Then the your history section will be displayed and empty

Feature When a user(who has pending reward to claim) opens the Freebies Vault section the rewards that have not been claimed yet will not be shown
    Given a user logged into the application
    And the user who has pending rewards to claim
    When he clicks on Freebies Vault section
    Then the your history section only displays the rewards that have been claimed

Positive integration test for backend ( I would perform these test with an API to make rest request, like postman or restassured)
For this below tests I am assuming that apart from username param, another security token will be send in the request
Feature: Perform a request with only one parameter to the service that returns the JSON with the array of the tokens claimed for the user
    Given the service which returns the history of tokens claimed for the user A
    And a security token related with the user A
    And a userName param included into de request for user A
    When we perform a request to the service
    Then an array with the tokens claimed by user A will be return
    And the array and subarray positions will be chronologically sorted
    And the fields in the subarray positions will be game-slug,date claimed, info, reason and expiry date

Feature: Perform a request with only one parameter to the service that returns the JSON with the array of the tokens claimed for the user who has claimed a reward twice
    Given the service which returns the history of tokens claimed for the user A
    And a security token related with the user A
    And a userName param included into de request for user A
    When we perform a request to the service
    Then an array with the tokens claimed by user A will be return
    And the array and subarray positions will be chronologically sorted
    And the fields in the subarray positions will be game-slug,date claimed, info, reason and expiry date
    And one of the position of the array related to the reward that has been claimed twice, will have two subarrays

Feature: Perform a request with only two parameters to the service that returns the JSON with the array of the tokens claimed for the user
    Given the service which returns the history of tokens claimed for the user A
    And a security token related with the user A
    And a userName param included into de request for user A
    And a userName param included into de request for user B
    When we perform a request to the service
    Then the service will return invalid request response

Feature: Perform a request with a different username and security token
    Given the service which returns the history of tokens claimed for the user A
    And a security token related with the user A
    And a userName param included into de request for user B
    When we perform a request to the service
    Then the service will return invalid request response