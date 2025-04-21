async function analyzeImage(file) {
  // Convert image file to base64
  const base64Image = await convertToBase64(file);

  // Upload to Imgur
  const imgurUrl = await uploadToImgur(base64Image);
  if (!imgurUrl) {
    return 'Imgur upload failed';
  }

  // Analyze with Sightengine
  const analysisResult = await analyzeWithSightengine(imgurUrl);
  return analysisResult;
}

// Convert image to base64
function convertToBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result.split(',')[1]); // Remove data:image/...;base64,
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

// Upload to Imgur
async function uploadToImgur(base64Image) {
  try {
    const response = await fetch('https://api.imgur.com/3/image', {
      method: 'POST',
      headers: {
        Authorization: 'bf5806b83f5c000',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ image: base64Image, type: 'base64' }),
    });

    const data = await response.json();
    return data.success ? data.data.link : null;
  } catch (error) {
    console.error('Imgur upload failed:', error);
    return null;
  }
}

// Analyze with Sightengine
async function analyzeWithSightengine(imageUrl) {
  try {
    const response = await fetch(
      `https://api.sightengine.com/1.0/check/images?models=nudity,offensive,scam,gore&api_user=733486322&api_secret=Pu5Tb3wLHYbHZkgnohZuacbA23xES9oH&url=${encodeURIComponent(imageUrl)}`
    );
    const data = await response.json();
    return JSON.stringify(data, null, 2); // You can extract more specific results if needed
  } catch (error) {
    console.error('Sightengine analysis failed:', error);
    return 'Analysis failed';
  }
}
