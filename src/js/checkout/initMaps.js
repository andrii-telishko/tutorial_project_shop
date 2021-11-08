function initMaps() {
  // init magazines map

  const location = {
    lat: 50.45466,
    lng: 30.5238,
  };

  const options = {
    center: location,
    zoom: 12,
  };

  map = new google.maps.Map(document.getElementById('magazine-map'), options);

  // get array og magazines

  const markerList = [...document.getElementById('marker-list').children];

  // create array of markers and put markers on the map

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

  // add event listener on magazines and render info of selected magazine

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

      // find position of selected marker

      const markerPosition = {
        lat: selectedMarker.getPosition().lat(),
        lng: selectedMarker.getPosition().lng(),
      };

      // find and render address of selected magazine, using geocoder

      geocoder.geocode({ location: markerPosition }, (res, status) => {
        if (status === 'OK') {
          let street;
          if (e.target.textContent === 'Globus') {
            street = `${res[1].address_components[1].long_name}, ${res[1].address_components[0].long_name}`;
          } else {
            street = `${res[0].address_components[1].long_name}, ${res[0].address_components[0].long_name}`;
          }
          document.getElementById('magazine-street').textContent = street;
        } else {
          alert('Problems with geolocation');
        }
      });

      // zoom map on selected marker

      const position = new google.maps.LatLng(
        +e.target.dataset.lat,
        +e.target.dataset.lng,
      );

      map.zoom = 17;

      map.setCenter(position);
    }
  });

  // create window info for each marker

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

  // init post Map

  let postMap;

  // find gelocation

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      loc => {
        location.lat = loc.coords.latitude;
        location.lng = loc.coords.longitude;

        postMap = new google.maps.Map(
          document.getElementById('post-map'),
          options,
        );
      },
      err => {
        postMap = new google.maps.Map(
          document.getElementById('post-map'),
          options,
        );
      },
    );
  } else {
    postMap = new google.maps.Map(document.getElementById('post-map'), options);
  }

  // create autocomplete of city input

  cityAutocomplete = new google.maps.places.Autocomplete(
    document.getElementById('city-input'),
    {
      componentRestrictions: { country: ['ua'] },
      fields: ['geometry', 'name'],
      types: ['(cities)'],
    },
  );

  cityAutocomplete.addListener('place_changed', () => {
    document
      .getElementById('post-label')
      .setAttribute('style', 'display:block');
    const place = cityAutocomplete.getPlace();

    const position = new google.maps.LatLng({
      lat: place.geometry.location.lat(),
      lng: place.geometry.location.lng(),
    });

    postMap.setCenter(position);

    // create autocomplete of post input

    const input = document.getElementById('post-input');
    input.value = `${cityAutocomplete.getPlace().name} Ukrposhta`;

    const postOptions = {
      componentRestrictions: { country: 'ua' },
      fields: [
        'formatted_address',
        'formatted_phone_number',
        'geometry',
        'name',
        'opening_hours',
      ],
      types: ['establishment'],
    };

    const postAutocomplete = new google.maps.places.Autocomplete(
      input,
      postOptions,
    );

    postAutocomplete.addListener('place_changed', () => {
      const postPlace = postAutocomplete.getPlace();

      const postPosition = new google.maps.LatLng({
        lat: postPlace.geometry.location.lat(),
        lng: postPlace.geometry.location.lng(),
      });

      new google.maps.Marker({
        position: postPosition,
        map: postMap,
        name: postAutocomplete.name,
      });

      postMap.zoom = 17;

      postMap.setCenter(postPosition);

      // create and render all address info of selected post office

      if (!postPlace.name.toLowerCase().includes('poshta')) {
        alert('You need to find Ukrposhta office to continue');
      } else {
        // get all DOM elements
        const info = document.getElementById('post-info');
        const name = document.getElementById('post-name');
        const streetEl = document.getElementById('street');
        const cityEl = document.getElementById('city');
        const regionEl = document.getElementById('region');
        const postCodeEl = document.getElementById('post-code');
        const phone = document.getElementById('post-phone');
        const weekEl = document.getElementById('week');
        const saturdayEl = document.getElementById('saturday');
        const sundayEl = document.getElementById('sunday');

        // get all info from autocomplete

        const street = `${postPlace.formatted_address.split(',')[0]}, ${
          postPlace.formatted_address.split(',')[1]
        }`;
        const city = postPlace.formatted_address.split(',')[2];
        const region = postPlace.formatted_address.split(',')[3];
        const postCode = postPlace.formatted_address.split(',')[5];

        const week = `${[
          ...postPlace.opening_hours.periods[0].open.time.split(''),
        ]
          .slice(0, 2)
          .join('')}:${[
          ...postPlace.opening_hours.periods[0].open.time.split(''),
        ]
          .slice(2)
          .join('')} - ${[
          ...postPlace.opening_hours.periods[0].close.time.split(''),
        ]
          .slice(0, 2)
          .join('')}:${[
          ...postPlace.opening_hours.periods[0].close.time.split(''),
        ]
          .slice(2)
          .join('')}`;
        const saturday =
          postPlace.opening_hours.periods.length === 6
            ? `${[...postPlace.opening_hours.periods[5].open.time.split('')]
                .slice(0, 2)
                .join('')}:${[
                ...postPlace.opening_hours.periods[5].open.time.split(''),
              ]
                .slice(2)
                .join('')} - ${[
                ...postPlace.opening_hours.periods[5].close.time.split(''),
              ]
                .slice(0, 2)
                .join('')}:${[
                ...postPlace.opening_hours.periods[5].close.time.split(''),
              ]
                .slice(2)
                .join('')}`
            : 'Closed';
        const sunday = 'Closed';

        info.setAttribute('style', 'display: block');
        name.textContent = postPlace.name;
        streetEl.textContent = street;
        cityEl.textContent = city;
        regionEl.textContent = region;
        postCodeEl.textContent = postCode;
        phone.textContent = postPlace.formatted_phone_number;
        weekEl.textContent = week;
        saturdayEl.textContent = saturday;
        sundayEl.textContent = sunday;
      }
    });
  });
}
