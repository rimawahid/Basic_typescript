let userId: (string | number | boolean);
userId = "001";
userId = 121;
userId= true;

function displayUserInfo(userId:string | number){
console.log(userId)
}
displayUserInfo(101);
displayUserInfo("001");