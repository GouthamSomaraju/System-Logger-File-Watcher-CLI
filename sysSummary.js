let os=require('os')

console.log('OS Platform:', os.platform())  

// Output: OS Platform: win32

console.log('CPU cores:', os.cpus())

// Output:
/*
[
  {
    model: 'Intel(R) Core(TM) i3-1005G1 CPU @ 1.20GHz',
    speed: 1190,
    times: {
      user: 25895500,
      nice: 0,
      sys: 37933625,
      idle: 106230078,
      irq: 4748453
    }, ...............
]
*/

const freeMem = os.freemem();

console.log(`Free memory: ${(freeMem / (1024 ** 3)).toFixed(2)} GB`);

// Output: Free Memory: Free memory: 0.46 GB

console.log(os.homedir());

// Output: C:\Users\somar