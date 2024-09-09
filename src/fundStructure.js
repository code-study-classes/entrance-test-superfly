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
    constructor(name, region) {
      this.name = name;
      this.region = region
    }
}
