/**
 *  @类型推论
 *  @类型联合  
 *  @类型断言  
 */

let str = 'str'  // ? typescript 会自动帮我们推测出一个类型
// str = 123  

// ? union types
let numberOrString: number | String 


// ? 当TS不确定一个联合类型的变量是什么类型时，只能使用联合类型共有的属性或方法
// ? 例子：numberOrString.length  非共有的属性或方法
// ? numberOrString.toLocaleString 共有的属性或方法
// ? numberOrString.toString 非共有的属性或方法


function getLength(input: string | number): number{
    const str = input as string
    if (str.length) {
        return str.length
    }else {
        const number = input as number
        return number.toString.length
    }
}
// ? type guard
function getLength2(input: string | number): number{
    if (typeof input === "string") {
        return input.length
    }else{
        return input.toString.length
    }
}


numberOrString = 123
numberOrString = "abc"




export default {}