"use strict";
// basic types
const is_bad : boolean = false,
     is_good : boolean = true;

const age : number = 35;

const real_name : string = "Tony Stark",
    superhero_name : string = "Iron Man";

const abilities : Array<string> = ["Super-Genius Intelligence", "Exper Engineer", "Expert Bussinessman",
        "Expert Tactician", "Skilled Combatant", "Trained Marksman", "Slightly-Trained Acrobat",
        "Indomitable Will", "Multilingual"];

const movies_part : number[] = [1, 2, 3];

//tuples
let date_triplet : [number, number, number];
date_triplet = [1, 3, 1963];

let girl_friend : [string, number];
girl_friend = ["Pepper", 1];

let friends : [string, string];
friends = ["War Machine", "Hulk"];

//enum
enum Color{Red, Green, Blue};
let red : String = Color[0];

enum known_languages{English = 1, Japanese, French, Russian};
console.log(known_languages[0]); //undefined

//any
let weakness : any = "alcoholism";
weakness = 1; // does not throw error sincy 'any' accept any types (basically what javascript supports).

//void
let the_void : void = undefined;
the_void = null; // the_void = 1 will throw error it can either be null or undefined.

//return types
function capitalize_string (name : string) : string {
    return name.toUpperCase();
}
capitalize_string("cj"); // CJ //capitalize_string(32) will throw error.

//function
let add : (first : number, second : number) => number;
add = function (first, second) {
    return first + second;
}
//add(2, 3) = 5

let addFirst : (first : number) => ((second : number) => number);
addFirst = function (first) {
    return function (second) {
         return first + second;
    }
}
//addFirst(2)(3) = 5
