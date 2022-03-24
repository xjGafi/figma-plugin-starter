<div align="center">

  <img src="./src/assets/logo.png" width="70">
  <img src="./src/assets/figma.png" width="70">

# Figma plugin starter

🌈 A starter for creating a Figma plugin with Vite, Vue3, TypeScript, postcss, figma-plugin-ds,
Eslint and Prettier.

</div>

## Get Started

```bash
# Clone Repo
git clone https://github.com/xjGafi/figma-plugin-starter.git [plugin-name]

#Install dependencies
yarn
# or
yarn install
```

You'll need to update your `manifest.json` with your plugin's name and ID.

```json
{
  "name": "[name]", 🔫
  "id": "[id]", 🔫
  "api": "1.0.0",
  "main": "./dist/main/code.js",
  "editorType": ["figma"],
  "ui": "./dist/ui/index.html"
}
```

You can get an ID by registering a new plugin on the Figma desktop app by selecting
`Create new Plugin` in the plugins menu.

```bash
.
├── LICENSE
├── README.md
├── dist
│   ├── main
│   │   └── code.js
│   └── ui
│       ├── assets
│       │   ├── index.f7171e2b.js
│       │   └── style.dc2673b9.css
│       ├── favicon.ico
│       └── index.html
├── figma 🔫 main
│   ├── code.ts
│   ├── figma-messages.ts
│   └── tsconfig.json
├── index.html
├── manifest.json
├── package.json
├── postcss.config.js
├── public
│   └── favicon.ico
├── src 🔫 ui
│   ├── App.vue
│   ├── assets
│   │   ├── figma.png
│   │   └── logo.png
│   ├── components
│   │   ├── HelloWorld.pcss
│   │   └── HelloWorld.vue
│   ├── env.d.ts
│   ├── interface
│   │   └── common.ts
│   ├── main.ts
│   └── style
│       ├── index.pcss
│       └── reset.pcss
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
└── yarn.lock
```

## Build Setup

```bash
# Watch files for local dev
yarn run watch:ui
# and
yarn run watch:main

# Build for production
yarn run build
```

## Tips

Getting this when trying to run the `yarn run watch:main` or `yarn ruan build` task with
plugin-typings 1.42.1:

```bash
node_modules/@figma/plugin-typings/index.d.ts:11:9 - error TS2649: Cannot augment module 'console' with value exports because it resolves to a non-module entity.

11   const console: Console
           ~~~~~~~
```

Can you make const to var:

```ts
// node_modules/@figma/plugin-typings/index.d.ts

var console: Console;
```

From:
[Github issues: unable to use typings with v 1.39.0 #90](https://github.com/figma/plugin-typings/issues/90)

## Enjoy ;-)
