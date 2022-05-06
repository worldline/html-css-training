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

        function getFaceHTML(x: number, y: number, z: number, width: number, height: number, rotateYDeg: number, color: string) {

            const template = _document!.createElement(DIV);

            new Map()
                .set("position", "absolute")
                .set("transform-origin", ["left", "top"])
                .set("background", color)
                .set("width", `${width}px`)
                .set("height", `${height}px`)
                .set("backface-visibility", "visible")
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
                    childNode.style.overflow = "visible";
                    childNode.style.transformStyle = "preserve-3d";
                    childNode.style.transform = `translateZ(${(step + (length - i) * stepDelta).toFixed(3)}px)`;
                    childNode.style.background = `rgba(255,255,255,0.2)`;

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
                        color);

                    // Right
                    facesHTML += getFaceHTML(
                        elementBodyOffsetLeft + childNode.offsetLeft + childNode.offsetWidth,
                        elementBodyOffsetTop + childNode.offsetTop,
                        commonZ,
                        childNode.offsetHeight,
                        step,
                        270,
                        color);

                    // Bottom
                    facesHTML += getFaceHTML(
                        elementBodyOffsetLeft + childNode.offsetLeft,
                        elementBodyOffsetTop + childNode.offsetTop + childNode.offsetHeight,
                        commonZ,
                        childNode.offsetWidth,
                        step,
                        0,
                        color);

                    // Left
                    facesHTML += getFaceHTML(
                        elementBodyOffsetLeft + childNode.offsetLeft,
                        elementBodyOffsetTop + childNode.offsetTop,
                        commonZ,
                        childNode.offsetHeight,
                        step,
                        270,
                        color);
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

        const Modes = {
            DISABLED: -1,
            NO_FACES: 0,
            FACES: 1
        };
        let mode = Modes.NO_FACES;

        _document.addEventListener("mousemove", event => {

            if (mode !== Modes.DISABLED) {
                const xRel = event.clientX / _window.innerWidth;
                const yRel = 1 - (event.clientY / _window.innerHeight);
                const amplitude = 120;
                const relToDegAsString = (rel: number) => ((rel-0.5)*amplitude).toFixed(2);
                body.style.transform = `rotateX(${relToDegAsString(yRel)}deg) rotateY(${relToDegAsString(xRel)}deg)`;
            }
        }, true);

        /*
        const faces = _document.createElement(DIV);
        faces.style.display = "none";
        faces.style.position = "absolute";
        faces.style.top = 0;
        faces.innerHTML = facesHTML;
        body.appendChild(faces);

        _document.addEventListener("mouseup", () => {
            switch (mode) {

                case Modes.NO_FACES: {
                    mode = Modes.FACES;
                    faces.style.display = "";
                    break;
                }

                case Modes.FACES: {
                    mode = Modes.NO_FACES;
                    faces.style.display = "none";
                    break;
                }

                default: {
                    throw new RangeError("Incorrect faces mode");
                }
            }
        }, true);*/
    })(50, 500);
}