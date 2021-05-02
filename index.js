const { chalk, inquirer, print } = require("./tools/index.js");
var moment = require("moment");
var colors = require("colors");
var userHome = require("user-home");

//DETECT IP *START!
var os = require("os");
var interfaces = os.networkInterfaces();
var addresses = [];
for (var k in interfaces) {
  for (var k2 in interfaces[k]) {
    var address = interfaces[k][k2];
    if (address.family === "IPv4" && !address.internal) {
      addresses.push(address.address);
    }
  }
}
//DETECT IP *END!
const questionTools = [
  "➥Information",
  "➥LT->  Like Timeline",
  "➥LTU-> Like Target User",
  "➥DAP-> Delete all Post/Photo",
  "➥F-L-> Followers Target",
  "➥L-C-> Followers Target",
  "➥F-L-C-> Followers Target",
  "➥F-L-C-> Followers Target [BETA]",
  "➥F-L-C-> Followers Target v2",
  "➥F-L-DM-> Followers Target",
  "➥F-L-DM-> Followers Target [BETA]",
  "➥HTCLF-> Hashtag target all",
  "➥HTC-> Hashtag target comments",
  "➥HTL-> Hashtag target like",
  "➥HTF-> Hashtag target follow",
  "➥LTCLF-> Location Target all",
  "➥UAF-> Unfollow All Following",
  "➥UNB-> Unfollow Not Followback",
  "➥EXIT->",
];

const menuQuestion = {
  type: "list",
  name: "choice",
  message:
    "Select tools:\n  Read the (❆ Information) first before using the tool! Nyaa~\n\n",
  choices: questionTools,
};

const main = async () => {
  try {
    const { choice } = await inquirer.prompt(menuQuestion);
    choice == questionTools[0] && require("./tools/info.js");
    choice == questionTools[1] && require("./tools/LT.js");
    choice == questionTools[2] && require("./tools/LTU.js");
    choice == questionTools[3] && require("./tools/DAP.js");
    choice == questionTools[4] && require("./tools/flonly.js");
    choice == questionTools[5] && require("./tools/lconly.js");
    choice == questionTools[6] && require("./tools/fftauto.js");
    choice == questionTools[7] && require("./tools/fftbetaauto.js");
    choice == questionTools[8] && require("./tools/fftautov2.js");
    choice == questionTools[9] && require("./tools/fftdmauto.js");
    choice == questionTools[10] && require("./tools/fftdmbetaauto.js");
    choice == questionTools[11] && require("./tools/HTCLF.js");
    choice == questionTools[12] && require("./tools/HTC.js");
    choice == questionTools[13] && require("./tools/HTCLF.js");
    choice == questionTools[14] && require("./tools/HTC.js"); 
    choice == questionTools[15] && require("./tools/HTL.js");
    choice == questionTools[16] && require("./tools/HTF.js");
    choice == questionTools[17] && require("./tools/UAF.js");
    choice == questionTools[18] && require("./tools/UNB.js");
    choice == questionTools[19] && process.exit();
  } catch (err) {
    print(err, "err");
  }
};

console.log(chalk`{bold.green
  ▄──▄█████████████████████████▄──
  ▄█▀░█░█░█░░░░░░░░░░░░░░░░░░░▀█▄
  █░░░█░█░█░░░░░░░░░░░░░░█████░░█
  █░░░█░█░█░░░░░░░░░░░░░░█████░░█
  █░░░█░█░█░░░░░░░░░░░░░░█████░░█
  █░░░░░░░░░▄▄▄█████▄▄▄░░░░░░░░░█
  ███████████▀▀░░░░░▀▀███████████
  █░░░░░░░██░░▄█████▄░░██░░░░░░░█
  █░░░░░░░██░██▀░░░▀██░██░░░░░░░█
  █░░░░░░░██░██░░░░░██░██░░░░░░░█
  █░░░░░░░██░██▄░░░▄██░██░░░░░░░█
  █░░░░░░░██▄░▀█████▀░▄██░░░░░░░█
  █░░░░░░░░▀██▄▄░░░▄▄██▀░░░░░░░░█
  █░░░░░░░░░░▀▀█████▀▀░░░░░░░░░░█
  █░░░░instagram-automation░░░░░░█
  █░░░░ By @shubham_g0sain░░░░░░█
  █░░░░BLACK-KILLER░░░░░░░░░░░░░█
  ▀█▄░░░░░░░░░░░░░░░░░░░░░░░░░▄█▀
  ──▀█████████████████████████▀─
  }`);
console.log(chalk`{bold.red   •••••••••••••••••••••••••••••••••••••••••}`);
console.log(
  "  Ξ START  : ".bold.red + moment().format("D MMMM YYYY, h:mm:ss a")
);
main();
