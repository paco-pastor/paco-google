<script>
  import { onMount } from "svelte";
  import Button from "./Button.svelte";
  import Input from "./Input.svelte";

  let userInput = "";
  let aiResponse = "";
  let loading = false;

  let genAI;
  onMount(async () => {
    const { GoogleGenerativeAI } = await import("@google/generative-ai");
    genAI = new GoogleGenerativeAI("API_KEY");
  });

  async function callGemini() {
    if (!genAI || !userInput.trim()) return;

    loading = true;
    aiResponse = "";

    try {
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
      const result = await model.generateContent(userInput);
      aiResponse = result.response.text();
    } catch (error) {
      console.error("Erreur lors de l'appel à l'IA :", error);
      aiResponse = "Une erreur s'est produite. Veuillez réessayer.";
    } finally {
      loading = false;
    }
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