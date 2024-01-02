// Function to activate the career toggle and deactivate the personal toggle


function activateCareer() {
    document.getElementById('career-toggle').classList.add('active');
    document.getElementById('personal-toggle').classList.remove('active');
    document.querySelector('.sub-title').textContent = 'EARLY CAREER PRODUCT MANAGER';
    document.querySelector('.bio').innerHTML = 'A (soon-to-be) new grad with close to 2 years of experience in product/UX. Previously at <span class="highlight microsoft">Microsoft.</span> Currently at <span class="highlight unc-chapel-hill">UNC Chapel Hill</span>, finishing my degree and leading the development of three iOS products at <span class="highlight app-team-carolina">App Team Carolina.</span>';

    document.querySelector('.career .toggle-background').style.borderColor = '#FFB8F8';
    document.querySelector('.career .toggle-text').style.color = '#FFB8F8';
    document.querySelector('.personal .toggle-background').style.borderColor = '#373C42';
    document.querySelector('.personal .toggle-text').style.color = '#373C42';
}

// Function to activate the personal toggle and deactivate the career toggle
function activatePersonal() {
    document.getElementById('personal-toggle').classList.add('active');
    document.getElementById('career-toggle').classList.remove('active');
    document.querySelector('.sub-title').textContent = '"LIVE,LAUGH,LOVE" ENTHUSIAST';
    document.querySelector('.bio').innerHTML = 'A young woman driven by her passions, love for <span class="highlight family">family</span>, and the thrill of a well-planned prank. I cherish <span class="highlight personal-growth">personal growth</span> and the simple joys of life, always making sure to keep room for laughter and <span class="highlight light-hearted-moments">light-hearted moments.</span>';
    // Update the colors
    document.querySelector('.personal .toggle-background').style.borderColor = '#FFB8F8';
    document.querySelector('.personal .toggle-text').style.color = '#FFB8F8';
    document.querySelector('.career .toggle-background').style.borderColor = '#373C42';
    document.querySelector('.career .toggle-text').style.color = '#373C42';
}

// Event listeners for the toggle buttons
document.getElementById('career-toggle').addEventListener('click', activateCareer);
document.getElementById('personal-toggle').addEventListener('click', activatePersonal);

// Call the function to set the default state to 'career'
activateCareer(); // This will set the career toggle as the default active state
