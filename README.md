# octicons-react-ts

Make [`octicons`](https://github.com/primer/octicons) "Reacted" and "Typed".

## Usage

### Typescript

The package declared both `octicons-react` and `octicons`.

### React

It's exposed as a React SFC.

If you're new to `octicons`, you may first check the [octicons-node](https://github.com/primer/octicons/blob/master/lib/octicons_node/README.md) examples.

To use it as an component, you can just import and use it like:

```tsx
import * as React from 'react'
import Octicon from 'octicons-react'

const Icon: React.SFC<{}> = ({}) => (<Octicon name="alert" />)
```

### data.json

If you're using webpack, remember to add this to your 'data.d.ts' or create a new one:

```ts
declare module '*.json'
```

### css

You may import scss like

```scss
@import 'node_modules/octicons-react-ts/icon.scss'
```

And there is also the optional compiled `dist/icon.css`.

## Release

**NOTE**: This package release tag is a little bit diffrent, to keep the track of the reference to the source `octicons`, the release tag is like bellow:

```yml
v<VERSION>.<SOURCEVERSION>.<PATCHES>
```

and the `<SOURCEVERSION>` just concats `octicons` main version and subversion.

So an example version tag of `octicons-react` may look like `v1.73.2` which stands: *version 1 based on `octicons-v7.3.x`(probably v7.3.0) with 2 patches*.

## Update

You may clone the project and update the icons to follow the `octicons` at any time with the help of `/src/scripts`.

You may just run

```bash
npm run catch && npm run build
```

And try it out to choose wether to link it to your project.

The *symbol*(name) and *keywords* are commented out in `collect.js` and `octicons.d.ts`, you may uncomment them and rebuild it.

## LICENSE

### octicons

[primer/octicons](https://github.com/primer/octicons) (c) GitHub, Inc.

When using the GitHub logos, be sure to follow the [GitHub logo guidelines](https://github.com/logos).

_Code License:_ [MIT](https://github.com/primer/octicons/blob/master/LICENSE)
Applies to all other files

### octicons-react

Copyright (c) 2018 Qotes

_Code License:_ [MIT](./LICENSE)
