// Responsive behavior handler
document.addEventListener('DOMContentLoaded', function() {
    // Handle viewport height for mobile
    function setVH() {
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    }
    
    setVH();
    window.addEventListener('resize', setVH);
    
    // Handle modal scroll on mobile
    const modals = document.querySelectorAll('[id^="modal"]');
    modals.forEach(modal => {
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                modal.classList.add('hidden');
            }
        });
    });
    
    // Prevent body scroll when modal is open
    const openModalButtons = document.querySelectorAll('.openModalButton');
    const closeModalButtons = document.querySelectorAll('.closeModalButton');
    
    openModalButtons.forEach(button => {
        button.addEventListener('click', function() {
            document.body.style.overflow = 'hidden';
        });
    });
    
    closeModalButtons.forEach(button => {
        button.addEventListener('click', function() {
            document.body.style.overflow = '';
        });
    });
});
