<script>
    import { onMount } from 'svelte';
    import Logo from '../components/logo/Logo.svelte';
    import Search from '../components/Search.svelte';

    let data;
    onMount(async () => {
        const response = await fetch('/api/github');
        data = await response.json();
        console.log(data)
    });
</script>

<div class="app">
    <Logo/>
    <Search/>
</div>

<style>
    .app {
        align-items: center;
        display: flex;
        flex-direction: column;
    }
</style>