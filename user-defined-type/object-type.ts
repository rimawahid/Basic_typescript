let users: object[];
users= [];
let user1: { userName: string, id: number };
user1 = {
    userName: "Mr A",
    id: 101
}
let user2: { userName: string, id: number };
user2 = {
    userName: "Mr b",
    id: 101
}

users.push(user1)
users.push(user2)

// console.log(users)

for (let index = 0; index < users.length; index++) {
    const element = users[index];
    console.log(element)
    
}

for(const key in users){
    console.log(users[key]["userName"])
}