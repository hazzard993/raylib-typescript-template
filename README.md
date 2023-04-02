# Raylib TypeScript Project Template

A template to quickly start a raylib TypeScript project. This is made possible with [node-raylib](https://github.com/RobLoach/node-raylib).

You can click `Use this template` to clone this repo, or download it as a zip.

## Commands

Requires [NodeJS](https://nodejs.org) (tried with `Node v19.8.1` with `NPM 9.2.0`). On Windows [this redistributable](https://learn.microsoft.com/en-us/cpp/windows/latest-supported-vc-redist?view=msvc-170#visual-studio-2015-2017-2019-and-2022) may also be required.

| Command                | Description                           |
| ---------------------- | ------------------------------------- |
| `npm install`          | ⏬ Install dependencies               |
| `npm run build`        | 🔨 Build everything                   |
| `npm run build:watch`  | 🔨x♾ Re-build when a TS file is saved |
| `npm start`            | 🎮 Start the game                     |
| `npm run fix:prettier` | 💄 Fixes linting issues               |

- [Examples](https://www.raylib.com/examples.html) to help get a general idea of how to use raylib.
- [Cheatsheet](https://www.raylib.com/cheatsheet/cheatsheet.html) for a quick reference.

### Notes

- As a workaround, raylib must be imported from `raylib.ts` since it seems misrepresented in declarations. This may also be useful for using DRM mode.
- The `.js` extension must be used in import statements.
