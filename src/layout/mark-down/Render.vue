<template>
  <div class="markdown reader-night-mode" v-html="text" />
</template>
<script>
import marked from "marked";

import highlight from "highlight.js";
import "highlight.js/styles/dark.css";

export default {
  name: "markeDownRender",
  props: {
    data: {
      type: String,
      default: ""
    }
  },
  mounted() {
    marked.setOptions({
      highlight: code => highlight.highlightAuto(code).value
    });
    this.text = marked(this.data);
  },
  data: () => ({
    text: ""
  }),
  watch: {
    data(value) {
      this.text = marked(value);
    }
  }
};
</script>
<style lang="scss">
.markdown {
  padding: 30px;
  font-weight: 400;
  line-height: 1.8;
  margin-bottom: 20px;
}
</style>
<style lang="scss">
.markdown {
  code,
  pre,
  pre[class*="language-"] {
    font-family: Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace;
    font-size: 12px;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-bottom: 16px;
  }

  h1 {
    font-size: 26px;
  }

  h2 {
    font-size: 24px;
  }

  h3 {
    font-size: 22px;
  }

  h4 {
    font-size: 20px;
  }

  h5 {
    font-size: 18px;
  }

  h6 {
    font-size: 16px;
  }

  p {
    margin-bottom: 20px;
    word-break: break-word;
  }

  hr {
    margin: 0 0 20px;
    border: 0;
    border-top: 1px solid #2f2f2f !important;
  }

  blockquote {
    padding: 20px;
    background-color: #fafafa;
    border-left: 6px solid #e6e6e6;
    word-break: break-word;
    font-size: 16px;
    font-weight: normal;
    line-height: 30px;
    margin: 0 0 20px;
  }

  blockquote h1:last-child,
  blockquote h2:last-child,
  blockquote h3:last-child,
  blockquote h4:last-child,
  blockquote h5:last-child,
  blockquote h6:last-child,
  blockquote li:last-child,
  blockquote ol:last-child,
  blockquote p:last-child,
  blockquote ul:last-child {
    margin-bottom: 0;
  }

  blockquote .image-package {
    width: 100%;
    margin-left: 0;
  }

  ol,
  ul {
    word-break: break-word;
    margin: 0 0 20px 20px;
  }

  ol li,
  ul li {
    line-height: 30px;
  }

  ol li ol,
  ol li ul,
  ul li ol,
  ul li ul {
    margin-top: 16px;
  }

  ol {
    list-style-type: decimal;
  }

  ul {
    list-style-type: disc;
  }

  code {
    padding: 2px 4px;
    border: none;
    vertical-align: middle;
    white-space: pre-wrap;
  }

  :not(pre) code {
    color: #deed2a;
    background-color: #f2f2f2;
  }

  pre,
  pre[class*="language-"] {
    word-wrap: normal;
    word-break: break-all;
    white-space: pre;
    overflow-x: auto;
    margin-top: 0;
    margin-bottom: 20px;
    border-radius: 4px;
    z-index: 0;
    padding: 1em;
    line-height: 1.5;
    color: #ccc;
    background: #2d2d2d;
  }

  pre[class*="language-"] code,
  pre code {
    padding: 0;
    background-color: transparent;
    color: inherit;
    white-space: pre;
    vertical-align: unset;
  }

  table {
    width: 100%;
    margin-bottom: 20px;
    border-collapse: collapse;
    border: 1px solid #eee;
    border-left: none;
    word-break: break-word;
  }

  table td,
  table th {
    padding: 8px;
    border: 1px solid #eee;
    line-height: 20px;
    vertical-align: middle;
  }

  table th {
    font-weight: bold;
  }

  table thead th {
    vertical-align: middle;
    text-align: inherit;
  }

  table tr:nth-of-type(2n) {
    background-color: hsla(0, 0%, 70.2%, 0.15);
  }

  table .image-package {
    width: 100%;
    margin-left: 0;
  }

  img {
    max-width: 100%;
    display: block;
    margin: 10px auto;
  }

  .image-package {
    width: 100%;
    margin: 0;
    padding-bottom: 25px;
    text-align: center;
    font-size: 0;
  }

  .image-package img {
    max-width: 100%;
    width: auto;
    height: auto;
    vertical-align: middle;
    border: 0;
  }

  .image-package .image-container {
    position: relative;
    z-index: 95;
    background-color: #e6e6e6;
    transition: background-color 0.1s linear;
    margin: 0 auto;
  }

  .image-package .image-container-fill {
    z-index: 90;
  }

  .image-package .image-container .image-view {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  .image-package .image-container .image-view-error {
    cursor: pointer;
    color: grey;
  }

  .image-package .image-container .image-view-error:after {
    content: "\56FE\7247\83B7\53D6\5931\8D25\FF0C\8BF7\70B9\51FB\91CD\8BD5";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    transform: translate(-50%, -50%);
    color: inherit;
    font-size: 14px;
  }

  .image-package .image-container .image-view img.image-loading {
    opacity: 0.3;
  }

  .image-package .image-container .image-view img {
    transition: all 0.15s linear;
    z-index: 95;
    opacity: 1;
  }

  .image-package .image-caption {
    min-width: 20%;
    max-width: 80%;
    min-height: 43px;
    display: inline-block;
    padding: 10px;
    margin: 0 auto;
    border-bottom: 1px solid #eee;
    font-size: 13px;
    color: #999;
  }

  .image-package .image-caption:empty {
    display: none;
  }

  .math-block[mathimg="1"] {
    display: block;
    margin: 1em auto;
  }

  .math-inline[mathimg="1"] {
    display: inline;
    margin: 0 3px;
    vertical-align: middle;
  }

  .math-block[mathimg="1"],
  .math-inline[mathimg="1"] {
    max-width: 100%;
  }

  &.reader-night-mode {
    blockquote {
      background-color: #595959;
      border-color: #262626;
    }

    hr {
      border-color: #2f2f2f !important;
    }

    .math-block[mathimg="1"],
    .math-inline[mathimg="1"] {
      filter: invert(0.8);
    }

    :not(pre) code {
      background-color: #262626;
    }

    .image-package .image-caption {
      border-color: #2f2f2f;
    }

    .image-package .image-container .image-view-error {
      color: #b3b3b3;
    }

    .image-package .image-container {
      background-color: #595959;
    }

    .image-package img {
      opacity: 0.85;
    }

    table,
    table td,
    table th {
      border-color: #2f2f2f;
    }
  }
}
</style>
