$(document).ready(function(){
    $('.cfu').addClass('-enabled');
    $('.cfu > .input').attr('tabindex', -1);
    $('.cfu > .cfu-button-container').click(function(e){
       $(this).closest('.cfu').find('.input').click();
    });
    $('.cfu > .input').on('change', function(e){
        var fileName = e.target.value.split( '\\' ).pop(); // from https://tympanus.net/codrops/2015/09/15/styling-customizing-file-inputs-smart-way/
        $(this).closest('.cfu').find('.cfu-button-container').find('.text').text(fileName);
    });
});