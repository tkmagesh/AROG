function add(x, y) {
    function parseArg(n){
        if (Array.isArray(n)) return add.apply(this, n)
        return isNaN(n) ? 0 : Number(n)
    }
    var result = 0;
    for (var idx = 0; idx < arguments.length; idx++) {
        result += parseArg(arguments[idx])
    }
    return result 
}

function add2(...args) {
    function parseArg(n) {        
        if (Array.isArray(n)) return add2(...n)
        return isNaN(n) ? 0 : Number(n)
    }
    return args.length <= 1 ? parseArg(args[0]) : parseArg(args[0]) + add2(args.slice(1))
}

function testAdd() {
    console.log(add(10))
    console.log(add(10, 20))
    console.log(add(10, 20, 30, 40, 50))
    console.log(add(10, 20, 30, '40', 50))
    console.log(add(10, 20, '30', '40', 50))
    console.log(add(10, 20, '30', '40', 50, 'xyz'))
    console.log(add([10, 20], [30, 40]))
    console.log(add([10, '20'], [30, '40']))
}

function testAdd2() {
    console.log(add2(10))
    console.log(add2(10, 20))
    console.log(add2(10, 20, 30, 40, 50))
    console.log(add2(10, 20, 30, '40', 50))
    console.log(add2(10, 20, '30', '40', 50))
    console.log(add2(10, 20, '30', '40', 50, 'xyz'))
    console.log(add2([10, 20], [30, 40]))
    console.log(add2([10, '20'], [30, '40']))
}