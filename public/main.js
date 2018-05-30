/*global $*/
$(function () {

    $('.team-list li').click(function() {
            
        $('#header').css({'overflow':'hidden'});    
        $('#header').animate({'height':'95px'});

        
        $('#drop-down').css({'display':'flex'});
        
        $('#click-to-view').show(500);
        
        $('#drop-down').on('click', function() {
            $('#drop-down').css({'display':'none'});
            $('#header').animate({'height':'450px'});

            $('#click-to-view').hide(500);
            $('#drop-down').off();
        });
       
        var team_name = $(this).attr('id');
        $(function(){
            $("#main").load(team_name + ".html"); 
        });
       
    });
    
});
