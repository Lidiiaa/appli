
$( document ).ready(function() {
    $('table tr td:nth-child(odd)').addClass('comment');
    $('table tr td:nth-child(even)').addClass('number');
    $( "#addDette" ).click(function() {
        $('<tr><td class="comment"></td></tr><tr><td class="number"></td></tr>').insertBefore($('.tableDette tbody tr.totals'));
        $('.inputsDette').submit(function(e){

        });
    });
   $('h1').text() = "Meow";

});

