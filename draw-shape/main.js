const width = window.innerWidth;
const height = window.innerHeight;

const stage = new Konva.Stage({
    container: 'container',
    width: width,
    height: height,
});

const layer = new Konva.Layer();
let model1 = new Model_No1();

stage.add(layer);
model1.appendTo(layer);
model1.editing();
layer.draw();


var canvas = document.querySelector('canvas');
    
function savePDF() {
        var imgData = canvas.toDataURL("image/jpeg", 0.3);
        var pdf = new jsPDF();
        pdf.addImage(imgData, 'JPEG', 0, 0);
        pdf.save("download.pdf");
    }

function reload(){
    let data =model1.export();
    layer.clear();
    return data;
}