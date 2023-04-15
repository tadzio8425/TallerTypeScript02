import {series} from "./data.js"
import { Serie } from "./serie";

const seriesTbody: HTMLElement = document.getElementById("series")!;

let renderSeriesInTable = () : void => {
    series.forEach(serie => {
        let trElement = document.createElement("tr");
        trElement.onclick = function(event: Event){
            displayCard(serie, trElement);
        };
        trElement.innerHTML = `<td style="font-weight:bold">${serie.id}</td>
                               <td style="font-weight:500; color:#038aff">${serie.name}</td>
                               <td>${serie.channel}</td>
                               <td>${serie.seasons}</td>`

        seriesTbody.appendChild(trElement);
        let preloadedImg = new Image();
        preloadedImg.src = serie.image;

        if(serie.id == 1){
            trElement.click();
        }

    });

}

let getSeasonAverage = () : number => {

    let totSeasons:number = 0;
    let numSeries:number = series.length;

    series.forEach(serie => {
        totSeasons += serie.seasons;
    });
    
return totSeasons/numSeries;}

let renderSeasonAverage = () : void => {
    const tableDiv = document.getElementById("tableDiv")!;
    let pElement = document.createElement("p");
    pElement.innerHTML = `Season average: ${getSeasonAverage().toFixed(2)}`;
    tableDiv.appendChild(pElement);
};


let displayCard = (serie: Serie, currentTr: HTMLElement) => {

    currentTr.classList.add("table-active");

    let trList = document.getElementsByTagName("tr");

    for (let i = 0; i < trList.length; i++) {
        let loopedTr = trList[i];
        if(!loopedTr.isEqualNode(currentTr)){
            loopedTr.classList.remove("table-active");
        }
    }

    const card: HTMLElement = document.getElementById("seriesCard")!;
    
    let cardImage = card.getElementsByClassName("card-img-top")[0]!;
    let cardTitle = card.getElementsByClassName("card-title")[0]!;
    let cardDescription= card.getElementsByClassName("card-text")[0]!;
    let cardLink= card.getElementsByClassName("card-link")[0]!;

    cardImage.setAttribute("src", serie.image);
    cardTitle.innerHTML = serie.name;
    cardDescription.innerHTML = serie.description;
    cardLink.setAttribute("href", serie.webpage);
    cardLink.innerHTML = serie.webpage;
    cardLink.setAttribute("target","_blank");
} 
    

renderSeriesInTable();
renderSeasonAverage();


