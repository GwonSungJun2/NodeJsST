import { useState, useEffect } from 'react';
import { Resturant } from './model/resturant';
let data:Resturant = {
  name:'성주니 식당',
  category: 'western',
  address:{
    city:'hi',
    detail:'somewhere',
    zipCode: 123
  },
  menu:[{name:'rose',price:2000,category:"a"}]
}
//함수형 컴포넌트 리턴
const App:React.FC = () => {
  const [status, setStatus] = useState('');
  useEffect(() => {
    fetch('/api')
      .then((res) => res.json())
      .then((data) => setStatus(data.ok ? '서버 연결됨' : '실패'));
  }, []);
  return <h1>{status}</h1>;
}

export default App;
