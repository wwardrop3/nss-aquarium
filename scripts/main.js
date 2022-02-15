import { getFish } from "./database.js"
import { renderTips } from "./tips.js"
import { FishList } from "./fish.js"
import { renderLocations } from "./locations.js"




const renderPage = () => {
    return `
    <article class = "page">
        <section class = "navBar">
            <section class="pageTitle">
                <h1><b>Martin's Aquarium</b</h1>
            </section>
            <section class = "menuButtons">
                <button>Future Page</button>
            </section>
        </section>

        <section class = "content">
            <section class = "sections" id = "fishSection">
                ${FishList()}
    
            </section>
    
            <section class = 'sections'>
                <section class = "subsections">
                    <h1 class = "h1">Travel Tips</h1>
                    <section class = "lists">
                        ${renderTips()}
                    </section>
                    
                </section>
            <section class = "subsections">
                <h1>Harvest Locations</h1>
                <section class = "lists">
                    ${renderLocations()}              
                </section>
                

            </section>
    
            </section>

            <section class = "sections">
                <section class = "subsections" id="tank-cleaning">
                    <h1 class = "h1">Tank Cleaning Instructions</h1>
                    <section class = "lists">
                        <ul>
                            <li>Salinity: Medium</li>
                            <li>Temperature: 70 Degrees</li>
                            <li>Tank Cleaning Instruction: Make sure Nemo doesn't get stuck in the machine</li>
                        </ul>

                    </section>


                </section>
            </section>
    
        </section>
        <section class = "footer">
            <section class = "footerText">
                <p>Footer</p>
                <p>Address</p>
            </section>
        
        </section>  




        </section>
    </article>`

}

document.querySelector("#contentContainer").innerHTML = renderPage()

