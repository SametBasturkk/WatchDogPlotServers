const os = require('os');
const fs = require('fs');
const { execSync, exec } = require('child_process');
var mongo = require('mongodb');
const { kill } = require('process');
var MongoClient = require('mongodb').MongoClient;


source = "/mnt/m2"

function uploadSpeed() {
    uploadSpeedLocation = "/sys/class/net/enp5s0/statistics"
    uploadSpeedFile = fs.readFileSync(uploadSpeedLocation + "/tx_bytes", "utf8");

    oldSpeed = uploadSpeedFile;
    execSync("sleep 1");
    uploadSpeedFile = fs.readFileSync(uploadSpeedLocation + "/tx_bytes", "utf8");
    newSpeed = uploadSpeedFile;

    speed = newSpeed - oldSpeed;
    speed = speed / 1024 / 1024;
    speed = speed.toFixed(2);

    speedForTotal = parseInt(speed);

    return "Upload speed: " + speed + " MB/s";

}



function getFiles(source) {
    fileListOfSource = fs.readdirSync(source);
    plotFiltered = fileListOfSource.filter(file => file.includes(".plot"));
    for (var i = 0; i < plotFiltered.length; i++) {
        if (plotFiltered[i].includes(".plot.tmp")) {
            plotFiltered.splice(i);
        }
    }
    return plotFiltered;
}

var a, name, memoryUsage, loadavg1, loadavg5, loadavg15, plotcount, speed;


function systemInfo() {
    var freeMem = os.freemem();
    var totalMem = os.totalmem();
    var usedMem = totalMem - freeMem;
    var memUsage = Math.floor(usedMem / totalMem * 100);

    var avg_load = os.loadavg();

    name = "Avcılar";
    memoryUsage = memUsage;
    loadavg1 = avg_load[0];
    loadavg5 = avg_load[1];
    loadavg15 = avg_load[2];
    plotcount = getFiles(source).length;

    speed = uploadSpeed();

    return a;



}

var url = "asdaority";




async function docInsert() {
    await MongoClient.connect(url, async function (err, db) {
        systemInfo();
        if (err) throw err;
        var dbo = db.db("plot");
        var myobj = { name: name, memoryUsage: memoryUsage + "%", loadavg1: loadavg1, loadavg5: loadavg5, loadavg15: loadavg15, plotcount: plotcount, speed: speed };
        dbo.collection("Avcilar").insertOne(myobj, function (err, res) {
            if (err) throw err;
            console.log("1 document inserted");
            db.close();
        }
        );
    })
}



docInsert();