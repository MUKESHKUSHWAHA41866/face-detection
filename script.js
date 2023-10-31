const video = document.getElementById("video");

Promise.all([
    faceapi.nets.tinyFaceDetector.loadFromUri("/models"),
    faceapi.nets.faceLandmark68Net.loadFromUri("/models"),
    // faceapi.nets.faceRecognitionNet.loadFromUri("./models"),
    // faceapi.nets.faceExpressionNet.loadFromUri("./models"),
  ]).then(startWebcam
  );

function startWebcam() {
    navigator.mediaDevices.getUserMedia({
        video: true,
        audio: false,
    })
    .then((stream) => 
    {video.srcObject = stream;})
    .catch((error) => {
        console.log(error);
    });
}

