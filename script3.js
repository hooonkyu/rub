document.addEventListener("DOMContentLoaded", function () {
    const thumbnails = document.querySelectorAll(".thumbnail2");

    thumbnails.forEach((thumbnail) => {
        thumbnail.addEventListener("click", function () {
            openImage(this);
        });
    });
});

function openImage(img) {
    // 기존 모달이 있으면 삭제 후 새로 생성
    let existingModal = document.getElementById("imageModal");
    if (existingModal) {
        existingModal.remove();
    }

    // 모달 컨테이너 생성
    let modal = document.createElement("div");
    modal.id = "imageModal";
    modal.className = "image-modal";
    modal.onclick = closeImage; // 배경 클릭 시 닫기

    // 확대할 이미지 생성
    let modalImg = document.createElement("img");
    modalImg.src = img.src; // 클릭한 이미지의 src 가져오기
    modalImg.className = "modal-image";

    // 모달에 이미지 추가 후 body에 추가
    modal.appendChild(modalImg);
    document.body.appendChild(modal);
}

function closeImage() {
    let modal = document.getElementById("imageModal");
    if (modal) {
        modal.remove();
    }
}
