import React, { useState, FormEvent } from 'react';

import { useHistory } from 'react-router-dom';

import PageHeader from './../../components/PageHeader';
import warningIcon from '../../assets/images/icons/warning.svg';
import Input from '../../components/Input';

import './styles.css';
import Textarea from '../../components/TextArea';
import Select from '../../components/Select';
import api from '../../services/api';

const TeacherForm: React.FC = () => {
  const history = useHistory();

  const [scheduleItems, setScheduleItems] = useState([{ week_day: 0, from: '', to: ''}]);
  const [name, setName] = useState('');
  const [avatar, setAvatar] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [bio, setBio] = useState('');
  const [cost, setCost] = useState('') 
  const [subject, setSubject] = useState('');


  function addNewScheduleItem() {
    setScheduleItems([
      ...scheduleItems, 
      { week_day: 0, from: '', to: ''}
    ]);
  }

  function handleCreateClass(e: FormEvent) {
    e.preventDefault();
    console.log({
      name,
      avatar,
      whatsapp,
      bio,
      subject,
      cost,
      scheduleItems}
      );


    api.post('classes', {
      name,
      avatar,
      whatsapp,
      bio,
      subject,
      cost: Number(cost),
      schedule: scheduleItems
    }).then(response => {
      alert('Cadastro realizado com sucesso!');
      history.push('/');
    }).catch(err => alert('Erro no cadastro'));
  }

  function setScheduleItemValue(position: number, field: string, value: string) {
    const updateScheduleArray = scheduleItems.map((item, indice) => {
      if (indice === position) {
        return { ...item, [field]: value}
      }

      return item;
    })
    console.log(updateScheduleArray)
    setScheduleItems(updateScheduleArray);
  }

  return (
    <div id="page-teacher-form" className="container">
      <PageHeader title="Que incrível quer dar aulas" description="O primeiro passo é preencher esse formulario de incrição" />
      
      <main>
        <form onSubmit={handleCreateClass}>
        <fieldset>
          <legend>Seus dados</legend>
          <Input name="name" label="Nome completo" value={name} onChange={(e) => { setName(e.target.value)}}/>
          <Input name="avatar" label="Avatar" value={avatar} onChange={(e) => {setAvatar(e.target.value)}}/>
          <Input name="whatsapp" label="Whatsapp" value={whatsapp} onChange={(e) => {setWhatsapp(e.target.value)}}/>
          <Textarea name="bio" label="Biografia" value={bio} onChange={(e) => {setBio(e.target.value)}}/>
        </fieldset>
        <fieldset>
          <legend>Sobre a Aula</legend>
          <Select name="subject" label="Matéria" value={subject} onChange={(e) => setSubject(e.target.value)}
          options={[
            { value: "Artes", label: "Artes" },
            { value: "Biologia", label: "Biologia" },
            { value: "Ciencias", label: "Ciencias" },
            { value: "Educação Física", label: "Educação Física" },
            { value: "Dança", label: "Dança" },
          ]}
          />
          <Input name="cost" label="Custo da sua aula" value={cost} onChange={(e) => setCost(e.target.value)}/>
        </fieldset>

        <fieldset>
          <legend>Horarios disponiveis 
            <button type="button" onClick={addNewScheduleItem}>+ novo horario</button>
          </legend>
          
          {scheduleItems.map((item, indice)  => (
            <div className="schedule-item" key={item.week_day}>
            <Select 
              name="week_day" 
              label="Dia da semana" 
              value={item.week_day}
              onChange={(e) => setScheduleItemValue(indice, 'week_day', e.target.value) }
              options={[
                { value: "0", label: "Domingo" },
                { value: "1", label: "Segunda" },
                { value: "2", label: "Terça" },
                { value: "3", label: "Quarta" },
                { value: "4", label: "Quinta" },
                { value: "5", label: "Sexta" },
                { value: "6", label: "Sabado" },
              ]}
            />
            <Input name="from" label="Das" type="time" value={item.from} onChange={(e) => setScheduleItemValue(indice, 'from', e.target.value) }/>
            <Input name="to" label="Até" type="time" value={item.to} onChange={(e) => setScheduleItemValue(indice, 'to', e.target.value) }/>
            </div>
          ))}

          
        </fieldset>

        <footer>
          <p>
            <img src={warningIcon} alt="Aviso importante"/>
            Importante! <br />
            Preencha todos os dados
          </p>
          <button type="submit">salvar cadastro</button>
        </footer>
        </form>
      </main>
    </div>
  );
}

export default TeacherForm;