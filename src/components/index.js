

/* Strategy 1 : Using navigator.language to load only the locale that user's browser is set up with 
	This creates a main controller file and locale file are loaded as promise
	This supports code splitting
*/
// export default async function update() {
//     await import(/* webpackChunkName: "Button" */ "./button");

//     await import(/* webpackChunkName: "ar" */ "./Link");

//     await import(/* webpackChunkName: "hi" */ "./Label");

// }


// update();