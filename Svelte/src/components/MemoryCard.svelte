<script>
  import backSVG from '../assets/js-badge.svg'
  import frontSVG from '../assets/vue.svg'

  // PROPS
  export let card;

  // STATE
  let flipped = false;

  // HANDLERS
  function flip(e) {
    flipped = !flipped
    e.currentTarget.classList.toggle('flip')
  }
  
</script>

<div
  class={`memory-card`}
  on:click={flip}
>
  {#if !flipped}
    <img
      class={'back-face'}
      src={backSVG}
      alt="Click me!"
    />
  {:else}
    <img
      class='front-face'
      src={`/src/assets/${card.face}`}
      alt='card face'
    />
  {/if}
</div>
