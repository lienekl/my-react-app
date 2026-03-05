import NavBar from './NavBar'
import Footer from './Footer';

const pages = [
  { name: 'Home', key: 'home' },
  { name: 'About', key: 'about' },
  { name: 'Contact', key: 'contact' },
]

const Layout = ({ children, selectedPage, onSetPage }) => {

  // TODO: what's stored in children, selectedPage, and onSetPage?
 /*The Layout component receives three specific props that drive the UI and its interactivity:

 children: This is a special React prop. It contains whatever JSX/components are nested inside the <Layout>...</Layout> tags when it's used elsewhere. It represents the "main content" of the current page. It renders anything that is between layout tags in App.jsx

 selectedPage: This is a string (likely 'home', 'about', or 'contact'). It identifies which page is currently active so the sidebar can highlight it.

 onSetPage: This is a callback function. When a user clicks a link in the sidebar, this function is triggered to tell the parent component (where the state usually lives) to update the current page.*/

  const renderPageLinks = () => {
        
    // TODO: What does this function do?
    return pages.map(page => (
       <li
          key={page.key}
          style={{
            ...styles.sidebarLink,
            ...(page.key === selectedPage ? styles.selected : {}),
          }}
          onClick={() => onSetPage(page.key)}
        >
          {page.name}
        </li>
    ));
  }


  return (
    <div style={styles.container}>
      {/* Navigation */}
      <NavBar />

      <div style={styles.main}>
        {/* Sidebar */}
        <aside style={styles.sidebar}>
          <ul>
           {renderPageLinks()}
          </ul>
        </aside>

        {/* Content Area */}
        <section style={styles.content}>
          {children}
        </section>
      </div>

      {/* Footer */}
      <Footer />
     
    </div>
  );
};

// Inline styles for simplicity
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    minWidth: '100vw',
  },
  selected: {
    backgroundColor: '#999',
  },
  main: {
    display: 'flex',
    flex: 1,
  },
  sidebar: {
    width: '200px',
    backgroundColor: '#f4f4f4',
    padding: '5px',
  },
  content: {
    flex: 1,
    padding: '20px',
  },
  footer: {
    backgroundColor: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px',
  },
  sidebarLink: {
    display: 'block',
    padding: '5px',
    color: '#333',
    textDecoration: 'none',
  },
};

export default Layout;
