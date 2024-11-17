<script>
    let searchQuery = '';
</script>
<input
    type="text"
    placeholder="Demander à Paco"
    bind:value={searchQuery}
/>

<style>
    input {
        width: 100%;
        max-width: 500px;
        padding: 10px 15px;
        font-size: 16px;
        border: 1px solid #dcdcdc;
        border-radius: 24px;
        outline: none;
        box-shadow: none;
        transition: border-color 0.2s ease-in-out;
        color: #202124;
    }

    input:focus {
        border-color: #4d90fe;
        background-color: white;
        box-shadow: 0 0 8px rgba(63, 137, 255, 0.3);
    }

    input::placeholder {
        color: #9e9e9e;
        font-style: italic;
    }
</style>

