# Documentation

The documentation can be viewed at [documentation](https://menditect.github.io/documentation).

## How to create a new release
1. Create a copy of the content in the `docs` folder by using the command
```powershell
yarn run docusaurus docs:version <CURRENT_VERSION>
```
2. Change the current version to the new version in `docusaurus.config.js`
```javascript
versions: {
    current: {
        label: <NEW_VERSION>,
        path: '/',
    }
}
```
3. Add the previous version to the `versions.json` file and remove the existing one.

## How to use

### Installation

```
$ yarn install
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.
