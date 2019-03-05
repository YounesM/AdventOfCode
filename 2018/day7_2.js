class Worker {
  constructor() {
    this.timeWorked = 0;
    this.timeLeft = 0;
    this.item = {};
  }

  work() {
    console.log("Worker working on "+ this.item.letter);
    if(this.isWorking()) {
      this.timeWorked++;
      this.timeLeft--;
      if(!this.timeLeft) {
        //Removing the children
        candidates.forEach(el => {
          if(el.children.includes(this.item.letter)) {
            el.children.splice(el.children.indexOf(this.item.letter),1);
          }
        });
        //Removing the item
        candidates.splice(candidates.findIndex(el => el.letter === this.item.letter),1)
      }
    }
  }

  startWork(item) {
    this.item = item;
    this.timeLeft = item.letter.charCodeAt(0) - 4;
  }

  isWorking() {
    return !!this.timeLeft;
  }
}

const fs = require('fs');
const input = fs.readFileSync('../input/2018/day7', 'utf8')
                .split('\r\n')
                .map(el => el.replace(/Step | can begin./gm, ''))
                .map(el => el.replace(/must be finished before step/gm, '>'));
let candidates = new Array(26).fill(0).map((el,i) => ({letter: String.fromCharCode(65+i), children:[]})),
workers = [new Worker(), new Worker(), new Worker(), new Worker(), new Worker()], globalTime = 0;

let order = input.map(el => el.split(' > '));

order.forEach(el => {
    candidates.filter(ele => el[1] === ele.letter).forEach(elm => {
      elm.children.push(el[0]);
    })
});

while(getCorrectCandidate().length) {
  console.log(getCorrectCandidate());
  while(!!workWaiting().length && workers.find(wrk => !wrk.isWorking())) {
    workers.find(wrk => !wrk.isWorking()).startWork(workWaiting()[0]);
  }
  workers.filter(wrk => wrk.isWorking()).forEach(el => {
    el.work();
  });
  globalTime++;
}

console.log("Time worked : "+ globalTime);

function getCorrectCandidate() {
  return candidates.filter(el => el.children.length === 0)
  .sort((a, b) => a.letter.charCodeAt(0) - b.letter.charCodeAt(0));
}

function workWaiting() {
  let workLeft = getCorrectCandidate();
  workers.forEach(wrk => {
    if(workLeft.find(el => el.letter === wrk.item.letter)) {
      workLeft.splice(workLeft.findIndex(el => el.letter === wrk.item.letter),1);
    }
  });
  return workLeft;
}

//
// function workWaiting() {
//   let waiting = [];
//   getCorrectCandidate().forEach(el => {
//     if(!workers.find(elm => elm.item.letter === el.letter)) {
//       waiting.push(el);
//     }
//   })
//   return waiting.sort((a, b) => a.letter.charCodeAt(0)-b.letter.charCodeAt(0));
// }
//
// function work(worker) {
//   worker.timeWorked++;
//   worker.timeLeft--;
//   if(!worker.timeLeft) {
//     candidates.splice(candidates.indexOf(worker.item),1);
//   }
// }
//
// function getWork() {
//   while(workers.find(wrkr => !wrkr.timeLeft) && workWaiting().length) {
//     let currentCandidates = getCorrectCandidate(), currentWork = workWaiting()[0];
//     if(workers.find(wrkr => !wrkr.timeLeft)) {
//       workers.find(wrkr => !wrkr.timeLeft).item = currentWork;
//       workers.find(wrkr => !wrkr.timeLeft).timeLeft = 60 + currentWork.letter.charCodeAt(0) - 96;
//     }
//   }
// }
