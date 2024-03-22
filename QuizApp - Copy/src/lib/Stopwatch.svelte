<!-- PomodoroTimer.svelte -->
<script>
    import { onMount, onDestroy } from 'svelte';
    import {showScorePage,timerRunning,disablePreviousBtn} from '../Stores/Score.js'
    import Icon from '@iconify/svelte';
  
    let timer;
    let startTime;
    let elapsedTime = 0;
    const pomodoroTime = 25 * 60 * 1000; // 25 minutes in milliseconds
  
    const updateElapsedTime = () => {
      elapsedTime = Date.now() - startTime;
      if (elapsedTime >= pomodoroTime) {
        resetPomodoro();
        disablePreviousBtn.set(true);
        showScorePage.set(true);
        timerRunning.set(false);
        
      }
      
    };
  
    const resetPomodoro = () => {
      clearInterval(timer);
      elapsedTime = 0;
      startPomodoro();
    };
  
    const startPomodoro = () => {
      startTime = Date.now() - elapsedTime;
      timer = setInterval(updateElapsedTime, 100);
    };

    const stopPomodoro = () => {
    clearInterval(timer);
    timerRunning.set(false);
    // elapsedTime = 0; // Optionally reset the elapsed time
  };
  
    onMount(() => {
      // Start the Pomodoro timer automatically when the component is mounted
      startPomodoro();
  
      // Cleanup when the component is destroyed
      onDestroy(() => {
        clearInterval(timer);
      });

     
  
    });


     // Helper function to format milliseconds into HH:MM:SS format
     function formatTime(milliseconds) {
      const seconds = Math.floor(milliseconds / 1000);
      const minutes = Math.floor(seconds / 60);
      const displaySeconds = seconds % 60;
      const displayMinutes = minutes % 60;
  
      return `${pad(displayMinutes)}:${pad(displaySeconds)}`;
    }
  
    // Helper function to pad single-digit numbers with a leading zero
    function pad(number) {
      return number < 10 ? `0${number}` : number;
    }
  </script>
  
  
  
  <div class="pomodoro-timer flex justify-end mr-4 -mt-14">
    <Icon icon="fluent:timer-28-regular" color="yellow" width="40" height="40" class="mr-1 mt-1 font-bold"/>
    <div class="mr-2 mt-1 bg-green-300 py-2 p-1 rounded-md text-green-900 font-semibold text-lg">Time Left<span class="bg-sky-600 p-1 ml-2 rounded-sm text-white">{formatTime(elapsedTime)}</span></div>
   
  </div>
  
  