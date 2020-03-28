/** @param {HTMLAnchorElement} target */
function handleNavClick(target) {
  if (!target.href) return;
  const linkParts = target.href.split("#");
  if (linkParts.length !== 2) return;
  updateBodyClass(linkParts[1]);
}

/** @param {anchorHash} string */
function updateBodyClass(anchorHash) {
  const newClass = `${anchorHash}-active`;
  document.body.classList.remove(document.body.dataset.activeClass);
  document.body.classList.add(newClass);
  document.body.dataset.activeClass = newClass;
}

window.addEventListener("DOMContentLoaded", () => {
  const nav = document.getElementById("main-navigation");
  if (nav) {
    document.body.classList.add("js-enabled");
    updateBodyClass((window.location.hash || "#home").slice(1));
    Array.from(nav.querySelectorAll("a")).forEach(menuLink => {
      menuLink.addEventListener("click", ({ target }) =>
        handleNavClick(target)
      );
    });
  }
});
