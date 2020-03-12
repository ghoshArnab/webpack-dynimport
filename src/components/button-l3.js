// 📁 say.js
export default function level3() {
    


  async function loadlevel3() {
      let say = await import(/* webpackChunkName: "button-nested" */'./nested-button');
      say.default(); // Hello!
  
      // await import('./components/Link');
      // await import('./components/Label');
    }
    loadlevel3();

}