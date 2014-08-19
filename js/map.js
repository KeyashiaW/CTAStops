$.getJSPN('http://data.cityofchicago.org/resource/pnau-cf66.json', function (ctamaplist){
  $('#lstoplist').empty();
  
  $.each(lstops, function(i, ctamaplist){
    $('#ctamaplist').append(generateLStopLink(ctamaplist));
    });
    
    $('#ctamaplist').listview('refresh');
    });
    
    function generateLStopLink(ctamaplist){
      return '<li><a href="javascript:void(0)'
              +'"onclick="goToStopDetailPage(\''
              +ctamaplist.stop_name
              +'\',\''
              +ctamaplist.station_descriptive_name + '\')">'
              +ctamaplist.stop_name
              +'</a></li>'
    }
    
    
    function goToStopDetailPage(ctamapName){
    //create the page html template
    var ctamapPage = $("<div data-role= 'page' data-url=station><div data-role='header'><h1>"
                   + ctamapName + "</h1></div><div data-role='content'></div><div data-role='footer'><h4>"
                   + ctamapName + "</h4></div></div>");
    
    //append the new page to the page calculator
    ctamapPage.appendTo( $.mobile.PageContainer);
    //go to the newly created page
    $.mobile.changePage( ctamapPage);
      
 }