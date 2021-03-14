const width = window.innerWidth;
const height = window.innerHeight;

const stage = new Konva.Stage({
    container: 'container',
    width: width - 288,
    height: height,
});
let model ;
let layer = new Konva.Layer();
stage.add(layer);
let canvas = document.querySelector('canvas');
let currentModelID=null;


function savePDF() {
    model.withStroke(true);
    var imgData = canvas.toDataURL("image/jpeg", 0.3);
    var pdf = new jsPDF({
        unit: "in",
        format: [16, 9], 
        background:"white"
    });
    pdf.addImage(imgData, 'JPEG', 0, 0);
    pdf.save("download.pdf");
    model.withStroke(false);
}

function clearLayer() {
    layer.destroyChildren();
    layer.draw();
}

function saveModel() {
    window.localStorage.setItem(currentModelID, model.export());
}

function createModel(id, action) {
    if(currentModelID!=null) saveModel();
    switch (id) {
        case 1:
            currentModelID = "comp1";
            data = action == 'new' ? null : window.localStorage.getItem(currentModelID);
           
            model = new Model_No1(data);
            break;
        case 2:
            currentModelID = "comp2";
            data = action == 'new' ? null : window.localStorage.getItem(currentModelID);
            model = new Model_No2(data);
            break;
    }
    model.appendTo(layer);
    model.editing();
    layer.draw();
}

