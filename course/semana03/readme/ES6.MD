enhance object literal javascript

destructuring assignment Array / Objects

    var o = {a : {b : 1}, c : {d:3}}

        o.a.b //1

    var {a : {b : value }} = o

        value // 1


espreat orepatos --> tanto Array / Objects

    var arr = [1,2,3]   //1,2,3
    var arr2 = [4,5, ...arr]    //4,5,1,2,3

rest operator --> para function

    function fun(a,b, ...c){
        console.log(a,b,c)
    }
    fun(1,2,3,4,5,6)

CLASS -->

cass Animal {
    constructor(name){
        this.name = name;
    }
    eat() {
        return 'ñam ñam'
    }
}

class Cat extends Animals {
    constructor(name){
        super(name)
    }
    mew() {
        return "mew"
    }
}

// 

Private Class --> Symbol()