# Monorepo TypeScript Demo

[![Build Status](https://semaphore-demos.semaphoreci.com/badges/semaphore-demo-monorepo-typescript/branches/final.svg)](https://semaphore-demos.semaphoreci.com/projects/semaphore-demo-monorepo-typescript)

A hello world type monorepo demo for TypeScript and Yarn Workspaces.

## Before Yarn Workspaces

Withouth workspaces, you have to build and link each project separately. For instance:

``` bash
$ npm install -g typescript
$ cd shared
$ tsc
```

This builds the `shared` package. But when we try to do the same with `sayhi`, we get an error since the local dependency is not found:

``` bash
$ cd ..
$ cd sayhi
$ tsc

src/sayhi.ts:1:20 - error TS2307: Cannot find module 'shared' or its corresponding type declarations.

1 import { hi } from 'shared';
                     ~~~~~~~~
Found 1 error.
```

Yarn workspaces help us link projects while keeping each in its own separate folder.

## Configure Yarn Workspaces and TypeScript

To configure workspaces, first install the latest Yarn version:


``` bash
$ yarn set version berry
```

This creates `.yarn` and `.yarnrc.yml`

Initialize workspaces, this creates the `packages` folder, a `.gitignore`, and the `package.json` and `yarn.lock` files:


``` bash
$ yarn init -w
```

You can add monorepo-level dependencies to build all projects at once:

``` bash
$ yarn add -D typescript
```

Move the project folders to `packages`.

``` bash
$ git mv sayhi shared packages/
```

Confirm that workspaces have been detected:

``` bash
$ yarn workspaces list --json
{"location":".","name":"semaphore-demo-monorepo-typescript"}
{"location":"packages/sayhi","name":"sayhi"}
{"location":"packages/shared","name":"shared"}
```

Add a root-level `tsconfig.json`.


``` bash
{
  "references": [
    {
      "path": "./packages/shared"
    },
    {
      "path": "./packages/sayhi"
    }
  ]
}
```

Linked projects need to have the `composite` option enabled (in the `compilerOptions`). Add this line into `packages/shared/tsconfig.json` and `packages/sayhi/tsconfig.json`.

``` bash
{
  "compilerOptions": {

     ...

     "composite": true
  }
}
```

On `packages/sayhi/tsconfig.json` add to dependecy project. This goes outside `compilerOptions`.

``` bash
{
  ...

  "references": [
    {
      "path": "../shared"
    }
  ]
}
```

Install and build all dependencies. This adds `.pnp.cjs`, and fills the `.yarn/cache`.

``` bash
$ yarn install
```

You can build each project separately into its `dist` folders:

``` bash
$ yarn workspace shared build
$ yarn workspace sayhi build
```

The final integration happens when we run the `sayhi` program:

``` bash
$ yarn workspace sayhi node dist/src/sayhi.js
Hi, World
```

Per project actions:
- Build/compile: `yarn workspace <project> build`
- Run unit tests: `yarn workspace <project> test`
- Run ESLint: `yarn workspace <project> lint`
- Delete compiled files: `yarn workspace <project> clean`

## License

MIT License

Copyright (c) 2021 Rendered Text

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
