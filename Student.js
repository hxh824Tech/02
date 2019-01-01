class Student{
    //构造函数
    constructor(name,address){
        this.name = name;
        this.address = address;
    }
    //类函数
    showName(){
        return '(' + this.name + ' ，' + this.address + ')'; //要用单引号
    }
    //静态函数
    static sayhello(name1){
        this.n = name1;
        return 'Hello! ' + name1;
    }
}
Student.n = 'aaa';
module.exports = Student;