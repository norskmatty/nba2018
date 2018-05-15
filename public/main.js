/*global $*/
$(function () {

    $('.team-list li').click(function() {
            
        $('#header').css({'height':'80px','overflow':'hidden'});
        
        $('#drop-down').css({'display':'flex'});
        
        $('#drop-down-button').on('click', function() {
            $('#header').css({'height':'435px'});
            $('#drop-down').css({'display':'none'});
            $('#drop-down-button').off();
        });
       
        var team_name = $(this).attr('id');
        $(function(){
            $("#main").load(team_name + ".html"); 
        });
       
    });
    
});
