const fs = require('fs');
let input = fs.readFileSync('../input/2018/day4', 'utf8').split('\r\n');
let shiftList = [];
let minutes

input.forEach(line => {
  let obj = {};
  if(line){
    obj.time = new Date(line.match(/^\[.*\]/gm)[0].replace('[','').replace(']',''));
    obj.action = line.replace(/^\[.*\] /gm, '');
    shiftList.push(obj);
  }
});

shiftList = shiftList.sort((a,b) => a.time - b.time);

let currentGuard = 0, currentTimeAsleep = 0;
let guardSleepList = [];
shiftList.forEach(element => {
  let obj = {};
  if(element.action.match(/Guard .* begins shift/gm)) {
    currentGuard = +element.action.match(/\d{1,}/gm)[0]
  }
  if(guardSleepList.find(el => el.id === currentGuard)) {
    obj = guardSleepList.find(el => el.id === currentGuard);
  } else {
    obj.id = currentGuard;
    obj.minutesAsleep = new Array(60).fill(0);
  }
  if(element.action.match(/falls asleep/gm)) {
    currentTimeAsleep = element.time;
  }
  if(element.action.match(/wakes up/gm)) {
    for(let i = currentTimeAsleep.getMinutes(); i < element.time.getMinutes(); i++) {
      obj.minutesAsleep[i]++;
    }
  }
  if(!guardSleepList.find(el => el.id === obj.id)){
    guardSleepList.push(obj);
  }
})

let maxSleep = 0, maxSleepId = 0, maxSleepIndex = 0;
guardSleepList.forEach(list => {
  if(maxSleep <= list.minutesAsleep.reduce((a,c) => a + c)) {
    maxSleep = list.minutesAsleep.reduce((a,c) => a + c);
    maxSleepIndex = list.minutesAsleep.indexOf(Math.max(...list.minutesAsleep));
    maxSleepId = list.id;
  }
})
console.log('Part 1 : '+maxSleepIndex * maxSleepId);

maxSleep = 0, maxSleepId = 0, maxSleepIndex = 0;
guardSleepList.forEach(list => {
  if(maxSleep <= Math.max(...list.minutesAsleep)) {
    maxSleep =  Math.max(...list.minutesAsleep);
    maxSleepIndex = list.minutesAsleep.indexOf(maxSleep);
    maxSleepId = list.id;
  }
})
console.log('Part 1 : '+maxSleepIndex * maxSleepId);
