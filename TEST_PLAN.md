# Test Plan for Test Case Challenge
---

## Introduction 

Test plan for testing the login feature of a new e-commerce application

## Test Items

According to the requirements:

-   The login feature consists of a login form with email and password input and a login button.
-   The feature is implemented on iOS, Android, and Web and is backend driven
-   The mobile apps are native

## Features to be Tested

According to the requirements:

-   After inputting the correct credentials, you land on the main screen of your application

Additional requirements according to common sense:

-   "Correct" credentials are the email and password of the user, registered in the system and authorized to log in.

-   After inputting the incorrect credentials (email is not corresponding to the registered user or provided password does not match the email, registered in the system) the error message should be displayed.

-   Both email and password inputs are required to be filled. The login form can't be submitted with an empty email or password, the login button should be disabled, error message should be displayed.

-   The password field should mask input data.

-   Email and password can't be more than N symbols, error message should be displayed.

-   Email and password can not have non-ASCII symbols.

-   The data, filled into the email and the password field remain after the application maximize and minimize.

## Features Not To Be Tested 

The following features will be excluded from testing:

-   Registration.

-   Forgot password

-   Logout.

-   OAuth login, 2FA, Captcha.

-   User logout after some time passed.

-   Navigation to login page after successful login.

-   User blocking on N failed login attempts.

-   Request blocking on N requests to the server

-   Injection protections.

-   Localization of the form.

-   Accessibility of the form.

-   Design of the form.

-   Form submission on pure internet connection.

-   Permission to use cookies.

## Approach

In order to test the feature, we will combine component, integration,
and end-to-end testing:

1.  Client-side validations (the ones, that appear on the client side without involving requests to the server) will be done on the component level with mocked back-end. This includes:

    a.  Validation, that the login form can't be submitted with incorrect values of email or password (empty, more than N symbols, or with non-ASCII symbols), The login button should be disabled, error message should be displayed

    b.  UI checks (form elements are visible and acceptable on all supported devices and platforms both in album and portrait orientation; password data is masked)

    c.  The data, filled into the email and the password field remain after the application maximize and minimize.

    The testing should be performed on all required platforms and browsers.

2.  Server-side validations (request data validation on the server) will be done with unit and API tests (sending requests and validating the response) without any UI client involved. This includes:

    a.  Fields validations (component level tests, DB connection is not required or can be mocked)

    b.  Login with "correct" credentials (integration level tests, DB connection required)

    c.  Login with "incorrect" credentials (integration level tests, DB connection required)

3.  End-to-end scenarios should be performed using web and mobile clients that send requests to the server with the implemented feature. This includes:

    a.  Login with "correct" credentials

    b.  Login with "incorrect" credentials (case with email, not registered in the system, and case with incorrect password).

    The testing should be performed on the most valuable versions of platform and browsers (end-to-end tests are time consuming and most of the UI specific issues should be found during the client-side validations).

All the tests should be automated on the corresponding level using corresponding tools for unit, UI, and API testing.

## Item Pass/Fail Criteria

The testing is considered done when all the tests passed and identified defects are fixed.

## Environmental Needs

-   iOS and Android devices or emulators with supported OS versions.

-   iOS and Android application builds with the feature implemented. Apps should be configured to connect to the server with the feature support implemented.

-   Link to the web application with the feature implemented.
