<script>
    import Gemini from '../components/Gemini.svelte';
    import Logo from '../components/logo/Logo.svelte';
    import Input from '../components/Input.svelte';
</script>

<div class="app">
    <Logo/>
    <Input/>
    <Gemini/>
</div>

<style>
    .app {
        align-items: center;
        display: flex;
        flex-direction: column;
    }
</style>