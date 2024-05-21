document.addEventListener('DOMContentLoaded', function () {
    const machineImages = document.querySelectorAll('.machine-img');

    machineImages.forEach(img => {
        img.addEventListener('mouseenter', function () {
            this.style.transform = 'scale(1.1)';
            this.style.transition = 'transform 0.3s ease';
        });

        img.addEventListener('mouseleave', function () {
            this.style.transform = 'scale(1)';
            this.style.transition = 'transform 0.3s ease';
        });
    });

    const header = document.querySelector('.header');
    const logo = document.querySelector('.logo');
    const headerTitle = document.querySelector('.header-title');
    const footer = document.querySelector('.footer');

    header.style.animation = 'fadeInDown 1s ease-in-out';
    logo.style.animation = 'slideInLeft 1s ease-in-out';
    headerTitle.style.animation = 'fadeInUp 1s ease-in-out';
    footer.style.animation = 'fadeInUp 1s ease-in-out';
});
