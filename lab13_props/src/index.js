import React from 'react';
import ReactDOM from 'react-dom/client';

// Import all images
import manImage from './images/man.png';
import ladyImage from './images/lady.png';
import avatarImage from './images/avatar.png';

// Import JS files and CSS
import User_feedback from './user_feedback';
import './index.css';
import User from './comments';

const App = function () {
  return (
    <>
      <h1 style={{ textAlign: 'center' }}>John Maxime Aritmetica</h1>
      <section className='container'>

        {/* User 1 */}
        <User_feedback username="Batman">
          <User image={manImage} date="11/12/24" msg="I am the man" />
        </User_feedback>

        {/* User 2 */}
        <User_feedback username="Peter">
          <User image={ladyImage} date="11/12/24" msg="Need more rest!" />
        </User_feedback>

        {/* User 3 */}
        <User_feedback username="Jessica">
          <User image={avatarImage} date="11/12/24" msg="Great job!" />
        </User_feedback>

      </section>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
