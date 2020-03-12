// 📁 say.js
export default function level2() {
    


  async function loadlevel2() {
      let say = await import(/* webpackChunkName: "button-nested-l3" */'./button-l3');
      say.default(); // Hello!
  
      // await import('./components/Link');
      // await import('./components/Label');
    }
    loadlevel2();

}