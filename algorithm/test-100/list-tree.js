/**
 * 实现 convert 方法，把原始 list 转换成树形结构，要求尽可能降低时间复杂度
以下数据结构中，id 代表部门编号，name 是部门名称，parentId 是父部门编号，为 0 代表一级部门，现在要求实现一个 convert 方法，把原始 list 转换成树形结构，parentId 为多少就挂载在该 id 的属性 children 数组下，结构如下：

// 原始 list 如下
let list =[
    {id:1,name:'部门A',parentId:0},
    {id:2,name:'部门B',parentId:0},
    {id:3,name:'部门C',parentId:1},
    {id:4,name:'部门D',parentId:1},
    {id:5,name:'部门E',parentId:2},
    {id:6,name:'部门F',parentId:3},
    {id:7,name:'部门G',parentId:2},
    {id:8,name:'部门H',parentId:4}
];
const result = convert(list, ...);

// 转换后的结果如下
let result = [
    {
      id: 1,
      name: '部门A',
      parentId: 0,
      children: [
        {
          id: 3,
          name: '部门C',
          parentId: 1,
          children: [
            {
              id: 6,
              name: '部门F',
              parentId: 3
            }, {
              id: 16,
              name: '部门L',
              parentId: 3
            }
          ]
        },
        {
          id: 4,
          name: '部门D',
          parentId: 1,
          children: [
            {
              id: 8,
              name: '部门H',
              parentId: 4
            }
          ]
        }
      ]
    },
  ···
];
 */

const convert = function(list) {
    const res = [];
    const map = list.reduce((res, v) => (res[v.id] = v, res), {})
    list.map((v, i, arr) => {
        console.log(v)
        if(v.parentId === 0) {
            res.push(v);
        }
        if(v.parentId) {
            let mapV = map[v.parentId]
            mapV.children =  mapV.children || []
            mapV.children.push(v)
        }
    })
    return res
}
let list =[
    {id:1,name:'部门A',parentId:0},
    {id:2,name:'部门B',parentId:0},
    {id:3,name:'部门C',parentId:1},
    {id:4,name:'部门D',parentId:1},
    {id:5,name:'部门E',parentId:2},
    {id:6,name:'部门F',parentId:3},
    {id:7,name:'部门G',parentId:2},
    {id:8,name:'部门H',parentId:4}
];
console.log(JSON.stringify(convert(list)))

let res = [{ "id": 1, "name": "部门A", "parentId": 0, "children": [{ "id": 3, "name": "部门C", "parentId": 1, "children": [{ "id": 6, "name": "部门F", "parentId": 3 }] }, { "id": 4, "name": "部门D", "parentId": 1, "children": [{ "id": 8, "name": "部门H", "parentId": 4 }] }] }, { "id": 2, "name": "部门B", "parentId": 0, "children": [{ "id": 5, "name": "部门E", "parentId": 2 }, { "id": 7, "name": "部门G", "parentId": 2 }] }]

function getChildrenRow(childrenList, res = []) {
    childrenList.forEach(e => {
        res.push(e)
        if(e.children) {
            getChildrenRow(e.children, res);
        }
    });
    return res;
}

console.log(getChildrenRow(res))