<script>
    import scoreBoardImg from './Assets/score12.jpg'
    import {score} from '../Stores/Score.js';
    console.log("score----",$score);
     $:{
       if(score>18){
        console.log(`Your Score is ${$score} Excellent`)
      }else if (score >= 15 && score <= 18){
        console.log(`Your Score is ${$score} Very Good`);
      }else if(score >= 14 && score <= 10){
        console.log(`Your Score is ${$score} Good`);
      }else if(score >= 8 && score < 10){
        console.log(`Your Score is ${$score} Average`);
      }else{
        console.log(`Your Score is ${$score} Poor`);
      }
   }
    </script>
    
    <div class="container">
       <img src={scoreBoardImg} alt="scoreBoardImg" class="float-left mx-5">
       <h1>Your score is </h1>

    </div>