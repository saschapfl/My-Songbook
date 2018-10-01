"use strict";

   // Erst loslaufen, wenn das Document Object Modul bereit ist
   import App from "./app.js";
   window.addEventListener("load", () => {
       // Anwendung starten
       let app = new App();
       app.start();
   });
