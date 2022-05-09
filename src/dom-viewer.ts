import { nanoid } from "nanoid";

export function toggle3D(iframe: HTMLIFrameElement) {
    const _document = iframe.contentDocument!;
    const _window = iframe.contentWindow!;

    ((step, perspective) => {

        const DIV = "div";
        const COLORS = [
            "#c33",
            "#ea4c88",
            "#639",
            "#06c",
            "#690",
            "#fc3",
            "#f90",
            "#963"
        ];

        function getColor(depth: number) {
            return COLORS[depth % (COLORS.length - 1)];
        }

        function getFaceHTML(x: number, y: number, z: number, width: number, height: number, rotateYDeg: number, color: string, nodeId: string) {

            const template = _document!.createElement(DIV);
            template.dataset.faceFor = nodeId

            new Map()
                .set("position", "absolute")
                .set("transform-origin", ["left", "top"])
                .set("background", color)
                .set("width", `${width}px`)
                .set("height", `${height}px`)                
                .set("opacity", "0.8")
                .set("transform", `translate3d(${x}px, ${y}px, ${z}px) rotateX(270deg) rotateY(${rotateYDeg}deg)`)
                .forEach((value, key) => template.style[key] = Array.isArray(value) ? value.join(" ") : value);

            return template.outerHTML;
        }

        const stepDelta = 0.001;
        let facesHTML = "";

        function traverse(element: HTMLElement, depth: number, offsetLeft: number, offsetTop: number) {

            const childNodes = element.childNodes;
            const length = childNodes.length;

            for (let i = 0; i < length; i++) {
                const childNode = childNodes[i] as HTMLElement;

                if (childNode.nodeType === Node.ELEMENT_NODE) {
                    const nodeId = nanoid()
                    childNode.dataset.uid = nodeId
                    childNode.style.overflow = "visible";
                    childNode.style.transformStyle = "preserve-3d";
                    childNode.style.transform = `translateZ(${(step + (length - i) * stepDelta).toFixed(3)}px)`;                    

                    let elementBodyOffsetLeft = offsetLeft;
                    let elementBodyOffsetTop = offsetTop;

                    if (childNode.offsetParent === element) {
                        elementBodyOffsetLeft += element.offsetLeft;
                        elementBodyOffsetTop += element.offsetTop;
                    }

                    traverse(childNode, depth + 1, elementBodyOffsetLeft, elementBodyOffsetTop);

                    const commonZ = (depth + 1) * step;
                    const color = getColor(depth);

                    // Top
                    facesHTML += getFaceHTML(
                        elementBodyOffsetLeft + childNode.offsetLeft,
                        elementBodyOffsetTop + childNode.offsetTop,
                        commonZ,
                        childNode.offsetWidth,
                        step,
                        0,
                        color,
                        nodeId);

                    // Right
                    facesHTML += getFaceHTML(
                        elementBodyOffsetLeft + childNode.offsetLeft + childNode.offsetWidth,
                        elementBodyOffsetTop + childNode.offsetTop,
                        commonZ,
                        childNode.offsetHeight,
                        step,
                        270,
                        color,
                        nodeId);

                    // Bottom
                    facesHTML += getFaceHTML(
                        elementBodyOffsetLeft + childNode.offsetLeft,
                        elementBodyOffsetTop + childNode.offsetTop + childNode.offsetHeight,
                        commonZ,
                        childNode.offsetWidth,
                        step,
                        0,
                        color,
                        nodeId);

                    // Left
                    facesHTML += getFaceHTML(
                        elementBodyOffsetLeft + childNode.offsetLeft,
                        elementBodyOffsetTop + childNode.offsetTop,
                        commonZ,
                        childNode.offsetHeight,
                        step,
                        270,
                        color,
                        nodeId);
                }
            }
        }

        const body = _document.body!;
        body.style.overflow = "visible";
        body.style.transformStyle = "preserve-3d";
        body.style.perspective = perspective.toString();

        const getCenterAsString = (length: number) => (length / 2).toFixed(2);
        const origin = `${getCenterAsString(_window.innerWidth)}px ${getCenterAsString(_window.innerHeight)}px`;
        body.style.perspectiveOrigin = origin;
        body.style.transformOrigin = origin;

        traverse(body, 0, 0, 0);

        _document.addEventListener("mousemove", event => {
            if (!event.ctrlKey) {
                const xRel = event.clientX / _window.innerWidth;
                const yRel = 1 - (event.clientY / _window.innerHeight);
                const amplitude = 120;
                const relToDegAsString = (rel: number) => ((rel-0.5)*amplitude).toFixed(2);
                body.style.transform = `rotateX(${relToDegAsString(yRel)}deg) rotateY(${relToDegAsString(xRel)}deg)`;
            }
        }, true);
        
        _document.addEventListener("mouseover", event => {
            if(event.ctrlKey){
                const target = event.target as HTMLElement
                const uid = target.dataset.uid || target.dataset.faceFor
                document.querySelectorAll
                if(target.dataset.faceFor){
                    Array.from(_document.querySelectorAll(`[data-uid="${uid}"], [data-face-for="${uid}"]`))
                        .forEach(elem => elem.classList.add("hovered"))
                }

            }
        })

        _document.addEventListener("mouseleave", event => {
            _document.querySelectorAll(".hovered").forEach(el => el.classList.remove("hovered"))
        })

        _document.addEventListener("mouseout", event => {
            const target = event.target as HTMLElement
            const uid = target.dataset.uid || target.dataset.faceFor
            Array.from(_document.querySelectorAll(`[data-uid="${uid}"], [data-face-for="${uid}"]`))
                        .forEach(elem => elem.classList.remove("hovered"))
        })

        _document.addEventListener("click", event => {
            let element = event.target as HTMLElement
            if(element.nodeName === 'A') event.preventDefault() // disable links on 3D View
            if(element.dataset.faceFor) element = _document.querySelector(`[data-uid="${element.dataset.faceFor}"]`)!
            if(!element) return;
            _window.top?.postMessage({ 
                event: "elementClick", 
                tag: element.tagName.toLowerCase(),
                type: element.getAttribute("type")
             })
        })
        
        const faces = _document.createElement(DIV);        
        faces.style.position = "absolute";
        faces.style.transformStyle = "preserve-3d";
        const { marginTop, marginLeft } = getComputedStyle(body)
        faces.style.top = `-${marginTop}`;
        faces.style.left = `-${marginLeft}`;
        faces.innerHTML = facesHTML;
        body.appendChild(faces);


        body.style.transition = "transform 400ms ease-in-out";
        body.style.transform = `rotateX(-22.5deg) rotateY(12.5deg)`;
        setTimeout(() => { body.style.transition = "" }, 400)

    })(50, 5000);
}