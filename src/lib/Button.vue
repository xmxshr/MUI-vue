<template>
  <button
    class="mui-button"
    :class="classes"
    :disabled="disabled"
  >
    <span v-if="loading" class="mui-btn-loading-icon"></span>
    <slot />
  </button>
</template>

<script lang="ts">
import { computed } from 'vue';

export default {
  props: {
    theme: {
      type: String,
      default: 'default',
    },
    size: {
      type: String,
      default: 'normal',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    danger: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const { theme, size, danger } = props;
    const classes = computed(() => {
      return {
        [`mui-btn-theme-${theme}`]: theme,
        [`mui-btn-size-${size}`]: size,
        'mui-btn-danger': danger,
      };
    });
    return {
      classes,
    };
  },
};
</script>

<style lang="scss">
$min-width: 60px;
$height: 32px;
$theme-color: #40a9ff;
$warn-color: #ff4d4f;
$color: rgba(0, 0, 0, .85);
$border-color: #d9d9d9;
$radius: 2px;

.mui-button {
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

  &:hover,
  &:focus {
    color: $theme-color;
  }

  &.mui-btn-theme-primary {
    color: #fff;
    background-color: $theme-color;
    border-color: $theme-color;

    &:hover,
    &:focus {
      background-color: darken($theme-color, 10%);
    }
  }

  &.mui-btn-theme-link {
    color: $theme-color;
    border-color: transparent;
    box-shadow: none;

    &:hover,
    &:focus {
      color: darken($theme-color, 10%);
    }
  }

  &.mui-btn-theme-text {
    border-color: transparent;
    box-shadow: none;

    &:hover,
    &:focus {
      color: $color;
      background-color: #f9f9f9;
    }
  }

  &.mui-btn-size-big {
    height: 40px;
    font-size: 16px;
  }

  &.mui-btn-size-small {
    height: 24px;
  }

  &.mui-btn-danger {
    color: $warn-color;
    background-color: #fff;
    border-color: $warn-color;

    &:hover,
    &:focus {
      color: darken($warn-color, 10%);
    }

    &.mui-btn-theme-primary {
      color: #fff;
      background-color: $warn-color;
      border-color: $warn-color;

      &:hover,
      &:focus {
        background-color: darken($warn-color, 10%);
      }
    }

    &.mui-btn-theme-link,
    &.mui-btn-theme-text {
      color: $warn-color;
      background-color: transparent;
      border-color: transparent;

      &:hover,
      &:focus {
        color: darken($warn-color, 10%);
      }
    }
  }


  &[disabled],
  &.mui-btn-theme-primary[disabled] {
    cursor: not-allowed;

    &,
    &:active,
    &:focus,
    &:hover {
      color: rgba(0, 0, 0, .25);
      background-color: #f5f5f5;
      border-color: #d9d9d9;
      box-shadow: none;
    }
  }

  &.mui-btn-theme-link[disabled],
  &.mui-btn-theme-text[disabled] {
    cursor: not-allowed;

    &,
    &:active,
    &:focus,
    &:hover {
      color: rgba(0, 0, 0, .25);
      background-color: transparent;
      border-color: transparent;
      box-shadow: none;
    }
  }

  .mui-btn-loading-icon {
    display: inline-block;
    width: 14px;
    height: 14px;
    margin-right: 6px;
    border: 1px solid;
    border-top-color: transparent;
    border-right-color: transparent;
    border-bottom-color: transparent;
    border-radius: 10px;
    animation: mui-circle 1s linear infinite;
  }
}

@keyframes mui-circle {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>