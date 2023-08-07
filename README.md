Mytheresa Challenge
===============

Prerequisites
-------------
* Node 18
* npm 9

Install
-------
```bash
npm install 
npx playwright install
```

Run tests
---------

```bash
npx playwright test
```

Running tests on different environments
-------------------

For selecting default environment to run tests on, set the env variable `STAGE` with one of the following: 
* `pro` (default) - https://www.mytheresa.com
* `staging` - https://staging.mytheresa.com
* `test` - https://test.mytheresa.com
* `local` - https://local.mytheresa.com

Cross-browser testing
---------------------

The following browsers are acceptable: 
* `chromium`
* `firefox`
* `webkit`

In order to select specific one, specify it with parameter `--project` on tests execution. For example: 

```bash
npx playwright test --project firefox 
```

If `--project` is not specified, the tests will be executed on ALL available browsers. 

(optional) Open HTML report
----------------
```bash
npx playwright show-report
```

Running with Docker
-------------------
```bash

docker run -it --rm --ipc=host  -v PATH_TO_PROJECT_DIRECTORY:/mytheresa-challenge -w /mytheresa-challenge mcr.microsoft.com/playwright:v1.36.2-jammy npm run test:ci
```
Note that version in image tag should match the version of playwright in `package.json`

Notes about tests
-----------------

* Test 1 does a lot of requests to https://www.mytheresa.com/, so the tests that checks status codes might fail
* Test 3 writes CSV to the file `test-results\prs.csv` and to the console