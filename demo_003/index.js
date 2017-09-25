if (process.env.NODE_ENV != 'production') {
    console.log('现在是开发阶段，可以向控制台输出调试信息');
}
console.log(process.env.NODE_ENV)