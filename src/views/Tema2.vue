<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        span 2
      h1 Instrumentos de medición de variables ambientales
    figure.mt-4
      img(src='@/assets/template/tema-2-1.png', alt='Texto que describa la imagen')
    p.mt-3 Los instrumentos de medición de variables ambientales, en su mayoría, son de uso en laboratorio. Sin embargo, hay equipos, instrumentos y herramientas para la toma de muestras y medición <em>in situ</em> de algunas variables. 
    AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--gris").mt-5
      .row(titulo="Requerimientos de medición de las fuentes del agua ")
        .col-12.col-lg-7
          ul.lista-ul.mt-3
            li
              i.fas.fa-angle-right
              p Si se plantea realizar un muestreo de fondo o de sedimentos, se recomienda el muestreador #[strong Helley-Smith.]
            li
              i.fas.fa-angle-right
              p Si se requiere muestrear una fuente de profundidad de un (1) metro o más, se recomienda usar el #[strong muestreador de Kemmerer.]
            li
              i.fas.fa-angle-right
              p Si se requiere que la fuente tenga una profundidad de dos (2) metros, se recomienda la botella de Van Dorn. 
            li
              i.fas.fa-angle-right
              p Cuando se requiere tomar varias muestras para analizar variabilidad instantánea, entonces se recomienda usar un #[strong muestreador múltiple.]
            li
              i.fas.fa-angle-right
              p Para medir parámetros <em>in situ</em>, se recomienda usar un equipo multiparámetro.
          p.mt-4 La toma de muestras al azar indica que el resultado no aporta información adicional sobre el objeto de estudio. Cuando la localización de la toma de muestra sí afecta el resultado del muestreo, se recomienda realizar un muestreo sistemático.
          p.mt-4 Las mediciones que se pueden realizar <em>in situ</em> (pH, oxígeno disuelto, temperatura y conductividad eléctrica) se pueden realizar con los equipos o sensores multiparámetros que permiten la visualización digital de datos (LCD) con lecturas al instante.
        .col-6.col-lg-5.offset-3.offset-lg-0
          SlyderA(tipo="b")
            .row
              figure
                img(src='@/assets/template/tema-2-2.png', alt='Texto que describa la imagen')
            div.row
              figure
                img(src='@/assets/template/tema-2-3.png', alt='Texto que describa la imagen')
            div.row
              figure
                img(src='@/assets/template/tema-2-4.png', alt='Texto que describa la imagen')

      div(titulo="Equipos de monitoreo o muestreo de calidad de agua").row
        .col-12.col-lg-7          
          p.mt-4 Adicional al estudio de variables de calidad de agua que se realice en el estudio de un agroecosistema, es importante considerar que en Colombia existen #[strong Redes de Monitoreo de Agua], a nivel nacional, regional, local y específicas, que pueden suministrar información complementaria al estudio (IDEAM, 2017). 
        .col-6.col-lg-5.offset-3.offset-lg-0
          SlyderA(tipo="b")
            .row
              figure
                img(src='@/assets/template/tema-2-5.png', alt='Texto que describa la imagen')
            div.row
              figure
                img(src='@/assets/template/tema-2-6.png', alt='Texto que describa la imagen')
            div.row
              figure
                img(src='@/assets/template/tema-2-7.png', alt='Texto que describa la imagen')

      div(titulo="Equipos de monitoreo o muestreo de calidad de suelos").row
        .col-12.col-lg-7          
          p.mt-4 Para la toma de #[strong muestras de suelo], la herramienta más recomendada es el #[strong barreno], el cual viene de diferentes tipos, según la muestra que se requiera. Hay barrenos de una pieza, que sirven para análisis químicos o biológicos en los que la #[strong muestra es disturbada], en los que no es obligatorio conservar la estructura del suelo, por lo tanto, se pueden revolver o recoger sueltas. Hay otros #[strong barrenos, como el tipo Uhland], utilizado para la toma de #[strong muestras no disturbadas], que mantienen las características del suelo (estructura, poros, espacios), por lo que son ideales para los análisis físicos del suelo. 
          p.mt-4 Sin embargo, si no se cuenta con un barreno, el muestreo puede hacerse con una #[stron pala o palín] y un balde, procurando tomar una cantidad similar de suelo en cada punto y a la misma profundidad.
        .col-6.col-lg-5.offset-3.offset-lg-0
          SlyderA(tipo="b")
            .row
              figure
                img(src='@/assets/template/tema-2-8.png', alt='Texto que describa la imagen')
            div.row
              figure
                img(src='@/assets/template/tema-2-9.png', alt='Texto que describa la imagen')
            div.row
              figure
                img(src='@/assets/template/tema-2-10.png', alt='Texto que describa la imagen')

      div(titulo="Procesamiento de muestras").row
        .col-12.col-lg-7          
          p.mt-4 También existen #[strong equipos o kits para análisis químico de suelos ] <b><em>in situ</em></b>, que pueden procesar pH, conductividad eléctrica y algunos nutrientes [iones nitrato (NO3), calcio (Ca), potasio (K) y sodio (Na)]; sin embargo, se recomienda realizar un análisis completo de laboratorio para poder analizar todas las variables, químicas, físicas y biológicas.
          p.mt-4 En cuanto al procesamiento de las muestras para analizar las variables de #[strong calidad de agua y suelos], en la mayoría de los casos, las muestras se procesan en un #[strong laboratorio de agua y suelos], por lo que se recomienda revisar el protocolo de toma de muestras definido por cada laboratorio.
          p.mt-4 A continuación, se mencionan algunos laboratorios en los que se pueden realizar los análisis de #[strong aguas y suelos:]
        .col-6.col-lg-5.offset-3.offset-lg-0
          SlyderA(tipo="b")
            .row
              figure
                img(src='@/assets/template/tema-2-11.png', alt='Texto que describa la imagen')
            div.row
              figure
                img(src='@/assets/template/tema-2-12.png', alt='Texto que describa la imagen')
            div.row
              figure
                img(src='@/assets/template/tema-2-13.png', alt='Texto que describa la imagen')
        .col-12.mt-4
          .row
            .col-12.col-lg-6
              ul.lista-ul.mt-3
                li 
                  i.fas.fa-angle-right
                  | Red de Laboratorios de la Corporación Colombiana de Investigación Agropecuaria (AGROSAVIA):
              a.anexo.mt-3(href="https://www.agrosavia.co/productos-y-servicios/servicios-de-laboratorio/qu%C3%ADmica-anal%C3%ADtica" target="_blank")
                .anexo__icono
                  img(src="@/assets/template/icono-link.svg")
                .anexo__texto
                  p.text-green #[strong.text-green Enlace web.] https://www.agrosavia.co/productos-y-servicios/servicios-de-laboratorio/qu%C3%ADmica-anal%C3%ADtica
              ul.lista-ul.mt-3
                li 
                  i.fas.fa-angle-right
                  | Laboratorio de Agua y Suelos de la Universidad Nacional de Colombia:
              a.anexo.mt-3(target="_blank" href="http://www.cienciasagrarias.bogota.unal.edu.co/laboratorios")
                .anexo__icono
                  img(src="@/assets/template/icono-link.svg")
                .anexo__texto
                  p.text-green #[strong.text-green Enlace web.] http://www.cienciasagrarias.bogota.unal.edu.co/laboratorios
              ul.lista-ul.mt-3
                li 
                  i.fas.fa-angle-right
                  | Laboratorio de Servicios Analísticos del Centro Internacional de Agricultura Tropical (CIAT): 
              a.anexo.mt-3(target="_blank" href="https://ciat.cgiar.org/labs/laboratorio-de-servicios-analiticos/?lang=es")
                .anexo__icono
                  img(src="@/assets/template/icono-link.svg")
                .anexo__texto
                  p.text-green #[strong.text-green Enlace web.] https://ciat.cgiar.org/labs/laboratorio-de-servicios-analiticos/?lang=es
            .col-12.col-lg-6
              ul.lista-ul.mt-3
                li 
                  i.fas.fa-angle-right
                  | Laboratorio Nacional del Suelos del Instituto Geográfico Agustín Codazzi (IGAC): 
              a.anexo.mt-3(target="_blank" href="https://www.igac.gov.co/es/contenido/areas-estrategicas/agrologia/laboratorio-nacional-de-suelos")
                .anexo__icono
                  img(src="@/assets/template/icono-link.svg")
                .anexo__texto
                  p.text-green #[strong.text-green Enlace web.] https://www.igac.gov.co/es/contenido/areas-estrategicas/agrologia/laboratorio-nacional-de-suelos 
              ul.lista-ul.mt-3
                li 
                  i.fas.fa-angle-right
                  | Laboratorio de Agua y Suelos de la Universidad del Valle: 
              a.anexo.mt-3(target="_blank" href="http://eidenar.univalle.edu.co/index.php/laboratorios/laboratorios-de-aguas-y-suelos-agricolas")
                .anexo__icono
                  img(src="@/assets/template/icono-link.svg")
                .anexo__texto
                  p.text-green #[strong.text-green Enlace web.] http://eidenar.univalle.edu.co/index.php/laboratorios/laboratorios-de-aguas-y-suelos-agricolas


</template>

<script>
export default {
  name: 'Tema2',
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
