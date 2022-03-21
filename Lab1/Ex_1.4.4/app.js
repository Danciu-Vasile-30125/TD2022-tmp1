document.getElementById("n").addEventListener('input', inputSum);

function inputSum(){
   var inputNumber = parseInt(document.getElementById("n").value) ;
    getFibonacci(inputNumber);
}

function getFibonacci(n){
    terms = [];
    let n1 = 0, n2 = 1, nextTerm;
    if(typeof n !== 'number' || n<0 || n>10) return "not allowed";
    for (let i = 1; i <= n; i++) {
        terms.push(n2)
        nextTerm = n1 + n2;
        n1 = n2;
        n2 = nextTerm;
    }
    return terms.toString();
}