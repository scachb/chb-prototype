# Pega Prototyping Experiment

A demo to see how we can prototype with Pega's constellation design system
Uses esbuild to compile React in .jsx (Javascript XML) files.

Use the command below to start the prototype kit:
```javascript
    npm start
```

> Since it's a SPA (Single Page Application), navigating to a URL in the search bar won't work to test pages. This is different to the GOV.UK Prototype Kit and may need a disclaimer, only <HMRCLink /> components can navigate to new routes, they've been enhanced to use Pega's link components with the router in React.

> config.json is used to configure the Pega Constellation theme, for a full list of options [click here](https://design.pega.com/develop/configuration/#Properties).

> kit.jsx contains all the components to be abstracted into an npm package, sets up Pega app, routes etc.

> patches folder contains a patch to fix Constellation Icons not importing properly with esbuild, may need to raised with Pega at some point as it could be a wider bug.

> www contains the index.html file that gets served as a SPA by esbuild's dev server and assets for any images to bring in.

CONSIDERATIONS:

- Need a way to configure the sidebar if needed
- Still needs discussion with Ian, Peter etc.
- Need an example of CHB prototype
- Need to think about how to bring in Theme UI (only support Constellation)
- Refactor into an npm package, eventually.
