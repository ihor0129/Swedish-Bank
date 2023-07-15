import React from 'react';
import { useState } from 'react';

function Second() {
  return (
    <>
      <div className='logIn2'>
        <div className='innerDiv'>
          <span>Du loggar in med personnummer</span>
          <div className='content'>19770101-3935</div>
          <div style={{marginTop: "24px"}}>
            <span>Kontrollbild</span>
            <img src='b.png' className='pattern'></img>
          </div>
          <span className='myH4'>Instruktioner</span>
          <div>
            <span>1. Starta säkerhetsdosan och fota kontrollbilden</span>
          </div>
          <div>
            <span>2. Mata in din PIN-kod</span>
          </div>
          <div style={{marginBottom:"24px"}}>
            <span>3. Skriv in säkerhetsdosans svarskod i fältet nedan</span>
          </div>
          <input className="input" shadow-ref="textInput" aria-invalid="false" aria-label="Personnummer" aria-describedby="errorAndHintWrapperId--2 accessibilityHintId--3" placeholder="XXXXXXXX" inputMode="numeric" type="number" maxLength={8} onkeypress="return /[0-9]/i.test(event.key)" />
          <div className='button'>
            Fortsätt
          </div>
          <div className='button1'>
            Avbryt
          </div>
        </div>
      </div>

      <div className='acorn'>
        <div>
          {/* <span className="icon"></span> */}
          <span className='label'>Behöver du ett nytt Mobilt BankID?</span>
        </div>
        <div>
          {/* <span className='icon'></span> */}
          <span className='label'>Behöver du hjälp att logga in?</span>
        </div>
    </div>
    </>
  )
}

export default Second;