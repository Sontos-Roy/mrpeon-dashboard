$(document).ready(function(){
    var width = $(window).width();
    if (width < 767){
        $('.sidebar').addClass('active');
        $('.profile-info-lg .extends-lg').hide();
        $('.profile-info-lg .extends-sm').show();
        $('.profile-info-lg .status span').hide();
        $('.sidebar ul li a span').hide();
        $('.sidebar ul div').hide();
    }
    $('#sidebar-toggler, #sidebar-toggler2').click(function(){
        $('.sidebar').toggleClass('active');
        $('.profile-info-lg .extends-lg').toggle();
        $('.profile-info-lg .extends-sm').toggle();
        $('.profile-info-lg .status span').toggle();
        $('.sidebar ul li a span').toggle();
        $('.sidebar ul div').toggle();
    }); 
    
    if($("li.has-dropdown").parent().find('ul.dropdown-content li').hasClass("active")){
        $(this).addClass('active');
    }
    $('.has-dropdown').parent().find('a.link').click(function(e) {
        e.preventDefault();
        $(this).siblings('.dropdown-content').slideToggle();
        $(this).toggleClass('active');
      });
    $('.dropdown .profile-toggler').click(function(e) {
        $('.profile-dp').toggle();
      });
      $('#data-table1').DataTable();
    
})


$(document).ready(function(){
    $('.radio-check-input input[type="radio"]').click(function() {
        var value = $(this).attr("data-form");
        $('.tab-section div.tab-inner').css('display', 'none');
        $('#'+value).css('display', 'block');
    });
})

