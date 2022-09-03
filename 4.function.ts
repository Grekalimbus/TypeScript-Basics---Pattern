function add(a: number, b: number) : number{
    return a + b
}

function toUpperCase(str: string): string{
    return str.trim().toUpperCase()
}

interface Position {
    x: number | undefined
    y: number | undefined
}

interface MyPositionDefault extends Position {
    default: string
}

function myPosition(): Position 
function myPosition(a: number): MyPositionDefault
function myPosition(a: number, b: number): Position

function myPosition(a?: number, b?: number){
    if(!a && !b){
        return {x: undefined, y: undefined}
    }
    if(a && !b){
        return {x: a, y: undefined, default: a.toString()}
    }

    return {x: a, y: b}
}

console.log("Empty",myPosition());
console.log("One param",myPosition(42));
console.log("Two params",myPosition(10, 15));

