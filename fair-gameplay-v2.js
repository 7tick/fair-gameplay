// fair-gameplay v2 by j4y3m
const $ = document.querySelector.bind(document);
const e = new Event(`keydown`);
setInterval(() => {
  const [curr, exit, cont] = [
    $(`.current`),
    $(`[svgicon="exit"]`)?.parentElement,
    $(`.stages-holder`),
  ];
  if (!window.location.href.includes(`game/play`)) {
    if (cont && !cont.querySelector(`div`).classList.contains(`side-nudge`)) {
      cont.querySelector(`button`).click();
    }
  } else if (curr) {
    eval(curr.textContent.replace("×", "*").replace("÷", "/"))
      .toString()
      .split(``)
      .forEach(x => {
        e.key = x;
        window.dispatchEvent(e);
      });
    $(`.key-ent`).click();
  } else if (!exit.closest(`.width-100`).classList?.contains(`hidden`)) {
    exit.click();
  }
}, 225);
