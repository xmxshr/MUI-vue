<template>
  <button class="mui-switch" :class="{'mui-checked': value}" @click="toggleStatus"> <span></span> </button>
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

<style lang="scss">
$gap: 2px;
$h: 22px;
$h2: $h - $gap * 2;

.mui-switch {
  position: relative;
  width: $h * 2;
  height: $h;
  background-color: #bfbfbf;
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
    transition: all 0.25s;
  }

  &.mui-checked {
    background-color: #1890ff;

    > span {
      left: calc(100% - #{$h2} - #{$gap});
    }
  }

  &:active > span {
    width: $h2 + 4px;
  }

  &.mui-checked:active > span {
    width: $h2 + 4px;
    margin-left: -4px;
  }
}
</style>