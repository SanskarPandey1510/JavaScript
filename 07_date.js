let today=new Date()

console.log(today.toLocaleDateString())

// let created_date= new Date(2025,1,23)
// console.log(created_date.toLocaleDateString())

console.log(Date.now())
// returns milliseconds till now
console.log(today.getDate())
console.log(today.getMonth())


console.log(today.toLocaleString('default',{
    weekday:"long",
    
}))
