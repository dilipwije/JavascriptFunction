// factory function

function creatCircle(radius) {

    return {
        radius,
        location: {
            x: 1,
            y: 1
        },

        draw: function (){
        console.log('Create Circle');
    }
}
}

const drawing = creatCircle(1); 

drawing.draw();
console.log(drawing);
console.log(typeof drawing);

//constructors function

function CreatSquare(length){

    const dimention = this.length;
    const location = {
        x: 2,
        y: 2
    };
   this.draw = function (){
        console.log('Create Square');
    }
}

const drawingSquare = new CreatSquare(3);

drawingSquare.draw();
console.log(drawingSquare);
console.log(typeof drawingSquare);