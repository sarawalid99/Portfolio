document.addEventListener("DOMContentLoaded", function() {
    window.addEventListener("scroll", function() {
      if (window.scrollY > 550) {
        document.querySelector('.navbar').classList.add('solid');
        document.querySelector('.back-to-top').classList.add('visible');
      } else {
        document.querySelector('.navbar').classList.remove('solid');
        document.querySelector('.back-to-top').classList.remove('visible');
      }
    });
  
    var links = document.querySelectorAll("a");
    links.forEach(function(link) {
      link.addEventListener("click", function(event) {
        if (link.hash !== "") {
          event.preventDefault();
  
          var hash = link.hash;
          var targetElement = document.querySelector(hash);
  
          window.scrollTo({
            top: targetElement.offsetTop,
            behavior: "smooth"
          });
  
          window.location.hash = hash;
        }
      });
    });
  });
  