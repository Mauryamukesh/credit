let slideIndex = 0;
slideshow();
function slideshow()
{
    let i;
    let slides = document.getElementsByClassName('col_images');
    let dots = document.getElementsByClassName('dots');
    for(i = 0; i<slides.length; i++)
    {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if(slideIndex > slides.length)
    {
        slideIndex = 1;
    }
    for(i = 0; i<dots.length;i++)
    {
        dots[i].className =dots[i].className.replace(" active", "");
    }
    slides[slideIndex -1].style.display = "block";
    dots[slideIndex-1].className += " active";
    setTimeout(slideshow, 2000);
}
