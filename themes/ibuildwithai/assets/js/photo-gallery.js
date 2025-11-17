(function() {
    const gallery = document.querySelector('[data-gallery]');
    if (!gallery) return;
    
    const track = gallery.querySelector('[data-track]');
    const slides = gallery.querySelectorAll('[data-slide]');
    const prevBtn = gallery.querySelector('[data-prev]');
    const nextBtn = gallery.querySelector('[data-next]');
    
    if (!track || !slides.length) return;
    
    let currentIndex = 0;
    const totalSlides = slides.length;
    
    // If only one image, no navigation needed
    if (totalSlides === 1) return;
    
    // Update display and button states
    function updateGallery() {
        const translateX = -currentIndex * 100;
        track.style.transform = `translateX(${translateX}%)`;
        
        // Update button states (only if buttons exist)
        if (prevBtn) prevBtn.disabled = currentIndex === 0;
        if (nextBtn) nextBtn.disabled = currentIndex === totalSlides - 1;
    }
    
    // Navigate to specific slide
    function goToSlide(index) {
        if (index < 0 || index >= totalSlides) return;
        currentIndex = index;
        updateGallery();
    }
    
    // Previous slide
    function prevSlide() {
        goToSlide(currentIndex - 1);
    }
    
    // Next slide
    function nextSlide() {
        goToSlide(currentIndex + 1);
    }
    
    // Event listeners (only if buttons exist)
    if (prevBtn) prevBtn.addEventListener('click', prevSlide);
    if (nextBtn) nextBtn.addEventListener('click', nextSlide);
    
    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (!gallery.matches(':hover')) return;
        
        if (e.key === 'ArrowLeft') {
            e.preventDefault();
            prevSlide();
        } else if (e.key === 'ArrowRight') {
            e.preventDefault();
            nextSlide();
        }
    });
    
    // Touch/swipe support
    let startX = 0;
    let startY = 0;
    let isDragging = false;
    
    track.addEventListener('touchstart', function(e) {
        startX = e.touches[0].clientX;
        startY = e.touches[0].clientY;
        isDragging = false;
    }, { passive: true });
    
    track.addEventListener('touchmove', function(e) {
        if (!isDragging) {
            const deltaX = Math.abs(e.touches[0].clientX - startX);
            const deltaY = Math.abs(e.touches[0].clientY - startY);
            
            // Only start dragging if horizontal movement is greater than vertical
            if (deltaX > deltaY && deltaX > 10) {
                isDragging = true;
                e.preventDefault();
            }
        }
    }, { passive: false });
    
    track.addEventListener('touchend', function(e) {
        if (!isDragging) return;
        
        const endX = e.changedTouches[0].clientX;
        const deltaX = startX - endX;
        const threshold = 50; // Minimum swipe distance
        
        if (Math.abs(deltaX) > threshold) {
            if (deltaX > 0) {
                nextSlide(); // Swipe left, go to next
            } else {
                prevSlide(); // Swipe right, go to previous
            }
        }
        
        isDragging = false;
    }, { passive: true });
    
    // Prevent default drag behavior on images
    slides.forEach(slide => {
        const img = slide.querySelector('img');
        if (img) {
            img.addEventListener('dragstart', e => e.preventDefault());
        }
    });
    
    // Initialize gallery
    updateGallery();
})();