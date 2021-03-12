const width = window.innerWidth;
const height = window.innerHeight;

const stage = new Konva.Stage({
    container: 'container',
    width: width,
    height: height,
});
let model;
let layer = new Konva.Layer();
stage.add(layer);
var canvas = document.querySelector('canvas');

function savePDF() {
    var imgData = canvas.toDataURL("image/jpeg", 0.3);
    var pdf = new jsPDF();
    pdf.addImage(imgData, 'JPEG', 0, 0);
    pdf.save("download.pdf");
}

function clearLayer(){
    layer.destroyChildren();
    layer.draw();
}

function createModel(id, data = null) {
    switch (id) {
        case 1:
            model = new Model_No1(data);
            break;
        case 2:
            console.log(2);
            model = new Model_No2(data);
            break;
    }
    console.log(model);
    model.appendTo(layer);
    model.editing();
    layer.draw();
}
