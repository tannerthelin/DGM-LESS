
window.onload = function() {

    var timeline = new TimelineMax();
    timeline.from("#title", 1, {y:100, opacity: 0},0)
      .from("#content", 1, {y:100, opacity: 0},0.5)
      .from("#nav-container", 1, {y:100, opacity: 0},1)
  }

  const footerLink = document.querySelector('#footerLink');
  const footerContent = document.querySelector('#footerContent');
  footerLink.addEventListener('mouseover', function(){
    //animation here
    var duration = 1;
    TweenMax.to(footerContent, duration / 4, {y:-50, ease:Power2.easeOut});
    TweenMax.to(footerContent, duration / 2, {y:0, ease:Bounce.easeOut, delay:duration / 4});

  });