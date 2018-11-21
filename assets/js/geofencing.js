require('../css/geofencing.scss');

(function ($) {
  const showStep = (index) => {
    $('#geofencing .step').toggle(false)
    $('#geofencing .step[data-step="'+index+'"]').toggle(true)
  }

  const getLocation = () => {
    showStep('getting-location')
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(checkLocation, unknownLocation)
    } else {
      unknownLocation()
    }
  }

  const checkLocation = (location) => {
    showStep('checking-location')

    for (let origin of config.origins) {
      const distance = getDistance(
        location.coords.latitude, location.coords.longitude,
        origin.coords.latitude, origin.coords.longitude
      )

      if (distance <= config.max_distance) {
        accessGranted()
        return
      }
    }

    accessDenied()
  }

  const accessGranted = () => {
    showStep('access-granted')
    setTimeout(() => {
      $('#geofencing').remove()
    }, 1000)
  }

  const accessDenied = () => {
    showStep('access-denied')
  }

  const unknownLocation = () => {
    showStep('unknown-location')
  }

  const declined = () => {
    showStep('geofencing-declined')
  }

  let config = {}

  $(() => {
    // Get global geofencing config.
    config = geofencing_config || {}

    showStep('message')
    $('#geofencing-accept').on('click', getLocation)
    $('#geofencing-decline').on('click', declined)
  })

  // https://stackoverflow.com/a/13841047
  function getDistance(lon1, lat1, lon2, lat2) {
    var R = 6371; // Radius of the earth in km
    var dLat = toRad(lat2-lat1);  // Javascript functions in radians
    var dLon = toRad(lon2-lon1);
    var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
        Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
        Math.sin(dLon/2) * Math.sin(dLon/2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    var d = R * c; // Distance in km
    return 1000*d;
  }

  function toRad(number) {
    return number * Math.PI / 180;
  }

  // /** Converts numeric degrees to radians */
  // if (typeof(Number.prototype.toRad) === "undefined") {
  //   Number.prototype.toRad = function() {
  //     return this * Math.PI / 180;
  //   }
  // }
}(jQuery))

// 'use strict';

// import React from 'react'
// import ReactDOM from 'react-dom';

// const e = React.createElement;

// class LikeButton extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { liked: false };
//   }

//   render() {
//     if (this.state.liked) {
//       return 'You liked this.'
//     }

//     return <fieldset>
//       <legend>{this.props.title}</legend>
//       {e(
//         'button',
//         { onClick: () => this.setState({ liked: true }) },
//         'Like'
//       )}
//     </fieldset>
//   }
// }

// // if ('geolocation' in navigator) {
// //   navigator.geolocation.getCurrentPosition(
// //     (position) => {
// //       ;;; console.log(position)
// //     },
// //     (error) => {
// //       ;;; console.log(error)
// //     },
// //   )
// // }

// const domContainer = document.querySelector('#app')
// ReactDOM.render(e(LikeButton, {title: 'We need your location.'}), domContainer)
