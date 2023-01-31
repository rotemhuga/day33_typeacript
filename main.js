var getValueType = function (argument) {
    return { value: argument, type: typeof (argument) };
};
console.log(getValueType(1));
//    const newRectangle : Rectangle  = {length:5, width:2}
function calculate(Rectangle) {
    var perimeter = Rectangle.length * 2 + Rectangle.width * 2;
    var area = Rectangle.length * Rectangle.width;
    return [area, perimeter];
}
console.log(calculate({ length: 5, width: 2 }));
function distance(p1, p2) {
    var dx = p1.x - p2.x;
    var dy = p1.y - p2.y;
    return Math.sqrt(dx * dx + dy * dy);
}
var one = { x: 0, y: 0 };
var two = { x: 3, y: 4 };
console.log(distance(one, two));
//EX4
var CardRank;
(function (CardRank) {
    CardRank[CardRank["Ace"] = 0] = "Ace";
    CardRank[CardRank["Two"] = 1] = "Two";
    CardRank[CardRank["Three"] = 2] = "Three";
    CardRank[CardRank["Four"] = 3] = "Four";
    CardRank[CardRank["Five"] = 4] = "Five";
    CardRank[CardRank["Six"] = 5] = "Six";
    CardRank[CardRank["Seven"] = 6] = "Seven";
    CardRank[CardRank["Eight"] = 7] = "Eight";
    CardRank[CardRank["Nine"] = 8] = "Nine";
    CardRank[CardRank["Ten"] = 9] = "Ten";
    CardRank[CardRank["Jack"] = 10] = "Jack";
    CardRank[CardRank["Queen"] = 11] = "Queen";
    CardRank[CardRank["King"] = 12] = "King";
})(CardRank || (CardRank = {}));
