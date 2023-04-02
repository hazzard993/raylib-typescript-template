# Raylib TypeScript Project Template

A template to quickly start a raylib TypeScript project. This is made possible with [node-raylib](https://github.com/RobLoach/node-raylib).

You can click `Use this template` to clone this repo, or download it as a zip.

## Commands

| Command                | Description                           |
| ---------------------- | ------------------------------------- |
| `npm install`          | ⏬ Install dependencies               |
| `npm run build`        | 🔨 Build everything                   |
| `npm run build:watch`  | 🔨x♾ Re-build when a TS file is saved |
| `npm start`            | 🎮 Start the game                     |
| `npm run fix:prettier` | 💄 Fixes linting issues               |

Here's a [cheatsheet](https://www.raylib.com/cheatsheet/cheatsheet.html) for the kinds of functions, types, and colors to play with.

### Notes

- As a workaround, raylib must be imported from `raylib.ts` since it seems misrepresented in declarations. This may also be useful for using DRM mode.
- The `.js` extension must be used in import statements.
- This template was tested to be working when using `Node v19.8.1` and `NPM version 9.2.0`.
