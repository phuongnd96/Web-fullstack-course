import React from 'react';
import logo from './logo.svg';
import './App.css';
import './studentCard.css'
import { StudentCard } from './studentCard.js';

function App() {
  // const hello = "Hello World"
  // const hello={}
  // const style={backgroundColor:"green"};
  // chỉ được return 1 thẻ div
  // nếu muốn viết 2 thẻ thì bao các thẻ bằng 1 thẻ div to hoặc dùng thẻ rỗng <> </>
  const data = [
    {
      avatar: "https://www.duchuymobile.com/images/detailed/11/OnePlus-3T-Midnight-Black-Gia-Re-DuchuyMobile.jpg",
      name: "Phương",
      myClass: "5",
      grade: "10"
    }
  ]
  return (
    <div id="container">
      <StudentCard
        avatar={data[0].avatar}
        name={data[0].name}
        myClass={data[0].myClass}
        grade={data[0].grade}
      />
      <StudentCard
        avatar={data[0].avatar}
        name={data[0].name}
        myClass={data[0].myClass}
        grade={data[0].grade}
      />
    </div>


  );
}

export default App;
