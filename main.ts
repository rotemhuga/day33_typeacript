//EX1
type checkType = 1 | "hello" | true
const getValueType = (argument:checkType) : object => {
    return {value: argument, type: typeof(argument)}
}
console.log(getValueType(1))

//EX2
interface Rectangle {
    length: number,
    width: number,
   }
//    const newRectangle : Rectangle  = {length:5, width:2}

   function calculate(Rectangle): number[] {
    const perimeter = Rectangle.length *2 + Rectangle.width *2;
    const area = Rectangle.length * Rectangle.width;
    return [area, perimeter]
   }
   
   console.log(calculate({length:5, width:2}))

//EX3
interface IPoint {
    x: number;
    y: number;
   }
   
   function distance(p1: Point, p2: IPoint): number {
    const dx = p1.x - p2.x;
    const dy = p1.y - p2.y;
    return Math.sqrt(dx * dx + dy * dy);
   }

const one: IPoint = { x: 0, y: 0 };
const two: IPoint = { x: 3, y: 4 };
console.log(distance(one, two)); 


//EX4
enum CardRank {
    Ace, 
    Two, 
    Three, 
    Four, 
    Five, 
    Six, 
    Seven, 
    Eight, 
    Nine, 
    Ten, 
    Jack, 
    Queen,
    King
}

interface Icard {
    suit: string;
    rank: CardRank
}