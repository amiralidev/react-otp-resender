import logo from './logo.svg';
import './App.css';
import ReactOtpResender from './react-otp-resender/src/lib';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ReactOtpResender 
          seconds={3}
          textStyle={{
            color: 'white'
          }}
          resendBtnText={'ارسال مجدد رمز'}
          resendBtnStyle={{
            color: 'white',
            backgroundColor: 'transparent', 
            outline: 'none', 
            border: 0, 
            cursor: 'pointer'
          }}
          resendFunc={ _ => console.log(1)}
        />
      </header>
    </div>
  );
}

export default App;
