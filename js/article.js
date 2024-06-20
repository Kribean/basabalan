document.addEventListener("DOMContentLoaded", function() {
    // Fonction pour calculer la différence en jours entre deux dates
    function calculerDifferenceJours(date1, date2) {
        const unJour = 24 * 60 * 60 * 1000; // Millisecondes dans un jour
        const differenceTemps = date2 - date1;
        return Math.round(differenceTemps / unJour);
    }

    // Sélectionner tous les éléments avec la classe 'article-published'
    const elements = document.querySelectorAll(".article-published");

    // Date actuelle
    const aujourdHui = new Date();

    elements.forEach(element => {
        // Récupérer la date de publication depuis l'attribut data-published
        const datePubliee = element.getAttribute("data-published");
        const [jour, mois, annee] = datePubliee.split('-').map(Number);
        const datePublieeObj = new Date(annee, mois - 1, jour); // Les mois sont 0-indexés en JS

        // Calculer la différence en jours
        const nombreDeJours = calculerDifferenceJours(datePublieeObj, aujourdHui);

        // Mettre à jour le contenu de l'élément
        element.textContent = `il y' a ${nombreDeJours} jour(s)`;
    });
});