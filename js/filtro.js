document.addEventListener('DOMContentLoaded', () => {
   
        console.log("DOM loaded from filtro.js");
        const filterButtons = document.querySelectorAll('.filter-btn');
        const excursionesSection = document.getElementById('excursiones-section');
        const wineToursSection = document.getElementById('wine-tours-section');

        console.log("Sección Excursiones:", excursionesSection);
        console.log("Sección Wine Tours:", wineToursSection);

        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                const filter = button.dataset.filter;
                console.log("Filtro seleccionado:", filter);

                if (filter === 'all') {
                    excursionesSection.style.display = 'block';
                    wineToursSection.style.display = 'block';
                } else if (filter === 'excursiones') {
                    excursionesSection.style.display = 'block';
                    wineToursSection.style.display = 'none';
                } else if (filter === 'wine-tours') {
                    excursionesSection.style.display = 'none';
                    wineToursSection.style.display = 'block';
                }
            });
        });
});
