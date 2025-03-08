// 터치 및 마우스 이벤트를 통해 로고의 획 두께를 계속 증가시키기
var logo = document.getElementById('logo');
var increaseInterval;

// 터치 이벤트 (모바일)
logo.addEventListener('touchstart', function(e) {
  e.preventDefault(); // 스크롤 방지
  increaseInterval = setInterval(function() {
    var logoElements = document.querySelectorAll('#logo .st0');
    logoElements.forEach(function(element) {
      // 현재 stroke-width 값을 가져와서 1px씩 증가
      var currentStroke = parseFloat(window.getComputedStyle(element).strokeWidth);
      var newStroke = currentStroke + 1;
      element.style.strokeWidth = newStroke + "px";
    });
  }, 100); // 100ms마다 증가 (원하는 속도에 맞게 조정 가능)
});

logo.addEventListener('touchend', function(e) {
  clearInterval(increaseInterval);
});

logo.addEventListener('touchcancel', function(e) {
  clearInterval(increaseInterval);
});

// 데스크탑 지원을 위한 마우스 이벤트 (선택사항)
logo.addEventListener('mousedown', function(e) {
  increaseInterval = setInterval(function() {
    var logoElements = document.querySelectorAll('#logo .st0');
    logoElements.forEach(function(element) {
      var currentStroke = parseFloat(window.getComputedStyle(element).strokeWidth);
      var newStroke = currentStroke + 1;
      element.style.strokeWidth = newStroke + "px";
    });
  }, 100);
});

document.addEventListener('mouseup', function(e) {
  clearInterval(increaseInterval);
});

window.addEventListener('load', function() {
  // 토글이 진행된 횟수를 기록 (fade out/in 한 번이 1 toggle)
  let toggleCount = 0;
  const maxToggles = 4; // 3번 반복 = 6번 토글 (fade out + fade in = 1 cycle)
  const messageEl = document.getElementById('message');

  const intervalId = setInterval(function(){
    // 메시지에 hidden 클래스를 토글하여 fade in/out 효과를 줌
    messageEl.classList.toggle('hidden');
    toggleCount++;

    // 3회 반복 후 (6 토글) 메시지를 완전히 제거
    if (toggleCount === maxToggles) {
      clearInterval(intervalId);
      // 트랜지션이 끝날 때까지 약간의 딜레이 후 제거 (여기서는 1초)
      setTimeout(function(){
        messageEl.remove();
      }, 100);
    }
  }, 2000); // 2초마다 실행
});