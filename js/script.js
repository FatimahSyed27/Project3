function initMap(){
  var cor=document.getElementById('mapcanvas');
  var location=new google.maps.LatLng(10.33777027832051, -84.80989632990551);
  var settings={
    center: location,
    zoom: 10,
  };
  
  var inMap=new google.maps.Map(cor, settings);
  
  var inpath = new google.maps.Polyline({
    path: center,
    geodesic: true,
    strokeColor: "#FF0000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
  });

  inpath.setMap(inMap);

  var marker = new google.maps.Marker({
    position: {lat: 10.33777027832051, lng: -84.80989632990551},
    map: inMap,
  });

  var contentString = "<p>Sky Adventures Monteverde Park: One of the Top Ziplines in Monteverde, Costa Rica</p>";

  var infoWindow = new google.maps.InfoWindow({
    content: contentString,
  });

  google.maps.event.addListener (marker, 'click', function() {
    infoWindow.open(inMap, marker);
  });
}
window.initMap=initMap;
