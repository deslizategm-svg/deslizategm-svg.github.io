//const regiones = document.querySelectorAll(".cls-1");
//const tooltip = document.getElementById("tooltip");

const info = {
  _2445: 'Colonia Hidalgo · La Angostura',
  _2443: 'Colonia Aldama · Colonia Juárez · El Platanar',
  _2444: 'Noxtepec de Zaragoza · Santa María Xoquiac',
  _2442:
    'San Pedro Chichicasco · Palo Dulce · Planta Alameda · Los Tepehuajes · Chichicasco Viejo · Casa Blanca',
  _2432: 'Cabecera Municipal',
  _2433: 'Cabecera Municipal',
  _2435: 'Cabecera Municipal',
  _2434: 'Cabecera Municipal',
  _2441: 'Monte Grande · El Zapote',
  _2440: 'Pachiquilla · Palmar de Guadalupe',
  _2447: 'El Puente Caporal',
  _2438: 'Tepopula',
  _2439:
    'La Ladrillera · Loma del Coporo · Amate Amarillo · La Loma de San Felipe · El Puentecito · La Huerta ·Jalmolonga · Los Campos de San Martín · El Cerro Pelón · El Obrador · Colapa',
  _2437: 'Jesús María · San Sebastián · San Nicolás',
  _2436: 'San Simón el Alto',
};
const regiones1 = document.querySelectorAll('polyline.cls-1');
const regiones2 = document.querySelectorAll('polyline.cls-2');
const regiones3 = document.querySelectorAll('polyline.cls-3');
const regiones4 = document.querySelectorAll('polyline.cls-4');
const regiones5 = document.querySelectorAll('polyline.cls-5');
const regiones6 = document.querySelectorAll('polyline.cls-6');
const regiones7 = document.querySelectorAll('polyline.cls-7');
const regiones8 = document.querySelectorAll('polyline.cls-8');
const regiones9 = document.querySelectorAll('polyline.cls-9');
const regiones10 = document.querySelectorAll('polyline.cls-10');
const regiones11 = document.querySelectorAll('polyline.cls-11');
const regiones12 = document.querySelectorAll('polyline.cls-12');
const regiones13 = document.querySelectorAll('polyline.cls-13');
const regiones14 = document.querySelectorAll('polyline.cls-14');
const regiones15 = document.querySelectorAll('polyline.cls-15');
const tooltip = document.getElementById('tooltip');

regiones1.forEach((region) => {
  region.addEventListener('mousemove', function (e) {
    const parent = e.target.parentElement;
    const parentId = parent.id;

    tooltip.style.opacity = 1;

    const texto = info[parentId] || this.id;

    tooltip.innerHTML = texto;

    tooltip.style.left = e.pageX + 15 + 'px';
    tooltip.style.top = e.pageY + 15 + 'px';
  });

  region.addEventListener('mouseleave', function () {
    tooltip.style.opacity = 0;
  });
});

regiones2.forEach((region) => {
  region.addEventListener('mousemove', function (e) {
    const parent = e.target.parentElement;
    const parentId = parent.id;

    tooltip.style.opacity = 1;

    const texto = info[parentId] || this.id;

    tooltip.innerHTML = texto;

    tooltip.style.left = e.pageX + 15 + 'px';
    tooltip.style.top = e.pageY + 15 + 'px';
  });

  region.addEventListener('mouseleave', function () {
    tooltip.style.opacity = 0;
  });
});

regiones3.forEach((region) => {
  region.addEventListener('mousemove', function (e) {
    const parent = e.target.parentElement;
    const parentId = parent.id;

    tooltip.style.opacity = 1;

    const texto = info[parentId] || this.id;

    tooltip.innerHTML = texto;

    tooltip.style.left = e.pageX + 15 + 'px';
    tooltip.style.top = e.pageY + 15 + 'px';
  });

  region.addEventListener('mouseleave', function () {
    tooltip.style.opacity = 0;
  });
});

regiones4.forEach((region) => {
  region.addEventListener('mousemove', function (e) {
    const parent = e.target.parentElement;
    const parentId = parent.id;

    tooltip.style.opacity = 1;

    const texto = info[parentId] || this.id;

    tooltip.innerHTML = texto;

    tooltip.style.left = e.pageX + 15 + 'px';
    tooltip.style.top = e.pageY + 15 + 'px';
  });

  region.addEventListener('mouseleave', function () {
    tooltip.style.opacity = 0;
  });
  });

  regiones5.forEach((region) => {
  region.addEventListener('mousemove', function (e) {
    const parent = e.target.parentElement;
    const parentId = parent.id;

    tooltip.style.opacity = 1;

    const texto = info[parentId] || this.id;

    tooltip.innerHTML = texto;

    tooltip.style.left = e.pageX + 15 + 'px';
    tooltip.style.top = e.pageY + 15 + 'px';
  });

  region.addEventListener('mouseleave', function () {
    tooltip.style.opacity = 0;
  });
  });

  regiones6.forEach((region) => {
  region.addEventListener('mousemove', function (e) {
    const parent = e.target.parentElement;
    const parentId = parent.id;

    tooltip.style.opacity = 1;

    const texto = info[parentId] || this.id;

    tooltip.innerHTML = texto;

    tooltip.style.left = e.pageX + 15 + 'px';
    tooltip.style.top = e.pageY + 15 + 'px';
  });

  region.addEventListener('mouseleave', function () {
    tooltip.style.opacity = 0;
  });
  });

  regiones7.forEach((region) => {
  region.addEventListener('mousemove', function (e) {
    const parent = e.target.parentElement;
    const parentId = parent.id;

    tooltip.style.opacity = 1;

    const texto = info[parentId] || this.id;

    tooltip.innerHTML = texto;

    tooltip.style.left = e.pageX + 15 + 'px';
    tooltip.style.top = e.pageY + 15 + 'px';
  });

  region.addEventListener('mouseleave', function () {
    tooltip.style.opacity = 0;
  });
  });

  regiones8.forEach((region) => {
  region.addEventListener('mousemove', function (e) {
    const parent = e.target.parentElement;
    const parentId = parent.id;

    tooltip.style.opacity = 1;

    const texto = info[parentId] || this.id;

    tooltip.innerHTML = texto;

    tooltip.style.left = e.pageX + 15 + 'px';
    tooltip.style.top = e.pageY + 15 + 'px';
  });

  region.addEventListener('mouseleave', function () {
    tooltip.style.opacity = 0;
  });
  });

  regiones9.forEach((region) => {
  region.addEventListener('mousemove', function (e) {
    const parent = e.target.parentElement;
    const parentId = parent.id;

    tooltip.style.opacity = 1;

    const texto = info[parentId] || this.id;

    tooltip.innerHTML = texto;

    tooltip.style.left = e.pageX + 15 + 'px';
    tooltip.style.top = e.pageY + 15 + 'px';
  });

  region.addEventListener('mouseleave', function () {
    tooltip.style.opacity = 0;
  });
  });

  regiones10.forEach((region) => {
  region.addEventListener('mousemove', function (e) {
    const parent = e.target.parentElement;
    const parentId = parent.id;

    tooltip.style.opacity = 1;

    const texto = info[parentId] || this.id;

    tooltip.innerHTML = texto;

    tooltip.style.left = e.pageX + 15 + 'px';
    tooltip.style.top = e.pageY + 15 + 'px';
  });

  region.addEventListener('mouseleave', function () {
    tooltip.style.opacity = 0;
  });
  });

  regiones11.forEach((region) => {
  region.addEventListener('mousemove', function (e) {
    const parent = e.target.parentElement;
    const parentId = parent.id;

    tooltip.style.opacity = 1;

    const texto = info[parentId] || this.id;

    tooltip.innerHTML = texto;

    tooltip.style.left = e.pageX + 15 + 'px';
    tooltip.style.top = e.pageY + 15 + 'px';
  });

  region.addEventListener('mouseleave', function () {
    tooltip.style.opacity = 0;
  });
  });

  regiones12.forEach((region) => {
  region.addEventListener('mousemove', function (e) {
    const parent = e.target.parentElement;
    const parentId = parent.id;

    tooltip.style.opacity = 1;

    const texto = info[parentId] || this.id;

    tooltip.innerHTML = texto;

    tooltip.style.left = e.pageX + 15 + 'px';
    tooltip.style.top = e.pageY + 15 + 'px';
  });

  region.addEventListener('mouseleave', function () {
    tooltip.style.opacity = 0;
  });
  });

  regiones13.forEach((region) => {
  region.addEventListener('mousemove', function (e) {
    const parent = e.target.parentElement;
    const parentId = parent.id;

    tooltip.style.opacity = 1;

    const texto = info[parentId] || this.id;

    tooltip.innerHTML = texto;

    tooltip.style.left = e.pageX + 15 + 'px';
    tooltip.style.top = e.pageY + 15 + 'px';
  });

  region.addEventListener('mouseleave', function () {
    tooltip.style.opacity = 0;
  });
  });

  regiones14.forEach((region) => {
  region.addEventListener('mousemove', function (e) {
    const parent = e.target.parentElement;
    const parentId = parent.id;

    tooltip.style.opacity = 1;

    const texto = info[parentId] || this.id;

    tooltip.innerHTML = texto;

    tooltip.style.left = e.pageX + 15 + 'px';
    tooltip.style.top = e.pageY + 15 + 'px';
  });

  region.addEventListener('mouseleave', function () {
    tooltip.style.opacity = 0;
  });
  });

  regiones15.forEach((region) => {
  region.addEventListener('mousemove', function (e) {
    const parent = e.target.parentElement;
    const parentId = parent.id;

    tooltip.style.opacity = 1;

    const texto = info[parentId] || this.id;

    tooltip.innerHTML = texto;

    tooltip.style.left = e.pageX + 15 + 'px';
    tooltip.style.top = e.pageY + 15 + 'px';
  });

  region.addEventListener('mouseleave', function () {
    tooltip.style.opacity = 0;
  });
  });
