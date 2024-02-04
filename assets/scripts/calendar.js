flatpickr(document.getElementsByClassName('date'), {
    "locale": "ru",
    inline: true,
    altFormat: "d.m.Y",
    altInput: true,
    dateFormat: "d.m.Y",
    mode: "range",
    defaultDate: ["01.01.2021", "11.01.2021"],
});

flatpickr(document.getElementsByClassName('act-inp-start'), {
    "locale": "ru",
    altFormat: "d.m.Y",
    altInput: true,
    dateFormat: "d.m.Y",
    mode: "range",
    defaultDate: ["01.01.2021", "11.01.2021"],
});
