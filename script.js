// Sample texts variables
function randomNumericString(string, size) {
    string = " ";
    for (let i = 0; i < size; i++) {
        string += Math.round(Math.random() * 1000) + " ";
    }
    return string;
}

var sampleTextOne = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
var sampleTextTwo = "The quick brown fox jumps over the lazy dog. Pack my box with five dozen liquor jugs.";
var sampleTextThree = " ";

// Formatting values
var font = "Arial";
var side = "left";
var size = 15;
var height = 1.5;
var weight = 400;
var textColor = "black";
var background = "white";
var overline = false;
var lineThrough = false;
var underline = false;
var decorationStyle = false;
var whichDecorationStyle = "solid";
var wavy = false;
var dotted = false;
var double = false;
var dashed = false;
var italic = false;
var hasShadow = false;
var shadowHorizontal = 2;
var shadowVertical = 2;
var shadowBlur = 0;
var shadowColor = "red";

// Output variables
var CSSCode = "";
var CSSCodeNoFormat = "";

// Functions for interaction
function pickSampleText(x) {
    document.getElementById("something").innerHTML = x;
}

function pickFont() {
    font = document.getElementById("fontPicker").value;
    document.getElementById("something").style.fontFamily = font;
}

function align() {
    side = document.getElementById("alignment").value;
    document.getElementById("something").style.textAlign = side;
}

function setSize() {
    size = document.getElementById("sizer").value;
    document.getElementById("something").style.fontSize = size + "px";
    document.getElementById("size").innerHTML = size + "px";
}

function setHeight() {
    height = document.getElementById("heighter").value / 10;
    document.getElementById("something").style.lineHeight = height;
    document.getElementById("height").innerHTML = height;
}

function setWeight() {
    weight = document.getElementById("weighter").value * 100;
    document.getElementById("something").style.fontWeight = weight;
    document.getElementById("weight").innerHTML = weight;
}

function setTextColor() {
    textColor = document.getElementById("textColorMenu").value;
    document.getElementById("something").style.color = textColor;
}

function setColorByName() {
    textColor = document.getElementById("colorByName").value;
    document.getElementById("something").style.color = textColor;
}

function setBackgroundColor() {
    background = document.getElementById("backgroundColorMenu").value;
    document.getElementById("something").style.backgroundColor = background;
}

function setBackgroundColorByName() {
    background = document.getElementById("backgroundColorByName").value;
    document.getElementById("something").style.backgroundColor = background;
}

function enableTextDecorationStyle() {
    document.getElementById("solidb").disabled = !decorationStyle;
    document.getElementById("wavyb").disabled = !decorationStyle;
}

function textDecoration() {
    decorationStyle = true;
    enableTextDecorationStyle();

    let styles = [];
    if (overline) styles.push("overline");
    if (lineThrough) styles.push("line-through");
    if (underline) styles.push("underline");
    document.getElementById("something").style.textDecoration = styles.join(" ") + " " + whichDecorationStyle;
}

function setItalic() {
    italic = !italic;
    document.getElementById("something").style.fontStyle = italic ? "italic" : "normal";
}

function setShadow() {
    if (hasShadow) {
        document.getElementById("something").style.textShadow = `${shadowHorizontal}px ${shadowVertical}px ${shadowBlur}px ${shadowColor}`;
    }
}

function setShadowValues() {
    shadowHorizontal = document.getElementById("horizontalShadow").value;
    shadowVertical = document.getElementById("verticalShadow").value;
    shadowBlur = document.getElementById("blurShadow").value;
    shadowColor = document.getElementById("colorShadow").value;
    setShadow();
}

function getCSS() {
    CSSCode = `p { font-family: ${font}; text-align: ${side}; font-size: ${size}px; line-height: ${height}; font-weight: ${weight}; color: ${textColor}; background-color: ${background}; }`;
    document.getElementById("output").innerHTML = CSSCode;
}
