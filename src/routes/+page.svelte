<script>
  import { onMount } from "svelte";
  import SearchEngine from "../components/searchEngine/Main.svelte";

  let data;
  onMount(async () => {
    const response = await fetch("/api/github");
    data = await response.json();
    console.log(data);
  });
</script>

<SearchEngine />
