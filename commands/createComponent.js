const fs = require("fs");

let param = process.argv[2];

const firstTxt = param.substring(0,1);
const UpperTxt = firstTxt.toUpperCase();
const ingyerTxt = param.substring(1,param.length);

param = UpperTxt + ingyerTxt; 

const fileName = param + ".jsx";

const targetPath = `./components/${fileName}`;

const targetContent = `import  React, { useState } from "react";
import styled from "styled-components";

const ${param} = () => {
    ///////////// STATE //////////////

    ///////////// HOOKS //////////////

    ///////////// EFFECT /////////////

    ///////////// HANDLER //////////// 

    return <div>${param}</div>;
};

export default ${param};
`;

console.log(targetPath)

// 그 파일이 있으면?

fs.readFile(targetPath, "utf8", (error, description) => {
    if(error) {
        // 파일이 없다!
        console.log("파일 없음! ✔ 만들었음!!")
        fs.writeFile(targetPath, targetContent, (error => {
            if(error) {
                console.error(error);
                console.log("❌jsx파일 생성에 실패했습니다.");
            }
        }));
    } else {
        // 파일이 있다!
        console.log("Aleary Exist The File. Can Not Make It!");
    }
});