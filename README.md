Mytheresa Challenge
===============

Install
-------
```bash
npm install 
```

Run tests
---------

1. Run tests
```bash
npx playwright test
```

(optional) Open HTML report
----------------
```bash
npx playwright show-report
```

Notes about tests
-----------------

* Test 1 does a lot of requests to https://www.mytheresa.com/, so the tests that checks status codes might fail
* Test 3 writes CSV to the file `test-results\prs.csv` and to the console