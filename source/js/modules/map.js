/* eslint-disable no-undef */

/* For this script to work, you need to add this script to the head
<script>
  src='https://api-maps.yandex.ru/2.1/?apikey={apiKey}&lang=ru_RU'
</script>
*/

function init() {
  const coordinates = [59.938635, 30.323118]
  let center = coordinates

  if (window.matchMedia('(min-width: 1440px)').matches) {
    center = [59.938635, 30.315]
  }

  const map = new ymaps.Map('map', {
    center,
    zoom: 15,
    controls: []
  })

  const placemark = new ymaps.Placemark(
    coordinates,
    {
      hintContent: 'ул. Большая Конюшенная, д. 19/8',
      balloonContent: 'ул. Большая Конюшенная, д. 19/8'
    },
    {
      iconLayout: 'default#image',
      iconImageHref: './images/map-pin.png',
      iconImageSize: [72.75, 87.5],
      iconImageOffset: [-35, -80]
    }
  )

  map.geoObjects.add(placemark)
}

ymaps.ready(init)
