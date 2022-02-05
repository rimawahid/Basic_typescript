var users;
users = [];
var user1;
user1 = {
    userName: "Mr A",
    id: 101
};
var user2;
user2 = {
    userName: "Mr b",
    id: 101
};
users.push(user1);
users.push(user2);
// console.log(users)
for (var index = 0; index < users.length; index++) {
    var element = users[index];
    console.log(element);
}
for (var key in users) {
    console.log(users[key]["userName"]);
}
