/**
 * PRELOAD STRATEGY.
 * EX:
 * preload([
  'https://picsum.photos/id/0/5616/3744',
  'https://picsum.photos/id/10/2500/1667'
])
 */

export const preload = (sources) => {
    const images = [];
    for (const s of sources) {
      const image = new Image();
      image.src = s
      images.push(image)
    }
}

export const showBlankPageLoading = () => {
    const heroSection = document.querySelector('.hero');

    window.addEventListener('load', () => {
        heroSection.animate([
          {opacity: 0},
          {opacity: 1},
        ],{duration:500,
        fill:'forwards'})

     
      
  });
    
}

// export const addLoadingClass = () =>  document.querySelector('.hero').classList.add('loading'); //document.body.classList.add('loading');
// //export const removeLoadingClass = () => document.querySelector('.hero').classList.remove('loading'); //document.body.classList.remove('loading');



// export const removeLoadingClassWhenReady = (element)  => { 
    
//     console.log('Adding eventListener: ', element);
//     window.addEventListener('load', () => removeLoadingClass());
  
// }



