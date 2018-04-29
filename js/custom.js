// $(document).ready(function(){........});

$(function(){
	$(".pics")
	.mouseenter(function () {
        $(this).addClass("on");
        $(".div-left").slideDown("slow");
        $(".div-right").slideDown("slow");
    })
    .mouseleave(function () {
        $(this).removeClass("on");
        $(".div-left").slideUp("slow");
        $(".div-right").slideUp("slow");;
    });

    // $(".login").click(function(){
    //     alert("Coming Soon.");
    // });
});

function login(){
    var name = document.getElementById("name").value;
    var password = document.getElementById("password").value;

    if(name == "jean" && password == "0711"){
        $(".loginSession").hide();
        $(".newsContent").show();

    }else{alert("Wrong.Please try again!!");}

}

