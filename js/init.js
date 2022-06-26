var setCurrentPosition = true;

initialize = () => {
  var mapOptions = {
    center: new naver.maps.LatLng(37.3595704, 127.105399),
    zoom: 14,
  };

  var map = new naver.maps.Map("map", mapOptions);

  var trafficLayer = new naver.maps.TrafficLayer({
    interval: 300000, // 5분마다 새로고침 (최소값 5분)
  });
  trafficLayer.setMap(map);

  if ("geolocation" in navigator) {
    navigator.geolocation.watchPosition((position) => {
      console.log(map);
      if (setCurrentPosition)
        map.setCenter(
          new naver.maps.LatLng(
            position.coords.latitude,
            position.coords.longitude
          )
        );
    });
  }
};
