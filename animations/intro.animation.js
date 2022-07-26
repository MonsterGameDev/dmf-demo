export const playIntroAnimation = () => {
    moveInleft.play();
    rotateIn.play();
    moveInRight.play();
    moveInFromBottom.play();
    rollInFromRight.play();
};

const animationOptions = {
    fill: "forwards",
    duration: 2000,
    easing: "ease-out",
    delay: 500,
  };
  // ** MOVE IN FROM LEFT
  const topHeader = document.querySelector(".hero__header__sub--top");
  const topHeaderKfs = [
    {
      opacity: 0,
      transform: "translateX(-10rem)",
    },
    {
      transform: "translateX(1rem)",
      offset: 0.8,
    },
    {
      opacity: 1,
      transform: "translate(0)",
    },
  ];
  const topHeaderFx = new KeyframeEffect(topHeader,topHeaderKfs,animationOptions);
  const moveInleft = new Animation(topHeaderFx);
  //moveInleft.play();
  
  // ** ROTATE VERTICAL
  const middleHeader = document.querySelector(".hero__header__main");
  const middleHeaderKFs = [
    {
      opacity: 0,
      transform: "scale(.5)",
    },
    {
      transform: "scale(1)",
      offset: 0.8,
    },
    {
      transform: "rotateX(0) scale(1)",
      opacity: 1,
    },
  ];
  const middleHeaderFx = new KeyframeEffect(middleHeader,middleHeaderKFs, animationOptions);
  const rotateIn = new Animation(middleHeaderFx);
  //rotateIn.play();
  
  // ** MOVE IN FROM RIGHT
  const bottomHeader = document.querySelector(".hero__header__sub--bottom");
  const bottomHeaderKfs = [
    {
      opacity: 0,
      transform: "translateX(10rem)",
    },
    {
      transform: "translateX(-1rem)",
      offset: 0.8,
    },
    {
      opacity: 1,
      transform: "translate(0)",
    },
  ];
  const bottomHeaderFx = new KeyframeEffect( bottomHeader, bottomHeaderKfs,animationOptions);
  
  const moveInRight = new Animation(bottomHeaderFx);
  //moveInRight.play();
  
  // MOVE IN FROM BOTTOM
  const buttonEnter = document.querySelector(".btn--red");
  const buttonEnterKFs = [
    {
      opacity: 0,
      transform: "translateY(13rem)",
    },
    {
      opacity: 1,
      transform: "translate(0)",
    },
  ];
  const buttonEnterFx = new KeyframeEffect(buttonEnter, buttonEnterKFs, {
    ...animationOptions,
    delay: 1500,
    easing: "cubic-bezier(.17,.67,.76,1.48)",
    duration: 1000,
    fill: "forwards",
  });
  const moveInFromBottom = new Animation(buttonEnterFx);
  //moveInFromBottom.play();
  
  // ** ROLL IN FROM RIGHT
  const logo = document.querySelector(".hero__logo");
  const logoKFs = [
    {
      opacity: 0,
      transform: "translateX(50vw) rotate(720deg)",
    },
    {
      opacity: 1,
      transform: "translate(0) rotate (0)",
    },
  ];
  const logoFx = new KeyframeEffect(logo, logoKFs, {
    ...animationOptions,
    delay: 2000,
    easing: "cubic-bezier(.17,.67,.43,1.27)",
  });
  const rollInFromRight = new Animation(logoFx);
  //rollInFromRight.play();
  