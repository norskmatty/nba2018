/*global $*/
$(function () {

    $('.team-list li').click(function() {
       $('#header').css({'height':'70px','overflow':'hidden'});
       
       $('#outer-conference-wrap').hover(function() {
           $('#header').css({'height':'375px'});
       });
       
        var team_name = $(this).attr('id');
        $(function(){
            $("#main").load(team_name + ".html"); 
        });
       
    });
    
});
