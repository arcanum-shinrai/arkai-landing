import React from "react";

export default function LandingPage() {
  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: 'black',
      color: 'white',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem'
    }}>
      <h1 style={{ fontSize: '3rem', fontWeight: 'bold', textAlign: 'center' }}>
        Arcanum Shinrai
      </h1>
      <p style={{ fontSize: '1.2rem', textAlign: 'center', maxWidth: '600px', marginBottom: '2rem' }}>
        The next-generation cryptocurrency that combines post-quantum security, artificial intelligence, and real scalability. 
        Discover the power of $ARKAI.
      </p>

      <div style={{
        background: 'linear-gradient(to bottom right, #2d2d2d, #1a1a1a)',
        padding: '1.5rem',
        borderRadius: '1rem',
        maxWidth: '500px',
        boxShadow: '0 0 15px rgba(0,0,0,0.5)'
      }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Key Features</h2>
        <ul style={{ paddingLeft: '1.2rem' }}>
          <li>Quantum-resistant cryptography</li>
          <li>AI-optimized smart contracts</li>
          <li>Scalable, decentralized, high-speed network</li>
          <li>DAO governance supported by intelligent algorithms</li>
        </ul>
      </div>

      <button style={{
        marginTop: '2rem',
        fontSize: '1rem',
        padding: '1rem 2rem',
        borderRadius: '1.5rem',
        backgroundColor: '#6b46c1',
        color: 'white',
        border: 'none',
        boxShadow: '0 0 10px #6b46c1'
      }}>
        Coming Soon: White Paper and Token
      </button>
    </div>
  );
}
