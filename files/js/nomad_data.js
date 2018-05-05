$.get( "../files/bin/whereamii.html", function( data ) {
// var href =  $('<div>'+data+'</div>').map(function(index) {
//     // this callback function will be called once for each matching element
//     return $(this).find('a').attr('href');
// });
var data_compiled = $('<div>'+data+'</div>').find('a:first');
  var href = $('<div>'+data+'</div>').find('a').attr('href');
  $(data_compiled).attr('href', 'https://nomadlist.com/petracca'+href);
  $( ".location" ).html( data_compiled );
  //console.log( href );
});
