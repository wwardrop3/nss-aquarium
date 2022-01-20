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
            length: "",
            location: "Large",
            food: "Meat",

        },
        {
            name: "John",
            image: "https://media.istockphoto.com/photos/fish-isolated-with-scales-river-crucian-carp-picture-id1037503798?s=170667a",
            species: "",
            length: "",
            location: "Large",
            food: "Other Fish",
        },
        {
            name: "Leonard",
            image: "https://media.istockphoto.com/photos/fish-isolated-with-scales-river-crucian-carp-picture-id1037503798?s=170667a",
            species: "",
            length: "",
            location: "Large",
            food: "Crabs",
        }

    ]
}
