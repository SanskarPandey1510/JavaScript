// Promise is an object representing completion or Faliue of an Asynchronous Object

// const p1 = new Promise(function(resolve,reject){
//     setTimeout(()=>{
//         console.log("Async p1 tast complete");
//         resolve()

//     },1000)

// }).then(function(){
//     // .then() take output of promise as argument
//     console.log("promise1 complete")
//     // console.log(p1)
// })
// // console.log(p1)

// const p2=new Promise(function(resolve,reject){
//     console.log("promise2")
//     // setTimeout(function)
//     resolve({name:"sans",class:6})
//     // resolve is used to send output to .then()
// }).then(function(x){

//     console.log(x,"p2")
// })
// const p3=new Promise(function(resolve,reject){
//     console.log("promise")
//     // setTimeout(function)
//     x=false
//     resolve({name:"sans",class:6})
//     // if(x){
//     //     console.log("resolved 3")

//     // }
//     // else{
//     //     reject("error of something")
//     // }
        
//     // resolve is used to send output to .then()
// });
// p3.then(function(x){

//     console.log(x,3)
//     return  x.name;
// }).catch(function(err){
//     console.log(err)
// })
// .finally(
//     function(){
//         console.log("completed f3")
//     }
// )
// p3.then(function(x){

//     console.log(x,3,"again")
//     return  x.name;
// }).catch(function(err){
//     console.log(err)
// })
// .finally(
//     function(){
//         console.log("completed f3 again")
//     }
// )




// ********************************************************************************************************

// async awwait
// const p4=new Promise(function(resolve,reject){
//     console.log("promise")
//     // setTimeout(function)
//     x=false
//     resolve({name:"sans",class:6})
//     // if(x){
//     //     console.log("resolved 3")

//     // }
//     // else{
//     //     reject("error of something")
//     // }
        
//     // resolve is used to send output to .then()
// });

// async function asynf(){
//     try{

//         const response = await p4
//         console.log(response," in asyn")
//     }
//     catch(e){
//         console.log(e)

//     }
// }
// asynf()



async function findu(){
    try{

        const res=await fetch("https://jsonplaceholder.typicode.com/users")
        const data=res.json()
        console.log(res)
    }
    catch(error){
        console.log("errpr is here")
    }

}
findu()