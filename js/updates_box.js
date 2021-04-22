$(document).ready(function () {
    
    $("#info_overlay").fadeIn(500, function () {
        $("#pop_up").fadeIn(500, function () {
            
        })
    });
    
    
    $("#more_info").click(function () {

        $("#info_overlay").fadeIn(500, function () {
            $("#pop_up").fadeIn(500, function () {
                
            })
        });

    });
    $("#cerrar_pop_up").click(function () {

        $("#pop_up").fadeOut(200, function() {
            $("#info_overlay").fadeOut(400, function (){

            })
        });

    });

});