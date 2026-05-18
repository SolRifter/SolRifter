import "./frontend/lib/3d.js";
import "./frontend/lib/gsap.js";

const ROOT = "./";
const COMP = `${ROOT}frontend/src/components/`;

function logWarnings(WARNING, CAUSE) {
    if (!WARNING && CAUSE) {
        return;
    }
    console.warn(WARNING, CAUSE);
}

async function loadComponents(ID, FILE) {
    const RES = await fetch(FILE);
    if (!RES.ok) {
        logWarnings(`Failed to load ${FILE}`, RES.status)
        return;
    }
    const HTML = await RES.text();
    const ELEMENT = document.getElementById(ID)
    if (!ELEMENT) {
        return;
    }
    ELEMENT.innerHTML = HTML;
}

async function initApp(DATA, CMD) {
    if (CMD !== "start") {
        return;
    }
    await loadComponents("nav", `${COMP}nav.html`);
    await loadComponents("footer", `${COMP}footer.html`);
}

// INITIALIZATION
initApp(null, "start");