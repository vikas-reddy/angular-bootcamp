initTestBed().then(initTesting);
const onloadWithJasmine = window.onload;
window.onload = () => { };

function initTestBed() {
  return Promise.all([
    System.import('@angular/core/testing'),
    System.import('@angular/platform-browser-dynamic/testing')
  ])
    .then(function (providers) {
      var coreTesting = providers[0];
      var browserTesting = providers[1];

      coreTesting.TestBed.initTestEnvironment(
        browserTesting.BrowserDynamicTestingModule,
        browserTesting.platformBrowserDynamicTesting());
    })
}

function initTesting() {
  return System.import('./tests')
    // After imports load, re-execute original `window.onload` which
    // triggers the Jasmine test-runner start or explain what went wrong
    .then(success, console.error.bind(console));

  function success() {
    console.log('Spec files loaded; starting Jasmine testrunner');
    onloadWithJasmine();
  }
}
