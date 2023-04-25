<script>
import VueTyperPlugin from 'vue-typer'
export default {
    components: {
        // ES6; property shorthand + Vue should automatically dasherize the key for us
        VueTyper
    }
}
</script>
<template>
    <vue-typer text='Hello World! I was registered globally!'></vue-typer>
</template>