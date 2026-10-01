// Select DOM elements
const form = document.getElementById('registrationForm');
const fullNameInput = document.getElementById('fullName');
const admNoInput = document.getElementById('admNo');
const profilePicInput = document.getElementById('profilePic');

const idCardSection = document.getElementById('idCard');
const displayName = document.getElementById('displayName');
const displayAdm = document.getElementById('displayAdm');
const displayPhoto = document.getElementById('displayPhoto');

// Event listener for form submission
form.addEventListener('submit', function (event) {
  event.preventDefault(); // Prevents page reload

  const name = fullNameInput.value;
  const admNo = admNoInput.value;
  const imageFile = profilePicInput.files[0];

  if (imageFile) {
    const reader = new FileReader();

    // Triggered once the browser finishes reading the file
    reader.onload = function (e) {
      const imageUrl = e.target.result; // Base64 Data URL

      // Update ID Card display
      displayName.textContent = name;
      displayAdm.textContent = admNo;
      displayPhoto.src = imageUrl;

      // Unhide the ID card
      idCardSection.style.display = 'block';
    };

    // Read the file as a Data URL (string format)
    reader.readAsDataURL(imageFile);
  }
});