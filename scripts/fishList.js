import { getFish, mostHolyFish, soldierFish, nonHolyFish } from "./database.js";






export const FishList = () => {
    // Invoke the function that you imported from the database module
    const orderedFishes = []

    const holyFishArray = mostHolyFish()
    const soldierFishArray = soldierFish()
    const nonHolyFishArray = nonHolyFish()

    for (const fish of holyFishArray) {
        orderedFishes.push(fish)
    }

    for (const fish of soldierFishArray) {
        orderedFishes.push(fish)
    }

    for (const fish of nonHolyFishArray) {
        orderedFishes.push(fish)
    }
    



    // Start building a string filled with HTML syntax
    let htmlString = '<article class="fishList">'

    // Create HTNL representations of each fish here
    for (const fish of orderedFishes) {

        // Why is there a backtick used for this string?
        htmlString += `<section class="fish card">
            <div><img  class="fish__image image--card" src="${fish.image}" /></div>
            <div class="fish__name">Name: ${fish.name}</div>
            <div class="fish__type">Type: ${fish.type}</div>
            <div class="fish__species">Species: ${fish.species}</div>
            <div class="fish__length">Length: ${fish.length}</div>
            <div class="fish__location">Location: ${fish.location}</div>
            <div class="fish__diet">Diet: ${fish.food}</div>
        </section>`
    }
    htmlString += `</article>`

    return htmlString
}


