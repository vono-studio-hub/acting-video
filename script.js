
const video = document.getElementById("actingVideo");

// 초기 음량 (0.0 ~ 1.0)
video.volume = 1.0;

// 음소거 여부
video.muted = false;

// 반복 재생 여부
video.loop = false;

// 재생 속도
video.playbackRate = 1.0;

// 영상 종료 시 처음으로 이동
video.addEventListener("ended", () => {
  video.currentTime = 0;
});
