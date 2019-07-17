const readExif = require('read-exif');
let url="http://files.ppznet.com/2019/44d9a172236b4ab3915782854ae25836/5f23ab3fd7124d9a9b8765a32954869b/79d35dc0f4b24c1a9caf056b5aa45732/20190628_031529_4670_4.jpg"
const fs=require("fs");
fs.readFile("1.jpg",(err,data)=>{
    if(err) throw err
    console.log(data)
})

const http = require('http');
const axios=require("axios");
http.get((url,res)=>{
    console.log(res)
    let imgData = '';

        //设置图片编码格式
        res.setEncoding("binary");

        //检测请求的数据
        res.on('data', (chunk) => {
            imgData += chunk;
        })
    // fs.writeFile("good.jpg", result.data, 'binary', (error) => {
    //     if (error) {
    //         console.log('下载失败');
    //     } else {
    //         console.log('下载成功！')
    //     }
    // })
})