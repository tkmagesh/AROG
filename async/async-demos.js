
(function () {

    function addSync(x,y){
        console.log(`   [@service] processing ${x} and ${y}`)
        var result = x + y
        console.log('   [@service] returning result')
        return result
    }

    function addSyncClient(){
        console.log(`[@client] triggering the service`)
        var result = addSync(100,200)
        console.log(`[@client] result = ${result}`)
    }

    window['addSyncClient'] = addSyncClient

    function addAsync(x, y, callbackFn) {
        console.log(`   [@service] processing ${x} and ${y}`)
        setTimeout(function(){
            var result = x + y
            console.log('   [@service] returning result')
            callbackFn(result)
        }, 4000)
    }

    function addAsyncClient() {
        console.log(`[@client] triggering the service`)
        addAsync(100, 200, function(result){
            console.log(`[@client] result = ${result}`)
        })
    }

    window['addAsyncClient'] = addAsyncClient

    function addAsyncPromise(x, y) {
        console.log(`   [@service(add)] processing ${x} and ${y}`)
        var promise = new Promise(function(resolveFn, rejectFn){
            setTimeout(function () {
                var result = x + y
                console.log('   [@service(add)] returning result')
                resolveFn(result)
            }, 4000)
        })
        return promise;
    }

    /* 
    function addAsyncPromiseClient(){
        console.log(`[@client] triggering the service`)
        var p = addAsyncPromise(100, 200)
        //then(fn), catch(fn)
        p.then(function (result) {
            console.log(`[@client] result = ${result}`)
        })
    } 
    */

    async function addAsyncPromiseClient() {
        console.log(`[@client] triggering the service`)
        var result = await addAsyncPromise(100, 200)
        console.log(`[@client] result = ${result}`)
    }
    window['addAsyncPromiseClient'] = addAsyncPromiseClient

    function multiplyAsyncPromise(x, y) {
        console.log(`   [@service(multiply)] processing ${x} and ${y}`)
        var promise = new Promise(function (resolveFn, rejectFn) {
            setTimeout(function () {
                var result = x * y
                console.log('   [@service(multiply)] returning result')
                resolveFn(result)
            }, 4000)
        })
        return promise;
    }

    async function multiPromiseClient() {
        console.log(`[@client] triggering the add service`)
        var addResult = await addAsyncPromise(100, 200)
        console.log(`[@client] addResult = ${addResult}`)
        
        console.log(`[@client] triggering the multiply service`)
        var multiplyResult = await multiplyAsyncPromise(10, 20)
        console.log(`[@client] multiplyResult = ${multiplyResult}`)
    }
    window['multiPromiseClient'] = multiPromiseClient

    async function parallelPromiseClient() {
        console.log(`[@client] triggering the add service`)
        var addPromise =  addAsyncPromise(100, 200)
        
        console.log(`[@client] triggering the multiply service`)
        var multiplyPromise =  multiplyAsyncPromise(10, 20)

        let [addResult, multiplyResult] = await Promise.all([addPromise, multiplyPromise])
        console.log(`[@client] addResult = ${addResult}`)
        console.log(`[@client] multiplyResult = ${multiplyResult}`)
    }

    window['parallelPromiseClient'] = parallelPromiseClient

})()