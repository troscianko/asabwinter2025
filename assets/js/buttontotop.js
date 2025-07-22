    window.addEventListener('load', function() {

        const topBtn = document.getElementById('topBtn');
    
        window.onscroll = function() { 
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                topBtn.style.display = 'flex';
            } 
            else {
                topBtn.style.display = 'none';
            }
        }
    
        topBtn.addEventListener('click', function() { 
            window.scroll({top: 0, behavior: 'smooth'});
        });
    
        if (!window.matchMedia('(max-width: 480px)').matches) {
            startSlideshow();
        }
    
    });