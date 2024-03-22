<script>
  import confetti from "../lib/Assets/confetti.gif";
  import ThumbsUpEmoji from '../lib/Assets/ThumbsUpEmoji.jpg';
  import ThumbsDownEmoji from "../lib/Assets/thumbsDownEmoji.png";
  import ThinkingEmoji from '../lib/Assets/ThinkingEmoji.jpg'
  import { score,showScorePage } from "../Stores/Score.js";
  const confettiBackground = () => {
    return $score > 8 ? `background-image: url('${confetti}');` : "";
  };

  $: console.log("score----", $score);
  $: {
    if (score > 18) {
      console.log(`Your Score is ${$score} Excellent`);
    } else if (score >= 15 && score <= 18) {
      console.log(`Your Score is ${$score} Very Good`);
    } else if (score >= 14 && score <= 10) {
      console.log(`Your Score is ${$score} Good`);
    } else if (score >= 8 && score < 10) {
      console.log(`Your Score is ${$score} Average`);
    } else {
      console.log(`Your Score is ${$score} Poor`);
    }
  }
  

  const closeScoreModal = ()=>{
    showScorePage.set(false);
  }
 
  // score.set(7)
</script>

{#if $score >= 0}
  <div
    class="relative z-10"
    aria-labelledby="modal-title"
    role="dialog"
    aria-modal="true"
  >
    <div
      class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
    ></div>

    <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
      <div
        class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"
      >
        <div
          class="relative transform overflow-hidden flex justify-center rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6"
          style={confettiBackground()}
        >
          <!-- <p>{$score}</p> -->
          <div class=" flex flex-col justify-center items-center">
            {#if $score > 18}
            <img src={ThumbsUpEmoji} alt="">
            <div class=" flex flex-col justify-center items-center">
             
              <span class="text-violet-700 text-lg font-normal mt-5"
                >Congratulations! 🎉 Your Score is Excellent! <br>
                <b>{$score}</b> is correct answers out of <b>20</b>
              </span><br>
              <button type="button" 
              on:click={closeScoreModal}
              class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Close</button>
            </div>
            {:else if $score >= 15 && $score <= 18}
            <img src={ThumbsUpEmoji} alt="">
            <div class=" flex flex-col justify-center items-center">
              
              <span class="text-violet-700 text-lg font-normal mt-5">
                Well done! 👏 Your Score is Very Good! <br>
                <b>{$score}</b> is correct answers out of <b>20</b>
              </span> <br>
              <button type="button"
              on:click={closeScoreModal}
               class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Close</button>
            </div>
            {:else if $score >= 10 && $score <= 14}
            <img src={ThumbsUpEmoji} alt="">
            <div class="flex flex-col justify-center items-center">
              <span class="text-violet-700 text-lg font-normal"
                >Great job! 🌟 Your Score is Good! <br>
                <b>{$score}</b> is correct answers out of <b>20</b>
              </span>  <br>
              
              <button type="button"
              on:click={closeScoreModal} 
               class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Close</button>            </div>
            {:else if $score >= 8 && $score < 10}
            <img src={ThinkingEmoji} alt="">

           <div class="flex flex-col justify-center items-center">
              <span class="text-violet-700 text-lg font-normal mt-5"
                >Nice work! 😊 Your Score is Average. <br>
                <b>{$score}</b> is correct answers out of <b>20</b>
              </span> <br>
              <button type="button"
              on:click={closeScoreModal}
              class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Close</button>
             </div>
            {:else if $score < 8}
              <div class=" flex flex-col justify-center items-center">
                <img src={ThumbsDownEmoji} alt="Down" />
              </div>
              <div>
                <span class="text-violet-700 text-xl font-normal -ml-5"
                  ><b>Oops!</b> your score is low. Please try again!</span
                > <br />
                <span class="text-violet-700 text-xl"
                  ><b>{$score}</b> correct answers out of <b>20</b></span
                >
                
              </div>
              <button type="button"
              on:click={closeScoreModal} 
               class="text-white mt-4 bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br  font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Close</button>
            {/if}
          </div>
        </div>
      </div>
    </div>
  </div>
{/if}

