// Clamp number between two values with the following line:
export const clamp = (num: number, min: number, max: number) => Math.min(Math.max(num, min), max)

export function cleanupEffects(){
    Array.from(document.querySelectorAll(".shake, .strobe, .clean"))
      .forEach(el => el.classList.remove("shake","strobe","clean"));
}

export const shake = (el: HTMLElement) => {
    if(!el) return;
    el.classList.add("shake");
    setTimeout(() => {
        el.classList.remove("shake");
    }, 500)
}