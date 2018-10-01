"use strict";

    /**
     * Hauptklasse der Anwendung. Kümmert sich darum, die Anwendung auszuführen
     * und die angeforderten Bildschirmseiten anzuzeigen.
     */
    import stylesheet from "./app.css";
    class App {
        /**
         * Konstruktor.
         */
        constructor() {
        }

        /**
         * Ab hier beginnt die Anwendung zu laufen.
         */
        start() {
            console.log("Die Klasse App sagt Hallo!");
        }
        /**
 * Auswechseln des sichtbaren Inhalts der App. Hierfür muss der Methode
 * ein Objekt mit folgendem Aufbau übergeben werden:
 *
 *   {
        className: "CSS-Klassenname",
 *      topbar: [DOM Element, DOM Element, DOM Element, ...],
 *      main: [DOM Element, DOM Element, DOM Element, ...],
 *   }
 *
 * Beide Attribute (topbar und main) sind optional, was dazu führt, dass
 * im jeweiligen Bereich einfach nichts angezeigt wird. Werden sie jedoch
 * mitgegeben, müssen sie mit forEach(element => { … }) iteriert werden
 * können, um ihren Inhalt in den DOM-Baum zu integrieren.
 *
 * Wichtig ist, dass die übergebenen Elemente noch an keiner Stelle im
 * DOM vorhanden sein dürfen. Werden die Elemente in der index.html
 * als Vorlage definiert, muss hier deshalb eine Kopie anstelle der
 * Elemente selbst übergeben werden!
 *
 * @param {Object} content Objekt mit den anzuzeigenden DOM-Elementen
 */
_switchVisibleContent(content) {
    // <header> und <main> des HTML-Grundgerüsts ermitteln
    let app = document.querySelector("#app");
    let header = document.querySelector("#app > header");
    let main = document.querySelector("#app > main");

    // Zuvor angezeigte Inhalte entfernen
    // Bei der Topbar nur die untere Zeile, im Hauptbereich alles!
    app.className = "";
    header.querySelectorAll(".bottom").forEach(e => e.parentNode.removeChild(e));
    main.innerHTML = "";

    // CSS-Klasse übernehmen, um die viewspezifischen CSS-Regeln zu aktivieren
    if (content && content.className) {
        app.className = content.className;
    }

    // Neue Inhalte der Topbar einfügen
    if (content && content.topbar) {
        content.topbar.forEach(element => {
            element.classList.add("bottom");
            header.appendChild(element);
        });
    }

    // Neue Inhalte des Hauptbereichs einfügen
    if (content && content.main) {
        content.main.forEach(element => {
            main.appendChild(element);
        });
    }
}
    }
    export default App;
