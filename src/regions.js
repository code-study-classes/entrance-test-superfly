// const regions = (regionsPath) => {
//   return regionsPath
// }
// export default regions

export default class Country {
  constructor () {
    this.country = [];
  }

  getCountry () {
    return this.country
  }

  setCountry (addCountry) {
    const items = this.getCountry()
    items.push(addCountry)
  }
}

const myCountry = new Country();
myCountry.setCountry({ region: 'Moscow'});
myCountry.setCountry({ region : "Saint-Peterburg"});
myCountry.setCountry({ region : "Stockholm"});
myCountry.setCountry({ region : "Abakan"});
console.log(myCountry.getCountry());