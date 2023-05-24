function imprimir(a,b) {
    if( a > b){
        let temp = b;
        b = a;
        a = temp;
    }
    for(; a <= b ; a++){
        console.log(a);
    }
}
imprimir(10,5);
