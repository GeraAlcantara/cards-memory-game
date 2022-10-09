<script>
  import MemoryCard from "./components/MemoryCard.svelte";

  const cards = [
				{
					name: "react",
					face: "react.svg",
				},
				{
					name: "ember",
					face: "ember.svg",
				},
				{
					name: "vue",
					face: "vue.svg",
				},
				{
					name: "node",
					face: "node.svg",
				},
				{
					name: "svelte",
					face: "svelte.svg",
				},
				{
					name: "angular",
					face: "angular.svg",
				},
			]
</script>

<main class="memory-game">
  {#each cards as card}
    <MemoryCard 
      card={card} 
    />
    <MemoryCard 
      card={card} 
    />
  {/each}
</main>
