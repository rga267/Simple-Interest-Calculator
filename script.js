
function compute()
{   

    var principal = document.getElementById("principal");


    if(principal.value <= 0){
        alert("Please enter a positive amount!");
        principal.focus();
        return;
    }

    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;

    var interest = rate*years*principal.value / 100;

    var year = new Date().getFullYear()+parseInt(years);

    document.getElementById("result").innerHTML="If you deposit <mark>"+principal.value+"</mark>,\<br\>at an interest rate of <mark>"+rate+"%</mark>.\<br\>You will receive an amount of <mark>"+interest+"</mark>,\<br\>in the year <mark>"+year+"</mark>.\<br\>"

}


function updateRate()
{
    var rate = document.getElementById("rate").value;

    document.getElementById("rate_val").innerText=rate+'%';

}