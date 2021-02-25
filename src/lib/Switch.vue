<template>
  <button :class="{checked: value}" @click="toggleStatus"> <span></span> </button>
</template>

<script lang="ts">
export default {
  props: {
    value: Boolean,
  },
  setup(props, context) {
    const toggleStatus = () => {
      context.emit('update:value', !props.value);
    };

    return {
      toggleStatus,
    };
  },
};
</script>

<style lang="scss" scoped>
$gap: 2px;
$h: 22px;
$h2: $h - $gap * 2;

button {
  position: relative;
  width: $h * 2;
  height: $h;
  background-color: #666;
  border: none;
  border-radius: $h / 2;
  outline: none;

  > span {
    position: absolute;
    top: $gap;
    left: $gap;
    width: $h2;
    height: $h2;
    background-color: #fff;
    border-radius: $h2 / 2;
    transition: left 0.25s;
  }

  &.checked {
    background-color: #00f;

    > span {
      left: calc(100% - #{$h2} - #{$gap});
    }
  }
}
</style>