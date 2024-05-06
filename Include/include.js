
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

$(document).ready(function() {
    // Load the HTML content from Footer.html
    $.get('./Include/Footer.html', function(data) {
        // Append the HTML content to the element with id 'universalFooter'
        $('#universalFooter').html(data);

        // Load the CSS styles from FooterStyle.css
        $('<link>', {
            rel: 'stylesheet',
            type: 'text/css',
            href: './Include/FooterStyle.css'
        }).appendTo('body');
    });
});

document.addEventListener('keydown', function(event) {
    if (event.key === 'Tab') {
        // Get the focused element
        var focusedElement = document.activeElement;
        
        // Scroll the focused element into view
        focusedElement.scrollIntoView({ 
            behavior: 'smooth', // Optional: Use smooth scrolling
            block: 'center',    // Scroll to the center of the viewport
            inline: 'center'    // Scroll to the center horizontally
        });
    }
});


