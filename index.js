// Code your solution here



function findMatching(drivers, nameLooked) {
    return drivers.filter(function (driverName) {
        return driverName.toLowerCase() === nameLooked.toLowerCase();
    });
}

function fuzzyMatch(drivers, letterLooked) {
    return drivers.filter(function (driverName) {
        return driverName.toLowerCase().startsWith(letterLooked.toLowerCase());
    });
}

function matchName(drivers, nameLooked) {
        return drivers.filter(function (driver) {
            return driver.name === nameLooked;
        });
    }