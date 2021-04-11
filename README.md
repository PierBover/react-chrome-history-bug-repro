This is a project that reproduces a bug with the history API in Chrome with Preact.

Start the project with:

```
npm install
npm run dev
```

To reproduce the bug, open the app in your browser. Once it's open, refresh. You will notice there will be a delay in the rendering of the app of about 700ms.

To prevent the bug, close the current tab, [delete or comment this line](https://github.com/PierBover/preact-webpack-test/blob/main/src/App.jsx#L28), and then open a new tab with the app. Now refreshing will be instant, as expected.