// factory function

function creatCircle(radius) {

    return {
        radius,
        location: {
            x: 1,
            y: 1
        },

        draw: function () {
            console.log('Create Circle');
        }
    }
}

const drawing = creatCircle(1);

drawing.draw();
console.log(drawing);
console.log(typeof drawing);

//constructors function

function CreatSquare(length) {

    const dimention = this.length;
    const location = {
        x: 2,
        y: 2
    };
    this.draw = function () {
        console.log('Create Square');
    }
}

const drawingSquare = new CreatSquare(3);

drawingSquare.draw();
console.log(drawingSquare);
console.log(typeof drawingSquare);

console.log(creatCircle.name);
console.log(CreatSquare.length);

drawingSquare.location = {z:2}; // Dot notation 
drawingSquare['location'].a = 3 ; // Bracket notation
delete drawingSquare.location.a; // Delete object property
console.log(drawingSquare);

//Getter and setter

function Createperson(name){

    this.name = name;
    let age=1

   
    this.skinColor = function(){
        console.log('Created person color');
    }

    Object.defineProperty(this, 'age', {
        get: function(){
            return age;
        },
        set: function(value){
            if (value > 1)
            {
                console.log('Age is : ' + value);
            }
            else{
                throw new Error('Invalid age');

            }
        }
    })

}

const personName = new Createperson('Dilip');
//console.log(personName.name);
personName.age = 2;

//console.log(personName.getAge());
