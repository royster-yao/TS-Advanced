/**
 *  @函数
 */

const add = (x: number, y: number,z?: number): number =>{
    if(typeof z === "number"){
        return x + y + z
    } else {
        return x + y
    }
}

interface ISum {
    (x: number, y:number,z?: number): number
}


// add(1,"2")
let result = add(1,2)  // result也会变为number
let add2: ISum  = add


export default {}