//mixed data - key, value
let user: [number, string];
user = [101, "anis"];
user.push(102, "riva");
console.log(user);
for (let index = 0; index < user.length; index++) {
    const element = user[index];
    console.log(element)
}

console.log(user[1])