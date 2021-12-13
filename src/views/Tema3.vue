<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        span 3
      h1 Bioindicadores
    .row.mt-5
      .col-4.d-none.d-lg-flex
        figure
          img(src='@/assets/template/tema-3-1.png', alt='Texto que describa la imagen').floating
      .col-12.col-lg-8.align-self-center
        p Los #[strong bioindicadores o indicadores biológicos] incluyen los procesos biológicos, especies o comunidades de organismos usados para evaluar la calidad del medio ambiente y cómo cambia con el tiempo. Los cambios en el medio ambiente se atribuyen a la intervención humana (contaminación, polución, erosión, agricultura) o a procesos naturales (sequías, heladas), aunque los factores antropogénicos que causan más estrés en el medio ambiente son el foco de la investigación sobre bioindicadores (Holt y Miller, 2010).
        p.mt-3 A continuación, se describen los diferentes #[strong tipos de bioindicadores], según el tipo de ecosistema de estudio, y algunos ejemplos (Fernández, 2020):
    .row.mt-5
      .col-10.offset-1
        LineaTiempoD.color-primario
          .row(numero="1" titulo="Bioindicadores de suelo")
            .col-4.offset-4.offset-lg-0
              figure
                img(src='@/assets/template/tema-3-2.png', alt='Texto que describa la imagen')
            .col-12.col-lg-8
              p Pueden indicar fertilidad y contaminación del suelo. La diversidad de #[strong microorganismos] benéficos, neutros y plagas, la presencia de #[strong ácaros, artrópodos y lombrices] son bioindicadores de la salud del suelo. 
          .row(numero="2" titulo="Bioindicadores de agua")
            .col-4.offset-4.offset-lg-0
              figure
                img(src='@/assets/template/tema-3-3.png', alt='Texto que describa la imagen')
            .col-12.col-lg-8
              p Indican principalmente contaminación de fuentes de agua. Los #[strong protozoos] son bioindicadores de aguas contaminadas, que generan brotes de enfermedades, y las #[strong bacterias] indican contaminación en aguas costeras.
          .row(numero="3" titulo="Bioindicadores de aire")
            .col-4.offset-4.offset-lg-0
              figure
                img(src='@/assets/template/tema-3-3.png', alt='Texto que describa la imagen')
            .col-12.col-lg-8
              p La presencia de #[strong aves] silvestres indica salud del aire y, en general, del agroecosistema que habitan, pues están presentes en diferentes niveles tróficos y son sensibles a cambios atmosféricos en el agroecosistema. Las #[strong abejas] son especialmente sensibles a los agrotóxicos, como los neonicotinoides, presentes en el aire y en las plantas de las que se alimentan. Las #[strong salamandras o lagartijas] son especialmente sensibles a los gases industriales, como el dióxido de azufre. 
          .row(numero="4" titulo="Bioindicadores marinos")
            .col-4.offset-4.offset-lg-0
              figure
                img(src='@/assets/template/tema-3-3.png', alt='Texto que describa la imagen')
            .col-12.col-lg-8
              p Los #[strong insectos acuáticos] indican salud ambiental de los ambientes acuáticos, tanto de agua dulce como marinos. También los #[strong anfibios y peces] son bioindicadores de la ausencia de metales pesados en fuentes de agua.
              p.mt-3 El muestreo de cada bioindicador depende de cada tipo de organismos; por ejemplo, en el caso de las aves, se puede realizar un inventario por avistamiento. Para inventariar los insectos acuáticos, se aplican métodos de recolección con trampas entomológicas, y para identificar microorganismos se requiere enviar muestras para procesar y analizar en laboratorio.



</template>

<script>
export default {
  name: 'Tema3',
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
