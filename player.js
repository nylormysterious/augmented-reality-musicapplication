
let drums = new Howl({
  src: ["./audio/drums.mp3"]
});

let guitar = new Howl({
  src: ["./audio/guitar.mp3"]
});

let mic = new Howl({
  src: ["./audio/mic.mp3"]
});

let piano = new Howl({
  src: ["./audio/piano.mp3"]
});

drums.play();
guitar.play();
mic.play();
piano.play();

window.onload = function () {
  let guitarMarker = document.getElementById("guitar-marker");
  guitarMarker.addEventListener("markerFound", function () {
    // Start playing or UNMUTE
    guitar.mute(false);
  });
  guitarMarker.addEventListener("markerLost", function () {
    // Stop playing or MUTE
    guitar.mute(true);
  });

  let drumsMarker = document.getElementById("drums-marker");
  drumsMarker.addEventListener("markerFound", function () {
    // Start playing or UNMUTE
    drums.mute(false);
  });
  drumsMarker.addEventListener("markerLost", function () {
    // Stop playing or MUTE
    drums.mute(true);
  });

  let micMarker = document.getElementById("mic-marker");
  micMarker.addEventListener("markerFound", function () {
    // Start playing or UNMUTE
    mic.mute(false);
  });
  micMarker.addEventListener("markerLost", function () {
    // Stop playing or MUTE
    mic.mute(true);
  });

  let pianoMarker = document.getElementById("piano-marker");
  pianoMarker.addEventListener("markerFound", function () {
    // Start playing or UNMUTE
    piano.mute(false);
  });
  pianoMarker.addEventListener("markerLost", function () {
    // Stop playing or MUTE
    piano.mute(true);
  });
};
