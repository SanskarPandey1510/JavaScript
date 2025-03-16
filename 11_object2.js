const obj =new Object()

obj.id=11
obj.name="aman"
obj.present=false

const obj3={
    email:"sp11@gmail.com",
    fullname:{
        first_name:"Sanskar",
        Last_name:"Pandey"
    }
}
print=function(z){
    console.log(z)
}
print(obj3.fullname.first_name)
print(obj3["fullname"]["first_name"])

// optional chaning obj.att1?.att2

const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}

const obj4=Object.assign({},obj2,obj1)
// assign is usd to merge objects to return a new object
// Object(x,y,z) put all the value in x and return it , hence add an. extra new object to create a new instance
print(obj4)
print(obj2)
print(obj1)



print(Object.keys(obj4))
// return array of keys
print(Object.values(obj4))
// return array of values
print(Object.entries(obj4))
// return 2d array of arrys containing [key,value]


print(obj4.hasOwnProperty('1'))
// .hasOwnProperty(x) -> It is used tocheck wether x is present in object or not






// ********************************************************************************************************************************

const course={
    course_name:"js",
    version:12,
    teacher_name:"billy boy"
}

const {teacher_name}=course
print(teacher_name)
//  instead of getting attributes by object we can give attributes by its unique name
const {version :vname}=course
// now version will be called as vname 
// we dont have to write course.version to get it we can acces it by vname
// {attribute : new_attribute_name} = Object

