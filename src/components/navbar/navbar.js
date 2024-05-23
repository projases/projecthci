import './navbar.css'
import { expMenu } from "../expMenu/expMenu";

export function navbar(parentElement) {
  // create elements of navbar
  const nav = document.createElement('nav')
  const ul = document.createElement('ul')
  const explore = document.createElement('li')
  const paths = document.createElement('a')
  const unis = document.createElement('a')
  const searchContainer = document.createElement('div')
  const input = document.createElement('input')
  const clear = document.createElement('img')
  const button = document.createElement('button')
  const ddMenu = document.createElement('img')
  const exploreMenu = document.createElement('div')
  exploreMenu.classList.add('exploreMenu')



  // const glass = document.createElement('img')
  // establish properties
  nav.classList.add('navbar')
  ul.classList.add('navbarList')
  explore.innerHTML = 'Explore'
  paths.innerHTML = 'Paths'
  unis.innerHTML = 'Universities'
  searchContainer.classList.add('searchContainer')
  input.classList.add('search')
  input.placeholder = 'Search'
  clear.src = '/cross.svg'
  clear.alt = 'clear search'
  clear.classList.add('clear')
  ddMenu.src = './downarrow.svg'
  ddMenu.alt = 'dropdown menu'
  ddMenu.classList.add('ddMenu')
  button.classList.add('searchButton')
  button.innerHTML = 'Search'


  // glass.src = '/glass.png'
  // glass.alt = 'search'
  // glass.classList.add('glass')
  // append elements to navbar
  searchContainer.appendChild(input)
  searchContainer.appendChild(clear)
  searchContainer.appendChild(button)
  // searchContainer.appendCh
  exploreMenu.appendChild(explore)
  exploreMenu.appendChild(ddMenu)
  ul.appendChild(exploreMenu)
  ul.appendChild(paths)
  ul.appendChild(unis)
  nav.appendChild(ul)
  nav.appendChild(searchContainer)
  // nav.appendChild(button);

  // append navbar to parentElement
  parentElement.appendChild(nav)

  const search = document.querySelector('.search')

    expMenu(exploreMenu);
    const exploreDdMenu = document.querySelector('.expMenu')
  // search.addEventListener('mouseenter', () => {
  // search.focus();
  // });

  search.addEventListener('click', () => {
    const filterElement = document.querySelector('.filter');
    search.focus();
    filterElement.style.visibility = 'visible';
  });
  clear.addEventListener('click', () => {
    const filterElement = document.querySelector('.filter');
    filterElement.style.visibility = 'hidden';
    search.value = '';
  });
  ddMenu.addEventListener('click', () => {
    ddMenu.classList.toggle('rotated')
    exploreDdMenu.style.display = exploreDdMenu.style.display === 'flex' ? 'none' : 'flex';
  });

  return nav
}
