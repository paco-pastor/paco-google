<script>
    let { label = "", color = "#4285F4" } = $props()
</script>

<p style="color: {color}">{ label }</p>

<style>
    @font-face {
        font-family: 'default';
        src: url('product_sans_bold.ttf');
    }
    p {
        font-family: 'default';
        font-size: 4em;
    }
</style>
