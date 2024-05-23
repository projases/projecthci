import './header.css'
import { settings } from "../settings/settings";
export function header(parentElement) {
  // create elements of header
  const header = document.createElement('header')
  const logo = document.createElement('img')
  const searchContainer = document.createElement('div')
  const input = document.createElement('input')
  const clear = document.createElement('img')
  const div = document.createElement('div')
  const login = document.createElement('a')
  const signup = document.createElement('button')
  // establish properties
  header.classList.add('header')
  logo.src = '/Logo2.png'
  logo.alt = 'Logo Open Source Education'
  login.href = '../../../index.html'
  div.classList.add('buttonContainer')
  searchContainer.classList.add('searchContainer')
  input.classList.add('search')
  input.placeholder = 'Search'
  clear.src = '/cross.svg'
  clear.alt = 'clear search'
  clear.classList.add('clear')

  login.innerHTML = 'Log out'
  signup.addEventListener('click', function() {
    const main = document.querySelector('main')
    main.innerHTML = ''
    settings(main)
  });
  div.appendChild(login)
  div.appendChild(signup)
  // append elements to header
  searchContainer.appendChild(input)
  searchContainer.appendChild(clear)

  header.appendChild(logo)
  header.appendChild(searchContainer)
  header.appendChild(div)

  // append header to parentElement
  parentElement.appendChild(header)

  // header.innerHTML = "Header";
  clear.addEventListener('click', () => {
    document.querySelector('.search').value = '';
  });


  return header
}
