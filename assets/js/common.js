$(document).ready(function() {
    $('a.abstract').click(function() {
        $(this).parent().parent().find(".abstract.hidden").toggleClass('open');
    });
    $('a.bibtex').click(function() {
        $(this).parent().parent().find(".bibtex.hidden").toggleClass('open');
    });
    $('.navbar-nav').find('a').removeClass('waves-effect waves-light');
});


// const headings = document.querySelectorAll('h1,h2,h3'); // 1
// const linkContent = "<span style='font-size:20px; margin-left:10px;'>🔗</span>"; // 2

// for (const heading of headings) { // 3
//     const linkIcon = document.createElement('a'); // 4
//     linkIcon.setAttribute('href', `#${heading.id}`); // 5
//     linkIcon.innerHTML = linkContent; // 6
//     heading.appendChild(linkIcon); // 7
// }