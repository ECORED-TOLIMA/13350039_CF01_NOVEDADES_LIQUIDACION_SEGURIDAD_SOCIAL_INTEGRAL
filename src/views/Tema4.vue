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
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-3.col-8.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/temas/tema4/img5.png', style="width:70px", alt='Texto que describa la imagen')
      .col-lg-9
        p La simulación de novedades permite trasladar los fundamentos normativos estudiados a situaciones laborales concretas del contexto colombiano, ejercitando la capacidad de identificar el tipo de contrato, calcular el Ingreso Base de Cotización (IBC) según las particularidades del período y reportar correctamente cada novedad en la Planilla Integrada de Liquidación de Aportes (PILA). Los cuatro escenarios que se desarrollan a continuación representan las situaciones más frecuentes en la gestión de nómina en Colombia: 
        ul.lista-ul
          li
            i.fas.fa-angle-right
            | El ingreso de un trabajador con contrato a término fijo. 
          li
            i.fas.fa-angle-right
            | La gestión de una incapacidad por enfermedad general. 
          li
            i.fas.fa-angle-right
            | La cotización de un contratista independiente. 
          li
            i.fas.fa-angle-right
            | El retiro voluntario de un trabajador.

    Separador
    #t_4_2.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 4.2 Lecciones aprendidas y recomendaciones
   
   
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
