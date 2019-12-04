const minRange = 372037, maxRange = 905157, passwordList = [];

for (let i = minRange; i <= maxRange; i++) {
  const nbArray = [...i.toString()];
  if(nbArray.sort().toString().replace(/,/igm,'') === i.toString()
    && nbArray.length !== new Set(nbArray).size
    && nbArray.map(el => nbArray.filter(elm => elm === el).length).filter(el => el === 2).length) {
    passwordList.push(i);
  }
}

console.log('PART 2:'+ passwordList.length);
