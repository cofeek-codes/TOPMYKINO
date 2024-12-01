const containerMass = 5;
const mouseMass = 10;

let imageHasLoaded = false;

let mouseX = 0;
let prevMouseX = 0;
let mouseXOnDown = null;
let isMouseDown = false;

let containerPosition = 0;
let mouseVelocity = 0;
let containerVelocity = 0;

let imagesElement = null;

const createBeltScroller = (container, images) => {
  imageHasLoaded = true;
  const beltDOMItems = images.map((image, index) => {
    const element = document.createElement("div");
    element.style.position = "relative";
    element.classList.add("item");
    const elementImage = document.createElement("img");
    elementImage.style.height = "100%";
    for (let i = 0; i < movies.length; i++) {
      if (image == movies[i].name) {
        elementImage.src = `./assets/img/${movies[i].srcfull}`;
        element.appendChild(elementImage);
        const elementScore = document.createElement("span");
        if (image == movies[i].name) {
          if (movies[i].rating%1==0) {
            elementScore.innerHTML = movies[i].rating + ".0";
          }
          else {
            elementScore.innerHTML = movies[i].rating;
          }
          if (movies[i].rating >= 6.66) {
            elementScore.style.background = "green";
          } else if (movies[i].rating >= 3.33) {
            elementScore.style.background = "#FF8C20";
          } else {
            elementScore.style.background = "red";
          }
        }
        element.appendChild(elementScore);
        const elementA = document.createElement("a");
        elementA.classList.add('movieresult')
        elementA.classList.add('res-'+movies[i].id)
        if (image == movies[i].name) {
          elementA.innerHTML = movies[i].name;
        }
        elementA.href = "./pages/thismovie.html";
        element.appendChild(elementA);
        return element;
      }
      if (image == "Больше Фильмов") {
        const elementA = document.createElement("a");
        elementA.classList.add('moreMovies')
        elementA.innerHTML = image;
        elementA.href = "./pages/movies.html";
        element.appendChild(elementA);
        element.style.textAlign = 'center'
        element.style.paddingTop = "1%"
        return element;
      }
    }
  });
  imagesElement = beltDOMItems.map((element) => element);
  beltDOMItems.forEach((beltDOMItem) => {
    container.appendChild(beltDOMItem);
  });
};
const container = document.querySelector(".sliderMovies");

createBeltScroller(container, [
  "Пчеловод",
  "Главный герой",
  "Angry Birds 2 в кино",
  "Ёлки 5",
  "Гемини",
  "Зверопой 2",
  "Я Легенда",
  "Кунг-фу Панда 4",
  "Барби",
  "Чебурашка",
  "Больше Фильмов"
]);

// Mouse event handlers
const onMouseUpdate = (event) => { mouseX = event.pageX; }; // Mouse movement
const onMouseDown = () => { isMouseDown = true; }; // Mouse button press
const onMouseUp = () => { isMouseDown = false; }; // Mouse button release

// Add mouse event listeners
document.addEventListener("pointermove", onMouseUpdate, false);
document.querySelector(".sliderMovies").addEventListener("pointerdown", onMouseDown);
document.addEventListener("pointerup", onMouseUp);
let TimeMouseVelocity

const calculateMouseMomentum = () => {
  if (isMouseDown) {
    if (mouseXOnDown == null) {
      mouseXOnDown = mouseX;
      containerVelocity = 0;
    }
    const distance = mouseX - mouseXOnDown;

    if (prevMouseX == 0) prevMouseX = mouseX
    mouseVelocity = mouseX - prevMouseX;
  } else {
    if (mouseXOnDown != null) {
      containerVelocity =
        ((2 * mouseMass) / (mouseMass + containerMass)) * mouseVelocity +
        ((containerMass - mouseMass) / (mouseMass + containerMass)) *
        containerVelocity;

      const maxVelocity = 60;

      if (containerVelocity > maxVelocity) {
        containerVelocity = maxVelocity;
      } else if (containerVelocity < -maxVelocity) {
        containerVelocity = -maxVelocity;
      }

      mouseXOnDown = null;
      mouseVelocity = 0;
      mouseX = 0
      prevMouseX = 0

    }
  }

  prevMouseX = mouseX;
  mouseXSerials = mouseX
};

const updateContainer = () => {
  const boundRight = -container.offsetWidth + window.innerWidth - 85;

  const isOutBound =
    containerPosition > 0 || containerPosition < boundRight;

  if (!isMouseDown) {
    const mu = 0.04;
    const g = 10;
    const flictionForce = containerMass * g * mu;
    const flictionA = flictionForce / containerMass;

    if (containerVelocity > 0) {
      containerVelocity -= flictionA;
      if (containerVelocity < 0) {
        containerVelocity = 0;
      }
    } else if (containerVelocity < 0) {
      containerVelocity += flictionA;
      if (containerVelocity > 0) {
        containerVelocity = 0;
      }
    }

    if (isOutBound) {
      const k = 0.01;
      const restLength = containerPosition > 0 ? 0 : boundRight;
      const currentLength = containerPosition;
      const dragForce = 1 * k * (restLength - currentLength);

      const dragForceA = dragForce / containerMass;
      containerVelocity += dragForce;

      const nextPosition = containerPosition + containerVelocity;

      if (containerPosition < boundRight && nextPosition > boundRight) {
        containerVelocity = 0;
        containerPosition = boundRight;
      } else if (containerPosition > 0 && nextPosition < 0) {
        containerVelocity = 0;
        containerPosition = 0;
      }
    }
  }

  containerPosition = containerPosition + containerVelocity + (isOutBound ? mouseVelocity / 2 : mouseVelocity);
  container.style.transform = `translate(${containerPosition}px)`;
};

const loop = () => {
  calculateMouseMomentum();
  updateContainer();
  window.requestAnimationFrame(() => {
    loop();
  });
};

loop();
