import React from 'react';

import PageHeader from './../../components/PageHeader';

const TeacherForm: React.FC = () => {
  return (
    <div id="page-teacher-form" className="container">
      <PageHeader title="Que incrível quer dar aulas">
        <form action="" id="search-teachers">
        <div className="input-block">
          <label htmlFor="subject">Matéria</label>
          <input type="text" id="subject"/>
        </div>
        </form>
      </PageHeader>
    </div>
  );
}

export default TeacherForm;