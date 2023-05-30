const dice = document.getElementById('dice');
let isRolling = false;

dice.addEventListener('click', function() {
  if (isRolling) {
    dice.style.animationPlayState = 'paused';
  } else {
    dice.style.animationPlayState = 'running';
  }
  
  isRolling = !isRolling;
});
