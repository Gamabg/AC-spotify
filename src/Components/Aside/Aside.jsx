import React from 'react';
import CardAside from './CardAside';

function Aside() {
  return (
    <aside style={styles.aside}>
      <h2 style={styles.title}>Sua Biblioteca</h2>
      <CardAside />
    </aside>
  );
}

const styles = {
  aside: {
    width: '250px',
    backgroundColor: '#000',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
  },
  title: {
    color: '#fff',
    marginBottom: '20px',
  },
};

export default Aside;
