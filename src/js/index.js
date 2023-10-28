const siteTitle = document.getElementById('site-title');
const navEl = document.getElementsByTagName('li');
const contentText = document.getElementsByClassName('content-text');
const siteDesc = document.querySelector('#site-description');
const contentDiv = document.querySelector('.content');
const altNavs = document.querySelectorAll('#nav > li:nth-of-type(odd)');

//Manipulation
siteTitle.innerText = 'Dynamation SpaceTech';

//need to show lines in nav bar after selecting
Array.from(navEl).forEach(
    (el) => (el.innerText = `--${el.innerText}--`)
    ); 

Array.from(contentText).forEach(
    (el) => (el.innerText = el.innerText.toUpperCase())
); 

siteDesc.innerText = siteDesc.innerText.replace(
    'DynTech LLC',
    'Dynamation SpaceTech'
);

contentDiv.style.backgroundColor = '#fff';
contentDiv.style.textAlign = 'justify';

Array.from(altNavs).forEach(
    (el) => (el.style.backgroundColor='grey')
)










