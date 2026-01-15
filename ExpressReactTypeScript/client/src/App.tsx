import { useState, useEffect } from 'react';

function App() {
  const [status, setStatus] = useState('');
  useEffect(() => {
    fetch('/api')
      .then((res) => res.json())
      .then((data) => setStatus(data.ok ? '서버 연결됨' : '실패'));
  }, []);
  return <h1>{status}</h1>;
}

export default App;
