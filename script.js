const galleryGrid = document.getElementById('gallery-grid');

// Mock data generation to simulate Pexels API response
const generateMockImages = (count) => {
    const items = [];
    const videoUrls = [
        'https://videos.pexels.com/video-files/4763824/4763824-uhd_2560_1440_24fps.mp4',
        'https://videos.pexels.com/video-files/855564/855564-hd_1920_1080_24fps.mp4',
        'https://videos.pexels.com/video-files/1448735/1448735-hd_1920_1080_24fps.mp4',
        'https://videos.pexels.com/video-files/3195394/3195394-uhd_2560_1440_25fps.mp4',
        'https://videos.pexels.com/video-files/3209828/3209828-uhd_2560_1440_25fps.mp4',
        'https://videos.pexels.com/video-files/2882787/2882787-uhd_2560_1440_24fps.mp4',
        'https://videos.pexels.com/video-files/5896379/5896379-uhd_2560_1440_24fps.mp4',
        'https://videos.pexels.com/video-files/3045163/3045163-uhd_2560_1440_24fps.mp4'
    ];

    for (let i = 0; i < count; i++) {
        const id = i + 100;
        const videoUrl = videoUrls[i % videoUrls.length]; // Cycle through videos
        items.push({
            id: `video-${id}`,
            type: 'video',
            url: videoUrl,
            alt: `Gallery Video ${id}`,
            photographer: `Videographer ${i + 1}`
        });
    }
    return items;
};

const renderGallery = () => {
    const items = generateMockImages(12); // Generate 12 video items

    galleryGrid.innerHTML = items.map(item => `
        <div class="relative group overflow-hidden rounded-lg bg-gray-900 break-inside-avoid h-full">
            <video 
                src="${item.url}" 
                class="w-full h-full object-cover"
                autoplay 
                loop 
                muted 
                playsinline
            ></video>
            <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p class="text-white text-sm font-medium truncate w-full">${item.photographer}</p>
            </div>
        </div>
    `).join('');
};

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderGallery();
});
