//martins aquarium database file
export const getFish = () => {
    return database.fish.map(fish => ({...fish}))
}


const database = {
    fish: [
        {
            name: "Carl",
            image: "",
            species: "",
            length: "",
            location: "Large",
            food: "crabs",
        }
    ]
}
