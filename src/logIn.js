import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [secNumber, setSecNumber] = useState("");
  const [activeRadioNumber, setActiveRadioNumber] = useState(0);
  const [isAnimated, setIsAnimated] = useState(0);
  
  const navigate = useNavigate();

  const secNumberChange = (e) => {
  // for (var i = 0;i < e.target.value;i ++) {
  //   if (e.target.value[i] < 0 || e.target.value[i] > 9) {
  //   if(e.target.value !== '-') {

  //   }
  //   }
  // }
  var str = e.target.value.replace('-','');
  if(str.length > 8) str = str.slice(0, 8) + '-' + str.slice(8);
  setSecNumber(str);
  }


  const logInClicked = () => {
  if (secNumber === "19770101-3935" && activeRadioNumber === 1) {
    setIsAnimated(1);
    setTimeout(() => {
    navigate('/second');
    }, 2000);
  }
  else {
    // alert("false");
  }
  }
  return (
  <>
    <div className='logIn'>
    <div className='innerDiv'>
      <span>Personnummer</span>
      <input className="input" shadow-ref="textInput" aria-invalid="false" aria-label="Personnummer" aria-describedby="errorAndHintWrapperId--2 accessibilityHintId--3" placeholder="ÅÅÅÅMMDD-XXXX" inputMode="numeric" value={secNumber} onChange={secNumberChange} maxLength={13} onkeypress="return /[0-9]/i.test(event.key)" />
      <div className='checkBoxDiv'>
      <div className='inputWrapper'>
        <input type="checkbox" className="checkbox-input" shadow-ref="Checkbox" aria-invalid="false" aria-label="Kom ihåg mitt personnummer" aria-describedby="errorAndHintWrapperId--6" value="on" />
        <div>
        <span className='help-wrapper'>Kom ihåg mitt personnummer</span>
        </div>
        <fieldset className='options-group'>
        <span>Välj hur du vill logga in</span>
        <form>
          <div className="radio">
          <label>
            <input checked={activeRadioNumber === 0} onChange={() => { setActiveRadioNumber(0) }} style={{ paddingLeft: "8px" }} type="radio" />
            Mobilt BankID eller SäkerhetsID
          </label>
          </div>
          <div className="radio">
          <label>
            <input checked={activeRadioNumber === 1} onChange={() => { setActiveRadioNumber(1) }} style={{ paddingLeft: "8px" }} type="radio" />
            Säkerhetsdosa
          </label>
          </div>
          <div className="radio">
          <label>
            <input checked={activeRadioNumber === 2} onChange={() => { setActiveRadioNumber(2) }} style={{ paddingLeft: "8px" }} type="radio" />
            BankID på kort
          </label>
          </div>
          <div className="radio">
          <label>
            <input checked={activeRadioNumber === 3} onChange={() => { setActiveRadioNumber(3) }} style={{ paddingLeft: "8px" }} type="radio" />
            Företagskopplad dosa
          </label>
          </div>
        </form>
        </fieldset>
        <div className='button' onClick={logInClicked} style={{marginTop: "32px"}}>
          Logga In
        </div>
      </div>
      </div>
    </div>
    </div>

    <div className='acorn1'>
      <div>
        {/* <span className="icon"></span> */}
        <span className='label'>Behöver du ett nytt Mobilt BankID?</span>
      </div>
      <div>
        {/* <span className='icon'></span> */}
        <span className='label'>Behöver du hjälp att logga in?</span>
      </div>
    </div>

    <div className={'_app_loader' + (isAnimated ? ' d-block' : '')}>
    </div>
  </>
  )
}

export default Login;