<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        span 1
      h1 Plan de muestreo
    .row.mt-5
      .col-4.d-none.d-lg-flex
        figure
          img(src='@/assets/template/tema-1-1.png', alt='Texto que describa la imagen').floating
      .col-12.col-lg-8.align-self-center
        p La medición de variables ambientales en un agroecosistema debe partir de un ejercicio de planificación o plan de muestreo, en el que se consideren todos los aspectos asociados al estudio relacionados con las variables a analizar, el tipo de muestras y muestreo, los protocolos, los materiales y equipos requeridos, y consideraciones para analizar la información.  Para tal efecto, se deben adelantar, al menos, los siguientes pasos:
    AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--gris").mt-5
      .row(titulo="Localizar el área de estudio")
        .col-12.col-lg-7
          p Se debe ubicar la #[strong localización o área del estudio] en la que se va a realizar la medición de las variables ambientales, así como sus límites y área.
          p.mt-3 En el caso del presente curso de formación, la medición se realizará en un #[strong “agroecosistema”], es decir, en un ecosistema intervenido por el ser humano con fines productivos agropecuarios: una finca, lote, terreno de un productor o de una asociación de productores agropecuarios, entre otros, en el que #[strong apliquen manejo agroecológico o producción ecológica.]
          p.mt-3 Se debe considerar que el área de estudio sea un #[strong lugar representativo ] para la medición, en el que las variables ambientales sean sensibles a la actividad productiva y que se puedan, si es el caso, extrapolar los resultados a partir de una hipótesis, por ejemplo, plantear que los resultados de esta medición en particular podrían ser similares en otros agroecosistemas con características similares a las del estudio realizado. 
        .col-5.d-none.d-lg-flex.align-self-center
          figure
            img(src='@/assets/template/tema-1-2.png', alt='Texto que describa la imagen')
            

      div(titulo="Descripción de las variables agroclimáticas").row
        .col-12.col-lg-7
          p Es importante consultar las variables agroclimáticas a partir de #[strong fuentes de información] primarias y secundarias, como una estación meteorológica cercana al agroecosistema en estudio, una microestación instalada en el agroecosistema, con equipos portátiles de evaluación de parámetros agroclimáticos <em>in situ</em>, o a partir de referencias bibliográficas de estudios recientes realizados en la zona.
          p.mt-3 Las variables agroclimáticas básicas a describir serían:
          ul.lista-ul.mt-3
            li 
              i.fas.fa-angle-right
              | Temperatura (°C)
            li 
              i.fas.fa-angle-right
              | Humedad Relativa (% HR)
            li 
              i.fas.fa-angle-right
              | Altitud: m.s.n.m.
            li 
              i.fas.fa-angle-right
              | Precipitación (mm)
            li 
              i.fas.fa-angle-right
              p Velocidad del viento (m/s)
          p.mt-3 Además de esta información, es importante conocer cómo está distribuida la #[strong época de lluvias], o #[strong fenómenos asociados], como deslizamientos de tierra por exceso de lluvias, granizadas recientes, contaminación de fuentes de agua por erosión de los suelos, entre otras. 
        .col-4.d-none.d-lg-flex.align-self-center
          figure
            img(src='@/assets/template/tema-1-3.png', alt='Texto que describa la imagen')
    p.mt-5 Siguiendo con los pasos para hacer la medición de variables, conocerá la continuación de estos, pero teniendo en cuenta la variable a medir.
    SlyderB.mt-5(:datos="datosSlyder1")
    p.mt-5 En cuanto a la variable “calidad del agua”, es diferente, porque se deben analizar, en lo posible, las fuentes superficiales de agua disponibles, como ríos, nacimientos, lagos, lagunas costeras, que son afectadas por la actividad productiva del agroecosistema, y se aplica el tipo de muestreo según las características de la zona de estudio y de las fuentes disponibles.
    p.mt-3 Los puntos de muestreo de agua se definen según la fuente:
    TabsB.color-acento-contenido.mt-5
      .py-4.py-md-5(titulo="" :icono="require('@/assets/template/tema-1-11.svg')")
        .row
          .col-12.col-lg-8
            .h3 Determinar el tipo de muestreo  en la variable Calidad del suelo
            p.mt-3 El tipo de muestreo más común es el estratificado o zonificado, en el que se identifican áreas o zonas del suelo con características similares, como la forma del terreno, uso del suelo, relieve, pendiente, textura del suelo, coberturas, entre otras.
          .col-4.offset-4.offset-lg-0
            figure
              img(src='@/assets/template/tema-1-16.png', alt='Texto que describa la imagen')
      .py-4.py-md-5(titulo="" :icono="require('@/assets/template/tema-1-12.svg')")
        .row
          .col-12.col-lg-8
            .h3 Escoger el tipo de muestras 
            p.mt-3 #[strong Puntual: ] muestra representativa en la que el tiempo y el lugar (espacio) no influyen significativamente en el resultado de la muestra.
            p.mt-3 #[strong Compuesta: ] está compuesta por varias muestras puntuales, pero en intervalos y periodos determinados.
            p.mt-3 #[strong Integrada: ] es la mezcla de varias muestras tomadas en diferentes puntos, pero simultáneamente, para conocer un resultado promedio.
          .col-4.offset-4.offset-lg-0
            figure
              img(src='@/assets/template/tema-1-17.png', alt='Texto que describa la imagen')
      .py-4.py-md-5(titulo="" :icono="require('@/assets/template/tema-1-13.svg')")
        SlyderA(tipo="b")
          .row
            .col-12.col-lg-8
              .h3 Determinar el método de muestreo
              p.mt-3 Para muestrear las #[strong variables de calidad de suelo], se deben identificar #[strong características similares] en el lote o zona de muestreo, de acuerdo con criterios de: 
              ul.lista-ul.mt-3
                li 
                  i.fas.fa-angle-right
                  | Grado de pendiente
                li 
                  i.fas.fa-angle-right
                  | Grado de erosión
                li 
                  i.fas.fa-angle-right
                  | Tipo de vegetación
                li 
                  i.fas.fa-angle-right
                  | Manejo agronómico anterior (tipo de fertilización, mecanización, etc.).
                li 
                  i.fas.fa-angle-right
                  | Presencia de rocas, cuerpos de agua, u otros.
            .col-4.offset-4.offset-lg-0
              figure
                img(src='@/assets/template/tema-1-18.png', alt='Texto que describa la imagen')
          div.row
            .col-12.col-lg-8
              .h3 Determinar el método de muestreo
              p.mt-3 Cuando el lote o zona es uniforme, se puede considerar como una unidad de muestreo, siempre que no supere las 10 hectáreas; de lo contrario, se debe dividir en varias unidades de muestreo. Luego se toman las muestras con el barreno, pala o palín y se depositan en un balde, procurando depositar la misma cantidad de suelo y a la misma profundidad según el criterio técnico y protocolo del laboratorio.
            .col-4.offset-4.offset-lg-0
              figure
                img(src='@/assets/template/tema-1-19.png', alt='Texto que describa la imagen')
          
          .row
            .col-12.col-lg-8
              .h3 Determinar el método de muestreo
              p.mt-3 Se toman de 15-20 submuestras a lo largo del recorrido determinado para el muestreo y se mezclan o disponen según el análisis a realizar. Cuando la toma de la muestra se realiza con pala o palín, se debe realizar con un hoyo de 25 x 25 cm de lado y 20 cm de profundidad (zona de raíces), y se debe retirar la capa superficial del suelo, unos 2 cm aproximadamente, y extraer la muestra
              p.mt-3 La profundidad de la muestra puede variar según el tipo de cultivo. En pastos, se toman muestras más superficiales (0-10 cm), mientras en cultivos perennes, se toman muestras más profundas. Se mezclan las submuestras y se empaca 1 kg de la muestra en una bolsa limpia o en una bolsa o recipiente suministrado por el laboratorio. Se identifica o rotula la muestra con la información de ubicación, uso del suelo, datos del responsable, entre otros datos requeridos por el laboratorio.
            .col-4.offset-4.offset-lg-0
              figure
                img(src='@/assets/template/tema-1-20.png', alt='Texto que describa la imagen')
            
          
      .py-4.py-md-5(titulo="" :icono="require('@/assets/template/tema-1-14.svg')")
        .row
          .col-12.col-lg-8
            .h3 Definir la frecuencia de monitoreo o muestreo
            p.mt-3 En el caso del muestreo de suelos, se recomienda hacer al menos uno (1) al año, o más, en caso de que el objetivo del estudio de variables ambientales lo requiera #[strong (Muñoz, 2018)].
          .col-4.offset-4.offset-lg-0
            figure
              img(src='@/assets/template/tema-1-21.png', alt='Texto que describa la imagen')
      .py-4.py-md-5(titulo="" :icono="require('@/assets/template/tema-1-15.svg')")
        .row
          .col-12.col-lg-7
            .h3 Elaborar la lista de chequeo de herramientas, materiales y equipos requeridos para la medición
            p.mt-3 Es importante contar con todos los materiales y equipos requeridos en el momento de la medición, para asegurar que la toma de muestras se realice siguiendo el protocolo de muestreo correctamente:
            p.mt-3 Para tomar las muestras de suelo para análisis de propiedades físicas, químicas y biológicas, se sugiere contar al menos con los siguientes materiales y herramientas:
          .col-12.col-lg-5.offset-0.offset-lg-4
            .tabla-a.color-acento-contenido.mt-5 
              table
                thead.text-white.bg-naranja
                  tr
                    th Elaborar La Lista De Chequeo De Herramientas, Materiales Y Equipos Requeridos Para La Medición
                tbody.bg-naranja-claro
                  tr
                    td 
                      ul.lista-ul.mt-3
                        li 
                          i.fas.fa-angle-right
                          | Formatos de información.      
                        li 
                          i.fas.fa-angle-right
                          | Baldes.
                        li 
                          i.fas.fa-angle-right
                          | Bolsas de plástico limpias o recipiente definido por el laboratorio que va a realizar el análisis.
                        li 
                          i.fas.fa-angle-right
                          | Recipientes de vidrio para indicadores biológicos.
                        li 
                          i.fas.fa-angle-right
                          | Sacabocados, barreno, pala o garlancha limpios.
                        li 
                          i.fas.fa-angle-right
                          | Machete limpio.
                        li 
                          i.fas.fa-angle-right
                          | Mapa de agroecosistema objeto de la medición.
    .row.mt-5
      .col-10.col-lg-8.offset-1.offset-lg-2
        .cajon.color-secundario.p-4.mb-4.bg-amarillo-claro
          .row
            .col-3.d-none.d-lg-flex
              figure
                img(src='@/assets/template/tema-1-22.svg', alt='Texto que describa la imagen')
            .col-12.col-lg-9.align-self-center
              p El método de muestreo para analizar las variables de calidad del agua varía en función de la fuente de agua, del análisis que se requiere, de la profundidad de la fuente y de los equipos disponibles. 
    .titulo-segundo.mt-5.color-acento-contenido
      #t_1_1.h2 1.1  Calidad del agua
    p.mt-5 La #[strong Calidad del agua] es el resultado de comparar las características físicas, químicas y microbiológicas encontradas en el agua con el contenido de las normas que regulan la materia (IDEAM, 2018).
    p.mt-3 Las variables o parámetros de calidad de agua recomendados para realizar el monitoreo se describen en el siguiente cuadro:
    .h4.mt-4
      .col-10.col-lg-8.offset-1.offset-lg-2
    .row.mb-5
      .col-6.col-lg-3.mb-4.mb-lg-0.offset-lg-1
        .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/template/tema-1-23.png')})`}")
            .tarjeta-flip__contenido.p-4.align-self-center
              .h4 Variables <em>in situ</em>
              p.mt-3 Temperatura (Cº), conductividad eléctrica, oxigeno disuelto, porcentaje de saturación de oxigeno, pH.

      .col-6.col-lg-3.mb-4.mb-lg-0
        .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/template/tema-1-24.png')})`}")
            .tarjeta-flip__contenido.p-4
              .h4 Físicos
              p.mt-3 Sólidos suspendidos totales, sólidos disueltos totales, turbidez.

      .col-6.col-lg-3.mb-4.mb-sm-0.offset-lg-0
        .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/template/tema-1-25.png')})`}")
            .tarjeta-flip__contenido.p-4
              .h4 Nutrientes
              p.mt-3 Nitratos, nitritos, nitrógeno amoniacal, nitrógeno total, nitrógeno total kjeldahl (NTK) fósforo total.
      .col-6.col-lg-3.mb-4.mb-sm-0.mt-lg-4.ms-auto
        .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/template/tema-1-26.png')})`}")
            .tarjeta-flip__contenido.p-4
              .h4 Materia organica
              p.mt-3 Demanda bioquímica de oxigeno DBO, Demanda química de oxigeno DQO.
      .col-6.col-lg-3.mb-4.mb-sm-0.offset-3.offset-lg-0.mt-4.mt-lg-4.me-auto
        .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/template/tema-1-27.png')})`}")
            .tarjeta-flip__contenido.p-4
              .h4.mb-0 Microbiológicos
              p.mt-3.pb-3.mb-5 Coliformes fecales, Coliformes totales.
      figcaption.mt-3 Referencia (IDEAM, 2018)
    p.mt-5 En el siguiente cuadro se describen algunas variables comunes en la medición de la calidad del agua:
    .tabla-a.color-acento-contenido.mt-5 
      table
        thead.text-white.bg-naranja
          tr
            th.fs-5.w-20 Clasificación
            th.fs-5.w-31 Variable de calidad del agua
            th.fs-5 Definición
        tbody.bg-naranja-claro
          tr
            td(rowspan='4').bg-naranja-oscuro.text-center.fw-bold Variables <em>in situ</em>
            td.text-center pH
            td.p-3 Número de iones libres de hidrógeno (H+) en una sustancia. El pH sirve como un indicador que compara algunos de los iones más solubles en agua. El pH aceptado para agua de uso agrícola está entre 4,5 y 9,0.
          tr
            td.text-center Conductividad eléctrica (CE)
            td.p-3 El grado de salinidad se mide por su conductividad eléctrica.
          tr
            td.text-center Oxígeno disuelto (ppm)
            td.p-3 Cantidad de oxígeno disuelto en el agua y equivale a miligramos por litro (mg/L). Si tenemos una concentración de 5 a 6 ppm, hay oxígeno suficiente para la mayor parte de las especies. Menor de 3 ppm, es dañino para el ecosistema. A partir de este punto hacia abajo, el ecosistema experimenta hipoxia. Menor de 2 ppm, es fatal para la mayor parte de las especies (anoxia).
          tr
            td.text-center Porcentaje de saturación de oxígeno
            td.p-3 Oxígeno disuelto en mg/L, dividido por el 100% del valor de oxígeno disuelto para el agua (a la misma temperatura y presión del aire).
          tr
            td(rowspan='3').bg-naranja-oscuro.text-center.fw-bold Físicos
            td.text-center Sólidos suspendidos totales
            td.p-3 Suma de los valores del Total de Sólidos en Suspensión (SST) por punto de muestreo, dividido por el número de puntos de muestreo. Los Sólidos Suspendidos Totales (SST) hacen referencia al material particulado que se mantiene en suspensión en las corrientes de agua superficial y/o residual.
          tr
            td.text-center Sólidos disueltos totales
            td.px-3.py-4 Suma de todos los minerales, metales, y sales disueltos en el agua
          tr
            td.text-center Turbidez 
            td.p-3 La turbidez es una medida del grado en el cual el agua pierde su transparencia debido a la presencia de partículas en suspensión. 
          tr
            td(rowspan='2').bg-naranja-oscuro.text-center.fw-bold Materia orgánica
            td.text-center Demanda Bioquímica de Oxígeno (DBO)
            td.p-3 Cantidad de oxígeno requerido para oxidación de la materia orgánica biodegradable presente en la muestra de agua, como resultado de la acción de oxidación aerobia.
          tr
            td.text-center Demanda Química de Oxígeno (DQO)
            td.p-3 Cantidad de oxígeno requerido para oxidar la materia orgánica en una muestra de agua, bajo condiciones específicas de agente oxidante, temperatura y tiempo.
          tr
            td(rowspan='3').bg-naranja-oscuro.text-center.fw-bold Microbiológicos
            td.text-center Coliformes totales
            td.p-3 Bacterias gramnegativas, no esporoformadoras, oxidasa negativa, con capacidad de crecimiento aeróbico y facultativamente anaeróbico en presencia de sales biliares, que, a temperatura especificada de 35ºC +/- 2ºC, causan fermentación de lactosa con producción de gas. Poseen la enzima B-galactosidasa. La presencia de valores por encima del número máximo permitido  indica contaminación microbiológica del agua. 
      figcaption.mt-3 Referencia Nota. A partir de IDEAM (2018). 
    p.mt-4 Según el alcance del estudio de medición de variables ambientales y de las características del agroecosistema, se pueden adicionar o suprimir parámetros para la medición de la calidad del agua. 
    separador.mt-3

    .titulo-segundo.mt-4.color-acento-contenido
      #t_1_2.h2   1.2  Calidad del suelo
    figure.mt-4
      img(src='@/assets/template/tema-1-28.png', alt='Texto que describa la imagen')
    p.mt-4 La calidad del suelo significa mucho más que la fertilidad. Esta última sólo aborda la disponibilidad de nutrientes para las plantas; sin embargo, un suelo de buena calidad produce adecuados rendimientos, cultivos sanos con menos impacto negativo sobre el agroecosistema. Esto conduce a que el suelo se autorregule, sea resiliente ante eventos adversos (como el clima y la acción del hombre).
    p.mt-3 En ese sentido, se podría sintetizar la definición de #[strong calidad del suelo ] como la capacidad del suelo para funcionar dentro de los límites de un ecosistema natural o manejado, sostener la productividad de las plantas y los animales, mantener o mejorar la calidad del aire y del agua, y sostener la salud humana y el hábitat (García et al., 2012).
    p.mt-4 Para seleccionar los indicadores que hacen parte de las variables de calidad del suelo, se debe cumplir con algunas condiciones (Masera et al., 2000):
    .row.mt-4
      .col-12.col-lg-8
        .cajon.color-secundario.p-4.mb-4.bg-amarillo-claro
          .row
            ul.lista-ul.mt-3
              li 
                i.fas.fa-angle-right
                | Ser integradores.
              li 
                i.fas.fa-angle-right
                | Ser fáciles de medir, basados en información objetiva y fácil de reconocer.
              li 
                i.fas.fa-angle-right
                | Ser adecuados al nivel de análisis y al sistema estudiado.
              li 
                i.fas.fa-angle-right
                | Ser preferentemente aplicables a un rango de ecosistemas y condiciones.
              li 
                i.fas.fa-angle-right
                | Reflejar el atributo de sostenibilidad que se quiere evaluar.
              li 
                i.fas.fa-angle-right
                | Ser fáciles de entender.
              li 
                i.fas.fa-angle-right
                | Permitir cambios y diferencias entre los sistemas.
              li 
                i.fas.fa-angle-right
                | Centrarse en aspectos prácticos y claros.
      .col-4.d-none.d-lg-flex.align-self-center
        figure.px-2
          img(src='@/assets/template/tema-1-29.svg', alt='Texto que describa la imagen').floating
    .row.mt-5
      .col-10.offset-1
        .titulo-sexto.color-acento-contenido.mb-2
          .h4 Tabla 1
        p.italic Indicadores de calidad de suelo 
    .row.mt-4
      .col-8.col-lg-6.offset-2.offset-lg-3
        .tabla-a.color-acento-contenido.mt-5 
          table
            thead.text-white.bg-naranja
              tr
                th.fs-6.w-40 PROPIEDAD 
                th.fs-6 RELACIÓN CON LA CONDICIÓN Y FUNCIÓN DEL SUELO 
            tbody.bg-naranja-claro
              tr
                td.bg-blanco.fw-bold.fs-6.px-4 Físicas
                td 
              tr
                td.bg-naranja-oscuro.fw-bold.fs-6.px-4 Textura
                td.px-4.py-2 Retención y transporte de agua y compuestos químicos, erosión del suelo.
              tr
                td.bg-naranja-oscuro.fw-bold.fs-6.px-4 Profundidad del suelo
                td.px-4.py-3 Estima la productividad potencial y la erosión.
              tr
                td.bg-naranja-oscuro.fw-bold.fs-6.px-4 Infiltración y densidad aparente
                td.px-4.py-3 Potencial de lavado, productividad y erosividad.
              tr
                td.bg-naranja-oscuro.fw-bold.fs-6.px-4 Capacidad de retención de agua
                td.px-4.py-2 Relación con la retención de agua, transporte y erosividad; humedad aprovechable, textura y materia orgánica.
              tr
                td.bg-blanco.fw-bold.fs-6.px-4 Químicas
                td 
              tr
                td.bg-naranja-oscuro.fw-bold.fs-6.px-4 Materia orgánica (N y C total)
                td.px-4.py-3 Define la fertilidad del suelo, estabilidad, erosión.
              tr
                td.bg-naranja-oscuro.fw-bold.fs-6.px-4 pH
                td.px-4.py-3 Define la actividad química y biológica.
              tr
                td.bg-naranja-oscuro.fw-bold.fs-6.px-4 Conductividad eléctrica
                td.px-4.py-3 Define la actividad vegetal y microbiana
              tr
                td.bg-naranja-oscuro.fw-bold.fs-6.px-4 P. N y K extractables
                td.px-4.py-3 Nutrientes disponibles para la planta, pérdida potencial de N; productividad e indicadores de la calidad ambiental.
              tr
                td.bg-blanco.fw-bold.fs-6.px-4 Biológicas
                td 
              tr
                td.bg-naranja-oscuro.fw-bold.fs-6.px-4 Biomasa microbiana (C y N)
                td.px-4.py-3 Potencial microbiano catalítico y depósito para el C y N, cambios tempranos de los efectos del manejo sobre la materia orgánica.
              tr
                td.bg-naranja-oscuro.fw-bold.fs-6.px-4 Respiración, humedad y temperatura
                td.px-4.py-3 Mide la actividad microbiana, estima la actividad de la biomasa.
              tr
                td.bg-naranja-oscuro.fw-bold.fs-6.px-4 N pot. mineralizable
                td.px-4.py-3 Productividad del suelo y suministro potencial de N.
          figcaption.mt-3 Referencia Nota.Nota. Tomada de Jiménez y González-Quiñones (2006).

    .h4.mt-5 Toma de la muestra
    figure.mt-4
      img(src='@/assets/template/tema-1-30.png', alt='Texto que describa la imagen')
    p.mt-5 Es necesario considerar qué variable o parámetro se va a medir para realizar la extracción de la muestra:
    .row.mt-5
      .col-10.offset-1
        LineaTiempoD.color-primario
          .row(numero="1" titulo="Para un análisis químico: ")
            .col-4.offset-4.offset-lg-0
              figure
                img(src='@/assets/template/tema-1-31.png', alt='Texto que describa la imagen')
            .col-12.col-lg-8
              p Eliminar la cobertura vegetal, para evitar la contaminación de la muestra, y mezclar las submuestras. 
          .row(numero="2" titulo="Para una caracterización física: ")
            .col-4.offset-4.offset-lg-0
              figure
                img(src='@/assets/template/tema-1-32.png', alt='Texto que describa la imagen')
            .col-12.col-lg-8
              p Se debe tomar manteniendo las condiciones físicas que tenía estando en el campo, y tomarla cuando el suelo esté en un punto medio de humedad.  La herramienta más recomendada es el barreno tipo Uhland, con cilindros de aluminio.
              p.mt-3 Los resultados de los #[strong indicadores físico-químicos] indican cómo es la relación entre el suelo y la planta, la capacidad de resiliencia y la disponibilidad de nutrientes y microorganismos.
          .row(numero="3" titulo="Para caracterización biológica: ")
            .col-4.offset-4.offset-lg-0
              figure
                img(src='@/assets/template/tema-1-33.png', alt='Texto que describa la imagen')
            .col-12.col-lg-8
              p El muestreo se puede realizar al azar, tomando 10 submuestras de 100 g de suelo, aproximadamente; las submuestras se mezclarán, formando una sola muestra de 1 kg. Cada muestra se empacará en una bolsa plástica estéril y se mantendrá refrigerada dentro de un termo de icopor con hielo (máximo 24 horas), para luego ser transportada al laboratorio y ser procesada; se recomienda acondicionar las muestras desterronando y eliminando los materiales distintos a las partículas de suelo.
    p.mt-5 Los resultados de los indicadores de caracterización biológica del suelo indican algunas funciones en el suelo (Acevedo, 2004):
    .row.mt-4
      .col-4.d-none.d-lg-flex
        figure
          img(src='@/assets/template/tema-1-34.svg', alt='Texto que describa la imagen')
      .col-12.col-lg-8
        ul.lista-ul.mt-3
          li 
            i.fas.fa-angle-right
            | Descomposición de la materia orgánica y mineralización.
          li 
            i.fas.fa-angle-right
            | Captura de nitrógeno disuelto en el aire para ponerlo a disposición de las plantas.
          li 
            i.fas.fa-angle-right
            | Solubilización de la materia orgánica en minerales asimilables y disponibles para las plantas y otros seres vivos del suelo.
          li 
            i.fas.fa-angle-right
            | Mejorar la fertilidad del suelo, al producir proteínas, enzimas, vitaminas, aminoácidos, fitohormonas, entre otras.
          li 
            i.fas.fa-angle-right
            | Incorporar oxígeno al suelo.
          li 
            i.fas.fa-angle-right
            | Reducción de la población de parásitos por la producción de sustancias repelentes alelopáticas o tóxicas, depredación e invasión del espacio físico.
          li 
            i.fas.fa-angle-right
            | Dar fuerza mecánica a la estructura del suelo. 
          li 
            i.fas.fa-angle-right
            | Desintoxicar el suelo de residuos tóxicos; por ejemplo, los microorganismos son responsables de concentrar materiales radiactivos como el uranio. 


</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
    datosSlyder1: [
      {
        titulo:
          'Determinar el tipo de muestreo  en la variable Calidad del agua',
        texto:
          'Se deben analizar, en lo posible, las fuentes superficiales de agua disponibles, como ríos, nacimientos, lagos, lagunas costeras, que son afectadas por la actividad productiva del agroecosistema, y se aplica el tipo de muestreo según las características de la zona de estudio y de las fuentes disponibles. ',
        imagen: require('@/assets/template/tema-1-4.png'),
      },
      {
        titulo: 'Los puntos de muestreo de agua según la fuente',
        texto:
          '<ul class="lista-ul mt-3"><li><i class="fas fa-angle-right"></i><p>Fuente superficial cerca al nacimiento, acuífero o manantial.</p></li><li><i class="fas fa-angle-right"></i><p>Fuente superficial aguas arriba del agroecosistema.</p></li><li><i class="fas fa-angle-right"></i><p>Fuente superficial aguas abajo del agroecosistema.</p></li><li><i class="fas fa-angle-right"></i><p>Sobre los principales tributarios antes de la desembocadura a la fuente superficial.</p></li><li><i class="fas fa-angle-right"></i><p>Fuente superficial aguas arriba de la desembocadura al mar.</p></li><li><i class="fas fa-angle-right"></i><p>Vertimientos del agroecosistema.</p></li></ul>',
        imagen: require('@/assets/template/tema-1-5.png'),
      },
      {
        titulo: 'Escoger el tipo de muestras',
        texto:
          '<ul class="lista-ul mt-3"><li><i class="fas fa-angle-right"></i><p><span class="fw-bold">Puntual:</span> muestra representativa en la que el tiempo y lugar (espacio) no influyen significativamente en el resultado de la muestra.</p></li> <li><i class="fas fa-angle-right"></i><p><span class="fw-bold">Compuesta: </span> está compuesta por varias muestras puntuales, pero en intervalos y periodos determinados.</p></li> <li><i class="fas fa-angle-right"></i><p><span class="fw-bold">Integrada:</span> es la mezcla de varias muestras tomadas en diferentes puntos, pero simultáneamente, para conocer un resultado promedio.</p></li>',
        imagen: require('@/assets/template/tema-1-6.png'),
      },
      {
        titulo: 'Definir la frecuencia de monitoreo o muestreo',
        texto:
          'En el caso del agua, también se deben considerar los objetivos del estudio de variables ambientales del agroecosistema; sin embargo, lo recomendado es realizar al menos cuatro (4) muestreos al año, en los que al menos se realice uno (1) en época de lluvia y uno (1) en época seca, y los otros dos (2) en épocas de transición. Para otros parámetros, como plaguicidas y metales pesados, se proponen dos (2) muestreos al año, en los puntos definidos para tal fin (IDEAM, 2018).',
        imagen: require('@/assets/template/tema-1-7.png'),
      },
      {
        titulo: 'Definir el protocolo de monitoreo',
        texto:
          'La definición del protocolo de monitoreo de agua se realiza en función del estudio de medición de variables ambientales y del objetivo que se haya establecido. <br> <br> La definición puede ser escogiendo un protocolo ya establecido, como el de la autoridad ambiental de la jurisdicción donde se encuentra el agroecosistema, o el protocolo definido por el IDEAM (2018), o puede ser construido y definido con los actores del agroecosistema.',
        imagen: require('@/assets/template/tema-1-8.png'),
      },
      {
        titulo:
          'Elaborar la lista de chequeo de herramientas, materiales y equipos requeridos para la medición',
        texto:
          'Es importante contar con todos los materiales y equipos requeridos en el momento de la medición, para asegurar que la toma de muestras se realice siguiendo el protocolo de muestreo correctamente.',
        imagen: require('@/assets/template/tema-1-9.png'),
      },
      {
        titulo: 'Materiales y equipos para la toma de muestras de agua',
        texto:
          'En el cuadro, se encuentran los materiales y equipos más comunes a seleccionar según el estudio a realizar: <br> <br> Se sugiere incluir en la lista de chequeo los elementos de protección y seguridad que apliquen según la normatividad de seguridad y salud en el trabajo (SST), como las botas de seguridad, chaleco, guantes, máscara, tapabocas, entre otros.',
        imagen: require('@/assets/template/tema-1-10.png'),
      },
    ],
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
