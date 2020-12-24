const mySquare = function(x) {
    if(x === 0) return 0;
    let l = 1, r = Math.floor(x/2), mid;
    while(l<r) {
        console.log(l, r)
        mid = Math.floor((l + r)/ 2);
        if(mid*mid > x) {
            r = mid - 1;
        } else {
            l = mid + 1;
        }
    }
    return mid;
}

console.log(mySquare(9))

const firstBadV = (n) => {
    let l = 1, r = n;
    while(l<r) {
        let mid = l + (l + r)/2
        
    }
}