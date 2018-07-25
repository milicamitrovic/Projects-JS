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
                <div class="desktop-nav row">
                    <h1 class="logo-title"> Virtual life </h1>
                        <div class="feed-page">Feed</div>
                        <div class="people-page">People</div>  
                        <div class="profile-page">Profile</div>  
                    </div>
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

