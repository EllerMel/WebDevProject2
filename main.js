var counter = 0,
    gallery = ["assets/Images/CompCat.jpg", "assets/Images/CompCat2.jpg", "assets/Images/CompCat3.jpg"],
    rotateGallery = function () {
        document.getElementById('homeCat').src = gallery[counter];
        counter++;
        if (counter >= gallery.length) {
            counter = 0;
        }
    };

var image = document.getElementById('whoCat').addEventListener('click', changeImage);

// function changeImage(){
//     alert('This is my image click function')
// }

// function changeImage(){
//     console.log('This is my image click function')
// }

var count = 0
function changeImage(){
    //console.log(document.getElementById('whoCat'))
    if(count % 2 == 0){
        document.getElementById('whoCat').src = "assets/Images/CompCat3.jpg"
        count++
        console.log(count)
    } else{
        document.getElementById('whoCat').src = "assets/Images/CompCat2.jpg"
        count++
    }
}



//console.log('Hello World')     //this returns Hello World
//console.log('2' + 1)          //this returns 21

//console.log(10 % 2)           //Modulus (returns the difference)  - this returns 0
//console.log(11 % 2)           //this returns 1
//console.log(11 % 3)           //this returns 2

//console.log(10 + 2)           //Addition - this returns 2
//console.log(10 - 2)           //Subtraction - this returns 8
//console.log(10 * 2)           //Multiplication - this returns 20
//console.log(10 / 2)           //Division - this returns 5

//var x = 100
//console.log(x % 2)            //this shows it's an even number

//alert('This is a warning')    //Pop up warning

// for(i = 0; i < 10; i++){
//    console.log(i)
// }                            //counts up from 1 to 9

//var happy = 31;

// for(happy; happy > 0; happy--){
//     console.log(happy)
// }                               //counts down from 31 to 1

// while(happy > 0){
//     console.log(happy--)
// }                             //counts down from 31 to 1

//var happy = 10;

// if(happy == 11){
//     console.log('True')
// } else if(happy > 10){
//     console.log('Actually this is true')
// }  else {
//     console.log('Nothing here was true')
// }

// if(happy == 10 && happy >= 10){
//     console.log('Both conditions were true')
// }

// if(happy == 10 || happy < 10){
//     console.log('One of these was true')
// }

// if(happy != 10 || happy > 10){
//     console.log('One of these was true')
// } else {
//     console.log('Everything was false')
// }

//fizzbuzz!
// for (var i=1; i < 101; i++){
//     if(i % 3 == 0 && i % 5 == 0)
//         {console.log('fizzbuzz')}
//     else if(i % 3 == 0)
//         {console.log('fizz')}
//     else if(i % 5 == 0)
//         {console.log('buzz')}
//     else{console.log(i)}
// }