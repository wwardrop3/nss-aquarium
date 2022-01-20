//martins aquarium database file
export const getFish = () => {
    return database.fish.map(fish => ({...fish}))
}


const database = {
    fish: [
        {
            name: "Carl",
            image: "https://media.istockphoto.com/photos/fish-isolated-with-scales-river-crucian-carp-picture-id1037503798?s=170667a",
            species: "",
            length: "3",
            location: "Large",
            food: "Meat",

        },
        {
            name: "John",
            image: "https://media.istockphoto.com/photos/fish-isolated-with-scales-river-crucian-carp-picture-id1037503798?s=170667a",
            species: "",
            length: "4",
            location: "Large",
            food: "Other Fish",
        },
        {
            name: "Leonard",
            image: "https://media.istockphoto.com/photos/fish-isolated-with-scales-river-crucian-carp-picture-id1037503798?s=170667a",
            species: "",
            length: "5",
            location: "Large",
            food: "Crabs",
        }

    ]
}

const fishes = getFish()

export const mostHolyFish = () => {
    // 3, 6, 9, 12, etc... fish
    const holyFish = []

    for (const fish of fishes) {
        if (fish.length % 3 === 0){
            holyFish.push(fish)
        }
    }

    return holyFish
}


export const soldierFish = () => {
// 5, 10, 15, 20, 25, etc... fish
    const soldiers = []

    for (const fish of fishes) {
        if (fish.length % 5 === 0) {
            soldiers.push(fish)
        }
    }

    return soldiers
}

export const nonHolyFish = () => {
// Any fish not a multiple of 3 or 5
    const regularFish = []
    for (const fish of fishes) {
        if (fish.length % 3 !== 0 && fish.length % 5 !== 0) {
            regularFish.push(fish)
        }
    }

    return regularFish
}


