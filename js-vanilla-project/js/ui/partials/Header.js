export const body = document.querySelector("body");

export const createHeader = () => {

    const header = document.createElement("header");

    header.innerHTML = `
    <header class="header">
        <div class="container">
            <nav class="hamburger">     
                <button class="hamburger-btn">
                    <span class="hamburger-btn-bar"></span>
                    <span class="hamburger-btn-bar"></span>
                    <span class="hamburger-btn-bar"></span>
                </button>
            </nav>
            <nav class="desktop">
                <h1 class="logo-title"> Virtual life </h1>
                <div class="desktop-nav row">
                        <div class=" col-lg-1 feed-page">Feed</div>
                        <div class="col-lg-1 people-page">People</div>  
                        <div class="col-lg-1 profile-page">Profile</div>  
                </div>
            </nav>
        </div>
    </header>
    <nav class="mobile">
        <ul class="mobile-items">
            <li class="mobile-item feed-page">Feed</li>
            <li class="mobile-item people-page">People</li>
            <li class="mobile-item profile-page">Profile</li>
        </ul>
    </nav>

    `
    body.insertBefore(header, body.firstChild);

    const openMobile = () => {
        mobileNav.classList.add('open');
    }

    const closeMobile = () => {
        mobileNav.classList.remove('open');
    }

    const hamburgerButton = document.querySelector('.hamburger-btn');
    const mobileNav = document.querySelector('.mobile');

    hamburgerButton.addEventListener('click', openMobile);
    mobileNav.addEventListener('click', closeMobile);
}

