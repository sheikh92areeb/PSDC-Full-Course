// const car = {
    //     make: 'Toyota',
    //     model: 'Corolla'
    // }
     
    // const {make, model} = car;
     
    // console.log(make, model);
     
    // const arr = ['Alice', 30, 'New York'];
     
    // const [name, age, city] = arr;
     
    // console.log(name, age, city)
     
     
     
     
    // function fetchData (cb) {
    //     debugger;
    //     setTimeout(() => {        
    //         debugger;
    //         const data = {name: 'Jhon'}
    //         cb(data);
    //     }, 2000);
    // }
     
    // function a(data) {
    //     debugger;
    //    console.log(data);
    // }
     
    // // console.log(data);
     
    // fetchData(a);
     
    // console.log("Data is fetching.");
     
     
    // function orderPizza(cb) {
    //     setTimeout(() => {
    //         console.log("Step 1. Order")
    //         cb();
    //     }, 4000);
    // }
     
     
    // function preparePizza(cb) {
    //     setTimeout(() => {
    //         console.log("Step 2. Preparing")
    //         cb();
    //     }, 3000);
    // }
     
     
    // function servePizza() {
    //     setTimeout(() => {
    //         console.log("Step 3. Serving");
    //     }, 1000);
    // }
     
    // const serveCB = () => servePizza();
    // const prepareCB = () => preparePizza(servePizza)
     
    // orderPizza(prepareCB)
     
    // const callback = (resolve, reject) => {
    //     setTimeout(() => {
    //         const success = true;
     
    //         if (success) {
    //             resolve("Fulfilled");
    //         } else {
    //             reject("Rejected");
    //         }
    //     }, 2000);
    // }
    // const promise = new Promise(callback);
    // console.log(promise);
    // promise
    // .then((m) => console.log(m))
    // .catch((e) => console.error(e));
     
    function orderPizza() {
        return new Promise((res, rej) => {
            setTimeout(() => {
                res("Step 1. Order");
            }, 4000);
        });
    }
     
     
    function preparePizza() {
        return new Promise((res, rej) => {
            setTimeout(() => {
                res("Step 2. Preparing");
            }, 3000);
        })
    }
     
     
    function servePizza() {
        return new Promise((res, rej) => {
            setTimeout(() => {
                res("Step 3. Serving");
            }, 1000);
        });
    }
     
     
    const orderPromise = orderPizza();
    // orderPromise.then((result) => {
    //     console.log(result);
    //     const preparePromise = preparePizza();
    //     preparePromise.then((result) => {
    //         console.log(result);
    //         const servePromise = servePizza();
    //         servePromise.then((result) => {
    //             console.log(result);
    //         });
    //     });
    // });
     
    // orderPromise
    //     .then((orderResult) => {
    //         console.log(orderResult);
    //         return preparePizza();
    //     })
    //     .then((prepareResult) => {
    //         console.log(prepareResult);
    //         return servePizza();
    //     })
    //     .then((serveResult) => {
    //         console.log(serveResult);
    //     });
     
    // async function fn () {
    //     return "b";
    // }
    // const data = async () => {
    //     return "a";
    // }
     
    // data().then((m) => console.log(m));
     
    async function processPizza() {
       try {
        const order = await orderPizza();
        console.log(order);
        const prepare = await preparePizza();
        console.log(prepare);
        const serve = await servePizza();
        console.log(serve);
       } catch (e) {
        console.log(e);
       } finally {
        console.log("Finally Executed")
       }
    }
     
    processPizza();