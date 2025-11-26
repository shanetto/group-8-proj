const pinboard = document.getElementById("pinboard");
const screenContainer = document.getElementById("screen-container");

let currentScreen = 1;
const screen1 = document.getElementById("screen-1");
const screen2 = document.getElementById("screen-2");

const leftArrow = document.getElementById("left-arrow");
const rightArrow = document.getElementById("right-arrow");

rightArrow.onclick = () => switchScreen(2);
leftArrow.onclick = () => switchScreen(1);

function switchScreen(target) {
  if (target === currentScreen) return;
  if (target === 2) {
    screen1.style.left = "-100%";
    screen2.style.left = "0";
  } else {
    screen1.style.left = "0";
    screen2.style.left = "100%";
  }
  currentScreen = target;
}

document.querySelectorAll(".ear").forEach((ear) => {
  ear.dataset.homeParent = ear.parentNode.id;
  ear.dataset.homeIndex = [...ear.parentNode.children].indexOf(ear);
});

let dragged = null;
let placeholder = null;
let offsetX = 0,
  offsetY = 0;
let pointerId = null;
let raf = null;
let targetX = 0,
  targetY = 0;

function onPointerDown(e) {
  if (e.pointerType === "mouse" && e.button !== 0) return;
  e.preventDefault();

  dragged = e.currentTarget;
  pointerId = e.pointerId;
  dragged.setPointerCapture && dragged.setPointerCapture(pointerId);

  const rect = dragged.getBoundingClientRect();
  offsetX = e.clientX - rect.left;
  offsetY = e.clientY - rect.top;

  placeholder = document.createElement("div");
  placeholder.className = "ear-placeholder";
  placeholder.style.width = rect.width + "px";
  placeholder.style.height = rect.height + "px";
  dragged.parentNode.insertBefore(placeholder, dragged);

  document.body.appendChild(dragged);
  dragged.classList.add("dragging");
  dragged.style.position = "absolute";
  dragged.style.width = rect.width + "px";
  dragged.style.height = rect.height + "px";
  dragged.style.zIndex = 9999;

  targetX = e.clientX - offsetX;
  targetY = e.clientY - offsetY;
  updatePosition();

  window.addEventListener("pointermove", onPointerMove);
  window.addEventListener("pointerup", onPointerUp);
}

function onPointerMove(e) {
  if (!dragged || e.pointerId !== pointerId) return;
  e.preventDefault();
  targetX = e.clientX - offsetX;
  targetY = e.clientY - offsetY;
}

function updatePosition() {
  if (!dragged) return;
  dragged.style.left = targetX + "px";
  dragged.style.top = targetY + "px";
  raf = requestAnimationFrame(updatePosition);
}

function onPointerUp(e) {
  if (!dragged || e.pointerId !== pointerId) return;

  cancelAnimationFrame(raf);
  raf = null;
  dragged.releasePointerCapture && dragged.releasePointerCapture(pointerId);

  const pinRect = screenContainer.getBoundingClientRect();
  const inside =
    e.clientX >= pinRect.left &&
    e.clientX <= pinRect.right &&
    e.clientY >= pinRect.top &&
    e.clientY <= pinRect.bottom;

  if (placeholder) placeholder.remove();

  if (inside) {
    const homeParent = document.getElementById(dragged.dataset.homeParent);
    const homeIndex = parseInt(dragged.dataset.homeIndex, 10);

    restoreEarStyles(dragged);

    const kids = [...homeParent.children];

    if (homeIndex >= kids.length) {
      homeParent.appendChild(dragged);
    } else {
      homeParent.insertBefore(dragged, kids[homeIndex]);
    }

    delete dragged.dataset.removedFromMenu;
  } else {
    dragged.dataset.removedFromMenu = "true";
    dragged.classList.remove("dragging");
    dragged.style.cursor = "grab";
  }

  dragged = null;
  placeholder = null;
  pointerId = null;

  window.removeEventListener("pointermove", onPointerMove);
  window.removeEventListener("pointerup", onPointerUp);
}

function restoreEarStyles(el) {
  el.style.position = "";
  el.style.left = "";
  el.style.top = "";
  el.style.zIndex = "";
  el.style.width = "";
  el.style.height = "";
  el.style.cursor = "grab";
  el.classList.remove("dragging");
}

document.querySelectorAll(".ear").forEach((ear) => {
  ear.style.touchAction = "none";
  ear.addEventListener("pointerdown", onPointerDown);
});

document.addEventListener("dblclick", (e) => {
  const el = e.target.closest(".ear");
  if (!el || el.dataset.removedFromMenu !== "true") return;

  const homeParent = document.getElementById(el.dataset.homeParent);
  const homeIndex = parseInt(el.dataset.homeIndex, 10);
  const kids = [...homeParent.children];

  restoreEarStyles(el);

  if (homeIndex >= kids.length) homeParent.appendChild(el);
  else homeParent.insertBefore(el, kids[homeIndex]);

  delete el.dataset.removedFromMenu;
});

document.getElementById("enter-button").onclick = () => {
  const ts = document.getElementById("title-screen");
  ts.style.opacity = "0";
  setTimeout(() => (ts.style.display = "none"), 800);
};
