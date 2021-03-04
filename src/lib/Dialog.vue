<template>
  <template v-if="visible">
    <Teleport to="body">
      <div class="mui-dialog-mask" @click="onClickMask"></div>
      <div class="mui-dialog-wrap">
        <div class="mui-dialog">
          <header class="miu-dialog-header">
            <div class="miu-dialog-title">
              <slot name="title">提示</slot>
            </div>
            <span class="miu-dialog-close" @click="onClose"></span>
          </header>
          <main class="miu-dialog-body">
            <slot name="content">内容</slot>
          </main>
          <footer class="miu-dialog-footer">
            <Button theme="primary" @click="onOk">ok</Button>
            <Button @click="onCancel">cancel</Button>
          </footer>
        </div>
      </div>
    </Teleport>
  </template>
</template>

<script lang="ts">
import Button from './Button.vue';

export default {
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
    clickMaskClose: {
      type: Boolean,
      default: true,
    },
    okFn: {
      type: Function,
    },
    cancelFn: {
      type: Function,
    },
  },
  components: {
    Button,
  },
  setup(props, context) {
    // 关闭函数
    const onClose = () => {
      context.emit('update:visible', false);
    };
    // 判断点击 mask 关闭
    const onClickMask = () => {
      if (props.clickMaskClose) onClose();
    };
    // 点击 确定 按钮
    const onOk = () => {
      if (props.okFn) {
        if (props.okFn() !== false) onClose();
      }
      else onClose();
    };
    // 点击 取消 按钮
    const onCancel = () => {
      if (props.cancelFn) {
        if (props.cancelFn() !== false) onClose();
      }
      else onClose();
    };
    return {
      onClose,
      onClickMask,
      onOk,
      onCancel,
    };
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
  background-color: rgba(0, 0, 0, .6);
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
  pointer-events: none;
}

.mui-dialog {
  width: 520px;
  background-color: #fff;
  border-radius: $radius;
  box-shadow:
    0 3px 6px -4px rgb(0, 0, 0, 0.12),
    0 6px 16px 0 rgb(0, 0, 0, .08),
    0 9px 28px 8px rgb(0, 0, 0, .05);
  pointer-events: all;

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