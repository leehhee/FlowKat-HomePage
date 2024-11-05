// window.addEventListener('load', function() {
//     window.scrollTo(0, 0); // 페이지가 로드되면 스크롤을 맨 위로 초기화
// });

// $(document).ready(function() {
//     window.scrollTo(0, 0); // 페이지 로드 후 스크롤 위치를 (0,0)으로 설정
// });

document.addEventListener('DOMContentLoaded', () => {
    const blackSection = document.querySelector('.black');
    const orangeSection = document.querySelector('.orange');
    
    let isBlackVisible = true;
  
    // 초기 상태로 블랙 섹션 보이기
    blackSection.classList.add('visible');
  
    // 섹션 전환 간격 (밀리초 단위)
    const intervalTime = 3000; // 3초
  
    // 반복적으로 섹션을 전환
    setInterval(() => {
      if (isBlackVisible) {
        // 블랙 섹션 사라짐
        blackSection.classList.remove('visible');
        // 오렌지 섹션 보이기
        orangeSection.classList.add('visible');
      } else {
        // 오렌지 섹션 사라짐
        orangeSection.classList.remove('visible');
        // 블랙 섹션 보이기
        blackSection.classList.add('visible');
      }
      
      // 현재 상태 토글
      isBlackVisible = !isBlackVisible;
    }, intervalTime);
  });
  


// $(document).ready(function() {
//     const targetSection = $('#target-section'); // 타겟 섹션 선택
//     const targetOffset = targetSection.offset().top; // 타겟 섹션의 위쪽 위치

//     $(window).on('scroll', function() {
//         const scrollY = window.scrollY;

//         console.log(scrollY); // 확인용 메시지
//         if (scrollY > targetOffset) { // 타겟 섹션 위치에서 인버트 시작
//             $('.header').addClass('header--invert'); // invert 클래스를 추가
//             console.log('헤더 인버트됨!'); // 확인용 메시지
//         } else {
//             $('.header').removeClass('header--invert'); // 인버트 클래스를 제거
//             console.log('헤더 인버트 해제됨!'); // 확인용 메시지
//         }
//     });
// });

$(document).ready(function() {
    const header = $('.header'); // 헤더 요소를 변수로 저장
    const viewportHeight = $(window).height(); // 뷰포트의 높이(100vh)
    
    $(window).on('scroll', function() {
        const scrollY = $(window).scrollTop(); // 현재 스크롤 위치

        console.log('스크롤 위치: ' + scrollY); // 확인용 메시지

        if (scrollY > viewportHeight) { // 스크롤 위치가 100vh를 넘으면
            header.addClass('header--invert'); // 헤더에 'header--invert' 클래스 추가
            console.log('헤더 인버트됨!'); // 확인용 메시지
        } else {
            header.removeClass('header--invert'); // 헤더에서 'header--invert' 클래스 제거
            console.log('헤더 인버트 해제됨!'); // 확인용 메시지
        }
    });
});



document.addEventListener('DOMContentLoaded', () => {
    const scrollContainer = document.querySelector('.function_scroll');
    const prevButton = document.querySelector('.arrow-prev');
    const nextButton = document.querySelector('.arrow-next');

    // 스크롤 상태 업데이트 함수
    function updateButtonState() {
        const scrollLeft = scrollContainer.scrollLeft;
        const scrollWidth = scrollContainer.scrollWidth;
        const clientWidth = scrollContainer.clientWidth;

        // 왼쪽 끝에 도달했을 때
        prevButton.disabled = scrollLeft === 0;

        // 오른쪽 끝에 도달했을 때
        nextButton.disabled = scrollLeft + clientWidth >= scrollWidth;
    }

    // 스크롤 이벤트 리스너
    scrollContainer.addEventListener('scroll', updateButtonState);

    prevButton.addEventListener('click', () => {
        scrollContainer.scrollBy({
            top: 0,
            left: -window.innerWidth * 0.51,
            behavior: 'smooth'
        });
        updateButtonState(); // 버튼 상태 업데이트
    });

    nextButton.addEventListener('click', () => {
        scrollContainer.scrollBy({
            top: 0,
            left: window.innerWidth * 0.507,
            behavior: 'smooth'
        });
        updateButtonState(); // 버튼 상태 업데이트
    });

    // 초기 버튼 상태 업데이트
    updateButtonState();
});


