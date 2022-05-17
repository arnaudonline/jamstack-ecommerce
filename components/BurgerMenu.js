import { useState } from "react";

const BurgerMenu = () => {
    const [state, setState] = useState('');

    const openBurger = (index) => {
        setState(index);
    }

    // $("button").click(function () {
    //     this.classList.toggle("open");
    //     $(".menu").toggleClass("open");
    //   });
      
    //   $("nav").click(function () {
    //     $("button").toggleClass("open");
    //     $(".menu").toggleClass("open");
    //   });
      
  return (
    <>
      <button className={'burger_button ' + state} onClick={() => openBurger(state === 'open' ? '' : 'open')}>
        <span></span>
        <span></span>
        <span></span>
      </button>
      <div className='burger'>
        <nav className={state + ' burger'}>
          <li>
            <a href="">Accueil</a>
            <a href="">Homme</a>
            <a href="">Femme</a>
            <a href="">Garçon</a>
            <a href="">Fille</a>
            <a href="">Toutes les catégories</a>
          </li>
        </nav>
      </div>
    </>
  )
}

export default BurgerMenu
