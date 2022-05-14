async function init(){
    await includeHTML();
    renderBundeslaender();
}

async function includeHTML(){
    let includesElement = document.querySelectorAll('[w3-include-html]');
    for(let i = 0; i < includesElement.length; i++){
        const element = includesElement[i];
        file = element.getAttribute('w3-include-html');
        let resp = await fetch(file);
        if(resp.ok) {
            element.innerHTML = await resp.text();
        } else {
            element.innerHTML = 'Page not found';
        }
    }
}

function renderBundeslaender(){
    for(let i = 0; i < bundeslandList.length; i++){
        let name = bundeslandList[i].name;
        let inhabitans = bundeslandList[i].population;
        let population = `${inhabitans}`.replace(".", ",");
        let url = bundeslandList[i].url;
        document.getElementById('bundesMatrix').innerHTML += `
        <a href="${url}" class= "bundes-box" id= "bundes-${i}">
            <h4>${name}</h4>
            <p class="text-gray">${population} Millionen</p>
        </a>
        
    `;
    }
    
}

let bundeslandList = [
    {
        "name": "Baden-Württemberg",
        "population": 11.1,
        "url": "https://www.baden-wuerttemberg.de/de/startseite/"
    },
    {
        "name": "Bayern",
        "population": 13.1,
        "url": "https://www.bayern.de/"
    },
    {
        "name": "Berlin",
        "population": 3.7,
        "url": "https://www.berlin.de/"
    },
    {
        "name": "Brandenburg",
        "population": 2.5,
        "url": "https://www.brandenburg.de/"
    },
    {
        "name": "Bremen",
        "population": 0.7,
        "url": "https://www.bremen.de/"
    },
    {
        "name": "Hamburg",
        "population": 1.8,
        "url": "https://www.hamburg.de/"
    },
    {
        "name": "Hessen",
        "population": 6.3,
        "url": "https://www.hessen.de/"
    },
    {
        "name": "Mecklenburg-Vorpommern",
        "population": 1.6,
        "url": "https://www.mecklenburg-vorpommern.de/startseite/"
    },
    {
        "name": "Niedersachsen",
        "population": 8,
        "url": "https://www.niedersachsen.de/startseite/"
    },
    {
        "name": "Nordrhein-Westfalen",
        "population": 17.9,
        "url": "https://www.land.nrw/"
    },
    {
        "name": "Rheinland-Pfalz",
        "population": 4.1,
        "url": "https://www.rlp.de/de/startseite/"
    },
    {
        "name": "Saarland",
        "population": 1,
        "url": "https://www.saarland.de/DE/home/home_node.html"
    },
    {
        "name": "Sachsen",
        "population": 4.1,
        "url": "https://www.sachsen.de/"
    },
    {
        "name": "Sachsen-Anhalt",
        "population": 2.2,
        "url": "https://www.sachsen-anhalt.de/startseite/"
    },
    {
        "name": "Schleswig-Holstein",
        "population": 2.9,
        "url": "https://www.schleswig-holstein.de/DE/Home/home_node.html"
    },
    {
        "name": "Thüringen",
        "population": 2.1,
        "url": "https://thueringen.de/"
    }
];