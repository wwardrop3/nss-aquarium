//martins aquarium database file
export const getFish = () => {
    return database.fish.map(fish => ({...fish}))
}


const database = {
    fish: [
        {
            name: "Carl",
            size: "Large",
            food: "crabs",
        }
    ]
}
