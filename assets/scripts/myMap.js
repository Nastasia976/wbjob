//---------------карта----------
function init() {
    let map = new ymaps.Map('map', {
        center: [60.087131, 30.470643],
        zoom: 13,
    });
    
    let placemark1 = new ymaps.Placemark([60.085896, 30.487878], {
        balloonContent: `
        <div class="balloon">
            <div class="balloon__top">
                <div class="balloon__title">Офис и склад в Санкт-Петербурге</div>
                <div class="balloon__close"></div>
            </div>
            <div class="balloon__body">
            188663, Ленинградская обл, Всеволожский р-н, Кузьмоловский гп, Заводская ул, дом № 3, корпус 360 Г</div>
        </div>
        `
    }, {
        iconLayout: 'default#image',
        iconImageHref: 'img/iconMap.svg', //расположение
        iconImageSize: [45, 54], //размер иконки
        iconImageOffset: [-25, -55], //сдвиг
        hideIconOnBalloonOpen: false,
    });


    map.controls.remove('geolocationControl'); // удаляем геолокацию
    map.controls.remove('searchControl'); // удаляем поиск
    map.controls.remove('trafficControl'); // удаляем контроль трафика
    map.controls.remove('typeSelector'); // удаляем тип
    map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
    map.controls.remove('zoomControl'); // удаляем контрол зуммирования
    map.controls.remove('rulerControl'); // удаляем контрол правил
   // map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)

    map.geoObjects.add(placemark1); //добавляем балун
}

ymaps.ready(init);