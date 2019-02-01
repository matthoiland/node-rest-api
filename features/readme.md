### Acceptance Tests

Unit testing can create false-positives, especially when developing something like an API that will be consumed by third parties. An acceptance test allows for things "under the hood" to change while assuring there are no feature regressions. Basically: don't test the internals of the black box – just test the input and output of it.

#### Gherkin Features

Cucumber tests are written using `Gherkin` syntax, which reads like english and can probably be written by anyone. Imagine you wanna test that a user can create a new account – first, create a new file called `account.feature`. Then write something like this:

```gherkin
Feature: Accounts
  In order to use the app
  I want to create and manage my account

  Scenario: Create trial account
    Given I navigate to "/signup"
    When I type "test@test.com" into the "email" field
    And I type "mypassword" into the "password" field
    And I check "accept"
    And I press "Sign up"
    Then I should be on "/welcome"
    And I should be authenticated
```

#### Step Definitions

Each line in a Gherkin scenario is called a `Step`, and Cucmber tries to match the text pattern of each step to an existing `Step Definition`. These are simple functions that do the actual testing. 

For example, the first step:
```gherkin
Given I navigate to "/signup"
``` 
will match to a step definition that would look something like: 
```javascript
Given('I navigate to {string}', function(uri) {
  // Do some javascripty here
})
```