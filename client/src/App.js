import cancelBtn from './icons/cancel.svg';
import searchBtn from './icons/search.svg';
import refresh from './icons/refresh.svg';
import femaleImg from './icons/female.svg';
import maleImg from './icons/male.svg';
import viber from './icons/viber.svg';
import telegram from './icons/telegram.svg';

import './App.css';


const getTable = async () => {
  await fetch('http://localhost:5002/').then(data => data.json()).then(console.log);
  return document.querySelector('.table-container').classList.toggle('block');
}

function App() {

  return (
    <>

      <div className="main-div" >
        <div className="head-div">
          <div className="wrapper">
            <input type="number" id="main-input" placeholder="input the phone number please" />
            <input type="image" id="delete-input" src={cancelBtn} alt="delete" onClick={deleteClick} />
            <input type="image" id="search-input" src={searchBtn} alt="delete" onClick={getTable} />
          </div>
        </div>

        <div className="table-container">
          <table>
            <thead><img src={refresh} alt="refresh image" /> Знайдено 8 запитів клієнтів</thead>
            <tbody>
              <tr>
                <td><div className="div-image-female"><img src={femaleImg} alt="gender Image" className="logo-gender" /></div><img src={viber} alt="viber" className="logo-messanger" /></td>
                <td> <p>Александра Александрова...</p>
                  <p>095 555 55 55</p> </td>
                <td> <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit molestias at odit dolor officia quos quae...</p></td>
                <td> <p className="time">11:50</p> </td>
                <td> <p className="data">01.12.2020</p> </td>
              </tr>
              <tr>
                <td><div className="div-image-male"><img src={maleImg} alt="gender Image" className="logo-gender" /></div><img src={telegram} alt="telegram" className="logo-messanger" /></td>
                <td> <p>Александра Александрова...</p>
                  <p>095 555 55 55</p> </td>
                <td> <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit molestias at odit dolor officia quos quae...</p></td>
                <td> <p className="time">11:50</p> </td>
                <td> <p className="data">01.12.2020</p> </td>
              </tr>
              <tr>
                <td><div className="div-image-female"><img src={femaleImg} alt="gender Image" className="logo-gender" /></div><img src={viber} alt="viber" className="logo-messanger" /></td>
                <td> <p>Александра Александрова...</p>
                  <p>095 555 55 55</p> </td>
                <td> <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit molestias at odit dolor officia quos quae...</p></td>
                <td> <p className="time">11:50</p> </td>
                <td> <p className="data">01.12.2020</p> </td>
              </tr>
              <tr>
                <td><div className="div-image-male"><img src={maleImg} alt="gender Image" className="logo-gender" /></div><img src={telegram} alt="telegram" className="logo-messanger" /></td>
                <td> <p>Александра Александрова...</p>
                  <p>095 555 55 55</p> </td>
                <td> <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit molestias at odit dolor officia quos quae...</p></td>
                <td> <p className="time">11:50</p> </td>
                <td> <p className="data">01.12.2020</p> </td>
              </tr>
              <tr>
                <td><div className="div-image-female"><img src={femaleImg} alt="gender Image" className="logo-gender" /></div><img src={viber} alt="viber" className="logo-messanger" /></td>
                <td> <p>Александра Александрова...</p>
                  <p>095 555 55 55</p> </td>
                <td> <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit molestias at odit dolor officia quos quae...</p></td>
                <td> <p className="time">11:50</p> </td>
                <td> <p className="data">01.12.2020</p> </td>
              </tr>
              <tr>
                <td><div className="div-image-male"><img src={maleImg} alt="gender Image" className="logo-gender" /></div><img src={telegram} alt="telegram" className="logo-messanger" /></td>
                <td> <p>Александра Александрова...</p>
                  <p>095 555 55 55</p> </td>
                <td> <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit molestias at odit dolor officia quos quae...</p></td>
                <td> <p className="time">11:50</p> </td>
                <td> <p className="data">01.12.2020</p> </td>
              </tr>
              <tr>
                <td><div className="div-image-female"><img src={femaleImg} alt="gender Image" className="logo-gender" /></div>
                  <img src={viber} alt="viber" className="logo-messanger" /></td>
                <td> <p>Александра Александрова...</p>
                  <p>095 555 55 55</p> </td>
                <td> <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit molestias at odit dolor officia quos quae...</p></td>
                <td> <p className="time">11:50</p> </td>
                <td> <p className="data">01.12.2020</p> </td>
              </tr>
            </tbody>

            <tfoot> <div className="tfoot"><p>1 2 3 ... 4 5 6</p> </div> </tfoot>
          </table>
        </div>
      </div>
    </>

  );
}

function deleteClick() {
  return document.getElementById('main-input').value = "";
}



export default App;
