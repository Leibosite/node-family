/**
 * 反转链表，每 k 个节点反转一次，不足 k 就保持原有顺序
 */

class Node {
    constructor(v, n) {
        this.vaule = v;
        this.next = null;
        if(n instanceof Node) {
            n.next = this;
        }
    }

    toString(){
        const va = [];
        let pre = this;
        while(pre.next){
            va.push(pre.vaule)
        }
        return va.join(',')
    }
    makeLinkNode(length){
        const head = new Node(-1, null)
        Array.from({length}, (_, i) => i).reduce((last, key) => new Node(key, last), head)
        return head.next;
    }
}

const revertLinkNode = function(start, endFlag) {
    if(start === null || start.next === null) return start
    let pre = null, tmp;
    while(start != endFlag) {
        tmp = start.next;
        start.next = pre
        pre = start
        start = tmp
    }
    return pre;
}


// 链表反转的头插法
const headRevert = function(head) {
    if(head === null || head.next === null) return head;

    let newHead = null, tmp;
    while(head != null){
        tmp = head;
        // 将tmp从head中摘除
        head = head.next;
        // 将tmp 插入到newHead 的头部
        tmp.next = newHead;
        newHead = tmp;
    }
    return newHead
}

// 递归反转链表
const recursiveReverse = function(head) {
    if(head == null || head.next === null ) {
        return head;
    } else {
        let newHead = recursiveReverse(head.next);
        head.next.next = head;
        head.next = null;
        return newHead;
    }
}

function invert(head, n) {
    let pre = new Node(999, null)
    pre.next = head
    let start = head
    let end = head
    // 缓存头
    head = pre
    let count = 1
    while (start && end) {
        // 查找需要反转的链表 end 节点
        if (count < n) {
            count ++
            end = end.next
        } else {
            count = 1
            // 缓存对 end 之后的链表的索引
            let next = end.next
            // 反转 start -> ** ->  end 这段链表
            revertLinkNode(start, next)
            // 反转成功后, end 节点是新链表的头了, 而 start 是尾了
            pre.next = end
            // 反转的链表连上剩下的链表
            start.next = next
            // 初始化下一段要反转的链表段
            pre = start
            start = next
            end = next
        }
    }
  return head.next
}

function makeLinkNode(length){
    const head = new Node(-1, null)
    Array.from({length}, (_, i) => i).reduce((last, key) => new Node(key, last), head)
    return head.next;
}

function toString(linkNode){
    const va = [];
    while(linkNode){
        va.push(linkNode.vaule)
        linkNode = linkNode.next;
    }
    return va.join(',')
}

console.log(toString(makeLinkNode(10)))
console.log(toString(invert(makeLinkNode(10), 3)))

const revertK = function(head, k) {
    let pre = new Node(-1, null), start = head, end = head, c=1;
    pre.next = head
    head = pre;
    while(start && end) {
        if(c < k){
            end = end.next;
            c++
        } else {
            // 重置为1
            c=1
            // 记录end后面的节点
            const endNext = end.next;
            // 反转start-> ** ->end的链表。
            revertLinkNode(start, endNext)
            // 反转后end为头
            
            pre.next = end;
            start.next = endNext;
            // 反转结束后重置下一个循环的参数
            pre = start
            end = endNext
            start = endNext
        }
    }
    return head.next;
}

console.log(toString(revertK(makeLinkNode(10), 3)))

/**
 * 输入: 1->2->3->4->5->NULL, m = 2, n = 4
 * 输出: 1->4->3->2->5->NULL
 * @param {*} head 
 * @param {*} m 
 * @param {*} n 
 */
const reverseBetween = function(head, m, n){
    let pre = new Node(-1, null), start= head, end=head,c=1;
    pre.next = head;
    head = pre;
    while(c<n) {
        if(c<m) { start = start.next, pre = pre.next }
        end = end.next;
        c++
    }
    const next = end.next;
    revertLinkNode(start, next)
    pre.next = end;
    start.next = next;
    return head.next
}

console.log(toString(reverseBetween(makeLinkNode(10), 2,4)))

const twoSum = function(l1, l2) {
    let head = new Node(null), result = head, tmp=0;
    while(l1!==null && l2!==null) {
        tmp += l1.vaule;
        l1 = l1.next;
        tmp += l2.vaule;
        l2 = l2.next;
        head.next = new Node(tmp);
        tmp = parseInt(tmp/10); 
        head = head.next;
    }
    return result.next;
}
const l1 = makeLinkNode(3), l2 = makeLinkNode(3)
console.log(l1, l2)
console.log(twoSum(l1, l2))