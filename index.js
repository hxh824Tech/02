const express = require("express");
const abc = require("./test01.js"); //引用模块
const ee = require("./testclass.js");
const Student = require("./student.js");

//const cc = from_modules;
const class1 = new Student("xiaohua","GZ");
console.log(class1.showName());
//console.log(Student.sayhello('xxx'));
console.log(Student.n);

const users = [
    {name: "111",address: "GZ"},
    {name: "222",address: "SH"},
    {name: "333",address: "SZ"}
]
const findByName = function(name){
    for(const u in users){
       if(users[u].name === name){
           return users[u];
       }
    }
}
console.log(findByName("111"));
//const ss = new ee();
//console.log(abc.smg);
//console.log(ss);