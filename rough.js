function throttle(fn, wait) {


  let timer;
  console.log("Parent: ", Date.now());

  return function throttled(args) {
    console.log("Children: ", Date.now());

    // if (!timer) {
    //   timer = setInterval(() => {
    //     fn.call(this, args);
    //   }, wait);
    // }
  }
}

const stopForAMinute = throttle(() => { console.log("Preetham"); }, 10000);

stopForAMinute();
setTimeout(()=>{stopForAMinute();},2000)
// stopForAMinute();
// stopForAMinute();
// stopForAMinute();
// stopForAMinute();
// stopForAMinute();