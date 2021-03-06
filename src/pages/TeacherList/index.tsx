import React from 'react';
import Input from '../../components/Input';

import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem/index';
import Select from '../../components/Select';


import './style.css';


function TeacherList(){
  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Estes são os proffys disponívies ">
        <form id="search-teachers">
          <Select 
              name="subject" 
              label="Matéria" 
              options={[
                {value:'Artes', label: 'Artes' },
                {value:'Biologia', label: 'Biologia' },
                {value:'Ciências', label: 'Ciências' },
                {value:'Educação Física', label: 'Educação Física' },
                {value:'Geografia', label: 'Geografia' },
                {value:'Programação', label: 'Programação' },

              ]}
            />

          <Select 
              name="week_day" 
              label="Dia da semana" 
              options={[
                {value:'0', label: 'Domingo' },
                {value:'1', label: 'Segunda-feira' },
                {value:'2', label: 'Terça-feira' },
                {value:'3', label: 'Quarta-feira' },
                {value:'4', label: 'Quinta-feira' },
                {value:'5', label: 'Sexta-feira' },
                {value:'6', label: 'Sábado' },
              ]}
            />
            
          <Input type="time" name="time" label="Hora"/>

        </form>
      </PageHeader>

      <main>
        <TeacherItem/>
      </main>
    </div>
  );
}

export default TeacherList;