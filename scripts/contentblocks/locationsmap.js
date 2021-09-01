(function($, window, document) {
  $(function() {
    initMap();
  });

  function initMap() {
    var locations = [{
      lat: -19.9286,
      lng: -43.93888,
      info: '<div class="e-infowindow">'+
      '      <div class="e-close">'+
      '        <span></span>'+
      '        <span></span>'+
      '      </div>'+
      '      <div class="e-top">'+
      '        <h3>Rome</h3>'+
      '        <p>For enquiries, please contact:</p>'+
      '      </div>'+
      '      <div class="e-content">'+
      '        <h4>Rotterdam Office</h4>'+
      '        <p class=\'tel\'>Phone: <a href="">+44 (0) 207 101 2114</a></p>'+
      '        <p class=\'email\'>Email: <a href="">london@bmtsurveys.com</a></p>'+
      '        <h4>London Office</h4>'+
      '        <p class=\'tel\'>Phone: <a href="">+44 (0) 207 101 2114</a></p>'+
      '        <p class=\'email\'>Email: <a href="">london@bmtsurveys.com</a></p>'+
      '        <h4>Melbourne Office</h4>'+
      '        <p class=\'tel\'>Phone: <a href="">+44 (0) 207 101 2114</a></p>'+
      '        <p class=\'email\'>Email: <a href="">london@bmtsurveys.com</a></p>'+
      '      </div>'+
      '    </div>'
    }, {
      lat: -19.85758,
      lng: -43.9668,
      info: '<div class="e-infowindow">'+
      '      <div class="e-close">'+
      '        <span></span>'+
      '        <span></span>'+
      '      </div>'+
      '      <div class="e-top">'+
      '        <h3>Rome</h3>'+
      '        <p>For enquiries, please contact:</p>'+
      '      </div>'+
      '      <div class="e-content">'+
      '        <h4>Rotterdam Office</h4>'+
      '        <p class=\'tel\'>Phone: <a href="">+44 (0) 207 101 2114</a></p>'+
      '        <p class=\'email\'>Email: <a href="">london@bmtsurveys.com</a></p>'+
      '        <h4>London Office</h4>'+
      '        <p class=\'tel\'>Phone: <a href="">+44 (0) 207 101 2114</a></p>'+
      '        <p class=\'email\'>Email: <a href="">london@bmtsurveys.com</a></p>'+
      '        <h4>Melbourne Office</h4>'+
      '        <p class=\'tel\'>Phone: <a href="">+44 (0) 207 101 2114</a></p>'+
      '        <p class=\'email\'>Email: <a href="">london@bmtsurveys.com</a></p>'+
      '      </div>'+
      '    </div>'
    }, {
      lat: -18.24587,
      lng: -43.59613,
      info: '<div class="e-infowindow">'+
      '      <div class="e-close">'+
      '        <span></span>'+
      '        <span></span>'+
      '      </div>'+
      '      <div class="e-top">'+
      '        <h3>Rome</h3>'+
      '        <p>For enquiries, please contact:</p>'+
      '      </div>'+
      '      <div class="e-content">'+
      '        <h4>Rotterdam Office</h4>'+
      '        <p class=\'tel\'>Phone: <a href="">+44 (0) 207 101 2114</a></p>'+
      '        <p class=\'email\'>Email: <a href="">london@bmtsurveys.com</a></p>'+
      '        <h4>London Office</h4>'+
      '        <p class=\'tel\'>Phone: <a href="">+44 (0) 207 101 2114</a></p>'+
      '        <p class=\'email\'>Email: <a href="">london@bmtsurveys.com</a></p>'+
      '        <h4>Melbourne Office</h4>'+
      '        <p class=\'tel\'>Phone: <a href="">+44 (0) 207 101 2114</a></p>'+
      '        <p class=\'email\'>Email: <a href="">london@bmtsurveys.com</a></p>'+
      '      </div>'+
      '    </div>'
    }, {
      lat: -20.46427,
      lng: -45.42629,
      info: '<div class="e-infowindow">'+
      '      <div class="e-close">'+
      '        <span></span>'+
      '        <span></span>'+
      '      </div>'+
      '      <div class="e-top">'+
      '        <h3>Rome</h3>'+
      '        <p>For enquiries, please contact:</p>'+
      '      </div>'+
      '      <div class="e-content">'+
      '        <h4>Rotterdam Office</h4>'+
      '        <p class=\'tel\'>Phone: <a href="">+44 (0) 207 101 2114</a></p>'+
      '        <p class=\'email\'>Email: <a href="">london@bmtsurveys.com</a></p>'+
      '        <h4>London Office</h4>'+
      '        <p class=\'tel\'>Phone: <a href="">+44 (0) 207 101 2114</a></p>'+
      '        <p class=\'email\'>Email: <a href="">london@bmtsurveys.com</a></p>'+
      '        <h4>Melbourne Office</h4>'+
      '        <p class=\'tel\'>Phone: <a href="">+44 (0) 207 101 2114</a></p>'+
      '        <p class=\'email\'>Email: <a href="">london@bmtsurveys.com</a></p>'+
      '      </div>'+
      '    </div>'
    }, {
      lat: -20.37817,
      lng: -43.41641,
      info: '<div class="e-infowindow">'+
      '      <div class="e-close">'+
      '        <span></span>'+
      '        <span></span>'+
      '      </div>'+
      '      <div class="e-top">'+
      '        <h3>Rome</h3>'+
      '        <p>For enquiries, please contact:</p>'+
      '      </div>'+
      '      <div class="e-content">'+
      '        <h4>Rotterdam Office</h4>'+
      '        <p class=\'tel\'>Phone: <a href="">+44 (0) 207 101 2114</a></p>'+
      '        <p class=\'email\'>Email: <a href="">london@bmtsurveys.com</a></p>'+
      '        <h4>London Office</h4>'+
      '        <p class=\'tel\'>Phone: <a href="">+44 (0) 207 101 2114</a></p>'+
      '        <p class=\'email\'>Email: <a href="">london@bmtsurveys.com</a></p>'+
      '        <h4>Melbourne Office</h4>'+
      '        <p class=\'tel\'>Phone: <a href="">+44 (0) 207 101 2114</a></p>'+
      '        <p class=\'email\'>Email: <a href="">london@bmtsurveys.com</a></p>'+
      '      </div>'+
      '    </div>'
    }, {
      lat: -20.09749,
      lng: -43.48831,
      info: '<div class="e-infowindow">'+
      '      <div class="e-close">'+
      '        <span></span>'+
      '        <span></span>'+
      '      </div>'+
      '      <div class="e-top">'+
      '        <h3>Rome</h3>'+
      '        <p>For enquiries, please contact:</p>'+
      '      </div>'+
      '      <div class="e-content">'+
      '        <h4>Rotterdam Office</h4>'+
      '        <p class=\'tel\'>Phone: <a href="">+44 (0) 207 101 2114</a></p>'+
      '        <p class=\'email\'>Email: <a href="">london@bmtsurveys.com</a></p>'+
      '        <h4>London Office</h4>'+
      '        <p class=\'tel\'>Phone: <a href="">+44 (0) 207 101 2114</a></p>'+
      '        <p class=\'email\'>Email: <a href="">london@bmtsurveys.com</a></p>'+
      '        <h4>Melbourne Office</h4>'+
      '        <p class=\'tel\'>Phone: <a href="">+44 (0) 207 101 2114</a></p>'+
      '        <p class=\'email\'>Email: <a href="">london@bmtsurveys.com</a></p>'+
      '      </div>'+
      '    </div>'
    }, {
      lat: -21.13594,
      lng: -44.26132,
      info: '<div class="e-infowindow">'+
      '      <div class="e-close">'+
      '        <span></span>'+
      '        <span></span>'+
      '      </div>'+
      '      <div class="e-top">'+
      '        <h3>Rome</h3>'+
      '        <p>For enquiries, please contact:</p>'+
      '      </div>'+
      '      <div class="e-content">'+
      '        <h4>Rotterdam Office</h4>'+
      '        <p class=\'tel\'>Phone: <a href="">+44 (0) 207 101 2114</a></p>'+
      '        <p class=\'email\'>Email: <a href="">london@bmtsurveys.com</a></p>'+
      '        <h4>London Office</h4>'+
      '        <p class=\'tel\'>Phone: <a href="">+44 (0) 207 101 2114</a></p>'+
      '        <p class=\'email\'>Email: <a href="">london@bmtsurveys.com</a></p>'+
      '        <h4>Melbourne Office</h4>'+
      '        <p class=\'tel\'>Phone: <a href="">+44 (0) 207 101 2114</a></p>'+
      '        <p class=\'email\'>Email: <a href="">london@bmtsurveys.com</a></p>'+
      '      </div>'+
      '    </div>'
    }, ];

    var map = new google.maps.Map(document.getElementById('locationsmap'), {
      zoom: 3,
      center: {
        lat: -19.9286,
        lng: -65.93888,
      }
    });

    var infoWin = new google.maps.InfoWindow();
    // Add some markers to the map.
    // Note: The code uses the JavaScript Array.prototype.map() method to
    // create an array of markers based on a given "locations" array.
    // The map() method here has nothing to do with the Google Maps API.
    var markers = locations.map(function(location, i) {
      var marker = new google.maps.Marker({
        position: location,
        icon: new google.maps.MarkerImage('images/clustericons/iconMapLarge.svg',
    null, null, null, new google.maps.Size(30,43)),
        textColor: 'white'
      });

      google.maps.event.addListener(marker, 'click', function(evt) {
        infoWin.setContent(location.info);
        infoWin.open(map, marker);
      });
      return marker;
    });

    var clusterStyles = [
      {
        textColor: 'white',
        url: 'images/clustericons/ClusterPin.svg',
        height: 50,
        width: 50
      },
      {
        textColor: 'white',
        url: 'images/clustericons/ClusterPin.svg',
        height: 50,
        width: 50
      },
      {
        textColor: 'white',
        url: 'images/clustericons/ClusterPin.svg',
        height: 50,
        width: 50
      }
    ];

    var mcOptions = {
      gridSize: 50,
      styles: clusterStyles,
      maxZoom: 15,
    };

    // Add a marker clusterer to manage the markers.
    var markerCluster = new MarkerClusterer(map, markers, mcOptions);



    //locations Search
    var input = document.getElementById('pac-input');
    var searchBox = new google.maps.places.SearchBox(input);
    map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

    // Bias the SearchBox results towards current map's viewport.
    map.addListener('bounds_changed', function() {
      searchBox.setBounds(map.getBounds());
    });

    searchBox.addListener('places_changed', function() {
      var places = searchBox.getPlaces();

     if (places.length == 0) {
        return;
     }

     // Clear out the old markers.
      markers.forEach(function(marker) {
        marker.setMap(null);
      });
      markers = [];

      var bounds = new google.maps.LatLngBounds();
      places.forEach(function(place) {
        if (!place.geometry) {
          console.log("Returned place contains no geometry");
          return;
        }
        var icon = {
          url: place.icon,
          size: new google.maps.Size(71, 71),
          origin: new google.maps.Point(0, 0),
          anchor: new google.maps.Point(17, 34),
          scaledSize: new google.maps.Size(25, 25)
        };

        // Create a marker for each place.
        markers.push(new google.maps.Marker({
          map: map,
          icon: icon,
          title: place.name,
          position: place.geometry.location
        }));

        if (place.geometry.viewport) {
          // Only geocodes have viewport.
          bounds.union(place.geometry.viewport);
        } else {
          bounds.extend(place.geometry.location);
        }
      });
      map.fitBounds(bounds);
    });

  }
}(window.jQuery, window, document));
