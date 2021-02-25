<template>
  <button class="m-button">
    <slot />
  </button>
</template>

<style lang="scss" scoped>
$min-width: 60px;
$height: 32px;
$theme-color: #40a9ff;
$color: rgba(0, 0, 0, .85);
$border-color: #d9d9d9;
$radius: 2px;

.m-button {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  min-width: $min-width;
  height: $height;
  padding: 0 12px;
  font-size: 14px;
  white-space: nowrap;
  color: $color;
  background-color: #fff;
  box-shadow: 0 1px 0 fade-out($color: #000, $amount: 0.95);
  border: 1px solid $border-color;
  border-radius: $radius;
  box-sizing: border-box;
  cursor: pointer;
  outline: none;
  transition: all 0.25s;

  & + & {
    margin-left: 10px;
  }

  &:hover,
  &:focus {
    color: $theme-color;
  }
}
</style>