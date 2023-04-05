/**
 *  @枚举
 */

enum Direction {
    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT",
}

console.log(Direction.Up);
// console.log(Direction.Down); // ? 如果是数字类型，往下回自动递增
// console.log(Direction[0]);  // ?　数字回双向绑定

const value = "UP"
if (value === Direction.Up) {
    console.log("Go Up");
}



export default {}