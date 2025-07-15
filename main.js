document.addEventListener("DOMContentLoaded", function () {
  // ✅ [1] 헤더 스크롤 시 색상 전환
  const header = document.querySelector('header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // ✅ [2] 메뉴 드롭다운 (메가메뉴)
  const triggers = document.querySelectorAll('.menu-trigger');
  const megaMenu = document.querySelector('.mega-menu');
  let menuTimeout;

  function showMegaMenu() {
    clearTimeout(menuTimeout);
    if (megaMenu) {
      megaMenu.style.display = 'block';
    }
  }

  function hideMegaMenu() {
    menuTimeout = setTimeout(() => {
      if (megaMenu && !megaMenu.matches(':hover')) {
        megaMenu.style.display = 'none';
      }
    }, 150);
  }

  triggers.forEach(trigger => {
    trigger.addEventListener('mouseenter', showMegaMenu);
    trigger.addEventListener('mouseleave', hideMegaMenu);
  });

  if (megaMenu) {
    megaMenu.addEventListener('mouseenter', showMegaMenu);
    megaMenu.addEventListener('mouseleave', hideMegaMenu);
  }

  // ✅ [3] 자동 이미지 슬라이드
  const slider = document.querySelector('.slider');
  const slides = document.querySelectorAll('.slide');
  const dots = document.querySelectorAll('.dot');
  const prevBtn = document.querySelector('.slider-btn.prev');
  const nextBtn = document.querySelector('.slider-btn.next');
  let currentIndex = 0;
  const totalSlides = slides.length;
  let slideInterval;

  function goToSlide(index) {
    currentIndex = index;
    if (slider) {
      slider.style.transform = `translateX(-${index * 100}%)`;
    }
    updateDots();
  }

  function updateDots() {
    if (!dots) return;
    dots.forEach(dot => dot.classList.remove('active'));
    if (dots[currentIndex]) dots[currentIndex].classList.add('active');
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    goToSlide(currentIndex);
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    goToSlide(currentIndex);
  }

  function startSlideShow() {
    slideInterval = setInterval(nextSlide, 4000);
  }

  function stopSlideShow() {
    clearInterval(slideInterval);
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      stopSlideShow();
      nextSlide();
      startSlideShow();
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      stopSlideShow();
      prevSlide();
      startSlideShow();
    });
  }

  if (dots.length > 0) {
    dots.forEach(dot => {
      dot.addEventListener('click', (e) => {
        stopSlideShow();
        const index = parseInt(e.target.getAttribute('data-index'));
        goToSlide(index);
        startSlideShow();
      });
    });
  }

  if (slider && slides.length > 0) {
    goToSlide(0);
    startSlideShow();
  }

  // ✅ [4] 노란 바 메뉴 열고 닫기 + 오른쪽 패널 숨김
  const menuToggle = document.getElementById('menuToggle');
  const menuClose = document.getElementById('menuClose');
  const fullMenu = document.getElementById('fullMenu');
  const floatingPanel = document.querySelector('.floating-panel');

  menuToggle.addEventListener('click', () => {
    fullMenu.style.display = 'flex';
    floatingPanel.style.display = 'none';
    menuToggle.style.display = 'none';
    menuClose.style.display = 'block';
  });

  menuClose.addEventListener('click', () => {
    fullMenu.style.display = 'none';
    floatingPanel.style.display = 'flex';
    menuToggle.style.display = 'block';
    menuClose.style.display = 'none';
  });
});

document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const image = document.querySelector('.parallax-image');
    if (image) {
      image.style.transform = `translateY(${scrollY * -0.2}px)`;
    }
  });
});