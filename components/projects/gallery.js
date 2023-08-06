console.log("some")

function createModal() {
    document.querySelector('body').insertAdjacentHTML
    ('beforeend',   ` <div class="modalContainer" aria-modal="true" role="dialog">
            <div class="modal">
                <div class="modalOverlay">
                    <div class="modalBtnContainer">
                        <button class="modalBtn modalArrow modalArrowLeft" id="left" aria-label="Previous
                        image">
                            <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10.25 6.75L4.75 12L10.25 17.25"></path>
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19.25 12H5"></path>
                            </svg>
                        </button>
                        <button class="modalBtn modalClose"  aria-label="Close Gallery">
                            <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.25 6.75L6.75 17.25"></path>
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6.75 6.75L17.25 17.25"></path>
                            </svg>
                        </button>
                        <button class="modalBtn modalArrow modalArrowRight" id="right" aria-label="Next image">
                            <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13.75 6.75L19.25 12L13.75 17.25"></path>
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 12H4.75"></path>
                            </svg>
                        </button>
                    </div>
                    <div class="modalIndicatorContainer">
                        <button class="modalIndicator">

                        </button>
                    </div>
                </div>
                <div class="modalImageContainer">
                    <img src="../img/3.jpg" alt="Test" class="modalImage"/>
                </div>
            </div>
        </div>
    `)
}
createModal();
