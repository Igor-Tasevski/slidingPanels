var pannelWidth = 0
var startingPanel = 2

$(document).ready(function () {

    $('.slidePanels .pannelTabs').css({'display':'flex', 'justify-content':'center'});
	$('.slidePanels .panel').css({'position':'absolute', 'height':'450px'});
	$('.slidePanels .allPanels').css({'position':'absolute', 'top':'0px'});

    window.pannelWidth = $('.slidePanels').width();

    $('.slidePanels .panel').each(function(i){
        $(this).css({'width' : window.pannelWidth + 'px' ,'left': (i*window.pannelWidth)});
        $('.slidePanels .allPanels').css('width', (i+1)*window.pannelWidth + 'px');
    });

    $('.slidePanels .pannelTabs h2').each(function(){
        $(this).on('click', function(){
            panelsChange( $(this).index() );
        });
    });

    $('.slidePanels .pannelTabs h2:nth-child('+window.startingPanel+')').trigger('click');






})

function panelsChange(newindex){
    var newPoisiton = (window.pannelWidth * newindex) * -1;
    var newHeight = $('.slidePanels .panel:nth-child('+(newindex+1)+')').find('.panelDescription').height() +20;

    $('.slidePanels .pannelTabs h2').removeClass('selected');
	$('.slidePanels .pannelTabs h2:nth-child('+(newindex+1)+')').addClass('selected');


    $('.slidePanels .allPanels').animate({left:newPoisiton},800);
    $('.slidePanels .panelContainer').animate({height:newHeight},800);

}