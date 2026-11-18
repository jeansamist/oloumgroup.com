// Inline scripts that run before first paint (rendered in the root layout).
// Kept in a plain module: exporting them from a "use client" file would turn
// them into client references on the server.

/** Flags JS + motion so reveal animations can hide content until they run, and skips the loader when already seen this session. */
export const bootScript = `(function(){var d=document.documentElement;try{var r=matchMedia('(prefers-reduced-motion: reduce)').matches;if(!r){d.classList.add('js-motion')}if(r||sessionStorage.getItem('og-loaded')){d.classList.add('no-loader')}else{sessionStorage.setItem('og-loaded','1')}}catch(e){d.classList.add('no-loader')}})();`
