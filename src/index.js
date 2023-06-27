/**
 * Canvas Template Creator v1
 * 
 * This is canvas image manipulator using Fabric.js http://fabricjs.com/
 * 
 * This is only for personnal use. 
 */


class CanvasTemplate {
    canvas = '';

    constructor(canvasTarget, options = {}) {
        if(!document.querySelector(canvasTarget) instanceof HTMLCanvasElement) throw new Error('Cannot find canvas element.');

        if(fabric === undefined) throw new Error('Fabric.js library not found.');

        this.canvas = new fabric.Canvas(document.querySelector(canvasTarget), options);
    }


    addImage(url) {
        fabric.Image.fromURL(url, (oImg) => {
            this.canvas.add(oImg);
        });
    }


    addText(text) {
        this.canvas.add(new fabric.Text(text, {left: 100, top: 100}));
    }
}

export default CanvasTemplate;