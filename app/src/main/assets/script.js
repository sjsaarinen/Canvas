var canvas;
var ctx;
var arrayX = [158.503662109375, 158.4052734375, 158.4052734375, 158.4052734375, 158.469970703125, 158.406982421875, 177.5625, 170.0137939453125, 121.315185546875, 204.1954345703125, 213.51953125, 132.902099609375, 147.7939453125, 207.8565673828125, 208.1195068359375, 160.590087890625, 110.464111328125, 304.169189453125, 118.195556640625, 91.516357421875, 223.160400390625, 236.757080078125, 232.662841796875, 185.798095703125, 87.822021484375, 42.537841796875, 315.3997802734375, 79.405029296875, 26.884521484375, 315.3997802734375, 34.654052734375, 97.533935546875];
var arrayY = [160.359130859375, 160.3951416015625, 160.3951416015625, 160.3951416015625, 160.327880859375, 160.383056640625, 206.533447265625, 207.176513671875, 177.5391845703125, 222.2484130859375, 211.6915283203125, 176.4766845703125, 189.0621337890625, 229.5299072265625, 147.7274169921875, 149.3778076171875, 151.0164794921875, 206.7552490234375, 173.2777099609375, 164.8416748046875, 184.8748779296875, 309.5872802734375, 268.4354248046875, 236.2528076171875, 202.8704833984375, 190.3973388671875, 315.619140625, 170.8021240234375, 144.8275146484375, 315.619140625, 152.2161865234375, 199.0618896484375];
var arrayZ = [234.566650390625, 234.5355224609375, 234.5355224609375, 234.5355224609375, 234.6417236328125, 234.6181640625, 179.2568359375, 202.456787109375, 184.8336181640625, 224.0096435546875, 204.205810546875, 128.14892578125, 220.393798828125, 193.3837890625, 120.9969482421875, 133.8095703125, 118.85693359375, 293.2333984375, 153.49609375, 124.09375, 226.544921875, 233.72412109375, 187.71630859375, 160.82763671875, 168.59716796875, 161.6845703125, 230.962890625, 132.3583984375, 104.974609375, 262.85986328125, 136.68115234375, 178.2900390625];
var lapse = 0;
var xColor = "blue";
var yColor = "green";
var zColor = "red";
var prevX = 0;
var prevY = 0;
var prevZ = 0;

function plotData(x,y,z) {


    var newLapse = lapse + 10;

    ctx.beginPath();
    ctx.moveTo(lapse,prevX);
    ctx.lineTo(newLapse,x);
    ctx.strokeStyle=xColor;
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(lapse,prevY);
    ctx.lineTo(newLapse,y);
    ctx.strokeStyle=yColor;
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(lapse,prevZ);
    ctx.lineTo(newLapse, z);
    ctx.strokeStyle=zColor;
    ctx.stroke();

    prevX = x;
    prevY = y;
    prevZ = z;
    lapse = newLapse;

}

function looper() {
    canvas = document.getElementById('plotCanvas');
    ctx = canvas.getContext("2d");

    for (var i = 0; i<32; i++) {
        plotData(arrayX[i], arrayY[i], arrayZ[i]);
        //plotData(ctx, 160, 160, 160);
    }
    lapse = 0;
    prevX = 0;
    prevY = 0;
    prevZ = 0;
    ctx.clearRect(0,0,320,320);
    for (var i = 0; i<32; i++) {
        plotData(arrayX[i], arrayX[i], arrayX[i]);
    }
}

looper();
