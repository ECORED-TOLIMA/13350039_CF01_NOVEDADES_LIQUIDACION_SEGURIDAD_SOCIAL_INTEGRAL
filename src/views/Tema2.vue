<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Normativa del sistema de seguridad social integral

    
    Separador
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 2.1 Concepto, origen y principios
    
    Separador
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 2.2 Ley 100 de 1993
    

    Separador
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 2.3 Sistema General de Seguridad Social en Salud (SGSSS)
    
    Separador
    #t_2_4.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 2.4 Sistema General de Pensiones (SGP)
    
    Separador
    #t_2_5.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 2.5 Sistema General de Riesgos Laborales (SGRL)
   
   
    Separador
    #t_2_6.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 2.6 Otras normas y entidades de control
   
   
</template>

<script>
export default {
  name: 'Tema2',
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
