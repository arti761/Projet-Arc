import Route from "./Route.js";

//Définir ici vos routes
export const allRoutes = [
    new Route("/", "Accueil", "/pages/home.html"),
    new Route("/services", "services", "/pages/services.html"),
    new Route("/habitats", "habitats", "/pages/habitats.html"),
    new Route("/avis", "avis", "/pages/avis.html"),
    new Route("/contact", "contact", "/pages/contact.html"),
    new Route("/connexion", "connexion", "/pages/connexion.html"),];


//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Arcadia";