console.log('--- Hello from tsc ');
/*

let a:any
a=100;
console.log(a);

*/

let a = 100;
let s1 = "Abc";

let s2: string;

//=-------------------

/*
const n=1000;

function test(args:number){
    args=2000;
console.log(args);

}

test(n);

*/


let arr: number[] = [12, 13]
let [x, y] = arr
console.log(x)
console.log(y)

let mytuple = [10, "Hello"];
let employee: [number, string] = [1, "Steve"];
//let nums:number[]=[10,20]

// Generics..


class Emplyeee {

}

let emps = new Array<Emplyeee>();

let emps_a: Emplyeee[];

let nums = [10, 20, 50, 32, 65]


/*
// way 1
for(let i=0;i<nums.length;i++){
    console.log(nums[i]);  
}
*/

//values
for (let num of nums) {
    // console.log(num);   
}

console.log('-------------------');

// index
for (let n in nums) {
    //  console.log(n);
}


console.log("============================");

nums.forEach((n1, idx) => { // recursive functions
    console.log(idx + ' -> ' + n1);
})

// copy with immutability ..

console.log(">>>>>>>>>>>>>");

nums.map((n2, idx) => {
    console.log(n2);
})

//================================


//let even=nums.find(n3=>n3%2==0);

//console.log("<<<<<>>>>>>>");
//console.log(even);

//let arr1 = ['a','b','c'];
//arr1.find(k => k=='b');

interface I1 {
    id: number;
    name: string;
    salary: number;
}

interface Process {
    display();
}

class Operations {

    static display(emp: I1) {
        console.log('--------------');
        console.log(emp.id);
        console.log(emp.name);
        console.log(emp.salary);
        console.log('--------------');
    }
}

class C1 implements I1 {
    id = 10;
    name = 'abc';
    salary = 3434
}

class C2 implements I1 {
    id = 20;
    name = 'xyz';
    salary = 3483686

}

let c1 = new C1();

let c2 = new C2();

//Operations.display(c1)
//Operations.display(c2)

//---------------------------------------
// Business Class Design 
//---------------------------------------

class Product {
    id: string;
    name: string;
    price: number;

    getId() {
        return this.id;
    }
    getName() {
        return this.name;
    }

    getPrice() {
        return this.price;
    }

    setId(id: string) {
        this.id = id;
    }

    setName(name: string) {
        this.name = name;
    }
    setPrice(price: number) {
        this.price = price;
    }
}

interface ProductDao {
    save(product: Product): Product
    findAll(): Product[]
    findById(): Product;
}

// --------------------------------
// DAO: Data access object : Product Operations
//--------------------------------

class ProductDaoImpl implements ProductDao {

  

    save(product: Product): Product {
        // logic to save
        console.log('..saving object');

        return product;
    }
    findAll(): Product[] {
        // logic to find all
        let p=new Product();
        p.setId("P001");
        p.setName("Laptop");
        p.setPrice(56000);

        let prods=new Array<Product>();
        prods.push(p)

        console.log('listing alll');
        return prods;
    }

    findById(): Product {
        // logic 
        console.log('-- findById');

        let prod = new Product();
        return prod;
    }

}

//----------------------------------------------------------------
// Intermediate class :  Service class
//----------------------------------------------------------------

// Main class

class Test {
    prodDao = new ProductDaoImpl();
    findAll(){
    let prods=this.prodDao.findAll();
    return prods;
    }

    findById(){
        this.prodDao.findById();
    }
}

let t=new Test();
console.log(t.findAll());

t.findById();




















