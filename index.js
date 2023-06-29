// Code your solution in this file!
const drivers = ['james', 'kimotho', 'fred', 'jay'];

const returnFirstTwoDrivers = drivers => drivers.slice(0, 2);
console.log(returnFirstTwoDrivers(drivers));

const returnLastTwoDrivers = drivers => drivers.slice(-2);
console.log(returnLastTwoDrivers(drivers));

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
console.log(selectingDrivers[0]);
console.log(selectingDrivers[1]);
console.log(selectingDrivers[0](drivers));
console.log(selectingDrivers[1](drivers));

const createFareMultiplier = function (multiplier) {
  return function (fare) {
    return fare * multiplier;
  };
};
const fareQuintupler = createFareMultiplier(5);
console.log(fareQuintupler(5));

const fareDoubler = fare => createFareMultiplier(2)(fare);
console.log(fareDoubler(10));

const fareTripler = fare => createFareMultiplier(3)(fare);
console.log(fareTripler(12));

function selectDifferentDrivers(drivers, fn) {
  return fn(drivers);
}
