let images = [
    "book.jpg",
    "greatb.jpg",
    "fantasy.jpg"
  ];
  let currentIndex = 0;
  
  function openLightbox(index) {
    currentIndex = index;
    document.getElementById("lightbox-img").src = images[currentIndex];
    document.getElementById("lightbox").style.display = "block";
  }
  
  function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
  }
  
  function changeImage(direction) {
    currentIndex += direction;
  
    if (currentIndex >= images.length) {
      currentIndex = 0; 
    } else if (currentIndex < 0) {
      currentIndex = images.length - 1; 
    }
  
    document.getElementById("lightbox-img").src = images[currentIndex];
  }
  