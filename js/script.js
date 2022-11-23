function initMap() {
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 10,
    center: { lat: 10.33777027832051, lng: -84.80989632990551},
  });
  
  var childhood = new google.maps.Circle({
    center:{ lat:10.33777027832051, lng: -84.80989632990551 },
    radius:1500,
    strokeColor:"#FF0000",
    strokeOpacity:1.0,
    strokeWeight:2,
    fillColor:"#FF0000",
    fillOpacity:0.2,
    map: map
  });
  
  var marker = new google.maps.Marker({
    position: { lat:10.3377703, lng:-84.8098963 },
    map: map,
  });
  
  var contentString = "<p>Sky Adventures Monteverde Park: One of the Best Ziplines located in Monteverde, Costa Rica</p>";
  
  var infowindow = new google.maps.InfoWindow({
    content: contentString,
  });
  infowindow.open(map, marker);
}
window.initMap = initMap;
