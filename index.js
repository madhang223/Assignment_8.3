$(function(){
    PrintTimesTable(5);

    function PrintTimesTable(number){

        for (i = 1; i <= 10; i++) {
            console.log(number + " * " + i +" = " + number * i);
        }
    }
});