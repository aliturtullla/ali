import React, { useState } from 'react'
import './App.css';

function App() {
  const [username, setUsername ] = useState('');
  const [password, setPassword ] = useState('');
  const [error, setError ] = useState('');
  const [succes, setSuccess ] = useState('false');
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username || !password) {
      setError('Te dy fushat jane te ndryshme!')
      setSuccess(false)
      return;
    }

    if (username === 'admin' && password === 'password') {
      setError('');
      setSuccess(true);
    } else {
      setError('Emri i perdoruesit ose fjalekalimi eshte i pasakte.');
      setSuccess(false);
    }

  }

  return (
    <div className="App">
       <div className="login-container">
          <h2>Login</h2>

          {error && <div className="error-message">{error} </div>}
          {succes && <div className="success-message"> Jeni kyçur me sukses!</div>}

          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label>Emri i perdoruesit</label>
              <input
               type="text"
               value={username}
               onChange={(e) => setUsername(e.target.value)}
               placeholder="Shkruani emrin e perdoruesit" 
              />
            </div>
            <div className="input-group">
              <label>Fjalekalimi</label>
              <input 
              type="text" 
              value={password}
               onChange={(e) => setPassword(e.target.value)}
               placeholder="Shkruani Fjalekalimin"
              />

            </div>
            <button type="submit" className="submit-button">Login</button>
          </form>          
      </div>
    </div>
  )

}

export default App
