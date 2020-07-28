import React from 'react';
// import './regularBtn.css';
// import './studentCard.css'
// import { StudentCard } from './studentCard.js';
import { RegularBtn } from './regularBtn.js';
import { SpecialBtn } from './specialBtn.js';
import {specialBtnHorizontal, SpecialBtnHorizontal} from './specialBtnHorizontal.js';
function App() {
  // const hello = "Hello World"
  // const hello={}
  // const style={backgroundColor:"green"};
  // chỉ được return 1 thẻ div
  // nếu muốn viết 2 thẻ thì bao các thẻ bằng 1 thẻ div to hoặc dùng thẻ rỗng <> </>
  // const data = [
  //   {
  //     avatar: "https://www.duchuymobile.com/images/detailed/11/OnePlus-3T-Midnight-Black-Gia-Re-DuchuyMobile.jpg",
  //     name: "Phương",
  //     myclassName: "5",
  //     grade: "10"
  //   }
  // ]
  return (
    <div id="main">
<div id="calculator">
      {/* <StudentCard
        avatar={data[0].avatar}
        name={data[0].name}
        myclassName={data[0].myclassName}
        grade={data[0].grade}
      />
      <StudentCard
        avatar={data[0].avatar}
        name={data[0].name}
        myclassName={data[0].myclassName}
        grade={data[0].grade}
      /> */}
      <div id="result-container">
        <div id="result">
        0
        </div>
      </div>
      <div id="container">
        <div id="first">
          <span className="number-row" id="first-row">
            <RegularBtn color="gray" number="X" />
            <RegularBtn color="gray" number="V" />
            <RegularBtn color="gray" number="/" />
            <RegularBtn color="gray" number="X" />
          </span>
          <span className="number-row" id="second-row">
            <RegularBtn color="gray" number="7" />
            <RegularBtn color="gray" number="8" />
            <RegularBtn color="gray" number="9" />
            <RegularBtn color="gray" number="-" />
          </span>
          <span className="number-row" id="third-row">
            <RegularBtn color="gray" number="4" />
            <RegularBtn color="gray" number="5" />
            <RegularBtn color="gray" number="6" />
            <RegularBtn color="gray" number="+" />
          </span>
          <span className="number-row" id="fourth-row">
            <span id="width-2">
              <span id="upper">
              <RegularBtn color="gray" number="1" />
            <RegularBtn color="gray" number="2" />
              </span>
              <span id="lower">
              <SpecialBtnHorizontal  color="gray" number="0"/>
              </span>
            </span>
            <span className="width-1">
            <RegularBtn color="gray" number="3" />
            <RegularBtn color="gray" number="." />
            </span>
            <span className="width-1">
            <SpecialBtn color="#fdaf01" number="=" />
            </span>
          </span>

        </div>
        <div id="second">
        </div>
      </div>
    </div>
    </div>
    
  );
}

export default App;
