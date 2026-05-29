<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p La normativa y las novedades en seguridad social integral constituyen competencias esenciales para el cumplimiento de las obligaciones laborales en los contextos de la gestión de nómina, la contratación y la protección de los trabajadores. A lo largo de los contenidos se analizan los tipos de contrato, los componentes del sistema de seguridad social, las obligaciones del empleador o contratante y las novedades de nómina como elementos interrelacionados que inciden directamente en la correcta liquidación de los aportes, el reporte en la PILA y la prevención de sanciones. La comprensión y la aplicación de estos elementos permiten desarrollar habilidades que favorecen la identificación de las novedades, el cálculo preciso del Ingreso Base de Cotización y el cumplimiento de las obligaciones frente al Sistema de Seguridad Social Integral colombiano. A continuación, el mapa conceptual presenta, de manera visual, la organización de los contenidos y la relación entre sus ejes temáticos.    .row.justify-content-center
      .col-lg-10.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt='El mapa conceptual titulado Normativa y novedades en seguridad social integral organiza el tema en cuatro ejes: contratos de trabajo, normativa del sistema, obligaciones del empleador y casos prácticos. Cada eje aporta herramientas esenciales para la gestión de la nómina: el primero permite reconocer el tipo de vínculo contractual y sus obligaciones frente al sistema; el segundo brinda el marco normativo que regula los aportes a salud, pensión y riesgos laborales; el tercero orienta el proceso de afiliación, el cálculo del IBC, el reporte en la PILA y la prevención de sanciones ante la UGPP; y el cuarto aplica estos conocimientos en casos reales de ingreso, incapacidad, contratista y retiro.')
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
