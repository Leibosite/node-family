/**---------DFS------ */

let deepTraversal1 = (node, valueList = []) => {
    if(node !== null) {
        valueList.push(node.value)
        let children = node.children;
        for(let i = 0; i<children.length;i++){
            deepTraversal1(children[i], valueList)
        }
    }
    return valueList;
}

let deepTraversal2 = (node) => {
    let valueList = []
    if(node != null) {
        valueList.push(node.value)
        let children = node.children;
        for(let i = 0; i < children.length; i ++) {
            valueList = valueList.concat(deepTraversal2(children[i]))
        }
    }
    return valueList;
}


let deepTraversal3 = (node) => {

    let stack = [], valueList = [];
    if(node) {
        stack.push(node)
        while(stack.length) {
            let item = stack.pop();
            let children = item.children;
            valueList.push(item.value);
            for(let i = children.length - 1; i>0; i--) {
                stack.push(children[i])
            }
        }
    }
    return valueList;
}

/** ---- BFS ---- */

let widthTraversal = node => {
    let stack = [], valueList = [];

    if(node) {
        stack.push(node)
        while(stack.length) {
            let item = stack.shift();
            let children = item.children;
            valueList.push(item.value);
            for(let i = 0; i< children.length; i++) {
                stack.push(children[i])
            }
        }
    }
    return valueList;
}

/**
 * const value = '112'
const fn = (value) => {
...
}
fn(value) // 输出 [1， 11， 112]

 */

function bfs(target, id) {
    const quene = [...target]
    do {
      const current = quene.shift()
      if (current.children) {
        quene.push(...current.children.map(x => ({ ...x, path: (current.path || current.id) + '-' + x.id })))
      }
      if (current.id === id) {
        return current
      }
    } while(quene.length)
    return undefined
  }
  
  function dfs(target, id) {
    const stask = [...target]
    do {
      const current = stask.pop()
      if (current.children) {
        stask.push(...current.children.map(x => ({ ...x, path: (current.path || current.id) + '-' + x.id })))
      }
      if (current.id === id) {
        return current
      }
    } while(stask.length)
    return undefined
  }
  
  // 公共的搜索方法，默认bfs
  function commonSearch(target, id, mode) {
    const staskOrQuene = [...target]
    do {
      const current = staskOrQuene[mode === 'dfs' ? 'pop' : 'shift']()
      if (current.children) {
        staskOrQuene.push(...current.children.map(x => ({ ...x, path: (current.path || current.id) + '-' + x.id })))
      }
      if (current.id === id) {
        return current
      }
    } while(staskOrQuene.length)
    return undefined
  }

const data = [{
    id: '1',
    name: 'test1',
    children: [
        {
            id: '11',
            name: 'test11',
            children: [
                {
                    id: '111',
                    name: 'test111'
                },
                {
                    id: '112',
                    name: 'test112'
                }
            ]

        },
        {
            id: '12',
            name: 'test12',
            children: [
                {
                    id: '121',
                    name: 'test121'
                },
                {
                    id: '122',
                    name: 'test122'
                }
            ]
        }
    ]
}];

