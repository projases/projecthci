import './header.css'
export function header(parentElement) {
  // create elements of header
  const header = document.createElement('header')
  const logo = document.createElement('img')
  const quote = document.createElement('blockquote')
  const div = document.createElement('div')
  const login = document.createElement('a')
  const signup = document.createElement('button')
  // establish properties
  header.classList.add('header')
  logo.src = '/Logo2.png'
  logo.alt = 'Logo Open Source Education'
  quote.innerHTML =
    'Change is the end result of all true learning. <br> - Leo Buscaglia'
  login.href = '../../../home.html'
  div.classList.add('buttonContainer')

  login.innerHTML = 'Log in'
  signup.innerHTML = 'Sign up'
  signup.addEventListener('click', function() {
    window.location.href = '../../../home.html'; // Redirect to home page
  });
  div.appendChild(login)
  div.appendChild(signup)
  // append elements to header
  header.appendChild(logo)
  header.appendChild(quote)
  header.appendChild(div)

  // append header to parentElement
  parentElement.appendChild(header)

  // header.innerHTML = "Header";

  return header
}
