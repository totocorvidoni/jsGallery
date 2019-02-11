const DOM = (() => {
  const navDots = document.querySelectorAll('.dot');
  const picture = document.querySelector('#picture');
  const prev = document.querySelector('#prev');
  const next = document.querySelector('#next');

  const setPic = (id) => {
    navDots.forEach((dot) => {
      if (parseInt(dot.dataset.picId, 10) === id) {
        dot.classList.add('active-nav');
      } else {
        dot.classList.remove('active-nav');
      }
    });
    picture.setAttribute('src', `images/pic-${id}.jpg`);
    picture.dataset.picId = id;
  };

  const navActivate = (element) => {
    setPic(element.dataset.picId);
  };

  const activateNext = () => {
    if (picture.dataset.picId === '6') {
      setPic(1);
    } else {
      setPic(parseInt(picture.dataset.picId, 10) + 1);
    }
  };

  const activatePrev = () => {
    if (picture.dataset.picId === '1') {
      setPic(6);
    } else {
      setPic(parseInt(picture.dataset.picId, 10) - 1);
    }
  };

  const setUpListeners = () => {
    navDots.forEach((dot) =>
      dot.addEventListener('click', function setActivate() {
        navActivate(this);
      }),
    );
    prev.addEventListener('click', activatePrev);
    next.addEventListener('click', activateNext);
  };

  return {
    setUpListeners,
    activateNext,
  };
})();

export default DOM;
