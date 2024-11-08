// store-links.js
document.addEventListener('DOMContentLoaded', function() {
    // URLs for the stores
    const APP_STORE_URL = 'https://apps.apple.com/us/app/liferoll/id1540436603';
    const GOOGLE_PLAY_URL = 'https://play.google.com/store/apps/details?id=com.liferoll.prana';

    // Find all store images and their parent links
    const appStoreImages = document.querySelectorAll('img[src*="app-store.png"]');
    const googlePlayImages = document.querySelectorAll('img[src*="google-play.png"]');

    // Add click handlers to App Store images
    appStoreImages.forEach(img => {
        img.style.cursor = 'pointer';
        img.addEventListener('click', (e) => {
            e.preventDefault(); // Prevent default behavior
            window.open(APP_STORE_URL, '_blank');
        });
        
        // If the image is inside an anchor tag, prevent its default behavior too
        const parentAnchor = img.closest('a');
        if (parentAnchor) {
            parentAnchor.addEventListener('click', (e) => {
                e.preventDefault(); // Prevent default behavior
                window.open(APP_STORE_URL, '_blank');
            });
        }
    });

    // Add click handlers to Google Play images
    googlePlayImages.forEach(img => {
        img.style.cursor = 'pointer';
        img.addEventListener('click', (e) => {
            e.preventDefault(); // Prevent default behavior
            window.open(GOOGLE_PLAY_URL, '_blank');
        });
        
        // If the image is inside an anchor tag, prevent its default behavior too
        const parentAnchor = img.closest('a');
        if (parentAnchor) {
            parentAnchor.addEventListener('click', (e) => {
                e.preventDefault(); // Prevent default behavior
                window.open(GOOGLE_PLAY_URL, '_blank');
            });
        }
    });
});