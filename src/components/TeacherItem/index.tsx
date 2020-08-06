import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
import './styles.css';

function TeacherItem(){
    return(
        <article className="teacher-item">
                    <header>
                        <img src="https://avatars0.githubusercontent.com/u/20343587?s=460&u=a433162b215245b280e9a3259c303e5e70062333&v=4" alt=""/>
                        <div>
                            <strong>Thauny Araujo</strong>
                            <span>Matemática</span>
                        </div>
                    </header>
                    <p>
                        Entusiasta por fazer calculos matemáticos e provar que 2 + 2 = 4!!
                        <br/>
                        <br/>
                        Apaixonada por fazer cálcuos matemáticos ..daskjhfjwge mudar a vida das pessoas ...,sajhfg
                    </p>
                    <footer>
                        <p>
                            Preço/Hora
                            <strong>R$ 80,00 </strong>
                        </p>
                        <button type="button">
                            <img src={whatsappIcon} alt="whatsapp"/>
                            Entrar em contato
                        </button>

                    </footer>

                </article>
    );
}

export default TeacherItem;