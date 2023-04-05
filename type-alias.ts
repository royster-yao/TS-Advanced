/**
 * @类型别名
 */

// ? type aliase

let sum: (x:number, y: number) => number // ? 定义函数名 
// const result = sum(1,2)
type PlusType = (x:number, y: number) => number
let sum2: PlusType
// const result = sum2()
type StrOrNum = string | number


// ? 字符串字面量
let result3: StrOrNum = "123"
result3 = 123
// result3 = true

type Dirctions = "Up" | "Down" | "Left" | "Right"
let toWhere: Dirctions = "Left" 


// ? 交叉组合时使用 
interface IName {
    name: string
}
type IPerson = IName & {age: number}
let person: IPerson = {name:"123",age:18}









export default {}