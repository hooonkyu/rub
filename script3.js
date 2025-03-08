document.addEventListener("DOMContentLoaded", function () {
    const thumbnails = document.querySelectorAll(".thumbnail2"); // 모든 썸네일 선택
    const body = document.body;

    // 기존 모달이 있으면 삭제 후 새로 생성
    let existingModal = document.getElementById("imageModal");
    if (existingModal) {
        existingModal.remove();
    }

    // 모달 컨테이너 생성
    let modal = document.createElement("div");
    modal.id = "imageModal";
    modal.className = "image-modal";
    modal.style.display = "none"; // 기본적으로 숨김
    modal.innerHTML = `<img class="modal-image" src="" alt="Expanded Image">`;

    document.body.appendChild(modal);
    const modalImage = modal.querySelector(".modal-image");

    // 이미지 클릭 또는 터치하면 모달 열기
    function openModal(event) {
        event.preventDefault(); // 모바일 기본 동작 방지
        const src = event.currentTarget.getAttribute("src");
        modalImage.setAttribute("src", src);
        modal.style.display = "flex";
        body.style.overflow = "hidden"; // 스크롤 방지
    }

    // 모달 바깥 클릭하면 닫기
    modal.addEventListener("click", function () {
        modal.style.display = "none";
        body.style.overflow = "auto"; // 스크롤 복구
    });

    // 이미지 클릭/터치 시 이벤트 추가 (PC & 모바일 대응)
    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener("click", openModal);
        thumbnail.addEventListener("touchstart", openModal);
    });
});
