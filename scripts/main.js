import { series } from "./data.js";
var seriesTbody = document.getElementById("series");
var renderSeriesInTable = function () {
    series.forEach(function (serie) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td style=\"font-weight:bold\">".concat(serie.id, "</td>\n                               <td style=\"font-weight:500; color:#038aff\">").concat(serie.name, "</td>\n                               <td>").concat(serie.channel, "</td>\n                               <td>").concat(serie.seasons, "</td>");
        seriesTbody.appendChild(trElement);
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
renderSeriesInTable();
renderSeasonAverage();
