/**
 *  @泛型 
 */

function echo<T>(arg: T): T{
    return arg
}

// const str: string = 'str'
const result = echo(true)

function swap<T ,U>(tuple:[T,U]): [U, T]{
    return [tuple[1],tuple[0]]
}

const result2 = swap(['string',123])
result2[1]



function echoWithArr<T>(arg: T[]): T[]{
    console.log(arg.length);
    return arg
}
const arrs = echoWithArr([1,2,3])

interface IWithLength {
    length: number
}
function echoWithLength<T extends IWithLength>(arg: T): T {
    console.log(arg.length);
    return arg
}
const str = echoWithLength('str')
const obj = echoWithLength({length: 10,width:10})
const arr2 =echoWithLength([1,2,3])
// echoWithLength(123) // ? 必须要有length属性



class Queue<T> {
    private data: Array<T> = []
    push(item: T) {
        return this.data.push(item)
    }
    // pop(): Array<T>{
        // return this.data.shift()
    // }
}

const queue = new Queue<number>()
queue.push(1)
// queue.push('str')

// console.log(queue.pop().toFixed());
// console.log(queue.pop().toFixed());
interface KeyPair<T,U> {
    key: T
    value: U
}
let kp1: KeyPair<number, string> = {key:1 ,value:"string"}
let kp2: KeyPair<string, number> = {key:"str" ,value:2}
let arr: number[] = [1,2,3]
let arrTwo: Array<number> = [1,2,3]

export default {}