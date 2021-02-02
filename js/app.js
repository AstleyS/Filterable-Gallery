$(document).ready(function() {
    // Check if any selector with the class name filter was clicked
    $('.filter').click(function(){
        // This variable will contain the value of the clicked filter
        const value = $(this).attr('data-filter');

        if (value === 'all') {
            // Will show all the values that don't contain '.all'
            $('.item').not('.' + value).show('1000');
        } else {
            // Will hide all the values that don't contain its filter value
            $('.item').not('.' + value).hide('1000');
            // Will show all the values that don't contain its filter value
            $('.item').filter('.' + value).show('1000');
        }
    })
})

$('.filter').click(function() {
    // Will change state of the active element
    $(this).addClass('active').siblings().removeClass('active');
})