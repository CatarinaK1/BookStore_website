
// $(document).ready(function() {
//     // Use the load() method to load content into the specified element
//     $('#universalHeader').load('./Include/Header.html');
// });


$(document).ready(function() {
    $.get('./Include/Header.html', function(data) {
        $('#universalHeader').html(data);
        $('<link>', {
            rel: 'stylesheet',
            type: 'text/css',
            href: './Include/HeaderStyle.css'
        }).appendTo('body');
    });
});
