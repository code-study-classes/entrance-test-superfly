export default function generate(hotelNumber ,number, category, status = 'free') {
   category = ['standart' , 'lux' , 'appartments']
   status = ['free','taken']
  const idLogic = [];
  let obj = {}
  obj.hotelNumber = hotelNumber
  obj.number = number
  obj.category = category
  obj.status = status
  console.log(obj)
}
