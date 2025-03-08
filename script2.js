// 카메라 스트림이 필요하다면 아래 코드를 활성화하세요.
// (촬영이 필요없다면 이 부분은 주석처리해도 무방합니다.)
if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices.getUserMedia({ video: true })
      .then(function(stream) {
        var video = document.getElementById('camera');
        // 최신 브라우저는 srcObject를 사용합니다.
        video.srcObject = stream;
        video.play();
      })
      .catch(function(error) {
        console.error("카메라 접근 오류:", error);
      });
  }
  
  