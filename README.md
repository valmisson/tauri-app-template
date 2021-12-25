# Tauri App Template

This is a template for building desktop applications with Tauri.

## Requirements

* Read the [Tauri setup guide][tauri-docs]
* Latest version of [Node][nodejs]
* [Yarn][yarn] package manager (alternatively, [npm][npm])

## Get Started

Create a new project using this template

Click the **[Use this template][generate]** button.

## Features

### Tauri
- This template uses the latest versions of [Tauri][tauri] features.
- Build smaller, faster, and more secure desktop applications with a web frontend

### Vite
- [Vite][vite] is used to group all the source code of the renderer.
- Work easily with Vue, Svelte, React, etc.

### Typescript (optional)
- The Latest [TypeScript][typescript] is used for all source code.
- **Vite** supports TypeScript out of the box. However, it does not support type checking.

**Note**: If you do not need a TypeScript, you can easily abandon it. To do this, You do not need to make any bundler configuration changes, etc. Just replace all `.ts` files with `.js` files. Additionally, it will be useful to delete TS-specific files, plug-ins and dependencies like `tsconfig.json`, `@typescript-eslint/*`, etc.

### Web frameworks

By default this template is configured with vanilla-ts.

See [examples of different frameworks.][vite-templates]

## How it works

The template required a minimum dependencies. Only Tauri and Vite is used for building, nothing more.

### Project Structure

The structure of this template is very similar to the structure of a monorepo.

- [`packages/src-tauri`][src-tauri] Tauri application source.
- [`packages/src-renderer`][src-renderer] Web application source.

### Start Development

```bash
yarn dev
```

The first time you run this command, it will take several minutes for the Rust package manager to download and build all the required packages. Since they are cached, subsequent builds will be much faster, as only your code will need rebuilding.

Once Rust has finished building, the webview will open and it should display your web app.

### App Publishing

```bash
yarn build
```

This command will embed your web assets into a single binary with your Rust code. The binary itself will be located in `packages/src-tauri/target/release/[app name]`, and installers will be located in `packages/src-tauri/target/release/bundle/`.

Like the `yarn dev` command, the first time you run this, it will take some time to collect the Rust crates and build everything - but on subsequent runs it will only need to rebuild your code, which is much quicker.

## License

This project is licensed under the MIT License - see [LICENSE][license] for more information.

Copyright (c) 2021 Valmisson Grizorte.


[tauri]: https://github.com/tauri-apps/tauri
[tauri-docs]: https://tauri.studio/en/docs/getting-started/intro/#setting-up-your-environment
[vite]: https://github.com/vitejs/vite
[vite-templates]: https://github.com/vitejs/vite/tree/main/packages/create-vite
[typescript]: https://github.com/microsoft/TypeScript
[nodejs]: https://nodejs.org/
[yarn]: https://yarnpkg.com/
[npm]: https://www.npmjs.com/
[license]: https://github.com/valmisson/tauri-app-template/blob/main/LICENSE
[src-tauri]: https://github.com/valmisson/tauri-app-template/tree/main/packages/src-tauri
[src-renderer]: https://github.com/valmisson/tauri-app-template/tree/main/packages/src-renderer
[generate]: https://github.com/valmisson/tauri-app-template/generate
