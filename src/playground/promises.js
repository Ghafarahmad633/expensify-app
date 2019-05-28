const promise=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        // resolve({
        //     name:"Ghafar Ahmed"
        // })
        reject('Something wrong')
    },1500)

})
console.log("Before")
promise.then((date)=>{
    console.log(date.name)
}).catch((error)=>{
    console.log('error',error)
})
console.log("After")