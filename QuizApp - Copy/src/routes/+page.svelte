<script>
    import Header from "../lib/Header.svelte";
    import Data from '../lib/Data/myJson2.json';
    import Question from "$lib/Question.svelte";
    import QuizComponent from "$lib/QuizComponent.svelte";
    import Stopwatch from '../lib/Stopwatch.svelte';
    import ScoreBoard from '../lib/ScoreBoard.svelte';

    console.log(Data)

</script>

      <Header />
      <Stopwatch />
      <Question/>
     
