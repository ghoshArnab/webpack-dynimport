// 📁 say.js
export default function level1() {
    


  async function loadlevel1() {
      let say = await import(/* webpackChunkName: "button-nested-l2" */'./button-l2');
      say.default(); // Hello!
  
      // await import('./components/Link');
      // await import('./components/Label');
    }
    loadlevel1();

}