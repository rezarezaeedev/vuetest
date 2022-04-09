import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')

Array.range = function(a, b, step){
    var A = [];
    if(typeof a == 'number'){
        A[0] = a;
        step = step || 1;
        while(a+step <= b){
            A[A.length]= a+= step;
        }
    }
    else {
        var s = 'abcdefghijklmnopqrstuvwxyz';
        if(a === a.toUpperCase()){
            b = b.toUpperCase();
            s = s.toUpperCase();
        }
        s = s.substring(s.indexOf(a), s.indexOf(b)+ 1);
        A = s.split('');        
    }
    return A;
}
