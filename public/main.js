/*global $*/
$(function () {

    $('.team-list li').click(function() {
            
        $('#header').css({'height':'95px','overflow':'hidden'});
        
        $('#drop-down').css({'display':'flex'});
        
        $('#click-to-view').show();
        
        $('#drop-down').on('click', function() {
            $('#header').css({'height':'450px'});
            $('#drop-down').css({'display':'none'});
            $('#click-to-view').hide();
            $('#drop-down').off();
        });
       
        var team_name = $(this).attr('id');
        $(function(){
            $("#main").load(team_name + ".html"); 
        });
       
    });
    
});
