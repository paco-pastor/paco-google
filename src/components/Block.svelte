<script>
    let { background } = $props();
</script>

<div class="box" style="background-color: {background}">
    <slot></slot>
</div>

<style>
    .box {
        border: 1px solid rgb(237, 237, 237);
        border-radius: 8px;
        padding: 16px;
        height: 3em;
        width: 3em;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }
</style>