# React Otp Resender

to install run:
`yarn add react-otp-resender`

## Usage
Just import the component and pass the second and styles in otp component.

``` javascript

import React from 'react'
import ReactOtpResender from 'react-otp-resender';

class App extends React.Component {

    //callback of resend button
    resendEvent() { 
       // You can do what ever you want & reset timer too.
    }
    
    render() {
      return (
          <div>
              <h1>Otp Timer counter</h1>
               <ReactOtpResender 
                      seconds={120}
                      textStyle={{
                          color: 'white'
                      }}
                      resendBtnText={'Send OTP again'}
                      resendBtnStyle={{
                          color: 'white',
                          backgroundColor: 'transparent', 
                          outline: 'none', 
                          border: 0, 
                          cursor: 'pointer'
                      }}
                      resendFunc={ _ => this.resendEvent()}
                  />
              </div>
          </div>
      )
    }
}
export default App

```

#API
<table>
  <tr>
    <th>Name<br/></th>
    <th>Type</th>
    <th>Required</th>
    <th>Description</th>
  </tr>
  <tr>
    <th>seconds</th>
    <th>number</th>
    <th>true</th>
    <th></th>
  </tr>
  <tr>
    <th>resendBtnStyle</th>
    <th>style</th>
    <th>true</th>
    <th>after seconds finished the btn appears</th>
  </tr>
  <tr>
    <th>resendBtnText</th>
    <th>string</th>
    <th>true</th>
    <th>after seconds finished the btn appears</th>
  </tr>
  <tr>
    <th>textStyle</th>
    <th>style</th>
    <th>true</th>
    <th></th>
  </tr>
  <tr>
    <th>resendFunc</th>
    <th>function</th>
    <th>true</th>
    <th></th>
  </tr>
</table>
