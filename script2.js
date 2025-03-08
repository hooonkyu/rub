let currentCamera = "environment"; // 기본값: 후면 카메라
let stream = null; // 현재 스트림 저장

function startCamera(cameraFacing) {
    // 기존 스트림이 있다면 중지
    if (stream) {
        stream.getTracks().forEach(track => track.stop());
    }

    // 새로운 스트림 요청
    navigator.mediaDevices.getUserMedia({
        video: { facingMode: cameraFacing }
    })
    .then(function(newStream) {
        stream = newStream;
        var video = document.getElementById('camera');
        video.srcObject = newStream;
        video.play();
    })
    .catch(function(error) {
        console.error("카메라 접근 오류:", error);
    });
}

// 초기 실행 (후면 카메라 사용)
startCamera("environment");

// 터치하면 카메라 변경
document.getElementById('camera').addEventListener("click", function() {
    currentCamera = (currentCamera === "environment") ? "user" : "environment";
    startCamera(currentCamera);
});
