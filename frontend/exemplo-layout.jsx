import { render } from 'react-dom'

const Layout = ({ children, footerText }) => {
  const [isDarkMode, setTheme] = useState('light') // dark
  return (
    <>
      <menu className={isDarkMode ? cssDarkMenu : cssMenu}>
        <ul>
          <li>Menu item 1</li>
          <li>Menu item 2</li>
          <li>Menu item 3</li>
        </ul>
      </menu>
      <main>
        <div className="container">{children}</div>
      </main>
      <footer>{footerText}</footer>
    </>
  )
}

const App = () => {
  const [value, setValue] = useState()
  return (
    <Layout footerText="footer">
      <h1>Noticia</h1>
      <img src=""></img>
      <p>{value}</p>
    </Layout>
  )
}

// example 2
const Card = ({ ContentRender }) => {
  const [isDarkMode, setTheme] = useState('light') // dark

  const onClick = (id) => {
    //...
  }

  return (
    <div className="card-item">
      <ContentRender onClick={onClick} />
    </div>
  )
}

const Post = ({ onClick, selected, text }) => {
  const [value, setValue] = useState()
  return (
    <>
      <h1>Noticia</h1>
      <img onClick={() => onClick(id)} src=""></img>
      <span>{value}</span>
    </>
  )
}

const App = () => {
  return <Card footerText="footer" ContentRender={Post} />
}
