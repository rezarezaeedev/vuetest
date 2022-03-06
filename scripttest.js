'use strict';


let obj = {
    name:'reza',
    func1(){
        console.log('***func 1');
    },
    func2: function(){
        this.func1()
        // console.log(this)
        // console.log('***func 2');
    },
    arrofunc:()=>{
        console.log(this)
        // console.log('***arrow func 3');
    },

    arrofunc2: () => console.log(this.i, this),

    manualfunc4:function manualfunc4(){
        this.func2()
        // this.arrofunc()
        // console.log(this)
        // console.log('***manual func 4');
    },

    mainfunc(){
        // this.func1()
        // this.func2()
        // this.arrofunc()
        this.manualfunc4()
        // console.log(this)
    }
}

obj.func1()
obj.manualfunc4()
 



