import React from 'react';

import whatsAppIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

const TeacherItem: React.FC = () => {
  return (
    <article className="teacher-item">
    <header>
      <img src="https://api.adorable.io/avatars/285/abott@adorable.png" alt="prf"/>
      <div>
        <strong>Lucas Oliveira</strong>
        <span>Educação Molecular</span>
      </div>
    </header>
    <p>
      Anim non minim irure irure excepteur proident irure minim nulla pariatur pariatur id in proident.
      <br/><br/>
      Tempor laborum eiusmod qui ut sit reprehenderit ea est ipsum aliquip ad ex. Irure non duis proident voluptate eu velit et qui aliquip proident nisi adipisicing occaecat. Ea anim qui et amet in ipsum id nisi. Sunt ea dolor aute laboris Lorem mollit sint elit nostrud eiusmod.
    </p>

    <footer>
      <p>
        Preço/Hora
        <strong>R$ 20,00</strong>
      </p>
      <button type="button">
        <img src={whatsAppIcon} alt="WhatsApp"/>
        Entrar em contato
      </button>
    </footer>
  </article>
  );
}

export default TeacherItem;