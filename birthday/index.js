gsap.registerPlugin(ScrollTrigger);

const idToTextMap = {
  'speaker': {
    text: '',
    isShown: '',
  },
  'face': {
    text: 'Та можно :)',
    isShown: '',
  },
  'chair': {
    text: '',
    isShown: '',
  },
  'table': {
    text: '',
    isShown: '',
  },
  'dog': {
    text: '',
    isShown: '',
  },
  'thermos': {
    text: '',
    isShown: '',
  },
  'cup2': {
    text: '',
    isShown: '',
  },
  'cup1': {
    text: '',
    isShown: '',
  },
  // TODO add element
  'chair2': '',
}

const steps = [
  {
    text: 'Загубились деякі предмети.. Знайди чого не вистачає',
    next: true,
    input: false,
  },
  {
    text: 'Перший предмет знайдеш якщо відгаєш: Я в коробці, але не подарунок. У мені багато деталей, але я не механізм. Зі мною цікаво, коли вимкнений Wi-Fi.',
    next: true,
    input: true,
    answer: '20',
  },
  {
    text: 'Сподіваюсь подаруночок тобі по душі :)',
    next: true,
    input: false,
  },
  {
    text: 'Наступний предмет шукай там де: Мене носять у рулоні, але не читають',
    next: true,
    input: true,
    answer: '04',
  },
  {
    text: 'Щоб пригоди були комфортіншими :)',
    next: true,
    input: false,
  },
  {
    text: 'I останній: Коли зникає зарядка, книга чи  пульт - шукати треба не на столі й не в холодильнику. А де?',
    next: true,
    input: true,
    answer: '2025',
  },
  {
    text: 'З днем народження, моє кохання!',
    next: true,
    input: false,
  },
]

let currentStep = 0;

window.addEventListener("load", () => {
  const infoBox = document.getElementById("infoBox");
  const infoBoxText = document.querySelector("#infoBox p");
  const nextButton = document.getElementById("nextButton");
  const inputAnser = document.getElementById("inputAnser");

  // Scroll
  gsap
  .timeline({
    scrollTrigger: {
      trigger: ".wrapper",
      start: "top top",
      end: "+=150%",
      // SHOW TEXT WHEN END
      onLeave: () => {
        updateAndShowInfoBox(undefined, false, false);
      },
      onEnterBack: () => {
        hideInfoBox();
      },
      pin: true,
      scrub: true,
      // markers: true,
    }
  })
  .fromTo(
    "svg",
    {
      scale: 2,
      transformOrigin: "top center"
    },
    {
      scale: 1,
      ease: "power1.inOut"
    }
  )
  .fromTo(
    ".section.first",
    {
      scale: 1.1,
      transformOrigin: "center center"
    },
    {
      scale: 1,
      ease: "power1.inOut"
    },
    "<"
  );

  // Hide elements that needs to find
  document.querySelectorAll('.haveToFind').forEach(el => {
    el.style.display = 'none';
  });

  nextButton.addEventListener('click', (e) => {
    e.stopPropagation();
    e.preventDefault();
    updateAndShowInfoBox(e, false, true);
  });

  function updateAndShowInfoBox(e, clickPosition = false, isNextStep = true) {
    if (isNextStep) {
      if (steps[currentStep]?.answer) {
        if (inputAnser.value === steps[currentStep].answer) {
          currentStep += 1;
          inputAnser.value = '';
        }
      } else {
        currentStep += 1;
      }
    }

    const step = steps[currentStep];
    const textToShow = step?.text;

    if (!textToShow) {
      hideInfoBox();
      return;
    }

    // Position near mouse or element
    if (clickPosition && e) {
      infoBox.style.bottom = `${e.clientY + 10}px`;
      infoBox.style.left = `${e.clientX + 10}px`;
    }

    // Position at the bottom
    if (!clickPosition || !infoBox.style.top) {
      infoBox.style.bottom = '100px';
      infoBox.style.left = `50px`;
    }

    if (step.next) {
      nextButton.style.display = "block";
    } else {
      nextButton.style.display = "none";
    }

    if (step.input) {
      inputAnser.style.display = "block";
    } else {
      inputAnser.style.display = "none";
    }

    infoBoxText.innerText = textToShow;
    infoBox.style.display = "block";

    gsap.fromTo(infoBox, { opacity: 0 }, { opacity: 1, duration: 0.3 });
  }

  function hideInfoBox() {
    gsap.fromTo(infoBox, { opacity: 1 }, { opacity: 0, duration: 0.3 });
    nextButton.style.display = "none";
    inputAnser.style.display = "none";
  };
});
