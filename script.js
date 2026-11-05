const galleryGrid = document.getElementById('gallery-grid');

const techReels = [
    { id: 'server-room-cables', pexelsId: 1085656, category: 'Cabling', title: 'Fiber network cables in a server room', poster: 'free-video-1085656.jpg' },
    { id: 'server-rack', pexelsId: 7140928, category: 'Server Racks', title: 'Status lights across a server rack' },
    { id: 'ethernet-cabling', pexelsId: 7140937, category: 'Networking', title: 'Ethernet cables connected to network hardware' },
    { id: 'cable-technician', pexelsId: 6804656, category: 'Technician Work', title: 'Checking and organizing computer cables' },
    { id: 'rack-server-hardware', pexelsId: 7140931, category: 'Server Hardware', title: 'Enterprise server hardware in a rack' },
    { id: 'drive-installation', pexelsId: 38496192, category: 'Storage', title: 'Installing a drive in a storage device', poster: 'computer-data-device-digital-38496192.jpeg' },
    { id: 'server-room-storage', pexelsId: 5028622, category: 'Server Rooms', title: 'Storage systems inside a server room' },
    { id: 'dual-drive-service', pexelsId: 38496312, category: 'Storage Maintenance', title: 'Servicing a dual-drive storage system', poster: 'computer-data-device-digital-38496312.jpeg' },
    { id: 'drive-bay-service', pexelsId: 38496190, category: 'Storage Maintenance', title: 'Working with dual hard-drive bays', poster: 'computer-data-device-digital-38496190.jpeg' },
    { id: 'motherboard-inspection', pexelsId: 6208729, category: 'Computer Hardware', title: 'Inspecting motherboard components' },
    { id: 'data-center-facility', pexelsId: 38000679, category: 'Data Centers', title: 'Data-center facility and infrastructure', poster: 'cloud-cloud-computing-communication-system-complex-38000679.jpeg' },
    { id: 'secure-storage-drives', pexelsId: 38496193, category: 'Data Storage', title: 'Secure storage with enterprise drives', poster: 'computer-data-device-digital-38496193.jpeg' },
    { id: 'memory-module', pexelsId: 10470834, category: 'Memory', title: 'Computer memory modules in close-up' },
    { id: 'hardware-operation', pexelsId: 3289569, category: 'Hardware', title: 'Computer hardware running in operation', poster: 'free-video-3289569.jpg' },
    { id: 'server-processor', pexelsId: 7141174, category: 'Processors', title: 'Close-up of an electronic processor' },
    { id: 'cooling-fan', pexelsId: 3147349, category: 'Cooling Systems', title: 'Cooling fans inside a computer' },
    { id: 'hard-disk-drive', pexelsId: 19285752, category: 'Storage Hardware', title: 'Hard disk drive close-up', poster: 'hard-disk-drive-19285752.jpeg' },
    { id: 'drive-diagnostics', pexelsId: 7841655, category: 'Storage Hardware', title: 'Inspecting a hard-drive assembly', poster: 'binary-code-computer-data-database-7841655.jpeg' },
    { id: 'processor-cooling', pexelsId: 5467612, category: 'Cooling Systems', title: 'Processor cooling fan and heat management' },
    { id: 'inside-computer', pexelsId: 854969, category: 'Server Components', title: 'A look inside computer hardware', poster: 'free-video-854969.jpg' },
    { id: 'solid-state-storage', pexelsId: 30730786, category: 'Storage Hardware', title: 'Compact SSD with a USB-C connection', poster: '4k-video-backup-device-close-up-compact-storage-30730786.jpeg' },
    { id: 'hardware-repair', pexelsId: 5211073, category: 'Technician Work', title: 'A technician repairs computer hardware', poster: 'computer-repair-5211073.jpeg' },
    { id: 'board-diagnostics', pexelsId: 6755170, category: 'Hardware Inspection', title: 'Close-up inspection of an electronic board', poster: 'broken-broken-glass-capacitors-cellphone-6755170.jpeg' },
    { id: 'motherboard-closeup', pexelsId: 6754818, category: 'Computer Hardware', title: 'Motherboard connections and components' },
    { id: 'printed-circuit-board', pexelsId: 6754830, category: 'Circuit Boards', title: 'Printed circuit board close-up' },
    { id: 'motherboard-components', pexelsId: 6754834, category: 'Computer Hardware', title: 'Electronic components on a motherboard' },
    { id: 'board-repair', pexelsId: 6755168, category: 'Electronics Repair', title: 'Close-up repair work on an electronic board', poster: 'broken-broken-glass-capacitors-cellphone-6755168.jpeg' },
    { id: 'component-assembly', pexelsId: 11537350, category: 'Hardware Assembly', title: 'Assembling computer hardware' },
    { id: 'board-testing', pexelsId: 11537352, category: 'Hardware Testing', title: 'Testing a motherboard assembly' },
    { id: 'cable-disconnection', pexelsId: 9373207, category: 'Technician Work', title: 'Removing wires from a circuit board', poster: 'adult-artificial-automatic-blur-9373207.jpeg' },
    { id: 'electronics-technician', pexelsId: 9431253, category: 'Technician Work', title: 'Repairing an electronic component', poster: 'adult-artificial-automated-automatic-9431253.jpeg' },
    { id: 'processor-installation', pexelsId: 11537353, category: 'Hardware Assembly', title: 'Installing a processor into a motherboard' },
    { id: 'circuit-soldering', pexelsId: 3865559, category: 'Technician Work', title: 'Soldering a circuit board' },
    { id: 'computer-mainboard', pexelsId: 3108007, category: 'Computer Hardware', title: 'The main board inside a computer', poster: 'free-video-3108007.jpg' },
    { id: 'electronic-device-repair', pexelsId: 6755162, category: 'Technician Work', title: 'Repairing an electronic device' },
    { id: 'processor-circuit', pexelsId: 35977437, category: 'Processors', title: 'Processor and circuit-board detail' },
];

const renderGallery = () => {
    galleryGrid.innerHTML = techReels.map(item => {
        return `
            <article class="relative group overflow-hidden rounded-lg bg-gray-900 break-inside-avoid h-full">
                <video
                    data-src="https://www.pexels.com/download/video/${item.pexelsId}/"
                    aria-label="${item.category}: ${item.title}"
                    class="w-full h-full object-cover"
                    loop
                    muted
                    autoplay
                    playsinline
                    preload="none"
                ></video>
                <p hidden class="video-status absolute inset-x-3 top-1/2 -translate-y-1/2 text-center text-sm text-gray-300">
                    Video loads when visible
                </p>
                <div class="pointer-events-none absolute inset-x-0 bottom-12 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-5 pt-16">
                    <p class="text-xs font-semibold uppercase tracking-widest text-cyan-300">${item.category}</p>
                    <h2 class="mt-1 text-lg font-semibold text-white">${item.title}</h2>
                </div>
            </article>
        `;
    }).join('');

    const videos = galleryGrid.querySelectorAll('video');
    const playVideo = video => {
        if (!video.src) {
            video.src = video.dataset.src;
        }
        video.play().catch(error => {
            console.error('Unable to play data center reel', error);
        });
    };

    videos.forEach(video => {
        const status = video.nextElementSibling;
        video.addEventListener('canplay', () => {
            status.hidden = true;
        });
        video.addEventListener('error', () => {
            status.hidden = false;
            status.textContent = 'Video unavailable. Try reloading the page.';
        });
    });

    if (!('IntersectionObserver' in window)) {
        videos.forEach(playVideo);
        return;
    }

    const videoObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                playVideo(entry.target);
            } else {
                entry.target.pause();
            }
        });
    }, { threshold: 0.25 });

    videos.forEach(video => videoObserver.observe(video));
};

document.addEventListener('DOMContentLoaded', renderGallery);
