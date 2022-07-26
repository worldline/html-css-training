import { createTooltip, hideAllPoppers } from "floating-vue";

export function addBoardElementsTooltips() {
    const elements = Array.from(document.querySelectorAll(".table *"))
    elements.forEach(el => {
        createTooltip(el, {
            triggers: ["hover"],
            content: getTooltipContent(el),
            delay: 0
        }, null)
        el.addEventListener("mouseover", (e) => { e.stopPropagation(); hideAllPoppers(); })
        el.addEventListener("mouseenter", (e) => { e.stopPropagation(); hideAllPoppers(); })
    })
}

function getTooltipContent(el: Element) {
    const tagName = el.tagName.toLowerCase()
    const elClass = el.getAttribute("class")
    const elId = el.getAttribute("id")
    return `<${tagName}${elId ? ` id="${elId}"` : ''}${elClass ? ` class="${elClass}"` : ''}>`
}