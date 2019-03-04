const fs = require('fs');
const input = fs.readFileSync('../input/2018/day7', 'utf8')
                .split('\r\n')
                .map(el => el.replace(/Step | can begin./gm, ''))
                .map(el => el.replace(/must be finished before step/gm, '>'));
let combination = '', candidates = new Array(26).fill(0).map((el,i) => ({letter: String.fromCharCode(65+i), children:[]}));

let order = input.map(el => el.split(' > '));

order.forEach(el => {
    candidates.filter(ele => el[1] === ele.letter).forEach(elm => {
      elm.children.push(el[0]);
    })
});

getCorrectCandidate();

function getCorrectCandidate() {
  let currentCandidates = candidates.filter(el => el.children.length === 0).sort((a, b) => a.letter.charCodeAt(0) - b.letter.charCodeAt(0));
  candidates.forEach(el => {
    if(el.children.includes(currentCandidates[0].letter)) {
      el.children.splice(el.children.indexOf(currentCandidates[0].letter),1);
    }
  })

  combination += currentCandidates[0].letter;
  candidates.splice(candidates.indexOf(currentCandidates[0]),1);
  if(!candidates.length) {
    return console.log("The correct combination is : "+combination);
  }
  getCorrectCandidate();
}
