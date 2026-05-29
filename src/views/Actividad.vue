<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    #Actividad
      <Actividad :cuestionario="cuestionario"/>
</template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'

export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema: 'Normativa y novedades en seguridad social integral',
      titulo: 'Cuestionario',
      introduccion:
        '<b>Objetivo:</b> evaluar la apropiación de los conceptos normativos del Sistema de Seguridad Social Integral en Colombia, mediante el reconocimiento de los tipos de contrato, el IBC, los códigos PILA y las obligaciones del empleador frente al sistema.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO.',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuáles son los tres elementos esenciales del contrato de trabajo según el Código Sustantivo del Trabajo?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Remuneración, experiencia y horario.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Prestación personal del servicio, subordinación y remuneración.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Contrato escrito, afiliación y salario mínimo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Antigüedad, cargo y prestaciones sociales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! El artículo 22 del CST establece que el contrato de trabajo exige prestación personal del servicio, subordinación y remuneración.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 2,
          texto: '¿Qué establece el principio del contrato realidad?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Que el contrato debe estar siempre por escrito para tener validez.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Que el salario mínimo es obligatorio en todo contrato laboral.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Que si concurren los elementos del contrato laboral, la relación se entiende laboral sin importar su denominación.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Que el contratista debe pagar el 100% de los aportes a seguridad social.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! El principio del contrato realidad protege al trabajador vinculado mediante figuras civiles.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 3,
          texto:
            'En un contrato de prestación de servicios, ¿quién asume el 100% de los aportes al Sistema de Seguridad Social?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'El empleador.', esCorrecta: false },
            { id: 'b', texto: 'El Ministerio del Trabajo.', esCorrecta: false },
            { id: 'c', texto: 'La UGPP.', esCorrecta: false },
            { id: 'd', texto: 'El contratista.', esCorrecta: true },
          ],
          mensaje_correcto:
            '¡Correcto! En el contrato de prestación de servicios no hay subordinación ni empleador.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 4,
          texto:
            '¿Cuál es la base de cotización al Sistema de Seguridad Social para un contratista independiente?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El 100% del valor mensualizado del contrato.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'El 70% del valor mensualizado del contrato.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'El 40% del valor mensualizado del contrato.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Un salario mínimo mensual legal vigente.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! El IBC del contratista independiente es el 40 % del valor mensualizado del contrato.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 5,
          texto:
            '¿Cuál es la ley que estructura el Sistema de Seguridad Social Integral en Colombia?',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Ley 80 de 1993.', esCorrecta: false },
            { id: 'b', texto: 'Ley 100 de 1993.', esCorrecta: true },
            { id: 'c', texto: 'Ley 50 de 1990.', esCorrecta: false },
            { id: 'd', texto: 'Ley 1562 de 2012.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Correcto! La Ley 100 de 1993 creó el Sistema de Seguridad Social Integral en Colombia.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 6,
          texto:
            '¿Cuáles son los tres componentes del Sistema de Seguridad Social Integral en Colombia?',
          imagen: require('@/assets/actividad/imagen6.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Salud, educación y vivienda.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Pensiones, cesantías y prima de servicios.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Salud, pensiones y riesgos laborales.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'ARL, caja de compensación y fondo de pensiones.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! La Ley 100 de 1993 estructura el sistema en salud, pensiones y riesgos laborales.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 7,
          texto:
            '¿Qué porcentaje del salario aporta el empleador al Sistema General de Pensiones?',
          imagen: require('@/assets/actividad/imagen7.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: '4%.', esCorrecta: false },
            { id: 'b', texto: '8%.', esCorrecta: false },
            { id: 'c', texto: '12%.', esCorrecta: true },
            { id: 'd', texto: '16%.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Correcto! El empleador aporta el 12 % del IBC a pensión y el trabajador el 4 %.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 8,
          texto: '¿Qué es el Ingreso Base de Cotización (IBC)?',
          imagen: require('@/assets/actividad/imagen8.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El valor del subsidio de transporte del trabajador.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'El monto sobre el cual se calculan los porcentajes de aporte al sistema de seguridad social.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'El total de prestaciones sociales causadas en el período.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El saldo de la cuenta de cesantías del trabajador.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! El IBC es la base sobre la cual se calculan los aportes a salud, pensión y ARL.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 9,
          texto:
            '¿Cuál es la herramienta oficial para liquidar y pagar los aportes al Sistema de Seguridad Social?',
          imagen: require('@/assets/actividad/imagen9.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'El formulario DIAN.', esCorrecta: false },
            {
              id: 'b',
              texto: 'La Planilla Integrada de Liquidación de Aportes (PILA).',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'El recibo de nómina mensual.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El certificado de retención en la fuente.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! La PILA es el mecanismo electrónico obligatorio para pagar aportes a salud, pensión, ARL y parafiscales.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 10,
          texto:
            '¿Qué novedad de nómina corresponde al ingreso de un trabajador nuevo al sistema?',
          imagen: require('@/assets/actividad/imagen10.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Novedad de retiro (RET).', esCorrecta: false },
            {
              id: 'b',
              texto: 'Novedad de suspensión (SUS).',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Novedad de incapacidad (IGE).',
              esCorrecta: false,
            },
            { id: 'd', texto: 'Novedad de ingreso (ING).', esCorrecta: true },
          ],
          mensaje_correcto:
            '¡Correcto! El código ING activa la cobertura del sistema desde la fecha indicada en la PILA.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 11,
          texto:
            '¿Cuál es la entidad encargada de fiscalizar el correcto pago de aportes a seguridad social y parafiscales en Colombia?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La Superintendencia Financiera.',
              esCorrecta: false,
            },
            { id: 'b', texto: 'La DIAN.', esCorrecta: false },
            {
              id: 'c',
              texto: 'La UGPP (Unidad de Gestión Pensional y Parafiscal).',
              esCorrecta: true,
            },
            { id: 'd', texto: 'El Ministerio de Salud.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Correcto! La UGPP fiscaliza el correcto pago de aportes y puede investigar mediante cruce de información.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 12,
          texto:
            'Durante el período de prueba de un trabajador, ¿cuál es su situación frente al Sistema de Seguridad Social?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'No es obligatorio afiliarlo hasta que supere el período de prueba.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Debe ser afiliado al sistema desde el primer día, igual que cualquier trabajador.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Solo debe afiliarse a pensión, no a salud ni ARL durante ese período.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'El trabajador asume el 100% de sus aportes durante el período de prueba.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! El empleador debe afiliar al trabajador a EPS, AFP y ARL desde el primer día de trabajo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 13,
          texto:
            '¿Cuál es la duración máxima de un contrato de trabajo a término fijo en Colombia?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Seis meses.', esCorrecta: false },
            { id: 'b', texto: 'Un año.', esCorrecta: false },
            { id: 'c', texto: 'Tres años.', esCorrecta: true },
            { id: 'd', texto: 'Cinco años.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Correcto! El contrato a término fijo puede celebrarse por máximo tres años y es renovable indefinidamente.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 14,
          texto:
            '¿Qué ocurre si el empleador no notifica la terminación del contrato a término fijo con 30 días de anticipación?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El contrato termina igualmente en la fecha pactada.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'El trabajador pierde el derecho a prestaciones sociales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'El empleador debe pagar una multa a la UGPP.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'El contrato se prorroga automáticamente por un período igual al inicialmente pactado.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Correcto! Sin el preaviso de 30 días, el contrato a término fijo se prorroga automáticamente.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 15,
          texto:
            '¿A cuántos sistemas debe afiliarse obligatoriamente un trabajador dependiente en Colombia?',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'A salud, pensión, riesgos laborales y caja de compensación familiar.',
              esCorrecta: true,
            },
            { id: 'b', texto: 'Solo a salud y pensión.', esCorrecta: false },
            {
              id: 'c',
              texto: 'A salud, pensión y riesgos laborales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Solo a pensión y riesgos laborales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! El empleador debe afiliar al trabajador a EPS, AFP o Colpensiones, ARL y caja de compensación familiar.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 16,
          texto:
            '¿Cuál es el porcentaje total del aporte al Sistema General de Salud sobre el salario del trabajador dependiente?',
          imagen: require('@/assets/actividad/imagen6.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: '8%.', esCorrecta: false },
            { id: 'b', texto: '10%.', esCorrecta: false },
            { id: 'c', texto: '12,5%.', esCorrecta: true },
            { id: 'd', texto: '16%.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Correcto! La cotización al SGSSS es del 12,5 % del IBC: 8,5 % del empleador y 4 % del trabajador.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 17,
          texto:
            '¿Qué ley regula el Sistema General de Riesgos Laborales en Colombia?',
          imagen: require('@/assets/actividad/imagen7.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Ley 100 de 1993.', esCorrecta: false },
            { id: 'b', texto: 'Ley 50 de 1990.', esCorrecta: false },
            { id: 'c', texto: 'Ley 1562 de 2012.', esCorrecta: true },
            { id: 'd', texto: 'Ley 79 de 1988.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Correcto! La Ley 1562 de 2012 reformó el SGRL y amplió su cobertura a contratistas independientes.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 18,
          texto:
            '¿Cuál es el código de novedad PILA que se debe reportar cuando un trabajador presenta una incapacidad por enfermedad general?',
          imagen: require('@/assets/actividad/imagen8.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'RET.', esCorrecta: false },
            { id: 'b', texto: 'IGE.', esCorrecta: true },
            { id: 'c', texto: 'SLN.', esCorrecta: false },
            { id: 'd', texto: 'ING.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Correcto! El código IGE aplica para incapacidades por enfermedad general.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 19,
          texto:
            '¿Cuáles son los dos regímenes del Sistema General de Pensiones en Colombia?',
          imagen: require('@/assets/actividad/imagen9.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Régimen solidario y régimen especial.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Régimen contributivo y régimen subsidiado.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Régimen público y régimen privado.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Régimen de prima media con prestación definida (RPM) y régimen de ahorro individual con solidaridad (RAIS).',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Correcto! El RPM es administrado por Colpensiones y el RAIS por las AFP privadas.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 20,
          texto:
            '¿Qué sanciones puede imponer la UGPP a un empleador que no reporte correctamente los aportes a seguridad social?',
          imagen: require('@/assets/actividad/imagen10.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Solo amonestaciones escritas sin consecuencias económicas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Cierre temporal del establecimiento de comercio.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Multas e investigaciones administrativas por inexactitud en los aportes reportados.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Cancelación inmediata del registro mercantil.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! La UGPP puede liquidar aportes omitidos con intereses moratorios y sanciones por inexactitud.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
      ],
      mensaje_final_aprobado:
        'Ha superado la actividad y demuestra sólidos conocimientos sobre el componente formativo.',
      mensaje_final_reprobado:
        'No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
