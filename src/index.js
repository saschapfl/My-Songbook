"use strict";

   // Erst loslaufen, wenn das Document Object Modul bereit ist
   import App from "./app.js";
   import stylesheet from "./index.css";
   import theme from "./theme.css";
   window.addEventListener("load", () => {
       // Anwendung starten
       let app = new App();
       app.start();
   });
