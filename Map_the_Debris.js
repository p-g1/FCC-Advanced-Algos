function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  var orbitalRadius = 0;
  var newArr = [];

  for (var i = 0; i < arr.length; i++) {

    orbitalRadius = (arr[i].avgAlt) + earthRadius;
    var a = Math.sqrt(Math.pow(orbitalRadius, 3) / GM);
    var b = (2 * Math.PI);

    arr[i].orbitalPeriod = Math.round(b * a);
    delete arr[i].avgAlt;
  }

  return arr;
}

orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}]);
