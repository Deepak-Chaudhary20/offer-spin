function startSpinner() {
    var spinner = document.querySelector('.spinner-inner');
    var offers = document.querySelectorAll('.offer');
    var rotations = Math.floor(Math.random() * 10) + 5; // Random number of rotations (between 5 and 14)
    var angle = 360 * rotations; // Calculate the total angle of rotation
    
    // Remove 'hide' class from offers
    offers.forEach(function (offer) {
      offer.classList.remove('hide');
    });
    
    // Rotate the spinner
    spinner.style.transform = 'rotate(' + angle + 'deg)';
    
    // Hide the offers after the rotation ends
    setTimeout(function() {
      offers.forEach(function (offer) {
        offer.classList.add('hide');
      });
    }, 2000); // 2 seconds (adjust as needed)
  }
  