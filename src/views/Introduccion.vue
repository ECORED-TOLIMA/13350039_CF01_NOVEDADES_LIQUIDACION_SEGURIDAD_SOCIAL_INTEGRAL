<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .row.justify-content-center.align-items-center.bgfI01.p-4.mb-4
      .col-lg-1
        figure
          img(src='@/assets/curso/temas/intro/img1.svg', alt='')
      .col-lg-11
        p.mb-0 La seguridad social constituye uno de los pilares fundamentales del Estado social de derecho en Colombia y un derecho humano reconocido por la Organización Internacional del Trabajo (OIT). No obstante, su garantía efectiva depende del conocimiento preciso que empleadores, contratantes y trabajadores tengan sobre las normas, los procedimientos y las obligaciones que los vinculan frente al sistema. En la práctica, una proporción significativa de los errores en la gestión de la nómina y en el pago de aportes se origina en la clasificación incorrecta del tipo de contrato, en el cálculo inadecuado del Ingreso Base de Cotización o en el reporte inoportuno de las novedades en la Planilla Integrada de Liquidación de Aportes (PILA). Estas omisiones generan consecuencias que van desde sanciones económicas hasta investigaciones administrativas y responsabilidades civiles para las organizaciones.
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-9
        p En este contexto, el Sistema de Seguridad Social Integral, creado por la Ley 100 de 1993 y sustentado en los artículos 48 y 49 de la Constitución Política de 1991, establece el conjunto de instituciones, normas y procedimientos que garantizan la protección de los trabajadores frente a los riesgos de enfermedad, vejez, invalidez, muerte y accidentes laborales. Su estructura comprende tres componentes interrelacionados: el Sistema General de Seguridad Social en Salud (SGSSS), el Sistema General de Pensiones (SGP) y el Sistema General de Riesgos Laborales (SGRL). La correcta operación de este sistema exige que cada actor de la relación laboral conozca con precisión sus obligaciones de afiliación, cotización y reporte, independientemente del tipo de contrato que origine el vínculo.
        .cajon.bgfI02.p-4.mb-4
          p.mb-0 Este componente formativo tiene como propósito brindar al aprendiz una comprensión integral de los fundamentos normativos que regulan el Sistema de Seguridad Social Integral en Colombia, abordando los tipos de contrato que determinan las obligaciones frente al sistema, los procesos de afiliación obligatoria, la distribución de los aportes y el manejo correcto de las novedades de nómina que inciden en la liquidación. El estudio de estos contenidos busca fortalecer la capacidad de identificar, validar y aplicar la normativa vigente en situaciones laborales reales, garantizando el cumplimiento responsable de las obligaciones legales del empleador o contratante.
      .col-lg-3
        figure
          img(src='@/assets/curso/temas/intro/img2.png', alt='')
    p.mb-4 Para ampliar la comprensión de los conceptos abordados y contextualizar su aplicación en la gestión de la nómina y la seguridad social, se recomienda acceder al recurso audiovisual que acompaña esta sección.
    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video: Leyenda del video
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
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
