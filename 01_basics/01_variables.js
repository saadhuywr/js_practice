const account_Id = 786786;
let account_Email = "admin@example.com";
var account_Password = "@admin@";
account_City = "hacker city";


account_City = "mujhe nahi pta"; //hum bina datatype lie bhi variable declare ker sakty hai

// account_Id = 2;

account_Email = "admin@gmail.com"

// prefer not to use var because of issue in block scope and functional
console.log(account_Id);
console.log(account_Email);

console.table([account_Id, account_Email,account_Password, account_City ])