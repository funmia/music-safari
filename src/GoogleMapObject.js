(function(exports){
  function GoogleMapObject(){
    this._map = null;
  }

  GoogleMapObject.prototype = {
    initMap: function(currentLocation = {lat: 51.513354, lng: -0.124976}) {
      this._map = new google.maps.Map(document.getElementById('map'), {
        zoom: 14,
        center: currentLocation
      });
    },

    findLocation: function(callback){
      navigator.geolocation.getCurrentPosition(function(position){
        var location = {lat: position.coords.latitude, lng: position.coords.longitude};
        musicSafari.setCurrentLocation(location);
        callback(location);
      });
    },

    initMap: function(currentLocation) {
      this._map = new google.maps.Map(document.getElementById('map'), {
        zoom: 14,
        center: currentLocation
      });
    },

    addMapMarker: function(trackId, location){
      var self = this;
      var iconBase = "public/img/logo-safari.png";
      var contentString =
      "<iframe src='https://open.spotify.com/embed?uri=spotify:track:" + trackId + "'frameborder='0' allowtransparency='true'></iframe>";
      var infowindow = new google.maps.InfoWindow({
        content: contentString
      });
      var marker = new google.maps.Marker({
        position: location,
        map: this._map,
        title: 'My Song',
        icon: iconBase,
      });
      marker.addListener('click', function() {
        infowindow.open(self._map, marker);
      });
    }
  };

  exports.GoogleMapObject = GoogleMapObject;
})(this);
