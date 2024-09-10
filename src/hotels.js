import regions from "./regions.js"
import rooms from "./rooms.js"

const reg = regions()
const placement = rooms()

export default function hotel() {
  const hotels = {
    Eleon: [],
    Obelick: [],
    Azimut: [],
    Ridge: [],
    Helen: [],
  }

  const regionNames = Object.keys(reg)

  let index = 0
  for (let hotel in hotels) {
    hotels[hotel].push(reg[regionNames[index]])
    index++
  }

  for (let hotel in hotels) {
    hotels[hotel].push(placement)
    index++
  }

  return hotels
}

console.log(hotel())