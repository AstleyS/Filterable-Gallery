$(document).ready(function() {
    $('.filter'.click(function(){
        const value = $(this).attr('data-filter');

        if (value === 'all') {
            $('.item').not('.' + value).show('1000');
        } else {
            $('.item').not('.' + value).hide('1000');
            $('.item').filter('.' + value).show('1000');
        }
    }))
})

$('.filter').click(function() {
    $(this).addClass('active').siblings().removeClass('active');
})