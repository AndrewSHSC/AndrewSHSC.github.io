function initialize() {
  var destinations = [
    {
      coordinates: [{ lat: 55.577264, lng: -5.13938 }],
      title: "Brodick"
    },
    {
      coordinates: [{ lat: 55.424596, lng: -5.602976 }],
      title: "Cambeltown"
    },
    {
      coordinates: [{ lat: 55.644165, lng: -4.818952 }],
      title: "Ardrossan"
    }
  ];

  var infoWindow = new google.maps.InfoWindow({ maxWidth: 200, minWidth: 200 });
  infoWindow = new google.maps.InfoWindow({ maxWidth: 200, minWidth: 200 });

  var mapProp = {
    center: { lat: 55.64, lng: -4.824302 },
    zoom: 10,
    styles: [
      {
        featureType: "administrative",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#444444"
          }
        ]
      },
      {
        featureType: "landscape",
        elementType: "all",
        stylers: [
          {
            color: "#f2f2f2"
          }
        ]
      },
      {
        featureType: "poi",
        elementType: "all",
        stylers: [
          {
            visibility: "off"
          }
        ]
      },
      {
        featureType: "road",
        elementType: "all",
        stylers: [
          {
            saturation: -100
          },
          {
            lightness: 45
          }
        ]
      },
      {
        featureType: "road.highway",
        elementType: "all",
        stylers: [
          {
            visibility: "simplified"
          }
        ]
      },
      {
        featureType: "road.arterial",
        elementType: "labels.icon",
        stylers: [
          {
            visibility: "off"
          }
        ]
      },
      {
        featureType: "transit",
        elementType: "all",
        stylers: [
          {
            visibility: "off"
          }
        ]
      },
      {
        featureType: "water",
        elementType: "all",
        stylers: [
          {
            color: "#61ccb4"
          },
          {
            visibility: "on"
          }
        ]
      }
    ]
  };
  var map = new google.maps.Map(document.getElementById("map"), mapProp);

  // destinations

  for (i = 0; i < destinations.length; i++) {
    var data = destinations[i];

    var Marker = new google.maps.Marker({
      position: data.coordinates[0],
      map
    });

    (function (Marker, data) {
      const contentString =
        '<div id="content">' + "<p>" + data.title + "</p>" + "</div>";

      google.maps.event.addListener(Marker, "click", function (e) {
        infoWindow.setContent(contentString);
        infoWindow.setPosition(e.latLng);
        infoWindow.open(map);
      });
    })(Marker, data);
  }

  // Polylines

  var markers = [
    {
      coordinates: [
        { lat: 55.423295, lng: -5.600089 },
        { lat: 55.414265, lng: -5.115409 },
        { lat: 55.640297, lng: -4.824302 }
      ],
      depart: "Ardrossan",
      destination: "Campeltown",
      strokeColor: "#F2323F",
      status: "Service distupted"
    },
    {
      coordinates: [
        { lat: 55.575739, lng: -5.136747 },
        { lat: 55.640297, lng: -4.824302 }
      ],
      depart: "Ardrossan",
      destination: "Brodick",
      strokeColor: "#05E41B",
      status: "All good"
    }
  ];

  for (i = 0; i < markers.length; i++) {
    var data = markers[i];

    var travelPath = new google.maps.Polyline({
      path: data.coordinates,
      strokeColor: data.strokeColor,
      strokeOpacity: 0.8,
      strokeWeight: 6,
      map: map,
      title: data.title
    });

    (function (travelPath, data) {
      const contentString =
        '<div id="content">' +
        "<p>" +
        data.depart +
        " to " +
        data.destination +
        "</p>" +
        "<p>" +
        data.status +
        "</p>" +
        "</div>";

      google.maps.event.addListener(travelPath, "click", function (e) {
        infoWindow.setContent(contentString);
        infoWindow.setPosition(e.latLng);
        infoWindow.open(map);
      });
    })(travelPath, data);
  }
}

google.maps.event.addDomListener(window, "load", initialize);
