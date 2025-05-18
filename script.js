const fileInput = document.getElementById('fileInput');
const uploadBtn = document.getElementById('uploadBtn');
const clearBtn = document.getElementById('clearBtn');
const resultDiv = document.getElementById('result');
const canvas = document.getElementById('imageCanvas');
const ctx = canvas.getContext('2d');
const loading = document.getElementById('loading');

let model; // Placeholder

// Load your ML model
async function loadModel() {
  resultDiv.textContent = 'Loading model...';
  // Mock load - Replace with actual model loading if available
  await new Promise(res => setTimeout(res, 1000));
  // model = await tf.loadLayersModel('model.json'); // your actual model path
  model = true; // Mock
  resultDiv.textContent = 'Model ready. Upload an image.';
}
loadModel();

function displayImage(file) {
  const reader = new FileReader();
  reader.onload = function (event) {
    const img = new Image();
    img.onload = function () {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      classifyImage(); // You can replace this with real inference
    };
    img.src = event.target.result;
  };
  reader.readAsDataURL(file);
}

function classifyImage() {
  loading.style.display = 'block';
  resultDiv.textContent = '';
  setTimeout(() => {
    loading.style.display = 'none';
    // Simulated result
    resultDiv.textContent = 'Prediction: Guitar 🎸';
  }, 2000); // Replace with real prediction delay
}

uploadBtn.addEventListener('click', () => fileInput.click());
fileInput.addEventListener('change', (e) => {
  const file = e.target.files[0];
  if (file) displayImage(file);
});

clearBtn.addEventListener('click', () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  resultDiv.textContent = 'Cleared.';
});
