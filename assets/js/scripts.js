
$(document).ready(function() {
    $("#demo").html("Bu neymiş la");
    var count = 0;

    $('#clickOnIt').click(function () {

        if(count <= 100){
            count += 1;
            $(".counter").html(count);
            if (count == 31 || count == 52 || count == 69) {
                $(".counter").html(count + " HAHA FUNİ XD 🤣🤣🤣🤣🤣😭😭😂😂😂");
            }
        }else{
            $(".counter").html("Yeter la");
            $("#clickOnIt").hide();
        }

    });
    // all custom jQuery will go here
});