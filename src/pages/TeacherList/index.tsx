import React, { useState, FormEvent } from 'react';

import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';
import './styles.css';
import Input from '../../components/Input';
import Select from '../../components/Select';
import api from '../../services/api';

const TeacherList: React.FC = () => {
  const [teachers, setTeachers] = useState([]);
  const [subject, setSubject] = useState('');
  const [week_day, setWeekDay] = useState('');
  const [time, setTime] = useState('');

  async function searchTeachers(e: FormEvent) {
    e.preventDefault();

    const response = await api.get('classes', {params: {
      subject,
      week_day,
      time
    }});

    setTeachers(response.data);
    console.log(response.data);
  }

  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Estes são os Porffys disponíveis.">
        <form onSubmit={searchTeachers} id="search-teachers">
          <Select 
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            name="subject" 
            label="Matéria" 
            options={[
              { value: "Artes", label: "Artes" },
              { value: "Biologia", label: "Biologia" },
              { value: "Ciencias", label: "Ciencias" },
              { value: "Educação Física", label: "Educação Física" },
              { value: "Dança", label: "Dança" },
            ]}
          />
          <Select 
          value={week_day}
          onChange={(e) => setWeekDay(e.target.value)}
            name="week_day" 
            label="Dia da semana" 
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
          <Input label="hora" name="hour" type="time" value={time}
            onChange={(e) => setTime(e.target.value)}/>

            <button type="submit">Buscar</button>
        </form>
      </PageHeader>

      <main>
        {teachers.map((teacher: Teacher) => <TeacherItem key={teacher.id} teacher={teacher}/>)}
      </main>
    </div>
  );
}

export default TeacherList;