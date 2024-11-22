<script>
  import { onMount } from "svelte";
  import Button from "../Button.svelte";
  import Input from "../Input.svelte";

  let userInput = "";
  let aiResponse = "";
  let loading = false;

  async function callGemini() {
    loading = true
    const result = await fetch("/api/gemini", {
      method: "POST",
      body: JSON.stringify({ prompt: userInput }),
    });
    loading = false
    aiResponse = (await result.json()).aiResponse;
  }
</script>

<div class="gemini">
  <Input bind:query={userInput} placeholder="Demander à Paco" />
  <Button
    func={callGemini}
    disabled={loading}
    label={loading ? "Chargement..." : "Demander"}
  />

  {#if aiResponse}
    <div class="response">{aiResponse}</div>
  {:else if loading}
    <div class="loading">Paco réfléchit...</div>
  {/if}
</div>

<style>
  .gemini {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .loading {
    color: gray;
    font-style: italic;
  }
  .response {
    margin-top: 10px;
    padding: 10px;
    background-color: #f8f9fa;
    border-radius: 5px;
  }
</style>
