install nodejs

Install typescript: npm install -g typescript

install playwright: npm init playwright@latest

By default tests will be run on all 3 browsers, chromium, firefox and webkit using 3 workers. This can be configured in the playwright.config file. Tests are run in headless mode meaning no browser will open up when running the tests. Results of the tests and test logs will be shown in the terminal.

npx playwright test tests/fb_anii_drumetiei_events.test.ts

to run fb_anii_drumetiei_events.test.ts

To run the accesibility tests for site we must install axe-core: npm install @axe-core/playwright

After the axe core is installed run :"npx playwright test tests/rom_travel/acces.test.ts" to test for violations of WCAG A and AA success criteria. This will run the test on all three browser :Chromium, Firefox and Webkit

For E2E testing of "Rom tarvel guide" - "still under construction" ;) , use command : npm run test:rom

For Accesibility testing (to test for violations of WCAG A and AA success criteria) on chromium use command : npm run test:accesibility
If we want to run using Chromium, run :"npx playwright test tests/rom_travel/acces.test.ts ----project=chromium" to test for violations of WCAG A and AA success criteria

If we want to run using Firefox, run :"npx playwright test tests/accesibility/acces.test.ts ----project=firefox" to test for violations of WCAG A and AA success criteria

If we want to run using Webkit, run :"npx playwright test tests/accesibility/acces.test.ts ----project=webkit" to test for violations of WCAG A and AA success criteria

The results of the accesibility test are available in 'report/index.html'
