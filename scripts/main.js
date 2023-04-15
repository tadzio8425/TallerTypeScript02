import { series } from "./data.js";
var seriesTbody = document.getElementById("series");
var renderSeriesInTable = function () {
    series.forEach(function (serie) {
        var trElement = document.createElement("tr");
        trElement.onclick = function (event) {
            displayCard(serie, trElement);
        };
        trElement.innerHTML = "<td style=\"font-weight:bold\">".concat(serie.id, "</td>\n                               <td style=\"font-weight:500; color:#038aff\">").concat(serie.name, "</td>\n                               <td>").concat(serie.channel, "</td>\n                               <td>").concat(serie.seasons, "</td>");
        seriesTbody.appendChild(trElement);
        var preloadedImg = new Image();
        preloadedImg.src = serie.image;
        if (serie.id == 1) {
            trElement.click();
        }
    });
};
var getSeasonAverage = function () {
    var totSeasons = 0;
    var numSeries = series.length;
    series.forEach(function (serie) {
        totSeasons += serie.seasons;
    });
    return totSeasons / numSeries;
};
var renderSeasonAverage = function () {
    var tableDiv = document.getElementById("tableDiv");
    var pElement = document.createElement("p");
    pElement.innerHTML = "Season average: ".concat(getSeasonAverage().toFixed(2));
    tableDiv.appendChild(pElement);
};
var displayCard = function (serie, currentTr) {
    currentTr.classList.add("table-active");
    var trList = document.getElementsByTagName("tr");
    for (var i = 0; i < trList.length; i++) {
        var loopedTr = trList[i];
        if (!loopedTr.isEqualNode(currentTr)) {
            loopedTr.classList.remove("table-active");
        }
    }
    var card = document.getElementById("seriesCard");
    var cardImage = card.getElementsByClassName("card-img-top")[0];
    var cardTitle = card.getElementsByClassName("card-title")[0];
    var cardDescription = card.getElementsByClassName("card-text")[0];
    var cardLink = card.getElementsByClassName("card-link")[0];
    cardImage.setAttribute("src", serie.image);
    cardTitle.innerHTML = serie.name;
    cardDescription.innerHTML = serie.description;
    cardLink.setAttribute("href", serie.webpage);
    cardLink.innerHTML = serie.webpage;
    cardLink.setAttribute("target", "_blank");
};
renderSeriesInTable();
renderSeasonAverage();
