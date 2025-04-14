// DOM Elements
const imageUpload = document.getElementById('imageUpload');
const uploadText = document.getElementById('uploadText');
const previewImage = document.getElementById('previewImage');
const analyzeButton = document.getElementById('analyzeButton');
const resultText = document.getElementById('resultText');

// Event Listener for Image Upload
imageUpload.addEventListener('change', function (event) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      previewImage.src = e.target.result;
      previewImage.style.display = 'block';
      uploadText.innerText = 'Change Image';
      analyzeButton.disabled = false;
    };
    reader.readAsDataURL(file);
  }
});

// Event Listener for Analyze Button
analyzeButton.addEventListener('click', async function () {
  const file = imageUpload.files[0];
  if (!file) {
    alert('Please upload an image first.');
    return;
  }

  // Disable button during analysis
  analyzeButton.disabled = true;
  analyzeButton.innerText = 'Analyzing...';

  // Simulate API call (replace with actual backend call)
  const result = await analyzeImage(file);

  // Display result
  resultText.innerText = `Result: ${result}`;
  analyzeButton.disabled = false;
  analyzeButton.innerText = 'Analyze Image';
});

// Mock function to simulate image analysis
function analyzeImage(file) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const results = ['Real', 'AI-generated', 'Morphed', 'Edited'];
      const randomResult = results[Math.floor(Math.random() * results.length)];
      resolve(randomResult);
    }, 2000); // Simulate 2-second delay
  });
}