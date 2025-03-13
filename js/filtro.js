document.addEventListener('DOMContentLoaded', () => {
   
        console.log("DOM loaded from filtro.js");
        const filterButtons = document.querySelectorAll('.filter-btn');
        const excursionesSection = document.getElementById('excursiones-section');
        const wineToursSection = document.getElementById('wine-tours-section');

        let seleccion=localStorage.getItem ("seleccion");
        if (seleccion != "wine-tours" && seleccion != "excursiones"){
            filterFunction("all")
        }
        else (
            filterFunction(seleccion)
        )

        localStorage.setItem("seleccion", "")

        console.log("Sección Excursiones:", excursionesSection);
        console.log("Sección Wine Tours:", wineToursSection);


        function filterFunction(seleccion) {
            if (seleccion === 'all') {
                excursionesSection.style.display = 'block';
                wineToursSection.style.display = 'block';
            } else if (seleccion === 'excursiones') {
                excursionesSection.style.display = 'block';
                wineToursSection.style.display = 'none';
            } else if (seleccion === 'wine-tours') {
                excursionesSection.style.display = 'none';
                wineToursSection.style.display = 'block';
            }
     }


        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                const filter = button.dataset.filter;
                console.log("Filtro seleccionado:", filter);
                filterFunction(filter);

                
            });
        });
});

