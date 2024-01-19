import React from 'react';

const tour = [{
  target: '.p6o-search-button',
  title: 'Su viaje comienza aquí',
  content: 'Pulse el botón del catalejo para realizar una búsqueda de texto en los datos cartográficos cargados.',
  disableBeacon: true
}, {
  target: '.p6o-filters-button',
  content: 'O haga clic en el botón de filtro de abajo para abrir el panel de filtros.',
  disableBeacon: true
},{
  target: '.p6o-facets',
  title: 'El panel de filtros',
  content: 'Con el panel de filtros abierto, el mapa muestra distintos tipos de datos en diferentes colores.',
  disableBeacon: true
},{
  target: '.p6o-facets-carousel',
  content: 'Puede recorrer las categorías de filtros disponibles haciendo clic en las flechas.',
  disableBeacon: true
},{
  target: '.p6o-facets ul',
  content: <div>Puede filtrar los datos del mapa haciendo clic en las etiquetas.</div>,
  disableBeacon: true
},{
  target: 'body',
  placement: 'center',
  title: 'Ya está.',
  content: 
    <span>
      Gracias por su tiempo. Diviértase explorando nuestro mapa para el proyecto Desenrollando el cordel.
      Si quiere saber más sobre el software Peripleo, <a href="https://github.com/britishlibrary/peripleo-lanc" target="_blank">haga clic aquí</a>.
    </span>
}];

export default tour;