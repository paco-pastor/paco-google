<script>
    import Letter from './Letter.svelte';
</script>

<div class="logo">
    <Letter label="P"/>
    <Letter label="a" color="#EA4335"/>
    <Letter label="c" color="#FBBC05"/>
    <Letter label="o" color="#34A853"/>
    <div class="space"></div>
    <Letter label="P"/>
    <Letter label="a" color="#EA4335"/>
    <Letter label="s" color="#FBBC05"/>
    <Letter label="t" color="#34A853"/>
    <Letter label="o"/>
    <Letter label="r" color="#EA4335"/>
</div>

<style>
    .logo {
        display: flex;
    }
    .space {
        width: 1em;
    }
</style>