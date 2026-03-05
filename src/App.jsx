// App.js
import { useState } from 'react';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

function App() {

  const [page, setPage] = useState('home');
/* is snippet is a classic example of Conditional Rendering in React. The Layout component doesn't actually "choose" which page to render; instead, the Parent Component makes that decision and passes the result down through the {children} prop.

Here is exactly how it works:

1. The Logic: Short-Circuit Evaluation
The lines using && are JavaScript "short-circuit" evaluations. React interprets them like this:

If the condition on the left (page === 'home') is true, then render the component on the right (<HomePage />).

If it is false, React ignores that line entirely and renders nothing for it.

Because page can only hold one string value at a time (e.g., 'about'), only one of those three components will exist in the DOM at any given moment.

2. The Delivery: The children Prop
Everything you place between the opening <Layout> and closing </Layout> tags is automatically collected by React and sent into the Layout component as a prop named children.

3. Step-by-Step Execution
State Change: A user clicks "About" in the sidebar. This triggers onSetPage('about'), which updates the page state in the parent.

Re-render: The Parent component re-renders because its state changed.

Filtering: The parent evaluates the three conditions. Since page is now 'about', only <AboutPage /> is active.

Injection: The <AboutPage /> component is passed into Layout via the children prop.

Display: Inside the Layout component, the code {children} acts as a placeholder that now displays the AboutPage content.*/
  // TODO: How doe sthe Layout component know which page to render?

  return (
    <Layout selectedPage={page} onSetPage={setPage}>

      {page === 'home' && <HomePage />}
      {page === 'about' && <AboutPage />}
      {page === 'contact' && <ContactPage />}

    </Layout>
  );
}

export default App;
