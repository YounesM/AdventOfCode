const minRange = 372037, maxRange = 905157, passwordList = [];

for (let i = minRange; i <= maxRange; i++) {
  const nbArray = [...i.toString()];
  if(nbArray.sort().toString().replace(/,/igm,'') === i.toString()
    && nbArray.length !== new Set(nbArray).size) {
    passwordList.push(i);
  }
}

console.log('PART 1:'+ passwordList.length);
