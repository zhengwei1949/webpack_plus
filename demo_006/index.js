let btn = document.querySelector('#btn');
btn.onclick = ()=>{
    // let ceshi = require('./ceshi.js');
    // console.log(ceshi);
    require.ensure(['./ceshi.js'],(require)=>{
        let ceshi = require('./ceshi.js');
        console.log(ceshi);
    })
}
