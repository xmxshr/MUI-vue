<template>
  <div class="dialog-mask"></div>
  <div class="dialog-wrap">
    <div class="dialog">
      <header>
        标题
      </header>
      <main>
        <p>内容</p>
        <p>内容</p>
      </main>
      <footer>
        <Button>ok</Button>
        <Button>cancel</Button>
      </footer>
    </div>
  </div>
</template>

<script lang="ts">
import Button from './Button.vue';

export default {
  components: {
    Button,
  },
};
</script>