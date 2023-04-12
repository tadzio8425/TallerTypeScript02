import {series} from "./data.js"

const seriesTbody: HTMLElement = document.getElementById("series")!;

let renderSeriesInTable = () : void => {
    series.forEach(serie => {
        let trElement = document.createElement("tr");
        trElement.innerHTML = `<td style="font-weight:bold">${serie.id}</td>
                               <td style="font-weight:500; color:#038aff">${serie.name}</td>
                               <td>${serie.channel}</td>
                               <td>${serie.seasons}</td>`

        seriesTbody.appendChild(trElement);
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
    

renderSeriesInTable();
renderSeasonAverage();