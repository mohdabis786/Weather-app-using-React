// class toyota{
//     constructor(brand,mileage){
//         console.log("creating new objects");
//         this.brand=brand;
//         this.mileage=mileage;
//     }
//     start(){
//         console.log("start");
//     }

//     stop(){
//         console.log("stop");
//     }
// }

// let fortuner=new toyota("fortuner",12);
// console.log(fortuner);
// let lexus=new toyota("lexus",9);
// console.log(lexus)


// class parent{
//     hello(){
//         console.log("hello i am ashab");
//     }
// }
// class child extends parent{}
// let obj=new child()

// class person{
//     eat(){
//         console.log("we can eat");
//     }
//     sleep(){
//         console.log("we can sleep");
//     }
// }

// class engineer extends person{
//     work(){
//         console.log("solve problems,build somethings");
//     }
// }

// let ashabobj=new engineer();


class person{
    constructor(name){
        this.species="homo sapiens";
        this.name=name;
    }

    eat(){
        console.log("we can eat");
    }
}

class engineer extends person{
    constructor(name){
        super(name);
    }
    work(){
        console.log("solve problems,build somethings");
    }
}

let engObj=new engineer("ashab")

















