(function () {
  'use strict';

  (async () => {
    await import(
      /* @vite-ignore */
      chrome.runtime.getURL("assets/content.ts.d96a1287.js")
    );
  })().catch(console.error);

})();
