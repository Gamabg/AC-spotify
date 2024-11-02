import React from 'react';

function SpotifyNavBar() {
  return (
    <div style={styles.navBar}>
      {/* Logo do Spotify */}
      <img 
        src="https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg" 
        alt="Spotify Logo" 
        style={styles.logo} 
      />
        <button style={styles.button}>
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 24 24" 
        fill="white" 
        width="24px" 
        height="24px"
      >
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
      </svg>
    </button>


      {/* Caixa de busca */}
      <div style={styles.searchContainer}>
        <input 
          type="text" 
          placeholder="O que você quer ouvir?" 
          style={styles.searchInput} 
        />
      </div>
      
      {/* Botão de Inscrição e Login */}
      <div style={styles.authButtons}>
        <button style={styles.signUpButton}>Inscrever-se</button>
        <button style={styles.loginButton}>Entrar</button>
      </div>
    </div>
  );
}

// Estilos em CSS inline
const styles = {
  navBar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#000',
    padding: '10px 20px',
    height: '60px',
    color: '#fff',
    boxSizing: 'border-box',
  },
  logo: {
    height: '24px',
  },
  button: {
    backgroundColor: '#1e1e1e', 
    borderRadius: '50%',        
    padding: '12px',            
    border: 'none',             
    cursor: 'pointer',          
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  searchContainer: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    marginLeft: '20px',
    maxWidth: '600px',
  },
  searchInput: {
    width: '100%',
    padding: '8px 16px',
    backgroundColor: '#333',
    border: 'none',
    borderRadius: '50px',
    color: '#fff',
    outline: 'none',
    fontSize: '14px',
  },
  authButtons: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
  signUpButton: {
    backgroundColor: 'transparent',
    color: '#ccc',
    border: 'none',
    fontSize: '16px',
    cursor: 'pointer',
  },
  loginButton: {
    backgroundColor: '#fff',
    color: '#000',
    border: 'none',
    padding: '8px 20px',
    borderRadius: '50px',
    fontSize: '16px',
    fontWeight: 'bold',
    cursor: 'pointer',
  },
};

export default SpotifyNavBar;
