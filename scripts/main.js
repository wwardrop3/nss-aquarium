import { getFish } from "./database.js"
import { FishList } from "./fishList.js"

const parentHTMLElement = document.querySelector("#fishSection")

parentHTMLElement.innerHTML = FishList()


const allFish = getFish()

for (const fish of allFish) {
    console.log(fish)
}



