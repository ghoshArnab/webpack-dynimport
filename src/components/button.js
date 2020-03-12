// 📁 say.js
export default function hi() {



  async function nestedload() {
    let say = await import(/* webpackChunkName: "button-nested-l1" */'./button-l1');
    say.default(); // Hello!

    // await import('./components/Link');
    // await import('./components/Label');
  }
  nestedload();

}