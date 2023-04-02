import r from "./raylib.js";

r.InitWindow(800, 450, "raylib - TypeScript Template");
r.SetTargetFPS(60);

while (!r.WindowShouldClose()) {
  // update() function would be called here

  // draw() function would be called here, instead we have the below
  r.BeginDrawing();

  r.ClearBackground(r.RAYWHITE);

  r.DrawText(
    "Congrats! You created your first window!",
    190,
    200,
    20,
    r.LIGHTGRAY
  );

  r.EndDrawing();
}

r.CloseWindow();
