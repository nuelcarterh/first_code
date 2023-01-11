// function what() {
//     document.getElementById('hello').innerHTML = 'hi'
//     document.getElementById('hello').style.color = 'red'
//     document.getElementById('hello').style.fontSize ='30px'
//     console.log('hello this is javascript')
//     // let age = 12
//     // var age = 18
//     // const age = 20
// }


// var x=9
// var y=7
// var z= x + y
// console.log(z)
// document.getElementById('p').innerHTML = z
// var age =12
// var age =13
// console.log(age)

// let gift =20
// let ernest =25
// let emmanuel =30
// let validage =25
// console.log(gift >= validage)
// console.log(ernest >= validage)
// console.log(emmanuel < validage)

// Function to compute the product of a b and c
// function myfunction (a, b, c, d) {
//     return (a * b) / (c + d)
// }
// let result = myfunction(100, 89, 30, 90)

// document.getElementById('function1').innerHTML = result


// function tocelsius(f) {
//     return (5/9) * (f-32)
// } 
// let degree = tocelsius(190)

// document.getElementById('celcius').innerHTML = degree

// function tofarenheit(c) {
//     return (c * 9/5) + 32
// }
// let answer = tofarenheit(220)
// document.getElementById('answer').innerHTML = answer

// const user = {
//     firstName : 'daniel', 
//     lastname : 'james',
//     fullname : function () {
//         return this.firstName + " " + this.lastname
//     }
// } 
// console.log(user.fullname())
// alert(user.fullname())
// prompt('please enter your fullname', 'daniel james')

// const age = prompt('please enter your age. mind you, you must be 18 years and above')
// if (age <=12) {
//     alert('you are yet to become a teenager')
// }

// else if (age <18) {
//     alert('too young to purchase alcoholic beverages')
// }

// else {
//     alert('welcome to the alcohol section')
// }



// console.log(text)
      

    // function object() {
    //     let person = prompt('please enter your name', 'daniel james')
    //     if (person != null) {
    //         document.getElementById('id').innerHTML = 'Hello ' + person + '! How is your day going'
    //     }
    // }
    
    // document.getElementById('friend').innerHTML = 'How are you doing'

//     let viking = "We are the so-called \'Vikings\' from the north.";
// document.getElementById("demo").innerHTML = viking; 

const string = 'my name is chinedu emmanuel nwogu and i love web development'
console.log(string.slice(0, 18))
console.log(string.split(2, 6))

// function myfunction() {
//     let text = document.getElementById("replace").innerHTML

//     document.getElementById("replace").innerHTML = text.replace("Microsoft","Google");
// }

let text = ('Please visit Microsoft!')
console.log(text)
console.log(text.includes('Microsoft!'))
console.log(text.replace('Microsoft!', 'Google'))

// let html = `<h1> this is a heading from javascript<h1>`
// document.getElementById


    // let email = 'chineduwalker.cn@yahoo.com'
    // let newemail = email.replace('yahoo.com', 'gmail.com')
    // document.getElementById('email').innerHTML = email.replace('yahoo.com', 'gmail.com')

    const cars = ['Volvo', 'BMW', 'Benz']
    console.log(cars)

    cars.forEach((el) => {
        console.log(el)
    })

    // cars.forEach(function (el) {
    //     console.log(el)
    // })

    const array1 =[1, 2, 3, 4, 5, 6]
    console.log(array1)


    const filter = array1.filter((el) => {
        return el 
    })
    console.log(filter)

    const map = array1.map((el) => {
        return el * 2
    })
    console.log(map)

    const reduce = array1.reduce((a, b) => {
        return a + b
    })
    console.log(reduce)
   

    cars.push('G-wagon')
    console.log(cars)

    const fruits = ['Banana', 'Orange', 'Mango', 'Guava', 'Pawpaw']

    console.log(fruits)

    const newfruits = fruits.toString()

    console.log(newfruits)

    const result = newfruits.split(',')[2]

    console.log(result)


    const points = [40, 100, 1, 5, 25, 10];
    console.log(points)

points.sort(function(a, b){return a - b});
console.log(points)

    const results = points.every((value, index) => {
        return value > 10
    })
    console.log(results)


    const result2 = points.every((value, index) => {
        return value < 45
    })
    console.log (result2)



//     var counter = 0;
//     var line=[];


//     for(var i = 0; i<=1000; i++){
//     if(i%2==1){
//     if(line.length <100){
//     line[counter] = i;
//     counter++
//     }else{
//       console.log(line);
//       line=[];
//       counter=0;
//       line[counter] =i;
//     }
//   }
//   }
// console.log(line);

// how to print even and odd numbers using array
const array2 = [...Array(1000).keys()]

console.log(array2)

    var result1 = array2.map((value) => {
    if (value%2==1) {
        console.log(value)
    }
})
 


// const date = new Date();
// console.log(`${date.getFullYear()} : ${date.getMonth() + 1} : ${date.getHours()}`)

