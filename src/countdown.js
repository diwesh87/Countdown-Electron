module.exports = function countdown(tick) {
  let count = 10

  let timer = setInterval(__ => {
    tick(count--)
    if(count === -1){
      clearInterval(timer)
    }
  },1000)
};