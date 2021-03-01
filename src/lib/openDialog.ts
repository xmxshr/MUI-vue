import { createApp, h } from 'vue';
import Dialog from './Dialog.vue';

const openDialog = (options) => {
  const {
    title = '标题',
    content = '内容',
    clickMaskClose = false,
    okFn,
    cancelFn,
  } = options;

  const div = document.createElement('div');
  document.body.appendChild(div);

  const close = () => {
    app.unmount(div);
    div.remove();
  };

  const app = createApp({
    render() {
      return h(Dialog, {
        visible: true,
        clickMaskClose,
        okFn,
        cancelFn,
        'onUpdate:visible': (newVisible) => {
          close();
        },
      }, {
        title,
        content,
      });
    },
  });
  app.mount(div);
};

export {
  openDialog,
};