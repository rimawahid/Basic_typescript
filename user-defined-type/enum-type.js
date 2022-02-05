//enum - store constants; duplicate value is not allowed here
//enum types: numeric, string, heterogenous
//numeric enum
var RequestType;
(function (RequestType) {
    RequestType[RequestType["readData"] = 0] = "readData";
    RequestType[RequestType["saveData"] = 2] = "saveData";
    RequestType[RequestType["deleteData"] = 3] = "deleteData";
})(RequestType || (RequestType = {}));
console.log(RequestType);
console.log(RequestType.readData);
console.log(RequestType["saveData"]);
//string enum
var RequestType2;
(function (RequestType2) {
    RequestType2["readData"] = "READ-DATA";
    RequestType2["saveData"] = "SAVE-DATA";
    RequestType2["deleteData"] = "DELETE-DATA";
})(RequestType2 || (RequestType2 = {}));
console.log(RequestType2);
console.log(RequestType2.readData);
console.log(RequestType2["saveData"]);
//string enum
var RequestType3;
(function (RequestType3) {
    RequestType3["readData"] = "READ-DATA";
    RequestType3["saveData"] = "SAVE-DATA";
    RequestType3["deleteData"] = "DELETE-DATA";
    RequestType3[RequestType3["id"] = 101] = "id";
    RequestType3["name"] = "Mr a";
})(RequestType3 || (RequestType3 = {}));
console.log(RequestType3);
console.log(RequestType3.id);
console.log(RequestType3["name"]);
