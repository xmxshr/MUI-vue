<template>
  <button> <span></span> </button>
</template>

<style lang="scss" scoped>
$gap: 2px;
$h: 22px;
$h2: $h - $gap * 2;

button {
  position: relative;
  width: $h * 2;
  height: $h;
  background-color: #00f;
  border: none;
  border-radius: $h / 2;
}

span {
  position: absolute;
  top: $gap;
  left: $gap;
  width: $h2;
  height: $h2;
  background-color: #fff;
  border-radius: $h2 / 2;
}
</style>