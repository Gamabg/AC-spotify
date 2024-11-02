import React from 'react';

function CardAside() {
  return (
    <div style={styles.card}>
      <p style={styles.text}>Crie sua primeira playlist</p>
      <p style={styles.subText}>É fácil, vamos te ajudar.</p>
      <button style={styles.button}>Criar playlist</button>
      <div style={styles.links}>
        <a href="#" style={styles.link}>Legal</a>
        <a href="#" style={styles.link}>Segurança e Centro de privacidade</a>
        <a href="#" style={styles.link}>Política de privacidade</a>
        <a href="#" style={styles.link}>Cookies</a>
      </div>
    </div>
  );
}

const styles = {
  card: {
    backgroundColor: '#181818',
    padding: '20px',
    borderRadius: '8px',
    marginBottom: '20px',
  },
  text: {
    fontSize: '16px',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  subText: {
    fontSize: '14px',
    color: '#b3b3b3',
    marginBottom: '20px',
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#fff',
    color: '#000',
    border: 'none',
    borderRadius: '20px',
    cursor: 'pointer',
    fontWeight: 'bold',
  },
  links: {
    marginTop: '20px',
  },
  link: {
    display: 'block',
    color: '#b3b3b3',
    fontSize: '12px',
    textDecoration: 'none',
    marginBottom: '5px',
  },
};

export default CardAside;
