var Mock = require('mockjs')
const Random = Mock.Random
// let data = []
// for (let i = 0; i < 3; i++) {
//     let template = {
//         "goodsName": Random.ctitle(3,5),
//         "price": Random.natural(0, 60),
//         "count": Random.natural(0, 10)
//     }
//     data.push(template)
// }
let datas = []
for (let i = 0; i < 7; i++) {
    let template = {
        "goodsId":i,
        "goodsName": Random.ctitle(3,5),
        "price": Random.natural(0, 60),
        "count": Random.natural(0, 10)
    }
    datas.push(template)
}
// Mock.mock('http://localhost:8080/aaa', 'get', data)
Mock.mock('http://localhost:8080/bbb', 'get', datas)
