
class Model_No1 {
    constructor(data = null) {
        if (data === null) {
            this.rect1 = new Konva.Rect({
                x: 400,
                y: 200,
                width: 100,
                height: 300,
                stroke: '#3f3b3b',
                strokeWidth: 0,
                fill: '#5d5d5a',
                id: '1',
            });
            this.rect2 = new Konva.Rect({
                x: 500,
                y: 200,
                width: 400,
                height: 100,
                stroke: '#3f3b3b',
                strokeWidth: 0,
                fill: '#5d5d5a',
                id: '2',
            });
            this.rect3 = new Konva.Rect({
                x: 800,
                y: 300,
                width: 100,
                height: 300,
                stroke: '#3f3b3b',
                strokeWidth: 0,
                fill: '#5d5d5a',
                id: '3',
            });
        } else {
            this.rect1 = new Konva.Rect({
                x: data[0].x,
                y: data[0].y,
                width: data[0].width,
                height: data[0].height,
                stroke: data[0].stroke,
                strokeWidth: data[0].strokeWidth,
                fill: data[0].fill,
                id: data[0].id,
            });
            this.rect2 = new Konva.Rect({
                x: data[1].x,
                y: data[1].y,
                width: data[1].width,
                height: data[1].height,
                stroke: data[1].stroke,
                strokeWidth: data[1].strokeWidth,
                fill: data[1].fill,
                id: data[1].id,
            });
            this.rect3 = new Konva.Rect({
                x: data[2].x,
                y: data[2].y,
                width: data[2].width,
                height: data[2].height,
                stroke: data[2].stroke,
                strokeWidth: data[2].strokeWidth,
                fill: data[2].fill,
                id: data[2].id,
            });
        }
        this.rect1Text = new Konva.Text({
            x: this.rect1.x(),
            y: this.rect1.y(),
            text: 'width: ' + this.rect1.width() + "\nheight: " + this.rect1.height(),
            fontSize: 15,
            fontFamily: 'Calibri',
            fill: '#fff',
        });
        this.rect2Text = new Konva.Text({
            x: this.rect2.x(),
            y: this.rect2.y(),
            text: 'width: ' + this.rect2.width() + "\nheight: " + this.rect2.height(),
            fontSize: 15,
            fontFamily: 'Calibri',
            fill: '#fff',
        });
        this.rect3Text = new Konva.Text({
            x: this.rect3.x(),
            y: this.rect3.y(),
            text: 'width: ' + this.rect3.width() + "\nheight: " + this.rect3.height(),
            fontSize: 15,
            fontFamily: 'Calibri',
            fill: '#fff',
        });
        this.selected = "";
    }

    updateText() {
        this.rect1Text.x(this.rect1.x());
        this.rect1Text.y(this.rect1.y());
        this.rect1Text.text('width: ' + this.rect1.width() + "\nheight: " + this.rect1.height());

        this.rect2Text.x(this.rect2.x());
        this.rect2Text.y(this.rect2.y());
        this.rect2Text.text('width: ' + this.rect2.width() + "\nheight: " + this.rect2.height());

        this.rect3Text.x(this.rect3.x());
        this.rect3Text.y(this.rect3.y());
        this.rect3Text.text('width: ' + this.rect3.width() + "\nheight: " + this.rect3.height());

    }

    updatePos() {
        // edit relation bettwen eeach shape in model
        this.rect2.x(
            parseFloat(this.rect1.x()) + parseFloat(this.rect1.width())
        )
        this.rect2.y(parseFloat(this.rect1.y()))

        this.rect3.x(
            parseFloat(this.rect2.x()) + parseFloat(this.rect2.width()) - parseFloat(this.rect3.width())
        )
        this.rect3.y(
            parseFloat(this.rect2.y()) + parseFloat(this.rect2.height())
        )
        this.updateText();
    }


    appendTo(layer) {
        layer.add(this.rect1);
        layer.add(this.rect2);
        layer.add(this.rect3);
        layer.add(this.rect1Text);
        layer.add(this.rect2Text);
        layer.add(this.rect3Text);
    }

    removeEditorEventListener() {
        $('#posX').off();
        $('#posY').off();
        $('#width').off();
        $('#height').off();
        $('#stroke').off();
        $('#fill').off();
    }

    edit() {
        let shape = this.selected;
        let that = this;
        $('#posX').on('change', function () {
            shape.x($("#posX").val());
            that.updatePos();
            layer.draw();
        });
        $('#posY').on('change', function () {
            shape.y($("#posY").val());
            that.updatePos();
            layer.draw();
        });
        $('#width').on('change', function () {
            shape.width($("#width").val());
            that.updatePos();
            layer.draw();
        });
        $('#height').on('change', function () {
            shape.height($("#height").val());
            that.updatePos();
            layer.draw();
        });
        $('#stroke').on('change', function () {
            shape.stroke($("#stroke").val());
            that.updatePos();
            layer.draw();
        });
        $('#fill').on('change', function () {
            shape.fill($("#fill").val());
            that.updatePos();
            layer.draw();
        });
    }

    updateEditor(shape) {
        $('#posX').val(shape.x());
        $('#posY').val(shape.y());
        $('#width').val(shape.width());
        $('#height').val(shape.height());
        $('#stroke').val(shape.stroke());
        $('#fill').val(shape.fill());
    }
    editing() {


        this.rect1.on('click', () => {
            if (this.selected != "") this.selected.strokeWidth(0);
            this.selected = this.rect1;
            this.selected.strokeWidth(4);
            layer.draw();
            this.updateEditor(this.rect1);
            this.removeEditorEventListener();
            this.edit();
        });
        this.rect2.on('click', () => {
            if (this.selected != "") this.selected.strokeWidth(0);
            this.selected = this.rect2;
            this.selected.strokeWidth(4);
            layer.draw();
            this.updateEditor(this.rect2);
            this.removeEditorEventListener();
            this.edit();
        });
        this.rect3.on('click', () => {
            if (this.selected != "") this.selected.strokeWidth(0);
            this.selected = this.rect3;
            this.selected.strokeWidth(4);
            layer.draw();
            this.updateEditor(this.rect3);
            this.removeEditorEventListener();
            this.edit();
        });
    }
    export() {
        return [
            {
                x: this.rect1.x(),
                y: this.rect1.y(),
                width: this.rect1.width(),
                height: this.rect1.height(),
                stroke: this.rect1.stroke(),
                strokeWidth: 0,
                fill: this.rect1.fill(),
                id: this.rect1.id(),
            }, {
                x: this.rect2.x(),
                y: this.rect2.y(),
                width: this.rect2.width(),
                height: this.rect2.height(),
                stroke: this.rect2.stroke(),
                strokeWidth: 0,
                fill: this.rect2.fill(),
                id: this.rect2.id(),
            }, {
                x: this.rect3.x(),
                y: this.rect3.y(),
                width: this.rect3.width(),
                height: this.rect3.height(),
                stroke: this.rect3.stroke(),
                strokeWidth: 0,
                fill: this.rect3.fill(),
                id: this.rect3.id()
            }
        ]
    }
}



class Model_No2 {
    constructor(data = null) {
        console.log("con");
        if (data == null) {
            this.rect1 = new Konva.Rect({
                x: 400,
                y: 200,
                width: 100,
                height: 400,
                stroke: '#3f3b3b',
                strokeWidth: 0,
                fill: '#5d5d5a',
                id: '1',
            });
            this.rect2 = new Konva.Rect({
                x: 500,
                y: 500,
                width: 200,
                height: 100,
                stroke: '#3f3b3b',
                strokeWidth: 0,
                fill: '#5d5d5a',
                id: '2',
            });
            
        } else {
            this.rect1 = new Konva.Rect({
                x: data[0].x,
                y: data[0].y,
                width: data[0].width,
                height: data[0].height,
                stroke: data[0].stroke,
                strokeWidth: data[0].strokeWidth,
                fill: data[0].fill,
                id: data[0].id,
            });
            this.rect2 = new Konva.Rect({
                x: data[1].x,
                y: data[1].y,
                width: data[1].width,
                height: data[1].height,
                stroke: data[1].stroke,
                strokeWidth: data[1].strokeWidth,
                fill: data[1].fill,
                id: data[1].id,
            });
        }
        this.rect1Text = new Konva.Text({
            x: this.rect1.x(),
            y: this.rect1.y(),
            text: 'width: ' + this.rect1.width() + "\nheight: " + this.rect1.height(),
            fontSize: 15,
            fontFamily: 'Calibri',
            fill: '#fff',
        });
        this.rect2Text = new Konva.Text({
            x: this.rect2.x(),
            y: this.rect2.y(),
            text: 'width: ' + this.rect2.width() + "\nheight: " + this.rect2.height(),
            fontSize: 15,
            fontFamily: 'Calibri',
            fill: '#fff',
        });
        this.selected = "";
    }

    updateText() {
        this.rect1Text.x(this.rect1.x());
        this.rect1Text.y(this.rect1.y());
        this.rect1Text.text('width: ' + this.rect1.width() + "\nheight: " + this.rect1.height());

        this.rect2Text.x(this.rect2.x());
        this.rect2Text.y(this.rect2.y());
        this.rect2Text.text('width: ' + this.rect2.width() + "\nheight: " + this.rect2.height());

    }

    updatePos() {
        // edit relation bettwen eeach shape in model
        this.rect2.x(
            parseFloat(this.rect1.x()) + parseFloat(this.rect1.width())
        )
        this.rect2.y(
            parseFloat(this.rect1.y()) + parseFloat(this.rect1.height() - this.rect2.height())
        )
        this.updateText();
    }


    appendTo(layer) {
        layer.add(this.rect1);
        layer.add(this.rect2);
        layer.add(this.rect1Text);
        layer.add(this.rect2Text);
        
    }

    removeEditorEventListener() {
        $('#posX').off();
        $('#posY').off();
        $('#width').off();
        $('#height').off();
        $('#stroke').off();
        $('#fill').off();
    }

    edit() {
        let shape = this.selected;
        let that = this;
        $('#posX').on('change', function () {
            shape.x($("#posX").val());
            that.updatePos();
            layer.draw();
        });
        $('#posY').on('change', function () {
            shape.y($("#posY").val());
            that.updatePos();
            layer.draw();
        });
        $('#width').on('change', function () {
            shape.width($("#width").val());
            that.updatePos();
            layer.draw();
        });
        $('#height').on('change', function () {
            shape.height($("#height").val());
            that.updatePos();
            layer.draw();
        });
        $('#stroke').on('change', function () {
            shape.stroke($("#stroke").val());
            that.updatePos();
            layer.draw();
        });
        $('#fill').on('change', function () {
            shape.fill($("#fill").val());
            that.updatePos();
            layer.draw();
        });
    }

    updateEditor(shape) {
        $('#posX').val(shape.x());
        $('#posY').val(shape.y());
        $('#width').val(shape.width());
        $('#height').val(shape.height());
        $('#stroke').val(shape.stroke());
        $('#fill').val(shape.fill());
    }
    editing() {


        this.rect1.on('click', () => {
            if (this.selected != "") this.selected.strokeWidth(0);
            this.selected = this.rect1;
            this.selected.strokeWidth(4);
            layer.draw();
            this.updateEditor(this.rect1);
            this.removeEditorEventListener();
            this.edit();
        });
        this.rect2.on('click', () => {
            if (this.selected != "") this.selected.strokeWidth(0);
            this.selected = this.rect2;
            this.selected.strokeWidth(4);
            layer.draw();
            this.updateEditor(this.rect2);
            this.removeEditorEventListener();
            this.edit();
        });
        
    }
    export() {
        return [
            {
                x: this.rect1.x(),
                y: this.rect1.y(),
                width: this.rect1.width(),
                height: this.rect1.height(),
                stroke: this.rect1.stroke(),
                strokeWidth: 0,
                fill: this.rect1.fill(),
                id: this.rect1.id(),
            }, {
                x: this.rect2.x(),
                y: this.rect2.y(),
                width: this.rect2.width(),
                height: this.rect2.height(),
                stroke: this.rect2.stroke(),
                strokeWidth: 0,
                fill: this.rect2.fill(),
                id: this.rect2.id(),
            }
        ]
    }
}