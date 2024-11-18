<script>
  let { label = "", disabled = false, func } = $props();
</script>

<button onclick={() => func()} {disabled}>
  {label}
</button>

<style>
  button {
    color: white;
    border: none;
    border-radius: 4px;
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
  }

  button:hover {
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
    border: 1px solid #dadce0;
    color: #202124;
  }

  button:disabled {
    cursor: not-allowed;
  }

  button {
    background-color: #f8f9fa;
    border: 1px solid #f8f9fa;
    border-radius: 4px;
    color: #3c4043;
    font-family: Arial, sans-serif;
    font-size: 14px;
    margin: 11px 4px;
    padding: 0 16px;
    line-height: 27px;
    height: 36px;
  }
</style>
