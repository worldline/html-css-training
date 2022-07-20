// Clamp number between two values with the following line:
export const clamp = (num: number, min: number, max: number) => Math.min(Math.max(num, min), max)

export function cleanupEffects(){
    Array.from(document.querySelectorAll(".shake, .strobe"))
      .forEach(el => el.classList.remove("shake","strobe"));
}

export const shake = (el: HTMLElement) => {
    el.classList.add("shake");
    setTimeout(() => {
        el.classList.remove("shake");
    }, 500)
}