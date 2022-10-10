<script>
  import { createEventDispatcher } from 'svelte'
  import backSVG from '../assets/js-badge.svg'

  // PROPS
  export let framework
  export let card

  const dispatch = createEventDispatcher();

  // HANDLERS
  function flip(e) {
    dispatch('flip', {
      card: e.currentTarget
    });
  }
</script>

<div
  data-framework={framework}
  class={`memory-card`}
  on:click={flip}
>
  <img
    class={'back-face'}
    src={backSVG}
    alt="Click me!"
  />
  <img
    class='front-face'
    src={`/src/assets/${card.face}`}
    alt='card face'
  />
</div>
