//martins aquarium database file
export const getFish = () => {
    return database.fish.map(fish => ({...fish}))
}