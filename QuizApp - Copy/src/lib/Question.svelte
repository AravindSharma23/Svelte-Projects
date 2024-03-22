<!-- Quiz.svelte -->
<script>
    import { onMount } from 'svelte';
    import Data from '../lib/Data/myJson4.json';
    import SubmittedModal from './SubmittedModal.svelte';
    import {score,showScorePage,timerRunning , disablePreviousBtn} from '../Stores/Score.js';
    import ShowScorePage from './showScorePage.svelte';
    let questions = [];
    let currentQuestion = 0;
    let selectedAnswer='';
   
    // let currentQuestionAns = '';
    let answerObj = {};
    let modal = false;
    let currentQuestionOptions;
    let scoreVal = 0;
  
    // export let score;
    questions = Data;
    console.log("Questions ", questions);
    const nextQuestion = () => {
      if (currentQuestion < questions.length - 1) {
        currentQuestion += 1;
        selectedAnswer = ''; 
      
        }
    };
  
    const prevQuestion = () => {
      if (currentQuestion > 0) {
        currentQuestion -= 1;
        selectedAnswer = ''; 
        
         }
    };
  
    const handleAnswerSelection = (event) => {
      selectedAnswer = event.target.value;
      if(selectedAnswer != ''){
      answerObj[questions[currentQuestion].question] = selectedAnswer
      }
      else{
        answerObj[questions[currentQuestion].question] = ''
      }
      console.log("AnswerObj length :",Object.keys(answerObj).length);
      console.log('Selected Ans In HANDLE  ',selectedAnswer)
      console.log('Answer Obj:',answerObj);
     

    };
  
    const validateAnswer = (answerObj) => {
      const userAns = Object.values(answerObj)
      let correctAns = []
      questions.forEach((v)=>{correctAns.push(v.answer)})
      console.log("Correct Ans",correctAns);
      console.log("Selected Answers :",userAns);

      let correctCount = userAns.filter(ans => correctAns.includes(ans)).length;
      console.log("Correct Count",correctCount);
      score.set(correctCount);
      console.log("score----",$score);

      showScorePage.set(true);
     
   
    };
    const stopTimer = () =>{
      timerRunning.set(false);
     
    }


  </script>
  
 
  
  <div class="bg-violet-600 h-screen ">
    {#if questions.length > 0}
      <div class="flex justify-center items-center ">
        <div class="bg-zinc-100 w-1/2 h-auto m-5 p-5 rounded-md ">
          <h3 class="text-center text-xl font-semibold text-violet-800">Question {currentQuestion + 1}</h3>
          <p class="text-gray-700 text-lg font-medium">{questions[currentQuestion].question}</p>
          <div class="bg-gray-200 flex flex-col m-3 rounded-md">
            {#each questions[currentQuestion].options as option (option)}
              <div class="m-2" key={option}>
                <form >
                  <label >
                <input
                  type="radio"
                  name="Name1"
                  id={option}
                  bind:group={selectedAnswer}
                  on:change={ handleAnswerSelection}
                  value={option}
                >
                {option}
              </label>
              </form>
              </div>

            {/each}
          </div>
          <div class="btn-group flex justify-between">
            <button
              on:click={prevQuestion}
              class:disabled={currentQuestion === 0 }
              class:opacity-50={currentQuestion === 0 }
              class:hover:bg-sky-500={currentQuestion > 0}
              class="{$disablePreviousBtn ? 'opacity-50 cursor-not-allowed':'bg-sky-600  hover:bg-sky-500'} text-white px-3 rounded-lg py-2 cursor-pointer text-lg font-medium"
            >
              Previous
            </button>
            <button
              on:click={nextQuestion}
              class:disabled={currentQuestion === questions.length - 1}
              class:invisible={currentQuestion === questions.length - 1}
              

              class="bg-green-600 hover:bg-green-500 text-white px-3 rounded-lg py-2 cursor-pointer text-lg font-medium "
            >
              Next
            </button>
            {#if currentQuestion === questions.length - 1}
              <button
                on:click={() => {
                  console.log("Clickedddd");
                  disablePreviousBtn.set(true);
                  console.log('disablePreviousBtn:', $disablePreviousBtn);
                  validateAnswer(answerObj);
                  stopTimer()
                  }}
                class="bg-blue-500 text-white px-3 rounded-lg py-2 cursor-pointer text-lg font-medium "
              >
              Submit
              </button>
            {/if}
          </div>
        </div>
      </div>
    {:else}
      <p>Loading questions...</p>
    {/if}
  </div>
  
            
  <!-- $showScorePage -->
{#if $showScorePage} 

   <ShowScorePage/>
{/if}

<style>
    
    body{
      background-color: blueviolet
    }
 </style>


