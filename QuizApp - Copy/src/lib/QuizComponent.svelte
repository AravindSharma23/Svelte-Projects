<!-- Quiz.svelte -->
<script>
    import { onMount } from 'svelte';
    import Data from '../lib/Data/myJson2.json'
    let questions = [];
    let currentQuestion = 0;
  
    // onMount(async () => {
    //   // Fetch questions from your JSON file or API
    //   const response = Data;
    //   questions = await response.json();
    // });
    questions = Data;
    let selectedVals = [];
    console.log("Questions ",questions);
    console.log("Selected: ",selectedVals);
    const nextQuestion = () => {
      if (currentQuestion < questions.length - 1) {
        currentQuestion += 1;
      }
    };
  
    const prevQuestion = () => {
      if (currentQuestion > 0) {
        currentQuestion -= 1;
      }
    };
  </script>
  
  <style>
    /* Add your styling here */
   
  </style>
  
  <div>
    {#if questions.length > 0 }
      <div class="flex justify-center items-center ">
        <div class="bg-zinc-100 w-1/2 m-5 p-5 rounded-md">
             <h3 class="text-center text-xl font-semibold text-violet-800">Question {currentQuestion+1}</h3>
             <p class="text-gray-700 text-lg font-medium">{questions[currentQuestion].question}</p>
          <div class="bg-gray-200 flex flex-col m-3 rounded-md">
               
               <div class="m-2 ">
                     <input type="radio" name="Name1" bind:group={selectedVals} >
                     {questions[currentQuestion].A}
               </div>
               <div class="m-2">
                     <input type="radio" name="Name1" bind:group={selectedVals}>
                     {questions[currentQuestion].B}
               </div>
              <div class="m-2">
                     <input type="radio" name="Name1" bind:group={selectedVals}>
                     {questions[currentQuestion].C}
              </div>
               <div class="m-2 ">
                     <input type="radio" name="Name1" bind:group={selectedVals}>
                     {questions[currentQuestion].D}
              </div>
            
          </div>
          <div class="btn-group flex justify-between">
            <button 
            on:click={prevQuestion} 
            class:disabled={currentQuestion === 0} 
            class:bg-sky-200={currentQuestion === 0}
            class:hover:bg-sky-500={currentQuestion > 0}
            class="bg-sky-600  text-white px-3 rounded-lg py-2 cursor-pointer text-lg font-medium">
                Previous</button>
                 
            <button 
            on:click={nextQuestion} 
            class:disabled={currentQuestion === questions.length - 1} 
            class:bg-green-200={currentQuestion === questions.length - 1} 
            class:hover:bg-green-500 = {currentQuestion > questions.length - 1}
            class="bg-green-600 text-white px-3 rounded-lg py-2  cursor-pointer text-lg font-medium ">Next</button>
          </div>
    </div>
              
 </div>
     
    {:else}
      <p>Loading questions...</p>
    {/if}
  </div>
  



  <!-- n.forEach((num1, index) => {
    const num2 = m[index];
    console.log(num1, num2);
  }); -->