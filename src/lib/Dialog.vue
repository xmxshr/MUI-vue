<template>
  <div class="mui-dialog-mask"></div>
  <div class="mui-dialog-wrap">
    <div class="mui-dialog">
      <header class="miu-dialog-header">
        <div class="miu-dialog-title">标题</div>
        <span class="miu-dialog-close"></span>
      </header>
      <main class="miu-dialog-body">
        <p>内容</p>
        <p>内容</p>
      </main>
      <footer class="miu-dialog-footer">
        <Button theme="primary">ok</Button>
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

<style lang="scss">
$z-index: 1000;
$radius: 2px;

.mui-dialog-mask {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: $z-index;
}

.mui-dialog-wrap {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: $z-index + 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.mui-dialog {
  width: 520px;
  background-color: #fff;
  border-radius: $radius;
  box-shadow:
    0 3px 6px -4px rgb(0, 0, 0, 0.12),
    0 6px 16px 0 rgb(0, 0, 0, .08),
    0 9px 28px 8px rgb(0, 0, 0, .05);

  .miu-dialog-header {
    display: flex;
    padding: 16px 24px;
    border-bottom: 1px solid #f0f0f0;

    .miu-dialog-title {
      margin-right: auto;
      font-weight: 500;
      font-size: 16px;
      line-height: 22px;
    }

    .miu-dialog-close {
      position: relative;
      width: 20px;
      height: 20px;
      margin-left: 20px;

      &::before,
      &::after {
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        width: 100%;
        height: 1px;
        background-color: #000;
      }

      &::before {
        transform: translate(-50%, -50%) rotate(45deg);
      }

      &::after {
        transform: translate(-50%, -50%) rotate(-45deg);
      }
    }
  }

  .miu-dialog-body {
    padding: 24px;
    font-size: 14px;
  }

  .miu-dialog-footer {
    padding: 10px 16px;
    text-align: right;
    border-top: 1px solid #f0f0f0;

    button + button {
      margin-left: 8px;
    }
  }
}
</style>