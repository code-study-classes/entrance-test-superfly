import regions from "./regions.js"

const reg = regions()

export default function hotel() {
  const hotels = {
    Eleon: [],
    hotel2: [],
    hotel3: [],
    hotel4: [],
    hotel5: [],
  }

  const regionNames = Object.keys(reg)

  let index = 0
  for (let hotel in hotels) {
    hotels[hotel].push(reg[regionNames[index]])
    index++
  }

  return hotels
}

console.log(hotel())