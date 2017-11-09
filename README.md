This is an experiment to test the performance of different react setups.

### Summary:
    1. Bundle everything: 
        * Load time (weighted avg): 1.89 s
    2. Bundle react, cdn ace library:
        * Load time (weighted avg): 1.81 s
    3. CDN react, host ace library locally:
        * Load time (weighted avg): 1.82 s
    4. CDN both react and ace library: 153/93/121
        * Load time (weighted avg): 1.22 s

### Conclusion:
The tests show that using a CDN to host react and other libraries rather than using webpack to bundle them all together along with your own source code reduces average load time by ~35% for the sample application. The performance gains should be significantly higher in a real world environment where browsers take advantage of browser caching to save frequently accessed resources such as javascript libraries hosted on a public CDN.

### How to use a CDN while still using webpack to bundle your own source code:

Unlike with most javascropt libraries, a reference to react libraries linked with a html script tag won't be recognized by simply adding `React = window.React` to our code, so we need to add a few lines of code to our webpack.config files to make it work.

0. If you created your react app using create-react-app, you need to execute `npm run eject` before you can edit your webpack.config files

1. Open your webpack.config file(s) and add the following lines to module.exports:

```
externals: {
    // ...
    react: {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react'
    },
    'react-dom': {
      root: 'ReactDOM',
      commonjs2: 'react-dom',
      commonjs: 'react-dom',
      amd: 'react-dom'
    }
    // ...
},
```

2. Add the following line to module.exports in the webpack.config file(s):

```
output: {
    // ...
    libraryTarget: 'umd',
    // ...
```

3. That's it. You can now run `npm start` or `npm run build`, and your app should work the same as before, but faster.