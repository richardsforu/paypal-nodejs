console.log('--- Hello from tsc ');
/*

let a:any
a=100;
console.log(a);

*/
var a = 100;
var s1 = "Abc";
var s2;
//=-------------------
/*
const n=1000;

function test(args:number){
    args=2000;
console.log(args);

}

test(n);

*/
var arr = [12, 13];
var x = arr[0], y = arr[1];
console.log(x);
console.log(y);
var mytuple = [10, "Hello"];
var employee = [1, "Steve"];
//let nums:number[]=[10,20]
// Generics..
var Emplyeee = /** @class */ (function () {
    function Emplyeee() {
    }
    return Emplyeee;
}());
var emps = new Array();
var emps_a;
var nums = [10, 20, 50, 32, 65];
/*
// way 1
for(let i=0;i<nums.length;i++){
    console.log(nums[i]);
}
*/
//values
for (var _i = 0, nums_1 = nums; _i < nums_1.length; _i++) {
    var num = nums_1[_i];
    // console.log(num);   
}
console.log('-------------------');
// index
for (var n in nums) {
    //  console.log(n);
}
console.log("============================");
nums.forEach(function (n1, idx) {
    console.log(idx + ' -> ' + n1);
});
// copy with immutability ..
console.log(">>>>>>>>>>>>>");
nums.map(function (n2, idx) {
    console.log(n2);
});
var Operations = /** @class */ (function () {
    function Operations() {
    }
    Operations.display = function (emp) {
        console.log('--------------');
        console.log(emp.id);
        console.log(emp.name);
        console.log(emp.salary);
        console.log('--------------');
    };
    return Operations;
}());
var C1 = /** @class */ (function () {
    function C1() {
        this.id = 10;
        this.name = 'abc';
        this.salary = 3434;
    }
    return C1;
}());
var C2 = /** @class */ (function () {
    function C2() {
        this.id = 20;
        this.name = 'xyz';
        this.salary = 3483686;
    }
    return C2;
}());
var c1 = new C1();
var c2 = new C2();
//Operations.display(c1)
//Operations.display(c2)
//---------------------------------------
// Business Class Design 
//---------------------------------------
var Product = /** @class */ (function () {
    function Product() {
    }
    Product.prototype.getId = function () {
        return this.id;
    };
    Product.prototype.getName = function () {
        return this.name;
    };
    Product.prototype.getPrice = function () {
        return this.price;
    };
    Product.prototype.setId = function (id) {
        this.id = id;
    };
    Product.prototype.setName = function (name) {
        this.name = name;
    };
    Product.prototype.setPrice = function (price) {
        this.price = price;
    };
    return Product;
}());
// --------------------------------
// DAO: Data access object : Product Operations
//--------------------------------
var ProductDaoImpl = /** @class */ (function () {
    function ProductDaoImpl() {
    }
    ProductDaoImpl.prototype.save = function (product) {
        // logic to save
        console.log('..saving object');
        return product;
    };
    ProductDaoImpl.prototype.findAll = function () {
        // logic to find all
        var p = new Product();
        p.setId("P001");
        p.setName("Laptop");
        p.setPrice(56000);
        var prods = new Array();
        prods.push(p);
        console.log('listing alll');
        return prods;
    };
    ProductDaoImpl.prototype.findById = function () {
        // logic 
        console.log('-- findById');
        var prod = new Product();
        return prod;
    };
    return ProductDaoImpl;
}());
//----------------------------------------------------------------
// Intermediate class :  Service class
//----------------------------------------------------------------
// Main class
var Test = /** @class */ (function () {
    function Test() {
        this.prodDao = new ProductDaoImpl();
    }
    Test.prototype.findAll = function () {
        var prods = this.prodDao.findAll();
        return prods;
    };
    Test.prototype.findById = function () {
        this.prodDao.findById();
    };
    return Test;
}());
var t = new Test();
console.log(t.findAll());
t.findById();
