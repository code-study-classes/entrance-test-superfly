export default function rooms() {
    const allRooms = {
      rooms1: {},
      rooms2: {},
      rooms3: {},
      rooms4: {},
      rooms5: {},
    }
  
    const categories = ['Standard', 'Lux', 'Apartments']
    const statuses = ['empty', 'busy']
  
    for (let hotel in allRooms) {
      for (let i = 1; i <= 5; i++) {
        const roomNumber = `${i}`
        const category = categories[Math.floor(Math.random() * categories.length)]
        let capacity
        switch (category) {
          case 'Standard':
          case 'Lux':
            capacity = Math.floor(Math.random() * 2) + 1
            break
          case 'Apartments':
            capacity = Math.floor(Math.random() * 4) + 1
            break
        }
        const status = statuses[Math.floor(Math.random() * statuses.length)]
  
        allRooms[hotel][`room${i}`] = {
          number: roomNumber,
          category,
          capacity,
          status,
        }
      }
    }
  
    return allRooms
  }