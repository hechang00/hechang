const
    io = require("socket.io-client"),
    unzip = require('unzip'),
    // dl = require('delivery'),
    fs = require('fs'),
    path = require('path'),
    filter = require('./filter');

const curPath = __dirname;
const parentPath = path.resolve(__dirname, '..');
const previewConfig = readJSON(`${parentPath}/static/preview.json`);
const host = safeHost(previewConfig.host);
const roomID = safeRoomID(previewConfig.roomid);
const ioClient = io.connect(host);
let t1 = 0;
let t2 = 0;

filter.init([
    `${parentPath}/src/assets`,
    `${parentPath}/src/components`,
    `${parentPath}/src/router`,    
    `${parentPath}/src/store`
]);

ioClient.on("connect", () => {
    console.log("jimu socket: connected!");
    joinRoom(roomID);
    // var delivery = dl.listen(ioClient);
    // delivery.on('receive.success', function (file) {
    //     var params = file.params;
    //     console.log("接收到文件，参数=", params);
    //     writeFile(file.name, file.buffer);
    // });
});

ioClient.on("disconnect", function () {
    console.log("jimu socket: disconnected");
});

ioClient.on("message", function (data) {
    t1 = new Date().getTime();
    console.log(`update >>>>>> (${t1})`);
    let buff = new Buffer(data.data.zip, 'base64');
    writeFile('src.zip', buff);
});

function joinRoom(roomID) {
    ioClient.emit("join", roomID);
}

function writeFile(fileName, fileBuffer) {
    const filePath = `${curPath}/${fileName}`;
    fs.writeFile(filePath, fileBuffer, function (err) {
        if (err) {
            console.log('File could not be saved.');
        } else {
            console.log(`${fileName} saved`);
            let unzip_extract = unzip.Extract({
                path: `${curPath}/`
            });

            unzip_extract.on('error', (e) => {});

            unzip_extract.on('finish', () => {});

            const stream = fs.createReadStream(filePath).pipe(unzip_extract);
            stream.on('close', function(){
                console.log("unzip finished");
                fs.unlinkSync(filePath);                
                filter.do(`${curPath}/src`, ()=>{
                    t2 = new Date().getTime();
                    console.log(`耗时${t2-t1}毫秒`);
                    console.log(`done <<<<<< (${t2})`)
                });
            });
        };
    });
}

function readJSON(filename) {
    let obj = {};
    try {
        let json = fs.readFileSync(filename, 'utf8');
        obj = JSON.parse(json);
    } catch (e) {
        console.error(e);
    }
    return obj;
}

function safeHost(host) {
    if (!host) return '';
    if (host.startsWith('http://') || host.startsWith('https://')) return host;
    return `http://${host}`;
}

function safeRoomID(roomID) {
    if (!roomID) return '0';
    return roomID;
}