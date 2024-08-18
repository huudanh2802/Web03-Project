<script setup lang="ts">
const mes = ref(0);
function alertMes() {
  mes.value++;
  alert(mes.value);
}
</script>
<template>
  <div class="container flex justify-center">
    <button type="button" @click="alertMes">Test</button>
  </div>
</template>
