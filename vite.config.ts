import fs from 'fs';
import { baseParse } from '@vue/compiler-core';

export default {
  base: './',
  assetsDir: 'assets',
  vueCustomBlockTransforms: {
    // 存在demo标签时
    demo: (options) => {
      const { code, path } = options;
      const file = fs.readFileSync(path).toString();
      const parsedDemo = baseParse(file).children.find(n => n.tag === 'demo');
      const parsedDesc = baseParse(file).children.find(n => n.tag === 'desc');
      const title = parsedDemo.children[0].content;
      const desc = parsedDesc.children[0].content;
      const main = file.split(parsedDemo.loc.source).join('').split(parsedDesc.loc.source).join('').trim();
      return `export default function (Component) {
        Component.__sourceCode = ${JSON.stringify(main)}
        Component.__sourceCodeTitle = ${JSON.stringify(title)}
        Component.__sourceCodeDesc = ${JSON.stringify(desc)}
      }`.trim();
    },
    // 做兼容， desc标签已在demo函数中处理
    desc: (options) => {
      return `export default function (Component) {
      }`.trim();
    },
  },
};