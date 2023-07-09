function volume_sphere(event) {
  event.preventDefault(); // Prevents the form from submitting and refreshing the page

  // Get the radius value from the input field
  var radius = parseFloat(document.getElementById('radius').value);

  // Calculate the volume of the sphere
  var volume = (4 / 3) * Math.PI * Math.pow(radius, 3);

  // Update the volume field with the calculated value
  document.getElementById('volume').value = volume.toFixed(2);
}

window.onload = function() {
  document.getElementById('MyForm').onsubmit = volume_sphere;
};
