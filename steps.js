// steps.js
document.addEventListener('DOMContentLoaded', function() {
    const stepItems = document.querySelectorAll('.step-item');
    
    stepItems.forEach(item => {
        const button = item.querySelector('.step-button');
        
        button.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            
            // Close all steps
            stepItems.forEach(step => step.classList.remove('active'));
            
            // If the clicked step wasn't active, open it
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });
});