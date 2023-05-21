function autoSlide() {
  const boxes = document.querySelectorAll('#boxes .box');
  let currentIndex = 0;

  function showBox(index) {
    boxes.forEach(box => {
    box.style.display = 'none';
    // box.style.transform = 'translateX()'; // slide out to the right
      box.style.opacity = '0'; // hide the box during the transition
      box.style.animation = 'fadeAndSlideOut 0.5s backwards'; // animate the display property
    });
    boxes[index].style.display = 'block';
    // <!-- boxes[index].style.transform = 'translateX()'; // slide in from the right -->
    boxes[index].style.opacity = '1'; // show the box
    boxes[index].style.animation = 'fadeAndSlideIn 0.5s backwards'; // animate the display property
  }

  function nextSlide() {
    currentIndex++;
    if (currentIndex >= boxes.length) {
      currentIndex = 0;
    }
    showBox(currentIndex);
  }

  setInterval(nextSlide, 5000); // Change slide every 5 seconds (adjust as needed)

  showBox(currentIndex);
}

autoSlide();

console.log(
 autoSlide()
);
