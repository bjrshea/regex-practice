// validation script here
const inputs = document.querySelectorAll('input');
const patterns = {
  username: /^[a-z\d]{5,12}$/i,
  password: /^[\w@-]{8,20}$/,
  telephone: /^\d{11}$/,
  slug: /^[a-z\d-]{8,20}$/,
  email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/i
}

function validate(field, regex) {
  if(regex.test(field.value) === true) {
    field.className = 'valid';
  } else {
    field.className ='invalid';
  }
}

inputs.forEach(function(input){
  input.addEventListener('keyup', function(e){
    validate(e.target, patterns[e.target.attributes.name.value])
  });
});
