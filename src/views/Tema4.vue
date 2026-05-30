<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 4
      h1 Casos prácticos: aplicación en nómina
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-9.order-2.order-lg-1
        p La aplicación correcta de los conceptos sobre seguridad social exige el análisis de situaciones laborales que reflejen la realidad del entorno productivo colombiano. Los casos prácticos permiten identificar el tipo de contrato, determinar el Ingreso Base de Cotización (IBC), reconocer las novedades aplicables y calcular los aportes correspondientes a cada período de liquidación, evidenciando cómo la normativa estudiada se traduce en acciones concretas dentro del proceso de elaboración de la planilla de aportes.
        .p-4.bgf1
          .row.justify-content-center.align-items-center
            .col-lg-auto.d-none.d-lg-block
              figure
                img(src='@/assets/curso/temas/tema4/img1.svg', style="width:70px", alt='Texto que describa la imagen').mb-2
            .col-lg-10
              p.mb-0 El dominio de estos casos fortalece la competencia técnica del profesional de nómina, pues relaciona el conocimiento normativo con situaciones frecuentes del trabajo cotidiano, facilita la toma de decisiones, reduce errores en la liquidación y contribuye al cumplimiento de las obligaciones del empleador frente al Sistema de Seguridad Social Integral.
      .col-lg-3.col-8.mb-4.mb-lg-0.order-1.order-lg-2
        figure
          img(src='@/assets/curso/temas/tema4/img2.png' alt='AvatarTop')
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        .p-4.bgf2-1
          .row.justify-content-center.align-items-center
            .col-lg-1.d-none.d-lg-block
              figure
                img(src='@/assets/curso/temas/tema2/img7.svg', style="width:70px", alt='Texto que describa la imagen').mb-2
            .col-lg-12
              p.text-center.mb-0 Liquidar correctamente la seguridad social exige reconocer el tipo de contrato, calcular el IBC con precisión y reportar cada novedad en la PILA dentro de los plazos establecidos por la ley.
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        .p-4.bgf4
          .row.justify-content-center.align-items-center
            .col-lg-auto.d-none.d-lg-block
              figure
                img(src='@/assets/curso/temas/tema4/img4.svg', style="width:70px", alt='Texto que describa la imagen').mb-2
            .col-lg-10
              p.mb-0 En la práctica de la nómina colombiana, cada período de liquidación puede presentar eventos que alteran el valor del IBC o modifican las responsabilidades frente al sistema: un trabajador que inicia en la mitad del mes, una incapacidad que distribuye el pago entre el empleador y la EPS, un contratista que cotiza sobre el cuarenta por ciento de sus honorarios, o un retiro que exige el cálculo proporcional de los aportes finales. Reconocer estas situaciones, aplicar la norma correcta y reportar el código preciso en la Planilla Integrada de Liquidación de Aportes (PILA) es la competencia que distingue al profesional técnico del ejecutor rutinario. Los casos que siguen simulan cada uno de estos escenarios con datos del entorno laboral de una empresa.
    

    Separador
    #t_4_1.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 4.1 Simulación de novedades en seguridad social
    .row.justify-content-center.mb-4
      .col-lg-3.col-8.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/temas/tema4/img5.png' alt='AvatarTop')
      .col-lg-9
        p La simulación de novedades permite trasladar los fundamentos normativos estudiados a situaciones laborales concretas del contexto colombiano, ejercitando la capacidad de identificar el tipo de contrato, calcular el Ingreso Base de Cotización (IBC) según las particularidades del período y reportar correctamente cada novedad en la Planilla Integrada de Liquidación de Aportes (PILA). Los cuatro escenarios que se desarrollan a continuación representan las situaciones más frecuentes en la gestión de nómina en Colombia: 
        ul.lista-ul
          li
            i.fas.fa-user(style="color: #FFB758;")
            p.mb-0 El ingreso de un trabajador con contrato a término fijo. 
          li
            i.fas.fa-user(style="color: #FFB758;")
            p.mb-0 La gestión de una incapacidad por enfermedad general. 
          li
            i.fas.fa-user(style="color: #FFB758;")
            p.mb-0 La cotización de un contratista independiente. 
          li
            i.fas.fa-user(style="color: #FFB758;")
            p.mb-0 El retiro voluntario de un trabajador.
    p  El análisis de cada caso fortalece el criterio técnico del profesional de nómina para tomar decisiones correctas, reducir errores en la liquidación y garantizar el cumplimiento de las obligaciones del empleador frente al Sistema de Seguridad Social Integral.
    .BG02.px-5
      .row.justify-content-center.align-items-center.mb-4
        .col-lg-10
          p Los cuatro casos que se presentan corresponden a situaciones frecuentes en cualquier organización y cubren los escenarios de novedad más representativos en la gestión de nómina: ingreso, incapacidad, contratación independiente y retiro. En cada caso se identifican el tipo de vínculo laboral, el IBC del período y el código de novedad que debe reportarse en la PILA, siguiendo la secuencia lógica de liquidación de la seguridad social. Estas situaciones ocurren cotidianamente en el área de nómina de cualquier empresa colombiana:
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul").mb-4
            .row(titulo="Caso 1: ingreso de trabajador con contrato a término fijo")
              .col-lg
                p La empresa Servicios Empresariales del Tolima S. A. contrata a Sandra Milena Rodríguez como asistente contable, mediante contrato a término fijo de seis meses. Su salario mensual es de $2.500.000 y la fecha de ingreso es el 15 de agosto. Como la trabajadora no laboró el mes completo, el Ingreso Base de Cotización (IBC) debe calcularse de forma proporcional a los días trabajados. Para este caso, se toma el salario mensual, se divide entre 30 días y se multiplica por los 17 días laborados. Sobre ese valor se calculan los aportes a salud, pensión y riesgos laborales. Además, el empleador debe reportar la novedad de ingreso con la fecha exacta de inicio, para garantizar la cobertura desde el primer día.
            .row(titulo="Caso 2: trabajador con incapacidad por enfermedad general")
              .col-lg
                p Carlos Alberto Medina trabaja con contrato a término indefinido y recibe un salario mensual de $3.200.000. Durante el mes presenta una incapacidad médica por enfermedad general de 25 días, expedida por su EPS. Para realizar la liquidación, primero se determina el valor diario del salario, dividiendo $3.200.000 entre 30 días. Los dos primeros días de incapacidad están a cargo del empleador; desde el tercer día, el reconocimiento económico corresponde a la EPS, según la normativa vigente. En la planilla de aportes debe registrarse la novedad de incapacidad, indicando los días correspondientes y el IBC aplicable. Este reporte es importante porque evita inconsistencias en la historia laboral, en las semanas cotizadas y en los valores reconocidos al trabajador.
            .row(titulo="Caso 3: contratista independiente")
              .col-lg
                p La firma Consultora Asesorías Jurídicas del Tolima S. A. S. contrata a Patricia Hernández mediante contrato de prestación de servicios por $12.000.000, con una duración de tres meses. Para calcular los aportes, primero se determina el valor mensualizado del contrato, que corresponde a $4.000.000. Luego, se calcula el IBC sobre el 40 % de ese valor, es decir, $1.600.000. Sobre esta base, la contratista debe realizar sus aportes a salud y pensión, porque en esta modalidad no existe empleador ni relación laboral subordinada. Antes de pagar los honorarios mensuales, el contratante debe verificar el comprobante de pago de aportes. Esta revisión permite confirmar que la contratista está al día y reduce riesgos frente a posibles requerimientos de control.
            .row(titulo="Caso 4: retiro del trabajador")
              .col-lg
                p Pedro Antonio Vargas trabaja con contrato a término indefinido y salario mensual de $4.500.000. El trabajador presenta renuncia voluntaria y su último día de labores es el 18 de octubre. Como no trabajó el mes completo, el IBC del período final debe calcularse proporcionalmente: se divide el salario mensual entre 30 días y se multiplica por los 18 días laborados. Sobre este valor se liquidan los aportes a salud, pensión y riesgos laborales. Además, el empleador debe reportar la novedad de retiro con la fecha exacta de terminación del vínculo. También debe realizar la liquidación de prestaciones sociales causadas hasta ese día. Reportar oportunamente el retiro evita cobros posteriores y mantiene actualizada la afiliación del trabajador.
    .row.justify-content-center.mb-4
      .col-lg-9.order-2.order-lg-1
        p Reconocer el tipo de vínculo laboral, determinar el IBC del período y reportar el código de novedad correcto en la PILA son las tres acciones que definen la calidad del proceso de liquidación. Un error en cualquiera de ellas afecta al trabajador, expone al empleador a sanciones de la UGPP y compromete la integridad del historial de cotizaciones ante el Sistema de Seguridad Social Integral.
        .p-4.bgfI02
          .row.justify-content-center.align-items-center
            .col-lg-auto.d-none.d-lg-block
              figure
                img(src='@/assets/curso/temas/tema4/img6.svg', style="width:70px", alt='Texto que describa la imagen').mb-2
            .col-lg-10
              p.mb-0 El estudio de cada escenario deja aprendizajes que van más allá del cálculo numérico y que orientan la toma de decisiones en situaciones reales de nómina. Las lecciones que se desarrollan en este subtema sintetizan los principios de gestión que determinan si una organización cumple o incumple sus obligaciones frente al Sistema de Seguridad Social Integral.
      .col-lg-3.col-8.mb-4.mb-lg-0.order-1.order-lg-2
        figure
          img(src='@/assets/curso/temas/tema4/img7.png' alt='AvatarTop')  
    Separador
    #t_4_2.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 4.2 Lecciones aprendidas y recomendaciones
    p El análisis de los cuatro casos prácticos permite identificar lecciones transversales que van más allá del cálculo numérico, revelan los principios de gestión que determinan si una organización cumple o incumple sus obligaciones frente al Sistema de Seguridad Social Integral. A continuación, se presentan las lecciones fundamentales que se desprenden de este análisis, acompañadas de ejemplos concretos del entorno laboral colombiano.
    .BG022.p-5.mb-4
      .tarjeta.slider-custom-bg.p-4
        SlyderA(tipo="b")
          .row
            .col-lg-6.mb-4.mb-md-0.order-2.order-lg-1
              p Secuencia lógica de liquidación: proceso ordenado que el profesional de nómina aplica en cada período para garantizar la coherencia entre la realidad laboral y el reporte en la PILA. Comprende cinco pasos: identificar trabajadores activos y sus novedades, determinar el IBC proporcional, aplicar los porcentajes de cotización, registrar los códigos correctos y verificar el total antes del pago. 
            .col-lg-6.mb-4.mb-lg-0.order-1.order-lg-2
              figure
                img(src='@/assets/curso/temas/tema4/img8.png', alt='Gráfico ilustrativo de uso de programa')
          .row
            .col-lg-6.mb-4.mb-md-0.order-2.order-lg-1
              p Documentación soporte: conjunto de soportes físicos o digitales que respaldan cada novedad reportada en la PILA y que constituyen la evidencia principal ante una investigación de la UGPP. Sin documentación oportuna y coherente con las fechas reportadas, el empleador no puede demostrar la validez de sus liquidaciones ni defenderse de un requerimiento de la entidad fiscalizadora.
            .col-lg-6.mb-4.mb-lg-0.order-1.order-lg-2
              figure
                img(src='@/assets/curso/temas/tema4/img9.png', alt='Gráfico ilustrativo de uso de programa')
          .row
            .col-lg-6.mb-4.mb-md-0.order-2.order-lg-1
              p Criterio profesional sobre automatización: capacidad del profesional de nómina para identificar situaciones atípicas que el software de liquidación no detecta automáticamente, como novedades simultáneas, períodos con días variables o cambios normativos de vigencia inmediata. La tecnología es una herramienta; el criterio técnico del profesional competente es la garantía de calidad del proceso.
            .col-lg-6.mb-4.mb-lg-0.order-1.order-lg-2
              figure
                img(src='@/assets/curso/temas/tema4/img10.png', alt='Gráfico ilustrativo de uso de programa')
          .row
            .col-lg-6.mb-4.mb-md-0.order-2.order-lg-1
              p Actualización normativa permanente: práctica profesional que consiste en verificar periódicamente los cambios en el SMLMV, los porcentajes de cotización, los requisitos de la PILA y las nuevas disposiciones del Gobierno Nacional. Un profesional que no actualiza su conocimiento normativo genera liquidaciones incorrectas que deben corregirse con planillas de corrección y pueden derivar en sanciones.
            .col-lg-6.mb-4.mb-lg-0.order-1.order-lg-2
              figure
                img(src='@/assets/curso/temas/tema4/img11.png', alt='Gráfico ilustrativo de uso de programa')
          .row
            .col-lg-6.mb-4.mb-md-0.order-2.order-lg-1
              p Conciliación mensual nómina-PILA: proceso de verificación que coteja el total de aportes calculados en la nómina con el total efectivamente pagado en la PILA. Su propósito es identificar diferencias antes de que se acumulen y se conviertan en objeto de investigación de la UGPP. La corrección voluntaria oportuna evita la multa por inexactitud en una investigación formal. 
            .col-lg-6.mb-4.mb-lg-0.order-1.order-lg-2
              figure
                img(src='@/assets/curso/temas/tema4/img12.png', alt='Gráfico ilustrativo de uso de programa')
          .row
            .col-lg-6.mb-4.mb-md-0.order-2.order-lg-1
              p Responsabilidad solidaria del contratante: obligación legal de verificar que el contratista haya pagado sus aportes al sistema antes de cada desembolso de honorarios. El incumplimiento de esta verificación puede derivar en que la UGPP declare al contratante solidariamente responsable por la totalidad de los aportes omitidos por el contratista, más los intereses moratorios causados.
            .col-lg-6.mb-4.mb-lg-0.order-1.order-lg-2
              figure
                img(src='@/assets/curso/temas/tema4/img13.png', alt='Gráfico ilustrativo de uso de programa')
    .bloque-texto-gg.tarjeta.bgf1.mb-4
      .bloque-texto-gg__texto.p-4
        p Aprender a liquidar la seguridad social no termina con dominar una fórmula o conocer un porcentaje, termina cuando el profesional comprende por qué cada dato importa, qué consecuencias tiene un error y cómo prevenirlo. Los cuatro casos de esta sección demostraron que detrás de cada número hay una persona cuya salud, pensión y protección laboral dependen de que la nómina se liquide bien. Conocer la norma, verificar los cálculos, guardar los soportes y mantenerse actualizado no son tareas adicionales, son el núcleo de la responsabilidad profesional. 
      .bloque-texto-gg__img(
      :style="{'background-image':`url(${require('@/assets/curso/temas/tema4/img14.svg')})`}"
      )    
    p Cada vez que se elabora una PILA correcta, se está protegiendo al trabajador, cumpliendo con la ley y construyendo la solidez de la organización.   
</template>

<script>
export default {
  name: 'Tema4',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
