# S.O.L.I.D example in Typescript

# What is this?

This is a small sample repository that uses Babel to transform TypeScript to plain JavaScript, and uses TypeScript for type-checking.
This README will also explain step-by-step how you can set up this repository so you can understand how each component fits together.

For simplicity, we've used `babel-cli` with a bare-bones TypeScript setup, but we'll also demonstrate integration with JSX/React, as well as adding bundlers into the mix.
Specifically, we'll show off integration with Webpack for if you're deploying an application, and Rollup for if you're producing a library.

# How do I use it?

## Building the repo

```sh
npm run build
```

## Type-checking the repo

```sh
npm run type-check
```

And to run in `--watch` mode:

```sh
npm run type-check:watch
```

# How would I set this up myself?

## Install your dependencies

Either run the following:

```sh
npm install --save-dev typescript @babel/core @babel/cli @babel/plugin-proposal-class-properties @babel/plugin-proposal-object-rest-spread @babel/preset-env @babel/preset-typescript @babel/plugin-proposal-numeric-separator
```

or make sure that you add the appropriate `"devDependencies"` entries to your `package.json` and run `npm install`:

```json
"devDependencies": {
    "@babel/cli": "^7.2.3",
    "@babel/core": "^7.4.0",
    "@babel/plugin-proposal-class-properties": "^7.4.0",
    "@babel/plugin-proposal-object-rest-spread": "^7.4.0",
    "@babel/plugin-proposal-numeric-separator": "^7.2.0",
    "@babel/preset-env": "^7.4.1",
    "@babel/preset-typescript": "^7.3.2",
    "typescript": "^3.3.3"
}
```

## Create your `tsconfig.json`

Then run

```sh
tsc --init --declaration --allowSyntheticDefaultImports --target esnext --outDir lib
```

**Note:** TypeScript also provides a `--declarationDir` option which specifies an output directory for generated declaration files (`.d.ts` files).
For our uses where `--emitDeclarationOnly` is turned on, `--outDir` works equivalently.

## Create your `.babelrc`

Then copy the `.babelrc` in this repo, or the below:

```json
{
    "presets": [
        "@babel/env",
        "@babel/typescript"
    ],
    "plugins": [
        "@babel/proposal-class-properties",
        "@babel/proposal-object-rest-spread"
    ]
}
```

## Set up your build tasks

Add the following to the `"scripts"` section of your `package.json`

```json
"scripts": {
    "type-check": "tsc --noEmit",
    "type-check:watch": "npm run type-check -- --watch",
    "build": "npm run build:types && npm run build:js",
    "build:types": "tsc --emitDeclarationOnly",
    "build:js": "babel src --out-dir lib --extensions \".ts,.tsx\" --source-maps inline"
}
```

# How do I change it?

## Using JSX (and React)
> Full example available [**here**](https://github.com/a-tarasyuk/react-webpack-typescript-babel)

### Install your dependencies

Install the [@babel/preset-react](https://www.npmjs.com/package/@babel/preset-react) package as well as React, ReactDOM, and their respective type declarations

```sh
npm install --save react react-dom @types/react @types/react-dom
npm install --save-dev @babel/preset-react@7.0.0
```

### Update `.babelrc`

Then add `"@babel/react"` as one of the presets in your `.babelrc`.

### Update `tsconfig.json`

Update your `tsconfig.json` to set `"jsx"` to `"react"`.

### Use a `.tsx` file

Make sure that any files that contain JSX use the `.tsx` extension.
To get going quickly, just rename `src/index.ts` to `src/index.tsx`, and add the following lines to the bottom:

```ts
import React from 'react';
export let z = <div>Hello world!</div>;
```

## Using Webpack

> Full example available [**here**](https://github.com/a-tarasyuk/webpack-typescript-babel)

### Install your dependencies

#Follow the steps to run
1. yarn
2. yarn dev