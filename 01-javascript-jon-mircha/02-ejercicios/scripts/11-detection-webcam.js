export function detectWebcam(IDElement) {
  const $video = document.getElementById(IDElement);
  console.log($video)
  navigator.mediaDevices.getUserMedia({ video: true })
    .then((source) => {
      $video.srcObject = source;
      $video.play();
    })
    .catch((error) => {
      $video.insertAdjacentHTML("beforebegin", `<p>Error: <mark>${error}</mark></p>`)
      console.log(error)
    })
}
