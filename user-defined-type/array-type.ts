//let userNames: string[];

let userNames: Array<string>

userNames = ["anis", "rabu", "pinky"];

console.log(userNames[1]);
userNames.sort();
userNames.push("happy");
console.log(userNames)

let multipleType: (string | number)[];

multipleType = [12, "MR A", "hello", 23]
console.log(multipleType[3])