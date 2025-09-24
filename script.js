const messages = [
  "Web Developer",
  "Software Engineer",
  "Discord Bot Developer",
  "Gardeners who use technology",
];

let index = 0;
let charIndex = 0;
const textElement = document.getElementById("changing-text");
const typingSpeed = 100;   // ความเร็วพิมพ์ทีละตัว (ms)
const delayBetween = 2000; // เวลาหยุดค้างหลังพิมพ์เสร็จ (ms)

function type() {
  if (charIndex < messages[index].length) {
    textElement.textContent += messages[index].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingSpeed);
  } else {
    setTimeout(erase, delayBetween);
  }
}

function erase() {
  if (charIndex > 0) {
    textElement.textContent = messages[index].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, typingSpeed / 2);
  } else {
    index = (index + 1) % messages.length;
    setTimeout(type, typingSpeed);
  }
}

// เริ่มทำงาน
document.addEventListener("DOMContentLoaded", () => {
  // 🔥 เริ่ม typing
  type();

  // Smooth scroll สำหรับ navbar
  const navLinks = document.querySelectorAll('.navbar a');
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
});

