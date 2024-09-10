import fs from 'fs';

// function generate(hotelName, room, category, status = 'free') {
//    category = ['standart' , 'lux' , 'appartments']
//    status = ['free','taken']
//   const idLogic = [];
//   let obj = {}
//   obj.hotelName = hotelName
//   obj.room = room
//   obj.category = category
//   obj.status = status
//   console.log(obj)
// }

export default class Generate {
    constructor() {
      this.name = [];
    }

    getHotels () {
      return this.name
    }

    setHotel(name) {
      const items = this.getHotels()
      items.push(name)
    } 
}

const myGenerate = new Generate();
myGenerate.setHotel({ name: 'hotel1', country: 'Moscow' });
myGenerate.setHotel({ name: 'hotel2', country: 'Saint-Peterburg' });
myGenerate.setHotel({ name: 'hotel3', country: 'Stockholm' });
myGenerate.setHotel({ name: 'hotel4', country: 'Abakan' });

console.log(myGenerate.getHotels());