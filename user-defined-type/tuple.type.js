//mixed data - key, value
var user;
user = [101, "anis"];
user.push(102, "riva");
console.log(user);
for (var index = 0; index < user.length; index++) {
    var element = user[index];
    console.log(element);
}
console.log(user[1]);
