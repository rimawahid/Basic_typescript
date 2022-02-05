//enum - store constants; duplicate value is not allowed here
//enum types: numeric, string, heterogenous

//numeric enum

enum RequestType{
readData ,
saveData = 2,
deleteData
}

console.log(RequestType);
console.log(RequestType.readData);
console.log(RequestType["saveData"]);

//string enum
enum RequestType2{
    readData = "READ-DATA",
    saveData ="SAVE-DATA",
    deleteData= "DELETE-DATA"
    }
    
    console.log(RequestType2);
    console.log(RequestType2.readData);
    console.log(RequestType2["saveData"]);

    //string enum
enum RequestType3{
    readData = "READ-DATA",
    saveData ="SAVE-DATA",
    deleteData= "DELETE-DATA",
    id= 101,
    name ="Mr a"
    }
    
    console.log(RequestType3);
    console.log(RequestType3.id);
    console.log(RequestType3["name"]);