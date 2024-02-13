document.addEventListener('DOMContentLoaded', (e) => {
  e.preventDefault();
  const audio = document.getElementById('backgroundAudio');
  setTimeout(function() {
    audio.muted = false;
    audio.play();
  }, 1000);
  const btnYes = document.getElementById('yes');
  const btnNo = document.getElementById('no');
  const wrapper = document.querySelector('.card');
  const wrapperRect = wrapper.getBoundingClientRect();
const noBtnRect = btnNo.getBoundingClientRect();

btnNo.addEventListener('mouseover', (e) => {
  e.preventDefault();
  const i = Math.floor(Math.random() * (wrapperRect.width - noBtnRect.width)) + 1;
    const j = Math.floor(Math.random() * (wrapperRect.height - noBtnRect.height)) + 1;
    btnNo.style.left = i + 'px';
    btnNo.style.top = j + 'px';
});

btnNo.addEventListener('click', (e) => {
  e.preventDefault();
  const i = Math.floor(Math.random() * (wrapperRect.width - noBtnRect.width)) + 1;
    const j = Math.floor(Math.random() * (wrapperRect.height - noBtnRect.height)) + 1;
    btnNo.style.left = i + 'px';
    btnNo.style.top = j + 'px';
});

function createEmojiRain() {
      const container = document.getElementById("emojiRainContainer");

      setInterval(function() {
        const emoji = document.createElement("span");
        emoji.innerHTML = "🖤";
        emoji.classList.add("emoji");
        emoji.style.left = Math.random() * window.innerWidth + "px";

        container.appendChild(emoji);

        emoji.addEventListener("animationend", function() {
          container.removeChild(this);
        });
      }, 200);
    }

btnYes.addEventListener('click', (e) => {
  e.preventDefault();
  wrapper.style.display = 'none';
  setTimeout(function() {
    createEmojiRain();
  }, 1000);
  
  const textElement = document.getElementById('prm');
  const textToType = "Happy Valentine...";
  let index = 0;

  function typeText() {
    if (index < textToType.length) {
      textElement.classList.add('cursor');
      textElement.innerHTML += textToType.charAt(index);
      index++;
      setTimeout(typeText, 100);
    } else {
      textElement.classList.remove('cursor');
    }
  };
  setTimeout(typeText, 1000);
  
  const isi = document.getElementById('ktr');
  const ftr = document.getElementById('ftr');
  
  setTimeout( () => {
  isi.classList.add('animasi1');
  ftr.classList.add('animasi1');
  isi.style.display = 'block';
  ftr.style.display = 'block';
  }, 3000);
  
  assetTimeout( () => {
  isi.classList.remove('animasi1');
  ftr.classList.remove('animasi1');
  }, 6000);
  
});

});
