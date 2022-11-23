function initMap(){
  var mapcanvas=document.getElementById('mapcanvas');
  var myLocation=new google.maps.LatLng(10.33777027832051, -84.80989632990551);
  var mapOptions={
    center: myLocation,
    zoom: 11,
  };

  var myMap=new google.maps.Map(mapcanvas, mapOptions);

  var walkingPath = new google.maps.Polyline({
    path: center,
    geodesic: true,
    strokeColor: "#FF0000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
  });

  walkingPath.setMap(myMap);

  var marker = new google.maps.Marker({
    position: {lat: 10.33777027832051, lng: -84.80989632990551},
    map: myMap,
  });

  var contentString = "<p>Sky Adventures Monteverde Park: One of the Top Ziplines in Monteverde, Costa Rica</p>";

  var infoWindow = new google.maps.InfoWindow({
    content: contentString,
  });

  google.maps.event.addListener (marker, 'click', function() {
    infoWindow.open(myMap, marker);
  });
}
window.initMap=initMap;  
