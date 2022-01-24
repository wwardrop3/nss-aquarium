//martins aquarium database file
export const getFish = () => {
    return database.fish.map(fish => ({...fish}))
}


const database = {
    fish: [
        {
            name: "Carl",
            type: "",
            image: "https://www.aquariumofpacific.org/images/made_new/images-uploads-clownfish_400_q85.jpg",
            species: "Clownfish",
            length: "3",
            location: "Large",
            food: "Meat",

        },
        {
            name: "John",
            type: "",
            image: "https://media.hswstatic.com/eyJidWNrZXQiOiJjb250ZW50Lmhzd3N0YXRpYy5jb20iLCJrZXkiOiJnaWZcL2VlbHMtc2xpcHBlcnktMi5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjI5MH19fQ==",
            species: "Eel",
            length: "5",
            location: "Large",
            food: "Other Fish",
        },
        {
            name: "Leonard",
            type: "",
            image: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimagesvc.meredithcorp.io%2Fv3%2Fmm%2Fimage%3Furl%3Dhttps%253A%252F%252Fstatic.onecms.io%252Fwp-content%252Fuploads%252Fsites%252F6%252F2016%252F03%252Ffinding-nemo.jpg&q=85",
            species: "Great White",
            length: "151",
            location: "Large",
            food: "Vegitarian",
        }

    ]
}

const fishes = getFish()

export const mostHolyFish = () => {
    // 3, 6, 9, 12, etc... fish
    const holyFish = []

    for (const fish of fishes) {
        if (fish.length % 3 === 0){
            fish.type = "Holy Fish"
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
            fish.type = "Soldier Fish"
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
            fish.type = "Unholy Fish"
            regularFish.push(fish)
        }
    }

    return regularFish
}


