import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
import './styles.css';
import api from '../../services/api';



export interface Teacher{
        id: number;
        name: string;
        avatar: string;
        bio: string;
        whatsapp: string;
        subject: string;
        cost: number;

}

interface TeacherProps {
    teacher: Teacher
}


const TeacherItem:React.FC<TeacherProps> = ({teacher})=> {

    function createNewConnection(){
        const id = teacher.id;
        api.post('/connections', {
            user_id: id,
        } );
    }

    return(
        <article className="teacher-item">
                    <header>
                        <img src={teacher.avatar} alt={teacher.name} />
                        <div>
                            <strong>{teacher.name}</strong>
                            <span>{teacher.subject}</span>
                        </div>
                    </header>
                    <p>{teacher.bio}                    </p>
                    <footer>
                        <p>
                            Preço/Hora
                            <strong>R$  {teacher.cost}</strong>
                        </p>
                        <a  onClick={createNewConnection} target="_blank" href={`https://wa.me/${teacher.whatsapp}`} >
                            <img src={whatsappIcon} alt="whatsapp"/>
                            Entrar em contato
                        </a>

                    </footer>

                </article>
    );
}

export default TeacherItem;