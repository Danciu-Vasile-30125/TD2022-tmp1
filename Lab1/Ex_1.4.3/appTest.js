function test(){
    console.log(sum(0) == 0? "Passed":"Failed");
    console.log(sum(2) == 3? "Passed":"Failed");
    console.log(sum(4) == 10? "Passed":"Failed") ;
    console.log(sum() == "n is undefined"?"Passed":"Failed");
    console.log(sum(false) == "not a number"?"Passed":"Failed");
    console.log(sum("teste") == "not a number"?"Passed":"Failed");
    }
test();