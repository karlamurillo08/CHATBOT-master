import React, { Component } from 'react';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import CustomComponent from './CustomComponent'; // Actualiza la importación

const DiseñoChat = {
    background: 'skyblue',
    fontFamily: 'Arial, sans-serif',
    headerBgColor: 'blue',
    headerFontColor: 'white',
    headerFontSize: '25px',
    botBubbleColor: 'white',
    botFontColor: 'black',
    userBubbleColor: 'orange',
    userFontColor: 'white',
};

export default class MainChatBot extends Component {
  validarNombre = (value) => {
    if (value.length > 50) {
      return 'El nombre debe tener máximo 50 caracteres.';
    }
    if (/\d/.test(value)) {
      return 'El nombre no puede contener números.';
    }
    return true;
  };

  render() {
    return (
      <div>
        <h1>chat bot</h1>
        <ThemeProvider theme={DiseñoChat}>
          <ChatBot
            steps={[
              {
                id: 'intro',
                message: 'Bienvenido, sere tu asisntente universitario',
                trigger: '1',
              },
              {
                id: '1',
                user: true,
                validator: this.validarNombre,
                trigger: '2',
              },
              {
                id: '2',
                message: 'Es un gusto ayudarte {previousValue}',
                trigger: '3',
              },
              {
                id: '3',
                message: '¿En qué necesitas que te brinde ayuda?',
                trigger: 'select',
              },
              {
                id: 'select',
                options: [
                  { value: 'IAA', label: 'Información académica y administrativa', trigger: 'AyudaIAA' },
                  { value: 'RSC', label: 'Recursos y servicios del campus', trigger: 'AyudaRSC' },
                  { value: 'ABE', label: 'Apoyo y bienestar estudiantil:', trigger: 'AyudaABE' },
                  { value: 'OCD', label: 'Orientación sobre carrera y desarrollo profesional', trigger: 'AyudaOCD' },
                  { value: 'VES', label: 'Vida estudiantil y eventos sociales', trigger: 'AyudaVES' },
                  { value: 'NM',  label: 'Nada más', trigger: 'FIN' },
                ],
              },

              //SUBMENU IAA
              {
                id: 'AyudaIAA',
                message: "¿Que tipo de ayuda?",
                trigger: 'selectIAA',
              },
              {
                id: 'selectIAA',
                options: [
                  { value: 'IAA1', label: '¿Cuál es el calendario académico para este semestre?', trigger: 'IAA1.1' },
                  { value: 'IAA2', label: '¿Dónde puedo encontrar mi horario de clases?', trigger: 'IAA2.1' },
                  { value: 'IAA3', label: '¿Cuándo son los períodos de inscripción para cursos?', trigger: 'IAA3.1' },
                  { value: 'IAA4', label: 'Regresar', trigger: 'select' },
                ],
              },
              {
                id: 'IAA1.1',
                component: <CustomComponent text="Puedes consultar el calendario en el siguiente sitio web:" link="https://www.udb.edu.sv/udb/eventos" />,
                trigger: 'selectIAA',
              },
              {
                id: 'IAA2.1',
                component: <CustomComponent text="Puedes consultar tu horario de clase en el siguiente sitio web:" link="https://admacad.udb.edu.sv/PortalWeb/" />,
                trigger: 'selectIAA',
              },
              {
                id: 'IAA3.1',
                component: <CustomComponent text="Los periodos de inscripción ya terminaron, pero puedes consultar el siguiente sitio web:" link="https://www.udb.edu.sv/udb/eventos" />,
                trigger: 'selectIAA',
              },

              //SUBMENU RSC
              {
                id: 'AyudaRSC',
                message: "¿Qué información necesitas sobre recursos y servicios en el campus?",
                trigger: 'selectRSC',
              },
              {
                id: 'selectRSC',
                options: [
                  { value: 'RSC1', label: '¿Dónde está la biblioteca y cuáles son sus horarios?', trigger: 'RSC1.1' },
                  { value: 'RSC2', label: '¿Cómo puedo contactar al departamento de servicios estudiantiles?', trigger: 'RSC2.1' },
                  { value: 'RSC3', label: '¿Hay algún evento importante en el campus esta semana?', trigger: 'RSC3.1' },
                  { value: 'RSC4', label: 'Regresar', trigger: 'select' },
                ],
              },
              {
                id: 'RSC1.1',
                component: <CustomComponent text="Los horarios de la biblioteca son: Lunes-Viernes: 7:00am - 5:00pm y Sabado 8:00am - 12.00mm. Puedes consultar la ubicacion en el siguiente link:" link="https://www.bing.com/maps?osid=3ed0abe6-4abd-4ad4-a02d-771203ff4162&cp=13.714661~-89.160436&lvl=16.31809&pi=0&v=2&sV=2&form=S00027"/>,
                trigger: 'selectRSC',
              },
              {
                id: 'RSC2.1',
                component: <CustomComponent text="La universidad cuenta con una diversidad de servicios estudiantiles en los cuales puedes formar parte, aqui te dejo el link donde podras conocer mas de ellos y obtener mas informacion:" link="https://www.udb.edu.sv/udb/pagina/servicios_estudiantiles "/>,
                trigger: 'selectRSC',
              },
              {
                id: 'RSC3.1',
                component: <CustomComponent text="Para consultar los eventos que hay el dia de hoy, verifica el siguiente link:" link="https://www.udb.edu.sv/udb/eventos/hoy"/>,
                trigger: 'selectRSC',
              },

              //SUBMENU ABE
              {
                id: 'AyudaABE',
                message: "¿Qué información necesitas sobre bienestar estudiantil?",
                trigger: 'selectABE',
              },
              {
                id: 'selectABE',
                options: [
                  { value: 'ABE1', label: '¿Dónde puedo obtener ayuda si estoy experimentando estrés o problemas emocionales?', trigger: 'ABE1.1' },
                  { value: 'ABE2', label: '¿Cuáles son los recursos disponibles para estudiantes con discapacidades?', trigger: 'ABE2.1' },
                  { value: 'ABE3', label: '¿Qué servicios de asesoramiento o tutoría están disponibles para mejorar mi rendimiento académico?', trigger: 'ABE3.1' },
                  { value: 'ABE4', label: 'Regresar', trigger: 'select' },
                ],
              },
              {
                id: 'ABE1.1',
                component: <CustomComponent text="La universidad ofrece asistencia psicologica y psicopedagogica, para realizar consultas u obtener informacion visita el siguiente link:" link="https://www.udb.edu.sv/udb/pagina/asistencia_psicopedagogica"/>,
                trigger: 'selectABE',
              },
              {
                id: 'ABE2.1',
                component: <CustomComponent text="La universidad promueve a los estudiantes con discapacidades brindandoles servicios y recursos que les hace sentir incluidos en el area academica, que tienen las mismas oportunidades para lograr alcanzar sus objetivos. Cuentan con rampas para poder trasladarse entre los diferentes edificios dentro del campus, de igual forma con ascensores para poder llegar a los niveles donde recibiran sus clases o laboratorios" link="https://www.udb.edu.sv/udb/pagina/somos_udb"/>,
                trigger: 'selectABE',
              },
              {
                id: 'ABE3.1',
                component: <CustomComponent text="Con la ayuda psicopedadogica, puedes solicitar tutorias o consultar al tutor asignado en el portal web para favorecer tu adaptacion a la vida universitaria o mejorar tu rendimiento academico. Para poder ver los datos de tu tutor por favor ingresa al siguiente link, si no tienes uno asignado puedes consultar al area de Psicopedadogia para empezar el proceso de asignacion:" link="https://admacad.udb.edu.sv/EstudiantesPlus/Home"/>,
                trigger: 'selectABE',
              },
              {
                id: 'AyudaOCD',
                message: "¿Qué información necesitas sobre el desarrollo de carrera?",
                trigger: 'selectOCD',
              },
              {
                id: 'selectOCD',
                options: [
                  { value: 'OCD1', label: '¿Cómo puedo encontrar pasantías o prácticas profesionales relevantes para mi carrera?', trigger: 'OCD1.1' },
                  { value: 'OCD2', label: '¿Qué recursos ofrece la universidad para ayudarme a escribir mi currículum vitae?', trigger: 'OCD2.1' },
                  { value: 'OCD3', label: '¿Hay talleres disponibles para prepararme para entrevistas de trabajo?', trigger: 'OCD3.1' },
                  { value: 'OCD4', label: 'Regresar', trigger: 'select' },
                ],
              },
              {
                id: 'OCD1.1',
                component: 'RESPUESTA OCD1',
                trigger: 'selectOCD',
              },
              {
                id: 'OCD2.1',
                component: 'RESPUESTA OCD2',
                trigger: 'selectOCD',
              },
              {
                id: 'OCD3.1',
                component: 'RESPUESTA OCD3',
                trigger: 'selectOCD',
              },
              {
                id: 'AyudaVES',
                message: "¿Qué información necesitas sobre la vida estudiantil?",
                trigger: 'selectVES',
              },
              {
                id: 'selectVES',
                options: [
                  { value: 'VES1', label: '¿Qué clubes o actividades extracurriculares están disponibles en el campus?', trigger: 'VES1.1' },
                  { value: 'VES2', label: '¿Hay alguna actividad interesante planeada para el fin de semana?', trigger: 'VES2.1' },
                  { value: 'VES3', label: '¿Cuáles son las opciones de alimentación disponibles en el campus?', trigger: 'VES3.1' },
                  { value: 'VES4', label: 'Regresar', trigger: 'select' },
                ],
              },
              {
                id: 'VES1.1',
                component: 'RESPUESTA VES1',
                trigger: 'selectVES',
              },
              {
                id: 'VES2.1',
                component: 'RESPUESTA VES2',
                trigger: 'selectVES',
              },
              {
                id: 'VES3.1',
                component: 'RESPUESTA VES3',
                trigger: 'selectVES',
              },
              {
                id: 'FIN',
                message: "Estupendo,¡Ten un buen día!",
                end: true,
              },
            ]}
          />
        </ThemeProvider>
      </div>
    );
  }
}
