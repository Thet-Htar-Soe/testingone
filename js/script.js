$(document).ready(function(){
    // console.log("hiii");

    //start nav bar
    $("#uppernavid").draggable({
        // cursor:"crosshair",
        // revert:function(){
        //     return false
        // }
    });
    //end nav bar

    //start founder
    $(window).scroll(function(){
        let getdiv = $(this).scrollTop();
        // console.log(getdiv);
        if(getdiv>=150){
            $(".leftdivs").addClass("leftdiv");
            $(".rightdivs").addClass("rightdiv");
        }else{
            $(".leftdivs").removeClass("leftdiv");
            $(".rightdivs").removeClass("rightdiv");
        }
    });
    //end founder

    //start data filter
       
    $(".all").hide();
    $(".2pm").show();
    $('.artistlists').click(function(){
        $(this).addClass('activelists').siblings().removeClass('activelists');
    

    let getattr = $(this).attr('data-filter');
   
    if(getattr==="2pm"){
        $(".all").hide();
        $(".2pm").show("slide",500);
    }else{
        $(".all").hide();
        $(".all").not("." + getattr).hide("slide",500);
        $(".all").filter("." + getattr).show("slide",500);
    }
    });

    //end data filter


    // start concert ticket section
    $("#choosedate1").datepicker({
        showAnim:"slide",
        duration:"slow",
        dayNamesMin:["Sun","Mon","Tue","Wed","Thurs","Fri","Sat"]
    });
    // end concert ticket section

    //start footer
    // getYear = document.getElementById('getyear');
    // togetYear = new Date().getFullYear();
    // // console.log(togetYear);
    // getYear.innerHTML = togetYear;
    // end footer


});