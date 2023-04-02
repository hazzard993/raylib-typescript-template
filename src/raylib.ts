// WORKAROUND: Declarations seem incorrect, raylib is a default export, import raylib from this file instead
import * as _raylib from "raylib";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const raylib = _raylib["default"] as typeof _raylib;
export default raylib;
