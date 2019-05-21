// const person={
//     name:"Ghafar",
//     age:12,
//     location:{
//         city:"Mirpur"
//     }
// }
// const {name,age,location:area} = person;
// const {city,temp="2222"} =area;
// console.log(`${name} age is ${age} and his city is ${city} and temp is ${temp}`)


const book={
    title: "Computer In IT",
    code:4324324,
    author:{
        name:"Ghafar",
        age:"22",
        location: {
            city:"Mirpur",
            address:"Boha Dhangri"
        }
    }
}
const {title:bookname,code,author} =book;
const {name:authorName,age}=author;
const {city,address,a_code:area_code="231234324gdfgdsfsd"}=author.location
console.log(`Book name is ${bookname} author name is ${authorName} and age is ${age} and he is from ${city} and address is ${address} and his area code is ${area_code}`)








// Array destructing

const ghafar=["Ghafar","Ahmed","Mirpur"]
const [firstName,,cityy,state="AJK"] =ghafar
console.log(`${firstName} is from ${cityy} his state is ${state}`)