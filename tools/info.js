const {
  chalk,
  inquirer,
  _,
  fs,
  instagram,
  print,
  delay,
} = require("./index.js");
const okInfo = [
  {
    type: "list",
    name: "Read",
    message:
      "Just Simple Information:\n",
    choices: [
      "❆ Information",
      "❆ Attention",
      "❆ Warning",
      "❆ License",
      "❆ Me",
      "❆ Back",
      "❆ Exit",
    ],
  },
];
const main = async () => {
  try {
    var okChoise = await inquirer.prompt(okInfo);
    okChoise = okChoise.Read;
    switch (okChoise) {
      case "❆ Information":
        print(
          chalk`{bold.green
  Instagram (also called IG or Insta) is a photo and
  video sharing application that allows users to take photos,
  take videos, apply digital filters and share them to various
  social networking services, including Instagram's own.}`
        );
        break;

      case "❆ Attention":
        print(
          chalk`{bold.green
  if you find this file but you get this file from
  another source not from my Github, I am not
  responsible for anything that happens.}`
        );
        break;

      case "❆ Warning":
        print(
          chalk`{bold.green
  ⚠ Use tools at your own risk.
  ⚠ Use this Tool for personal use.
  ⚠ I am not responsible for your account using this tool.
  ⚠ Make sure your account has been verified (Email & Telp).}`
        );
        break;

      case "❆ License":
        print(
          chalk`{bold.green
  MIT License

Copyright (c) 2021 BLACK-KILLER
Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.}`
        );
        break;

      case "❆ Me":
        print(
          chalk`{bold.green
  Instagram (https://instagram.com/shubham_g0sain)
  Github    (https://github.com/ShuBhamg0sain)

  Donation? Just Follow, Like, Share & Comments!}`
        );
        break;

      case "❆ Back":
       require("node index.js");
        break;

      default:
        console.log(
          "\n ERROR:".red.bold,
          ". Thanks for using this tool!\n".green
            .bold
        );
    }
  } catch (e) {}
};
console.log("\n");
main();
