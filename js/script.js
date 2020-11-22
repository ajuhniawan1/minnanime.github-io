

const sideNav = document.querySelectorAll('.sidenav');
M.Sidenav.init(sideNav);

const slider = document.querySelectorAll('.slider');
M.Slider.init(slider, {
    indicators: false,
    height: 500,
    transition: 600,
    interval: 3000
});

const parallax = document.querySelectorAll('.parallax');
M.Parallax.init(parallax);

const materialBox = document.querySelectorAll('.materialboxed');
M.Materialbox.init(materialBox);

$(document).ready(function () {
    $('.scrollspy').scrollSpy({
        scrollOffset: 50
    });
});

$(document).ready(function () {
    $('.modal').modal({
        dismissible: false,
        opacity: 0.7
    });
})

document.querySelector(".third").addEventListener('click', function () {
    swal("Arigatou", "Terima kasih telah mengunjungi website kami", "success");
});
