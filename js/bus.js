$.getJSPN('http://data.cityofchicago.org/resource/ag7u-gr9m.json', function (busstop){
  $('#busstoplist').empty();
  
  $.each(lstops, function(i, busstop){
    $('#busstoplist').append(generateLStopLink(busstop));
    });
    
    $('#busstoplist').listview('refresh');
    });
    
    function generateLStopLink(busstop){
      return '<li><a href="javascript:void(0)'
              +'"onclick="goToStationDetailPage(\''
              +busstop.stop_name
              +'\',\''
              +busstop.station_descriptive_name + '\')">'
              +busstop.stop_name
              +'</a></li>'
    }
    
    
    function goToStopDetailPage(busstopName){
    //create the page html template
    var busstopPage = $("<div data-role= 'page' data-url=stop><div data-role='header'><h1>"
                   + busstopName + "</h1></div><div data-role='content'></div><div data-role='footer'><h4>"
                   + busstopName + "</h4></div></div>");
    
    //append the new page to the page calculator
    busstopPage.appendTo( $.mobile.PageContainer);
    //go to the newly created page
    $.mobile.changePage( busstopPage);
      
 }