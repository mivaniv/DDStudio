
const zoomBtn = document.querySelectorAll('.projectsGalleryProjectInformationZoom');
const allImages = document.querySelectorAll('.projectsGalleryProject');
const imgView = document.querySelector('.imageView');
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');
const imgBox = document.querySelector('.imageBox');

let currentImageIdx = 0;

imgView.addEventListener('click', function(){
    this.style.display = "none";
    imgBox.style.display = "none";
})


zoomBtn.forEach(function(btn, index){
    btn.addEventListener('click', function(){
        imgView.style.display = "block";
        imgBox.style.display = "block";
        currentImageIdx = index + 1;
        currentImageDisplay(currentImageIdx);
    })
})

function currentImageDisplay(position){
    imgBox.style.background = `url(components/img/test/img${currentImageIdx}.jpg) center/cover no-repeat`;
}

prevBtn.addEventListener('click', function(){
    currentImageIdx--;
    if(currentImageIdx === 0){
        currentImageIdx = allImages.length;
    }
    currentImageDisplay(currentImageIdx);
})

nextBtn.addEventListener('click', function(){
    currentImageIdx++;
    if(currentImageIdx === 5){
        currentImageIdx = 1;
    }
    currentImageDisplay(currentImageIdx);
})

