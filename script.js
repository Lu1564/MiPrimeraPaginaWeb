document.querySelector("button.button-menu-toggle").addEventListener("click", function () {
    document.querySelector(".nav-links").
      classList.toggle("nav-links-responsive")
});


// window.addEventListener('resize', function(event){
//   var width = window.innerWidth;
//   if (width <= 768) {
//       this.document.querySelector(".piePag").classList.toggle("piePag-nuevo")
//   }
// });


const form = document.getElementById('myForm');
form.addEventListener('submit', function (event) {

  validateForm();
});

function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,7}$/;
  return regex.test(email);
}

function validarContra(password) {
  const expresionRegular = /^(?=.*[A-Z])(?=.*[0-9])[A-Za-z0-9]+$/;
  return expresionRegular.test(password);
}

function validateForm() {

  const emailInput = document.getElementById('email');
  const email = emailInput.value;

  const passInput = document.getElementById('password');
  const password = passInput.value;

  if (!validarContra(password)) {
    alert('Contraseña incorrecta');
  }
  if (!validateEmail(email)) {
    alert('Por favor ingrese un correo electrónico válido.');
  } else {
    alert('Correo electrónico enviado correctamente.');
  }
}