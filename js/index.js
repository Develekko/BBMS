new WOW().init();

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    
 
}
    


function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
}


$(function() {
  $('.skitter-large').skitter({dots: false,});
});

let factsflag = true;
let offsettarget = $("#facts").offset().top;
function factscount(start,end,intervaltime,ids){

    setInterval(function()
    {
        if(start<= end)
        {
            if(ids == 'i2')
        document.getElementById(`${ids}`).innerHTML = `${start}%`;
        else
        document.getElementById(`${ids}`).innerHTML = `${start}`;

        start++;
        }
        else{
            clearInterval();
        }
    },intervaltime);

}

$(window).scroll(function()
{
    
    if( offsettarget -  $(window).scrollTop() <500 )
   {
    if(factsflag == true)
    {
        factscount(0,1,40,"i1");
        factscount(0,37,40,"i2");
        factscount(0,12,40,"i3");
        factscount(0,56,40,"i4");


    }
    factsflag = false;
}


})



$("#menu").click(function(){
    $(".dark").toggle(1000)
})



$(".closebtn").click(function(){
    $(".dark").toggle(1000)
})