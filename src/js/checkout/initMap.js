function initMap() {
  const location = {
    lat: 50.45466,
    lng: 30.5238,
  };

  const options = {
    center: location,
    zoom: 12,
  };

  map = new google.maps.Map(document.getElementById('map'), options);

  const markerList = [...document.getElementById('marker-list').children];

  const markers = markerList.map(magazine => {
    return new google.maps.Marker({
      position: {
        lat: +magazine.dataset.lat,
        lng: +magazine.dataset.lng,
      },
      map: map,
      name: magazine.textContent,
    });
  });

  document.getElementById('marker-list').addEventListener('click', e => {
    if (e.target.nodeName === 'LI') {
      [...e.currentTarget.children].forEach(item => {
        if (item.hasAttribute('style')) {
          item.removeAttribute('style');
        }
      });

      e.target.setAttribute('style', 'color: black; font-weight: 500');

      document
        .getElementById('address-block')
        .setAttribute('style', 'display:block');

      const selectedMarker = markers.find(
        marker => marker.name === e.target.textContent,
      );

      const geocoder = new google.maps.Geocoder();

      const markerPosition = {
        lat: selectedMarker.getPosition().lat(),
        lng: selectedMarker.getPosition().lng(),
      };

      geocoder.geocode({ location: markerPosition }, (res, status) => {
        if (status === 'OK') {
          document.getElementById('address').textContent = `
          ${res[0].formatted_address} `;
        } else {
          alert('Problems with geolocation');
        }
      });

      const position = new google.maps.LatLng(
        +e.target.dataset.lat,
        +e.target.dataset.lng,
      );

      map.zoom = 17;

      map.setCenter(position);
    }
  });

  markers.forEach(marker => {
    let markerInfo;

    marker.addListener('click', () => {
      const geocoder = new google.maps.Geocoder();

      const markerPosition = {
        lat: marker.getPosition().lat(),
        lng: marker.getPosition().lng(),
      };

      geocoder.geocode({ location: markerPosition }, (res, status) => {
        if (status === 'OK') {
          markerInfo = `
            <h3 style="font-size:22px">${marker.name} market</h3>
            <p style="font-size:18px">${res[0].formatted_address}</p>
          `;

          const infoWindow = new google.maps.InfoWindow({
            content: markerInfo,
          });

          infoWindow.open({
            map,
            anchor: marker,
          });
        } else {
          alert('Problems with geolocation');
        }
      });
    });
  });

  // new google.maps.Marker({
  //   position: {
  //     lat: 50.451183960731925,
  //     lng: 30.469018085891722,
  //   },
  //   map: map,
  // });

  // marker1.addListener('click', e => {
  //   const geocoder = new google.maps.Geocoder();
  //   const latlng = {
  //     lat: 50.4529321686939,
  //     lng: 30.468458122505496,
  //   };

  //   console.log(latlng);

  //   geocoder.geocode({ location: latlng }, (res, status) => {
  //     if (status === 'OK') {
  //       console.log(res);
  //     } else {
  //       alert('Shit');
  //     }
  //   });
  // });

  // new google.maps.Marker({
  //   position: {
  //     lat: 50.416826500047456,
  //     lng: 30.52399063460842,
  //   },
  //   map: map,
  // });

  // new google.maps.Marker({
  //   position: {
  //     lat: 50.441321783193445,
  //     lng: 30.53188705716067,
  //   },
  //   map: map,
  // });

  // new google.maps.Marker({
  //   position: {
  //     lat: 50.43038795473493,
  //     lng: 30.538410188834273,
  //   },
  //   map: map,
  // });

  // new google.maps.Marker({
  //   position: {
  //     lat: 50.43692822104581,
  //     lng: 30.610739928641525,
  //   },
  //   map: map,
  // });

  // autocomplete = new google.maps.places.Autocomplete(
  //   document.getElementById('input'),
  //   {
  //     componentRestrictions: { country: ['ua'] },
  //     fields: ['address_components', 'geometry', 'name'],
  //     types: ['establishment'],
  //   },
  // );

  // autocomplete.addListener('place_changed', () => {
  //   const place = autocomplete.getPlace();

  //   new google.maps.Marker({
  //     position: place.geometry.location,
  //     title: place.name,
  //     map: map,
  //   });
  // });
}
