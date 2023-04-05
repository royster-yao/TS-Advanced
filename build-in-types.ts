/**
 *    @内置类型
 */

const a: Array<number> = [1,2,3]
const date = new Date()  // ? data: Date
date.getTime()
const reg = / abc/  // ? reg: RegExp
reg.test("abc")

Math.pow(2,2)

// ?　DOM and BOM
let body = document.body   // ? body: HTMLElement
let allLIs = document.querySelectorAll("li") // ?  allLIs: NodeListOf<HTMLLIElement>

document.addEventListener("click",(e)=>{ // ? e: MouseEvent
    e.preventDefault()
})

interface IPerson {
    name: string
    age: number
}

let royster: IPerson = {name:"yao",age:21}
type IPartial = Partial<IPerson>
let royster2: IPartial = {name:"yao"}

type IOmit = Omit<IPerson,"name">  // ? 忽略属性
let royster3: IOmit = {age:21}


export default {}