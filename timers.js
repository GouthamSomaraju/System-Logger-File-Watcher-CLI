//  Timer Utility
// • Use setInterval to log a timestamp every 3 seconds
// • Use setTimeout to auto-stop logging after 10 seconds
// [Timer] 12:00:03 PM - Tick
// [Timer] 12:00:06 PM - Tick
// [Timer] 12:00:09 PM - Tick
// Timer stopped.

let timer=setInterval(()=>{
    console.log('[Timer]',new Date().toLocaleTimeString(),'- Tick');
    
},3000)

setTimeout(()=>{
    clearTimeout(timer)
    console.log('Timer Stopped.');
    
},10000)