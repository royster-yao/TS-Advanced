/**
 *  @接口
 */

interface Person {
    readonly id: number  // 对象的id只读
    name: string
    age?: number  // ?表示可选
}

// interface 对对象进行描述，声明对象是描述后的类型必须与描述的对象类型一致
let royster: Person ={
    id:1,
    name:"姚",
    age:21,
    // id:'20'
}
// royster.id = 10 // id只读


export default {}