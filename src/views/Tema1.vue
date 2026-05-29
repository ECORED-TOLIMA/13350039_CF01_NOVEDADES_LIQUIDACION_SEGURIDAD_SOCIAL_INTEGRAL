<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Contratos de trabajo
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-4.col-8.mb-4.mb-lg-0
        figure
          img(src="@/assets/curso/temas/tema1/img1.png", alt="alt")
      .col-lg-8
        p El contrato es el instrumento jurídico mediante el cual dos o más partes establecen obligaciones y derechos recíprocos en el marco de una relación económica o laboral. En el contexto colombiano, la existencia del contrato y su correcta tipificación determinan el régimen de seguridad social aplicable a la relación entre quien presta un servicio o ejecuta un trabajo y quien lo recibe, definiendo con ello las responsabilidades frente a la afiliación, la cotización y el reporte de novedades al sistema. La identificación precisa del tipo de contrato no es un mero formalismo jurídico, sino el fundamento sobre el cual se construye toda la gestión de la nómina y la seguridad social en cualquier organización.
        p.mb-0 En el ámbito laboral colombiano, se reconocen dos tipos de vínculos que generan efectos diferentes frente a la seguridad social:
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .tarjeta--container.row
          .col-md.tarjeta.color-primario.p-5
            .row.justify-content-center.mb-4
              .col-5
                figure
                  img(src='@/assets/curso/temas/tema1/img2.svg', alt='Texto que describa la imagen')
            h5.text-center Contrato de trabajo
            p Vínculo regulado por el Código Sustantivo del Trabajo (CST), en el que existe prestación personal del servicio, subordinación y remuneración.
            p.mb-0 #[b Ejemplo:] un trabajador cumple horario, recibe órdenes de un jefe y devenga salario mensual. 

          .col-md.tarjeta.color-secundario.p-5
            .row.justify-content-center.mb-4
              .col-5
                figure
                  img(src='@/assets/curso/temas/tema1/img3.svg', alt='Texto que describa la imagen')
            h5.text-center Contrato de prestación de servicios
            p  Acuerdo civil o comercial en el que una persona desarrolla una actividad con autonomía técnica y administrativa, sin subordinación laboral.
            p.mb-0 #[b Ejemplo:] una profesional entrega un informe contratado, organiza su tiempo y recibe honorarios.

    p.mb-4 Esta diferencia permite comprender por qué cada vínculo contractual genera obligaciones distintas en la afiliación, aportes y reporte de novedades.
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        .bgf2-1.p-4
          .row.justify-content-center.align-items-center
            .col-lg-1.d-none.d-lg-block
              figure
                img(src='@/assets/curso/temas/tema1/img4.svg', style="width:70px", alt='Texto que describa la imagen').mb-2
            .col-lg-12
              p.text-center.mb-0 La diferencia entre ambos contratos no está solo en el nombre, sino en la forma como se ejecuta la actividad. Si existe subordinación, pueden generarse obligaciones laborales y de seguridad social.
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-9.order-2.order-lg-1
        p La jurisprudencia de la Corte Suprema de Justicia y del Consejo de Estado ha delimitado con precisión los criterios que diferencian ambos tipos de contrato, estableciendo el principio del contrato realidad como mecanismo para prevenir el uso abusivo del contrato civil como forma de eludir las obligaciones laborales. Este principio, consagrado en el artículo 23 del CST, dispone que si en la práctica concurren los elementos del contrato de trabajo (prestación personal del servicio, subordinación y remuneración), la relación se entiende laboral, independientemente de la denominación que las partes hayan dado al acuerdo que las vincula.
        .p-4.bgf1
          .row.justify-content-center.align-items-center
            .col-lg-auto.d-none.d-lg-block
              figure
                img(src='@/assets/curso/temas/tema1/img5.svg', style="width:70px", alt='Texto que describa la imagen').mb-2
            .col-lg-10
              p.mb-0 Los tres elementos que configuran el contrato de trabajo son la base sobre la cual la jurisprudencia y la Unidad de Gestión Pensional y Parafiscal (UGPP) determinan si una relación es laboral en la práctica. La comprensión precisa de cada uno resulta determinante para identificar el tipo de vínculo contractual y las obligaciones que de él se derivan frente al sistema de seguridad social:
      .col-lg-3.col-8.mb-4.mb-lg-0.order-1.order-lg-2
        figure
          img(src="@/assets/curso/temas/tema1/img6.png", alt="alt")   
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul").mb-4
          .row(titulo="Prestación personal del servicio")
            .col-lg-7.order-2.order-lg-1
              p Obligación del trabajador de ejecutar la labor contratada de manera directa e intransferible, sin posibilidad de ceder o delegar su cumplimiento en un tercero. Su presencia es condición necesaria para configurar el contrato de trabajo.
            .col-lg-5.col-12.mb-4.mb-lg-0.order-1.order-lg-2
              figure
                img(src="@/assets/curso/temas/tema1/img7.png", alt="alt")  
          .row(titulo="Subordinación o dependencia")
            .col-lg-7.order-2.order-lg-1
              p Facultad del empleador de impartir instrucciones sobre el modo, el tiempo y el lugar de ejecución del trabajo, así como de ejercer control disciplinario sobre el trabajador. Es el elemento que con mayor frecuencia resulta determinante para establecer la naturaleza laboral de una relación.
            .col-lg-5.col-12.mb-4.mb-lg-0.order-1.order-lg-2
              figure
                img(src="@/assets/curso/temas/tema1/img8.png", alt="alt")  
          .row(titulo="Remuneración o salario")
            .col-lg-7.order-2.order-lg-1
              p Contraprestación económica que el empleador paga al trabajador como retribución directa del servicio prestado, con independencia de la denominación que las partes le den al pago. Constituye la base para el cálculo del Ingreso Base de Cotización (IBC) y de las prestaciones sociales.
            .col-lg-5.col-12.mb-4.mb-lg-0.order-1.order-lg-2
              figure
                img(src="@/assets/curso/temas/tema1/img9.png", alt="alt")  
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-3.col-8.mb-4.mb-lg-0
        figure
          img(src="@/assets/curso/temas/tema1/img10.svg", alt="alt")  
      .col-lg-9
        p El conocimiento de estos tres elementos y del principio del contrato realidad permite al profesional de nómina identificar con certeza el tipo de vínculo contractual, aplicar correctamente las obligaciones de afiliación y cotización, y prevenir las consecuencias jurídicas y económicas que genera una clasificación incorrecta del contrato.
        p.mb-0 Cuando no se identifica correctamente el tipo de vínculo contractual, pueden generarse efectos que impactan la gestión de nómina y el cumplimiento de las obligaciones frente al Sistema de Seguridad Social Integral. A continuación, se presentan algunas de las principales consecuencias que deben prevenirse en la práctica laboral:
    SlyderF(columnas="col-lg-6 col-xl-4").mb-4
      .tarjeta.p-4.BG04
        .row.justify-content-center.mb-4
          .col-6
            img(src='@/assets/curso/temas/tema1/img11.svg' alt='AvatarTop')
        h5.text-center Liquidaciones erróneas de aportes
        p.text-center Se presentan cuando los valores de salud, pensión o riesgos laborales se calculan de forma incorrecta.
      .tarjeta.p-4.BG04
        .row.justify-content-center.mb-4
          .col-6
            img(src='@/assets/curso/temas/tema1/img12.svg' alt='AvatarTop')
        h5.text-center Omisión de prestaciones sociales
        p.text-center Ocurre cuando no se reconocen derechos como cesantías, intereses, prima o vacaciones, pese a existir relación laboral.
      .tarjeta.p-4.BG04
        .row.justify-content-center.mb-4
          .col-6
            img(src='@/assets/curso/temas/tema1/img13.svg' alt='AvatarTop')
        h5.text-center Investigaciones de la UGPP
        p.text-center Pueden iniciarse cuando se detectan inconsistencias en la afiliación, cotización o pago de aportes al sistema.
      .tarjeta.p-4.BG04
        .row.justify-content-center.mb-4
          .col-6
            img(src='@/assets/curso/temas/tema1/img14.svg' alt='AvatarTop')
        h5.text-center Demandas laborales
        p.text-center Surgen cuando el trabajador reclama judicialmente el reconocimiento de una relación laboral y sus derechos derivados.
      .tarjeta.p-4.BG04
        .row.justify-content-center.mb-4
          .col-6
            img(src='@/assets/curso/temas/tema1/img15.svg' alt='AvatarTop')
        h5.text-center Responsabilidades legales y económicas
        p.text-center Incluyen sanciones, pagos retroactivos e intereses por incumplimientos frente al sistema.
    p.mb-4 Estas situaciones evidencian la importancia de clasificar correctamente la relación contractual desde el inicio, ya que de ello dependen la afiliación, la cotización y el reporte adecuado de las novedades. Con este marco, la siguiente tabla permite comparar las diferencias esenciales entre el contrato laboral y el contrato de prestación de servicios.
    .row.justify-content-center.align-items-center.mb-3
      .col-lg-10
        .titulo-sexto.color-acento-contenido
          h5 Tabla 1.
          span Diferencias esenciales entre contrato laboral y contrato de prestación de servicios
    .row.justify-content-center.align-items-center
      .col-lg-10
        .tabla-a.color-acento-contenido 
          .tabla-a   
            table
              thead
                tr
                  th Característica
                  th Descripción (Contrato laboral vs. Prestación de servicios)
              tbody
                tr(style="background-color: #FBF7F1;")
                  th Naturaleza jurídica
                  td Laboral: regido por el CST (Decreto 2663/1950). 
                    | Prestación de servicios: regido por el Código Civil y Comercial.
                tr
                  th Subordinación
                  td Laboral: el empleador dirige, supervisa y controla al trabajador. 
                    | Prestación de servicios: el contratista actúa con plena autonomía técnica y directiva.
                tr(style="background-color: #FBF7F1;")
                  th Remuneración
                  td Laboral: salario (mínimo 1 SMLMV). 
                    | Prestación de servicios: honorarios libremente pactados entre las partes.
                tr
                  th Prestaciones sociales
                  td Laboral: prima, cesantías, intereses sobre cesantías, vacaciones.
                   | Prestación de servicios: no genera prestaciones sociales.
                tr(style="background-color: #FBF7F1;")
                  th Distribución de aportes SS
                  td Laboral: empleador asume 8.5% salud y 12% pensión; trabajador asume 4% salud y 4% pensión.
                    | Prestación de servicios: el contratista asume el 100%.
                tr
                  th Base de cotización
                  td Laboral: sobre el salario devengado (mín. 1 SMLMV, máx. 25 SMLMV). 
                    | Prestación de servicios: sobre el 40% del valor mensualizado del contrato.
                tr(style="background-color: #FBF7F1;")
                  th ARL
                  td Laboral: la afiliación y el 100% del aporte son obligación del empleador. 
                    | Prestación de servicios: según actividad; puede ser del contratante o del contratista.
                tr
                  th Terminación anticipada
                  td Laboral: puede generar indemnización según el artículo 64 del CST.
                    | Prestación de servicios: se pagan honorarios causados más perjuicios demostrables.
    Separador
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 1.1 Concepto y elementos esenciales
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-3.col-8.mb-4.mb-lg-0
        figure
          img(src="@/assets/curso/temas/tema1/img16.png", alt="alt") 
      .col-lg-9
        p El artículo 22 del Código Sustantivo del Trabajo define el contrato de trabajo como aquel por el cual una persona natural se obliga a prestar un servicio personal a otra persona natural o jurídica, bajo la continuada dependencia o subordinación de la segunda y mediante remuneración. Esta definición legal condensa los tres elementos que la doctrina y la jurisprudencia han identificado como condición sine qua non, es decir, como requisitos indispensables sin los cuales no puede reconocerse la existencia del contrato laboral:
        .row.justify-content-center.align-items-center
          .col-lg-4
            .p-4.bgf3
              .row.justify-content-center.align-items-center
                .col-lg-auto.d-none.d-lg-block
                  figure
                    img(src='@/assets/curso/temas/tema1/img17.svg', style="width:70px", alt='Texto que describa la imagen').mb-2
                .col-lg-12
                  p.mb-0 Prestación personal del servicio
          .col-lg-4
            .p-4.bgf3
              .row.justify-content-center.align-items-center
                .col-lg-auto.d-none.d-lg-block
                  figure
                    img(src='@/assets/curso/temas/tema1/img18.svg', style="width:70px", alt='Texto que describa la imagen').mb-2
                .col-lg-12
                  p.mb-0 Subordinación o dependen
          .col-lg-4
            .p-4.bgf3
              .row.justify-content-center.align-items-center
                .col-lg-auto.d-none.d-lg-block
                  figure
                    img(src='@/assets/curso/temas/tema1/img19.svg', style="width:70px", alt='Texto que describa la imagen').mb-2
                .col-lg-12
                  p.mb-0 Remuneración o salario
    p.mb-4 La presencia simultánea de estos tres elementos, con independencia de la denominación dada al acuerdo, origina un contrato de trabajo con todos los derechos y obligaciones que la ley le atribuye.
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        .p-4.bgf4
          .row.justify-content-center.align-items-center
            .col-lg-7.order-2.order-lg-1
              p.mb-0 La prestación personal del servicio implica que el trabajador debe ejecutar la labor contratada de manera directa e intransferible, sin posibilidad de delegar su cumplimiento a un tercero. Este elemento distingue el contrato laboral de otros acuerdos en los que una empresa o un grupo de personas puede sustituirse en la ejecución de la tarea. En la práctica, cuando una persona puede ser reemplazada libremente por otra sin que el empleador lo objete, ello puede señalar la ausencia de este elemento y, por tanto, la inexistencia del contrato de trabajo. Sin embargo, el hecho de que el trabajador ocasionalmente pida a un compañero que lo supla no destruye este elemento, pues lo que importa es si existe la facultad jurídica de la sustitución permanente.
            .col-lg-3.col-8.mb-4.mb-lg-0.order-1.order-lg-2
              figure
                img(src='@/assets/curso/temas/tema1/img20.svg', alt='Texto que describa la imagen').mb-2
    p La subordinación es el elemento más definitorio del contrato laboral y el que más controversias genera en la práctica. Se manifiesta en la facultad del empleador de impartir instrucciones sobre el modo, el tiempo y el lugar de ejecución del trabajo; fijar horarios; determinar el lugar de prestación; exigir el cumplimiento de reglamentos internos; y ejercer control disciplinario sobre el trabajador. 
    p.mb-4 Para reconocer si existe una relación laboral, es necesario observar cómo se desarrolla la actividad en la práctica. Los siguientes elementos permiten identificar si el vínculo corresponde a un contrato de trabajo:
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .tarjeta--container.row
          .col-md.tarjeta.color-primario.p-5
            .row.justify-content-center.mb-4
              .col-5
                figure
                  img(src='@/assets/curso/temas/tema1/img21.svg', alt='Texto que describa la imagen')
            h5.text-center Prestación personal del servicio
            p La actividad debe ser realizada directamente por el trabajador, sin delegarla libremente en otra persona.
            p.mb-0 #[b Ejemplo:] una auxiliar de nómina debe cumplir personalmente sus funciones y no puede enviar a un familiar para reemplazarla.

          .col-md.tarjeta.color-secundario.p-5
            .row.justify-content-center.mb-4
              .col-5
                figure
                  img(src='@/assets/curso/temas/tema1/img22.svg', alt='Texto que describa la imagen')
            h5.text-center Subordinación o dependencia
            p El empleador tiene la facultad de impartir instrucciones, fijar horarios, asignar tareas y ejercer control sobre la forma de ejecutar el trabajo.
            p.mb-0 #[b Ejemplo:] un trabajador que cumple un horario recibe órdenes del jefe y debe reportar avances que evidencian subordinación laboral.

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-3.col-8.mb-4.mb-lg-0
        figure
          img(src="@/assets/curso/temas/tema1/img23.png", alt="alt")               
      .col-lg-9
        p Estos elementos permiten diferenciar una relación laboral de otros vínculos contractuales. Cuando se presentan junto con la remuneración, se configura el contrato de trabajo y surgen obligaciones frente a la afiliación, la cotización y el reporte de novedades al sistema de seguridad social.
        p La remuneración o salario es la contraprestación económica que recibe el trabajador por el servicio prestado. Conforme al artículo 127 del Código Sustantivo del Trabajo (CST), constituyen salario los pagos que retribuyen directamente la labor realizada, entre ellos:
        .p-4.bgf1
          ul.lista-ul
            li
              i.fas.fa-user(style="color: #FFB758;")
              p.mb-0 El sueldo básico que recibe el trabajador como pago principal por su labor. 
            li
              i.fas.fa-user(style="color: #FFB758;")
              p.mb-0 Las comisiones reconocidas por ventas, metas o resultados alcanzados. 
            li
              i.fas.fa-user(style="color: #FFB758;")
              p.mb-0 Las primas habituales que se pagan de manera periódica como parte de la remuneración. 
            li
              i.fas.fa-user(style="color: #FFB758;")
              p.mb-0 Las horas extras generadas por el trabajo realizado fuera de la jornada ordinaria. 
            li
              i.fas.fa-user(style="color: #FFB758;")
              p.mb-0 Los recargos nocturnos causados por labores desarrolladas en horario nocturno. 
            li
              i.fas.fa-user(style="color: #FFB758;")
              p.mb-0 Los pagos por trabajo dominical o festivo, cuando remuneran directamente el servicio. 
            li
              i.fas.fa-user(style="color: #FFB758;")
              p.mb-0 Las propinas recibidas habitualmente por el trabajador como parte de su ingreso laboral. 
            li
              i.fas.fa-user(style="color: #FFB758;")
              p.mb-0 Cualquier otro pago que compense directamente el servicio prestado. 
    p La correcta identificación de estos conceptos permite calcular adecuadamente el Ingreso Base de Cotización (IBC) y las prestaciones sociales. Cuando el salario se declara por debajo del valor real, pueden generarse aportes insuficientes al sistema de seguridad social e investigaciones por parte de la UGPP.
    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img24.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Es fundamental comprender que el artículo 23 del CST establece la presunción de que, si concurren los tres elementos descritos, el contrato es de trabajo y no deja de serlo por razón del nombre que le den las partes ni de otras condiciones o modalidades que se le agreguen. Esta disposición es el fundamento del principio del contrato realidad y constituye la herramienta jurídica más poderosa para proteger los derechos de los trabajadores que han sido vinculados bajo figuras civiles o comerciales que encubren verdaderas relaciones laborales. El profesional de nómina que identifica correctamente estos elementos contribuye decisivamente a la protección de los derechos laborales y a la prevención de contingencias jurídicas en la organización.
    p Adicionalmente, el período de prueba merece una mención especial dentro del contrato de trabajo. Según el artículo 76 del Código Sustantivo del Trabajo (CST), este período no puede exceder de dos meses y permite que cualquiera de las partes termine el contrato sin previo aviso ni indemnización. Sin embargo, esta condición no suspende los derechos del trabajador frente al Sistema de Seguridad Social Integral.
    p Durante el período de prueba, se deben garantizar las siguientes obligaciones:
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-4
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema1/img25.svg' alt='AvatarTop')
          .tarjeta.bgfI02.w-100
            .p-4
              p.text-center #[b Afiliación desde el primer día]
              p.text-center El trabajador debe estar vinculado al sistema de salud, pensión y riesgos laborales desde el inicio de la relación laboral.
      .col-lg-4
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema1/img26.svg' alt='AvatarTop')
          .tarjeta.bgfI02.w-100
            .p-4
              p.text-center #[b Pago normal de aportes]
              p.text-center Las cotizaciones deben realizarse de acuerdo con el salario devengado y los días laborados en el período correspondiente. 
      .col-lg-4
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema1/img27.svg' alt='AvatarTop')
          .tarjeta.bgfI02.w-100
            .p-4
              p.text-center #[b Reporte de novedades en la PILA]
              p.text-center Las novedades de ingreso, retiro o variación deben registrarse sin tratamiento especial por tratarse de período de prueba. 
    p.mb-0 Estas obligaciones evidencian que el período de prueba solo modifica las condiciones de terminación del contrato, pero no elimina los derechos laborales ni las responsabilidades frente a la seguridad social. Con esta precisión, es posible continuar con la clasificación de los contratos, ya que cada modalidad presenta características particulares que inciden en la gestión de nómina y en el reporte de novedades.
    Separador
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 1.2 Clasificación de contratos
    .bloque-texto-gg.tarjeta.bgf1.mb-4
          .bloque-texto-gg__texto.p-4
            p La legislación colombiana reconoce diversas modalidades de contrato de trabajo, diferenciadas principalmente por su duración, la naturaleza de la actividad contratada y las condiciones pactadas entre las partes. Esta clasificación es relevante para la gestión de la seguridad social porque cada modalidad tiene implicaciones específicas en el período de vinculación, los momentos de reportar las novedades de ingreso y retiro en la PILA, y los derechos que el trabajador acumula durante la relación laboral. Un error en la identificación de la modalidad contractual puede generar reportes incorrectos que a su vez produzcan inconsistencias en el historial de cotizaciones del trabajador.
          .bloque-texto-gg__img(
          :style="{'background-image':`url(${require('@/assets/curso/temas/tema1/img28.png')})`}"
          )
    p A continuación, se presentan las principales modalidades de contrato de trabajo, junto con su definición y un ejemplo aplicado a la gestión de nómina y seguridad social. Esta revisión permite reconocer cómo cada vínculo incide en la afiliación, la cotización y el reporte de novedades en la PILA:
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7.order-2.order-lg-1
        LineaTiempoD.color-primario
          .row(numero="1" titulo="Contrato a término fijo")
            .col-md-12.mb-4.mb-md-0
              p El contrato a término fijo tiene una duración previamente acordada entre las partes y no puede superar tres años. Puede renovarse indefinidamente; si es inferior a un año, puede prorrogarse hasta tres veces por períodos iguales o inferiores.
              p Ejemplo: una empresa contrata a una auxiliar contable por seis meses para apoyar el cierre anual. Si continúa después del vencimiento sin preaviso, el contrato se prorroga automáticamente.
          .row(numero="2" titulo="Contrato a término indefinido")
            .col-md-12.mb-4.mb-md-0
              p El contrato a término indefinido no tiene fecha de terminación preestablecida y ofrece mayor estabilidad al trabajador. Si el empleador lo termina sin justa causa, debe pagar una indemnización según la antigüedad, conforme al artículo 64 del Código Sustantivo del Trabajo.
              p Ejemplo: una entidad vincula de forma permanente a una asistente de nómina. Cada mes debe afiliarla, cotizar y reportar novedades salariales o ausencias.
          .row(numero="3" titulo="Contrato de obra o labor")
            .col-md-12.mb-4.mb-md-0
              p El contrato de obra o labor se celebra para ejecutar una tarea específica y finaliza automáticamente cuando esta concluye, sin necesidad de preaviso. Su duración puede ser corta o extenderse varios años, según la complejidad de la obra.
              p Ejemplo: una empresa contrata personal para digitalizar un archivo institucional. Al terminar el proyecto, se reporta la novedad de retiro en la PILA con la fecha exacta.
          .row(numero="4" titulo="Contrato accidental o transitorio")
            .col-md-12.mb-4.mb-md-0
              p El contrato accidental o transitorio tiene una duración máxima de un mes y se usa para actividades que no hacen parte del giro ordinario del empleador. Su carácter excepcional impide utilizarlo como modalidad habitual de vinculación.
              p Ejemplo: una empresa contrata a una persona durante dos semanas para apoyar un inventario anual. Aunque el vínculo sea breve, deben pagarse los aportes correspondientes al tiempo laborado.
          .row(numero="5" titulo="Contrato de aprendizaje")
            .col-md-12.mb-4.mb-md-0
              p El contrato de aprendizaje tiene un régimen especial en seguridad social. En la fase lectiva, el patrocinador afilia al aprendiz únicamente a salud. En la fase productiva, debe afiliarlo también a riesgos laborales y pensión, según corresponda.
              p Ejemplo: un aprendiz SENA realiza su etapa productiva en el área administrativa de una empresa. Durante esa fase, la empresa debe gestionar sus afiliaciones y aportes según el régimen aplicable.
          .row(numero="6" titulo="Período de prueba")
            .col-md-12.mb-4.mb-md-0
              p El período de prueba no es una modalidad autónoma de contrato, sino una cláusula que puede incluirse en cualquier contrato laboral. Durante este tiempo, todas las obligaciones de afiliación y cotización se aplican desde el primer día.
              p Ejemplo: una trabajadora inicia labores con período de prueba de dos meses. Aunque el contrato pueda terminar sin preaviso, debe estar afiliada a salud, pensión y ARL desde su ingreso.
      .col-lg-3.col-4.mb-4.mb-lg-0.order-1.order-lg-2
        figure
          img(src="@/assets/curso/temas/tema1/img29.png", alt="alt")
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-3.col-8.mb-4.mb-lg-0
        figure
          img(src="@/assets/curso/temas/tema1/img30.png", alt="alt")
      .col-lg-9
        p Estas modalidades permiten reconocer que cada contrato tiene condiciones particulares de duración, terminación y reporte de novedades. Por ello, identificar correctamente el vínculo laboral evita inconsistencias en la historia de cotización del trabajador y favorece el cumplimiento de las obligaciones frente al Sistema de Seguridad Social Integral.
        .row.justify-content-center.align-items-center
          .col-lg-auto.d-none.d-lg-block
              figure
                img(src='@/assets/curso/temas/tema1/img31.svg', style="width:70px", alt='Texto que describa la imagen').mb-2
          .col-lg-10
            p.mb-0 En la siguiente tabla se presenta, de forma organizada y comparativa, la clasificación de los contratos laborales, su duración y las características que deben tenerse en cuenta en la gestión de la seguridad social. Esta información facilita la lectura, la consulta y la identificación de las novedades que pueden reportarse en la PILA, como ingreso, retiro, prórroga o cambios en la vinculación del trabajador.
    .row.justify-content-center.align-items-center.mb-3
      .col-lg-10
        .titulo-sexto.color-acento-contenido
          h5 Tabla 2.
          span Clasificación de los contratos laborales en Colombia
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        .tabla-a.color-acento-contenido 
          .tabla-a   
            table
              thead
                tr
                  th Modalidad
                  th Duración
                  th Características relevantes para SS
              tbody
                tr(style="background-color: #FBF7F1;")
                  th A término fijo
                  td Máximo 3 años, renovable.
                  td Mismas obligaciones de seguridad social que el contrato indefinido. Renovación automática si no se notifica con 30 días de anticipación.
                tr
                  th A término indefinido
                  td Sin límite de tiempo.
                  td Mayor estabilidad. Indemnización por terminación sin justa causa según artículo 64 CST.
                tr(style="background-color: #FBF7F1;")
                  th Obra o labor
                  td Duración de la obra o tarea.
                  td Termina automáticamente al concluir la obra. Se debe reportar retiro en la PILA con fecha exacta de terminación.
                tr
                  th Accidental o transitorio
                  td Máximo 1 mes.
                  td No puede prorrogarse. Generan las mismas obligaciones de SS que los contratos permanentes.
                tr(style="background-color: #FBF7F1;")
                  th Aprendizaje
                  td Duración del programa.
                  td Régimen especial de SS: solo salud en fase lectiva; salud, pensión y ARL en fase productiva.
                tr
                  th Con período de prueba
                  td Máximo 2 meses.
                  td Plenas obligaciones de SS desde el día 1. Solo difiere en la posibilidad de terminación sin previo aviso.
    p La información presentada permite reconocer que cada modalidad contractual tiene condiciones específicas de duración, terminación y reporte. Esta diferenciación es clave para evitar inconsistencias en la afiliación, la cotización y el registro de novedades en la PILA, especialmente cuando se presentan ingresos, retiros, prórrogas o finalización de la obra contratada.
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        .p-4.bgf2-1
          .row.justify-content-center.align-items-center
            .col-lg-1.d-none.d-lg-block
              figure
                img(src='@/assets/curso/temas/tema1/img32.svg', style="width:70px", alt='Texto que describa la imagen').mb-2
            .col-lg-12
              p.text-center.mb-0 La modalidad contractual orienta la afiliación, la cotización y el reporte de novedades en la PILA, por lo que su correcta identificación evita errores en la gestión de nómina y seguridad social.
    p Una vez identificadas las modalidades de contrato, es necesario profundizar en sus características principales, ya que estas permiten comprender cómo se aplica cada vínculo en la práctica laboral. Este análisis facilita la gestión correcta de la nómina, el seguimiento de las obligaciones del empleador y la protección de los derechos del trabajador frente al Sistema de Seguridad Social Integral. A continuación, se abordan las características del contrato y su relación con la seguridad social.                  
    Separador
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 1.3 Características del contrato
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-9
        .bloque-texto-gg.tarjeta.bgf1.mb-4
          .bloque-texto-gg__texto.p-4
            p El contrato a término fijo se caracteriza por la certeza temporal que ofrece a ambas partes, el empleador puede planificar sus costos laborales con mayor precisión y el trabajador conoce de antemano la duración de su vinculación. No obstante, esta modalidad no implica en ningún caso derechos laborales o de seguridad social reducidos, durante su vigencia, el trabajador goza exactamente de los mismos derechos que cualquier trabajador bajo contrato indefinido, incluyendo el derecho a todos los componentes del sistema de seguridad social, a las prestaciones sociales y a la estabilidad reforzada en los casos que la ley contempla.
          .bloque-texto-gg__img(
          :style="{'background-image':`url(${require('@/assets/curso/temas/tema1/img33.svg')})`}"
          )
      .col-lg-3.col-8
        figure
          img(src='@/assets/curso/temas/tema1/img34.svg', alt='Texto que describa la imagen').mb-2
    p.mb-4 Al revisar las características del contrato laboral, es importante reconocer que la duración del vínculo incide directamente en la gestión de nómina y seguridad social. En especial, el contrato a término fijo y el contrato a término indefinido presentan diferencias en la terminación, la estabilidad laboral, el reporte de novedades y el seguimiento de los aportes en la PILA. A continuación, se explican estas dos modalidades con sus principales implicaciones y un ejemplo aplicado:
    TabsC.color-acento-botones.mb-4
      .p-4.py-3.py-md-4(titulo="A término fijo")
        .row
          .col-md-6.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/tema1/img35.png', alt='Texto que describa la imagen')
          .col-md-6
            p El contrato a término fijo tiene una duración previamente pactada entre las partes. Su manejo exige controlar la fecha de vencimiento y la posible renovación, porque si no se notifica la terminación con la anticipación legal, el contrato puede prorrogarse automáticamente. En seguridad social, el empleador debe reportar el retiro en la PILA cuando finaliza el vínculo y calcular los aportes según los días efectivamente laborados.
            p Ejemplo: si un trabajador termina contrato el último día del mes y no continúa vinculado, debe reportarse la novedad de retiro con la fecha exacta
      .p-4.py-3.py-md-4(titulo="A término indefinido")
        .row
          .col-md-6.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/tema1/img36.png', alt='Texto que describa la imagen')
          .col-md-6
            p El contrato a término indefinido no tiene una fecha de finalización establecida y se caracteriza por su vocación de permanencia. Esta modalidad requiere seguimiento continuo de novedades como variaciones salariales, incapacidades, licencias, suspensiones y retiros. Cuando se presenta un aumento salarial, debe actualizarse el Ingreso Base de Cotización (IBC) en la PILA desde el período correspondiente, para evitar aportes incompletos o inconsistencias en la historia laboral del trabajador.
            p Ejemplo: si una trabajadora recibe un ascenso con aumento de salario, la nómina debe reflejar el nuevo IBC en el período respectivo.
    p.mb-4 Estas dos modalidades evidencian que la duración del contrato influye en el seguimiento de la nómina y en el reporte de novedades ante la PILA. Mientras el contrato a término fijo exige controlar fechas de vencimiento, prórrogas y retiros, el contrato a término indefinido requiere verificar de manera continua cambios salariales, incapacidades, licencias y demás situaciones que puedan afectar la cotización.
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        .p-4.bgf4
          .row.justify-content-center.align-items-center
            .col-lg-auto.d-none.d-lg-block
              figure
                img(src='@/assets/curso/temas/tema1/img37.svg', style="width:70px", alt='Texto que describa la imagen').mb-2
            .col-lg-10
              p.mb-0 En ambos casos, la gestión adecuada del contrato permite proteger los derechos del trabajador, mantener actualizada su historia de aportes y prevenir errores que puedan generar inconsistencias frente al Sistema de Seguridad Social Integral.
    .bloque-texto-gg.tarjeta.bgf5.mb-4
      .bloque-texto-gg__texto.p-4
        figure
          img(src='@/assets/curso/temas/tema1/img39.svg', style="width:70px", alt='Texto que describa la imagen').mb-2
        p Una situación frecuente que debe manejar correctamente el profesional de nómina es la del trabajador que tiene contrato indefinido y que, en algún momento, es ascendido o recibe un aumento salarial. Este cambio genera la novedad de variación de salario permanente (VSP) que debe reportarse en la PILA del período en que se produce el incremento. El error de continuar liquidando los aportes sobre el salario anterior puede resultar en cotizaciones insuficientes al sistema de pensiones, lo que a largo plazo reduce las semanas de cotización efectivas del trabajador y puede afectar el monto de su futura pensión. El compromiso ético del profesional de nómina incluye garantizar que estas actualizaciones se realicen oportuna y correctamente.
      .bloque-texto-gg__img(
      :style="{'background-image':`url(${require('@/assets/curso/temas/tema1/img38.png')})`}"
      )
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        .p-4.bgf2-1
          .row.justify-content-center.align-items-center
            .col-lg-1.d-none.d-lg-block
              figure
                img(src='@/assets/curso/temas/tema1/img32.svg', style="width:70px", alt='Texto que describa la imagen').mb-2
            .col-lg-12
              p.text-center.mb-0 La actualización oportuna de salarios, novedades y fechas contractuales permite liquidar correctamente los aportes y proteger la historia laboral del trabajador en el Sistema de Seguridad Social Integral.
    p.mb-4 La gestión de nómina exige un seguimiento permanente de los contratos y de las novedades que afectan la cotización al Sistema de Seguridad Social Integral. Para realizar este proceso de forma correcta, es necesario controlar los vencimientos, los cambios salariales y la información que debe reportarse en la planilla de aportes. A continuación, se presentan los aspectos clave que orientan este seguimiento y fortalecen la calidad del proceso.
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-3.col-4.mb-4.mb-lg-0
        figure
          img(src="@/assets/curso/temas/tema1/img41.png", alt="alt")
      .col-lg-7
        LineaTiempoD.color-primario
          .row(numero="1" titulo="Seguimiento contractual")
            .col-md-12.mb-4.mb-md-0
              p Consiste en revisar de manera anticipada las fechas de vencimiento, renovación o terminación de los contratos. Este control permite prevenir errores en el reporte de novedades y asegurar la continuidad correcta de la afiliación y la cotización.
          .row(numero="2" titulo="Incrementos salariales")
            .col-md-12.mb-4.mb-md-0
              p Corresponden a los cambios en la remuneración del trabajador durante la vigencia del contrato. Cuando se presentan, deben reflejarse oportunamente en la nómina y en la PILA, porque afectan el Ingreso Base de Cotización (IBC).
          .row(numero="3" titulo="Novedades en la PILA")
            .col-md-12.mb-4.mb-md-0
              p Son los cambios que deben reportarse al sistema, como retiros, ingresos, variaciones salariales, incapacidades o licencias. Su identificación oportuna evita inconsistencias en la historia de aportes del trabajador.
          .row(numero="4" titulo="Automatización de procesos")
            .col-md-12.mb-4.mb-md-0
              p Hace referencia al uso de software de nómina para apoyar el cálculo de aportes y el control de novedades. Esta herramienta agiliza la gestión, pero sus resultados deben ser revisados para garantizar que la liquidación sea correcta.
          .row(numero="5" titulo="Validación normativa")
            .col-md-12.mb-4.mb-md-0
              p Consiste en verificar que la información procesada por el software cumpla con los criterios legales aplicables. Esta revisión es indispensable para asegurar que los aportes, las novedades y los valores liquidados correspondan a la norma. 
          .row(numero="6" titulo="Conocimiento normativo")
            .col-md-12.mb-4.mb-md-0
              p Es la competencia que permite al profesional de nómina interpretar correctamente la ley y tomar decisiones acertadas. La tecnología apoya el proceso, pero es el conocimiento el que garantiza la calidad y confiabilidad de la gestión.
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-9.order-2.order-lg-1
        p Estos elementos muestran que la gestión de nómina no depende únicamente del uso de herramientas tecnológicas, sino también del análisis y la validación realizada por el profesional responsable. Por ello, el seguimiento contractual y el conocimiento normativo son fundamentales para asegurar procesos confiables y reportes correctos ante el sistema de aportes.
        .p-4.bgf4
          .row.justify-content-center.align-items-center
            .col-lg-auto.d-none.d-lg-block
              figure
                img(src='@/assets/curso/temas/tema1/img42.svg', style="width:70px", alt='Texto que describa la imagen').mb-2
            .col-lg-10
              p.text-center.mb-0 Esta precisión también permite comprender la importancia de diferenciar el contrato laboral del contrato de prestación de servicios, ya que en este último cambian la forma de vinculación, la responsabilidad sobre los aportes y los controles que debe realizar el contratante.    
      .col-lg-3.col-8.mb-4.mb-lg-0.order-1.order-lg-2
        figure
          img(src="@/assets/curso/temas/tema1/img43.svg", alt="alt")
    Separador
    #t_1_4.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 1.4 Contrato de prestación de servicios
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img44.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El contrato de prestación de servicios es un acuerdo de naturaleza civil o comercial mediante el cual una persona natural o jurídica (el contratista) se compromete a ejecutar una actividad específica para otra parte (el contratante), de manera autónoma e independiente, a cambio del pago de honorarios previamente pactados. La característica definitoria de este contrato es la ausencia de subordinación, el contratista conserva plena autonomía en la determinación de los métodos, los horarios y los recursos que utilizará para ejecutar la tarea encomendada, siempre que entregue el resultado acordado en el tiempo y bajo las condiciones pactadas. Esta autonomía es precisamente lo que diferencia al contratista del trabajador dependiente y lo que justifica el tratamiento diferenciado en materia de seguridad social.
    p Desde la perspectiva de la seguridad social, el contratista independiente tiene la obligación de asumir el 100 % de los aportes a salud y pensión, calculados sobre el 40 % del valor mensualizado del contrato. Esta base de cotización, denominada Ingreso Base de Cotización (IBC), no puede ser inferior a un SMLMV ni superior a 25 SMLMV. La razón por la que la base es el 40 % de los ingresos y no el 100 % radica en que el contratista tiene costos de operación propios que el trabajador dependiente no asume, entre los que se destacan:
        
    .row.justify-content-center.mb-4
      .col-lg-4.mb-4.mb-lg-0
        .crd.crd--grayGrad(data-aos="flip-left")
          .bottomCircle
            figure
              img(src="@/assets/curso/temas/tema1/img45.svg", alt="alt")
          h5.text-center Gastos de oficina
          p Costos asociados al espacio físico desde el cual el contratista ejecuta su labor, como arriendo, servicios públicos y dotación del lugar de trabajo. Estos gastos no son asumidos por el contratante y hacen parte del modelo de operación independiente del contratista.
      .col-lg-4.mb-4.mb-lg-0
        .crd.crd--grayGrad(data-aos="flip-left")
          .bottomCircle.mb-5
            figure
              img(src="@/assets/curso/temas/tema1/img46.svg", alt="alt")
          h5.text-center Materiales y equipos
          p Inversión en herramientas, equipos tecnológicos, insumos y demás recursos que el contratista requiere para cumplir el objeto del contrato. A diferencia del trabajador dependiente, el contratista adquiere y mantiene estos recursos con cargo a sus propios ingresos.
      .col-lg-4.mb-4.mb-lg-0
        .crd.crd--grayGrad(data-aos="flip-left")
          .bottomCircle.mb-5
            figure
              img(src="@/assets/curso/temas/tema1/img47.svg", alt="alt")
          h5.text-center Impuestos
          p Obligaciones tributarias que el contratista debe asumir de manera directa, como el impuesto de renta, el impuesto sobre las ventas (IVA) cuando aplica, y la retención en la fuente practicada sobre sus honorarios.
    p El reconocimiento de estos costos de operación es la razón técnica y normativa que justifica que el IBC del contratista corresponda al 40 % del valor del contrato y no al 100 %. Este porcentaje representa la parte del ingreso bruto que se asimila a la remuneración neta del contratista y sobre la cual se liquidan sus aportes obligatorios al sistema de seguridad social.
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        .p-4.bgf2-1
          .row.justify-content-center.align-items-center
            .col-lg-auto.d-none.d-lg-block
              figure
                img(src='@/assets/curso/temas/tema1/img48.svg', style="width:70px", alt='Texto que describa la imagen').mb-2
            .col-lg-12
              p.text-center.mb-0 A partir de la Ley 1955 de 2019 y su decreto reglamentario, los contratantes tienen la obligación expresa de verificar que sus contratistas se encuentren al día en el pago de los aportes al sistema de seguridad social antes de realizar el desembolso de los honorarios correspondientes a cada período.
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-8.order-2.order.lg-1
        p Esta verificación debe realizarse a través del comprobante de pago de la PILA, cuya fecha de pago debe ser anterior o correspondiente al período en que se realiza el pago de honorarios. El incumplimiento de esta obligación puede generar responsabilidad solidaria del contratante en el pago de los aportes omitidos, lo que representa un riesgo financiero y legal significativo para la organización contratante.
        .p-4.bgf4
          p.mb-0 Es importante precisar que el contratista bajo esta modalidad no genera derecho a prima de servicios, cesantías, intereses sobre cesantías ni vacaciones remuneradas, pues estas prestaciones son exclusivas del contrato de trabajo. Tampoco tiene derecho al pago de horas extras, recargos nocturnos ni a la indemnización por terminación sin justa causa establecida en el CST. Sin embargo, si durante la ejecución del contrato se comprueba que en la práctica existió subordinación y que el contratista ejecutó sus funciones bajo las órdenes e instrucciones del contratante, un juez laboral puede declarar la existencia de un contrato realidad y ordenar el pago retroactivo de todas las prestaciones y aportes adeudados.
      .col-lg-4.col-8.mb-4.mb-lg-0.order-1.order-lg-2
        figure
          img(src="@/assets/curso/temas/tema1/img49.png", alt="alt")
    p Los derechos y obligaciones del contratista en materia de seguridad social difieren de manera sustancial de los que corresponden a un trabajador dependiente. Las siguientes implicaciones sintetizan los aspectos más relevantes que el profesional de nómina debe tener presentes al gestionar contratos de prestación de servicios:
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-3.col-4.mb-4.mb-lg-0
        figure
          img(src="@/assets/curso/temas/tema1/img50.png", alt="alt")
      .col-lg-7
        LineaTiempoD.color-primario
          .row(numero="1" titulo="Aportes a cargo del contratista")
            .col-md-12.mb-4.mb-md-0
              p El contratista asume el 100 % de los aportes a salud y pensión. Estos se calculan sobre el 40 % del valor mensualizado del contrato, base denominada Ingreso Base de Cotización (IBC). El IBC no puede ser inferior a 1 SMLMV ni superior a 25 SMLMV.
          .row(numero="2" titulo="Sin prestaciones sociales")
            .col-md-12.mb-4.mb-md-0
              p El contrato de prestación de servicios no genera prima de servicios, cesantías, intereses sobre cesantías ni vacaciones remuneradas. Estas prestaciones son exclusivas del contrato de trabajo y no pueden reclamarse bajo esta modalidad contractual.
          .row(numero="3" titulo="Sin recargos ni indemnización")
            .col-md-12.mb-4.mb-md-0
              p El contratista no tiene derecho al pago de horas extras, recargos nocturnos ni a la indemnización por terminación sin justa causa. Su vínculo termina al cumplirse el objeto del contrato o en la fecha pactada, sin que ello genere obligación indemnizatoria para el contratante.
          .row(numero="4" titulo="Obligación de verificación del contratante")
            .col-md-12.mb-4.mb-md-0
              p Desde la Ley 1955 de 2019, el contratante debe verificar el comprobante de pago de la PILA antes de cada desembolso de honorarios. Si no lo hace y el contratista no ha cotizado, la autoridad puede declarar al contratante solidariamente responsable por los aportes omitidos.
          .row(numero="5" titulo="Riesgo del contrato realidad")
            .col-md-12.mb-4.mb-md-0
              p Si en la práctica de la relación se comprueba subordinación, instrucciones permanentes o dependencia directa, un juez laboral puede declarar la existencia de un contrato de trabajo. Esta declaración obliga al contratante a pagar retroactivamente todas las prestaciones sociales y los aportes adeudados al sistema.
          .row(numero="6" titulo="Documentación de la autonomía")
            .col-md-12.mb-4.mb-md-0
              p La organización contratante debe documentar la autonomía del contratista mediante actas de entregables, informes de avance y comunicaciones que evidencien la ausencia de subordinación. Esta documentación es la principal defensa ante una investigación de la UGPP o una demanda laboral.
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        .p-4.bgf4
          .row.justify-content-center.align-items-center
            .col-lg-auto.d-none.d-lg-block
              figure
                img(src='@/assets/curso/temas/tema1/img51.svg', style="width:70px", alt='Texto que describa la imagen').mb-2
            .col-lg-10
              p La documentación adecuada de la autonomía del contratista (actas de entregables, informes de avance y comunicaciones que evidencien la ausencia de subordinación) es también una práctica indispensable para reducir el riesgo de investigaciones futuras y proteger a la organización frente a posibles reclamaciones laborales.
    p.mb-4 Para el profesional de nómina y seguridad social, la gestión de los contratos de prestación de servicios requiere la implementación de tres controles específicos que deben aplicarse de manera sistemática en cada período:
    .row.justify-content-center.mb-4
      .col-lg-4.mb-4.mb-lg-0
        .crd.crd--grayGrad(data-aos="flip-left")
          .bottomCircle
            figure
              img(src="@/assets/curso/temas/tema1/img52.svg", alt="alt")
          h5.text-center Verificación mensual de aportes
          p Revisar el comprobante de pago de la PILA de cada contratista antes de realizar el desembolso de honorarios, confirmando que el período cotizado corresponde al período del pago.
      .col-lg-4.mb-4.mb-lg-0
        .crd.crd--grayGrad(data-aos="flip-left")
          .bottomCircle.mb-5
            figure
              img(src="@/assets/curso/temas/tema1/img53.svg", alt="alt")
          h5.text-center Registro diferenciado
          p Mantener a los contratistas en un sistema de seguimiento independiente del sistema de nómina de trabajadores dependientes, con los datos del contrato, el IBC, las fechas de inicio y terminación, y el historial de comprobantes.
      .col-lg-4.mb-4.mb-lg-0
        .crd.crd--grayGrad(data-aos="flip-left")
          .bottomCircle.mb-5
            figure
              img(src="@/assets/curso/temas/tema1/img54.svg", alt="alt")
          h5.text-center Alerta ante indicios de subordinación
          p Identificar de manera oportuna cualquier situación que pueda configurar un contrato realidad, como instrucciones permanentes, asignación de horario fijo o uso de herramientas y espacios de la organización.
    p.mb-4 La aplicación sistemática de estos tres controles reduce de manera significativa el riesgo de sanciones por parte de la UGPP, protege a la organización ante posibles reclamaciones laborales y garantiza que cada contratista cuente con la cobertura del sistema de seguridad social que la ley le reconoce.
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        .bloque-texto-gg.tarjeta.bgf3.mb-4
          .bloque-texto-gg__texto.p-4
            p Desde una perspectiva práctica, es frecuente que las empresas utilicen simultáneamente contratos laborales y contratos de prestación de servicios para gestionar su fuerza laboral. Esta combinación es perfectamente legal siempre que cada modalidad se aplique correctamente según las características de la relación: si existe subordinación, debe formalizarse mediante contrato laboral; si existe verdadera autonomía, puede utilizarse el contrato de prestación de servicios. El error más común es usar el contrato de prestación de servicios para funciones que en la práctica se ejecutan bajo subordinación, buscando reducir los costos laborales. Esta práctica, además de ser ilegal, expone a la organización a las consecuencias del contrato realidad y a las sanciones de la UGPP.
          .bloque-texto-gg__img(
          :style="{'background-image':`url(${require('@/assets/curso/temas/tema1/img55.png')})`}"
          )
    p Con el propósito de profundizar en las obligaciones del contratista y del contratante frente al Sistema de Seguridad Social Integral, se propone el siguiente recurso de audio sobre el contrato de prestación de servicios. Este material aborda, de manera clara y contextualizada, los criterios que diferencian esta modalidad contractual del contrato laboral, las obligaciones de cotización y verificación de aportes, y los riesgos jurídicos asociados a su gestión incorrecta.
    .row.justify-content-center.mb-4
      .col-lg-10
        figure
          img(src='@/assets/curso/temas/tema1/img56.svg', alt='')
        .tarjeta.p-4(style="background-color:#FAF2DF; border-radius: 0 0 20px 20px;")
          .tarjeta.bg-white.p-4.custom-audio-card
            TarjetaAudio.color-acento-botones(
              texto="POSTCAT"
              :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
              @audio-hover="mostrarIndicadorTarjetaAudio = false"
            )
              .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
    .row.justify-content-center.align-items-center
      .col-lg-4.col-8.mb-4.mb-lg-0
        figure
          img(src="@/assets/curso/temas/tema1/img57.svg", alt="alt")
      .col-lg-8
        p La correcta clasificación del tipo de contrato y el cumplimiento de las obligaciones de seguridad social que de él se derivan son condiciones necesarias, pero no suficientes, para garantizar la protección de los derechos del trabajador. En la práctica, existen situaciones en las que la denominación del contrato no corresponde a la realidad de la relación, ya sea por desconocimiento de la normativa o por el uso deliberado de figuras civiles para eludir las obligaciones laborales. Para estos casos, el ordenamiento jurídico colombiano establece el principio del contrato realidad como mecanismo de protección del trabajador y de restablecimiento de sus derechos.
    Separador
    #t_1_5.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 1.5 Principio del contrato realidad y sus implicaciones
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img58.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El principio del contrato realidad, consagrado en el artículo 23 del Código Sustantivo del Trabajo, establece que si en la práctica de una relación entre dos personas concurren los tres elementos esenciales del contrato de trabajo (prestación personal del servicio, subordinación y remuneración), dicha relación debe ser reconocida como laboral, independientemente de la denominación que le hayan dado las partes. Este principio es uno de los pilares del derecho laboral colombiano y tiene como objetivo prevenir el uso de figuras civiles o comerciales para encubrir verdaderas relaciones laborales, privando a los trabajadores de sus derechos en materia de prestaciones y seguridad social.
    p La aplicación del contrato realidad por parte de un juez laboral tiene consecuencias económicas directas y de gran impacto para el empleador. Las siguientes implicaciones describen las obligaciones que surgen para la organización cuando se declara judicialmente la existencia de un contrato de trabajo encubierto:
    .tarjeta--container.row.mb-5
      .col-md.tarjeta.color-primario.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema1/img59.svg', alt='Texto que describa la imagen')
          
        h5.text-center Pago retroactivo de aportes al sistema
        p El empleador queda obligado a pagar los aportes a salud (8,5 %), pensión (12 %) y ARL (según clase de riesgo) que le correspondían durante toda la vigencia de la relación laboral encubierta, más los intereses moratorios calculados desde la fecha en que debieron pagarse hasta la fecha efectiva del pago.
      .col-md.tarjeta.color-secundario.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema1/img60.svg', alt='Texto que describa la imagen')
          
        h5.text-center Liquidación de prestaciones sociales adeudadas
        p El empleador debe liquidar y pagar todas las prestaciones sociales causadas durante el período de la relación encubierta: prima de servicios (un mes de salario por año trabajado), cesantías (un mes de salario por año), intereses sobre cesantías (12 % anual sobre el saldo) y vacaciones (15 días hábiles por año).
      .col-md.tarjeta.color-acento-contenido.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema1/img61.svg', alt='Texto que describa la imagen')
          
        h5.text-center Responsabilidad por contingencias no cubiertas
        p Si durante el período no afiliado el trabajador sufrió alguna contingencia (enfermedad, accidente o invalidez), el empleador debe asumir directamente el costo de las prestaciones económicas y asistenciales que el sistema hubiera cubierto si el trabajador hubiera estado correctamente afiliado. Esto puede incluir el pago de incapacidades, tratamientos médicos, indemnizaciones por invalidez permanente o pensiones de sobrevivientes si el trabajador falleció durante el período no afiliado.
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        .p-4.bgf4.mb-4
          .row.justify-content-center.align-items-center
            .col-lg-auto.d-none.d-lg-block
              figure
                img(src='@/assets/curso/temas/tema1/img62.svg', style="width:70px", alt='Texto que describa la imagen').mb-2
            .col-lg-10
              p.mb-0 La magnitud de estas consecuencias evidencia que el contrato realidad no es un riesgo teórico, sino una realidad jurídica que afecta de manera directa la sostenibilidad financiera de las organizaciones. La prevención de este riesgo exige documentar con rigor la autonomía de cada contratista desde el inicio de la relación contractual y revisar de manera periódica las condiciones en que se ejecuta cada contrato de prestación de servicios.
        p Para determinar si existe un contrato realidad, los jueces laborales y la UGPP analizan una serie de indicios que en conjunto permiten demostrar la subordinación práctica. Los principales indicios que se toman en cuenta son los siguientes:
    SlyderF(columnas="col-lg-6 col-xl-4").mb-4
      .tarjeta.p-4.BG04
        .row.justify-content-center.mb-4
          .col-6
            img(src='@/assets/curso/temas/tema1/img63.svg' alt='AvatarTop')
        h5.text-center Horario fijo de trabajo
        p.text-center Cumplimiento de un horario establecido por el contratante, con hora de entrada, salida y pausas definidas, sin posibilidad de que el contratista organice su propio tiempo de trabajo.
      .tarjeta.p-4.BG04
        .row.justify-content-center.mb-3
          .col-6
            img(src='@/assets/curso/temas/tema1/img64.svg' alt='AvatarTop')
        h5.text-center Asignación de espacio físico
        p.text-center Uso permanente de un puesto de trabajo, escritorio o área dentro de las instalaciones del contratante, en condiciones iguales a las de cualquier trabajador dependiente de la organización. 
      .tarjeta.p-4.BG04
        .row.justify-content-center.mb-3
          .col-6
            img(src='@/assets/curso/temas/tema1/img65.svg' alt='AvatarTop')
        h5.text-center Uso de uniformes o elementos corporativos
        p.text-center Porte habitual de la identificación, el uniforme o los elementos de dotación del contratante, lo que evidencia integración a la estructura organizacional y no la independencia propia del contratista. 
      .tarjeta.p-4.BG04
        .row.justify-content-center.mb-3
          .col-6
            img(src='@/assets/curso/temas/tema1/img66.svg' alt='AvatarTop')
        h5.text-center Exclusividad en la prestación del servicio
        p.text-center Edicación total a un único contratante sin posibilidad de atender otros clientes de manera simultánea, lo que genera una dependencia económica y operativa incompatible con la autonomía del contratista. 
      .tarjeta.p-4.BG04
        .row.justify-content-center.mb-3
          .col-6
            img(src='@/assets/curso/temas/tema1/img67.svg' alt='AvatarTop')
        h5.text-center Continuidad y periodicidad de los pagos
        p.text-center Recepción de pagos regulares en montos fijos, con independencia de los entregables o resultados del período, lo que reproduce la estructura de un salario mensual encubierto. 
      .tarjeta.p-4.BG04
        .row.justify-content-center.mb-3
          .col-6
            img(src='@/assets/curso/temas/tema1/img68.svg' alt='AvatarTop')
        h5.text-center Participación obligatoria en actividades corporativas
        p.text-center Asistencia requerida a reuniones internas, capacitaciones y eventos de la organización contratante, lo que indica vinculación a su jerarquía y no una relación de prestación de servicios independiente.
      .tarjeta.p-4.BG04
        .row.justify-content-center.mb-3
          .col-6
            img(src='@/assets/curso/temas/tema1/img69.svg' alt='AvatarTop')
        h5.text-center Recepción de instrucciones detalladas
        p.text-center Acatamiento de directrices precisas sobre el modo, el método y el proceso de ejecución del trabajo, que van más allá de la simple definición del resultado esperado y configuran la subordinación que caracteriza el contrato laboral.

    p.mb-4 La presencia de uno o varios de estos indicios no declara automáticamente la existencia de un contrato realidad; es su concurrencia sistemática lo que lleva a los jueces y a la UGPP a reconocer la relación como laboral.
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-4.col-8.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/temas/tema1/img70.svg' alt='AvatarTop')
      .col-lg-8
        p Desde la perspectiva de la gestión de la seguridad social, el principio del contrato realidad obliga al profesional de nómina y al área de recursos humanos a revisar periódicamente los contratos de prestación de servicios vigentes para detectar situaciones que puedan configurar este principio. La regularización oportuna de las situaciones identificadas, transformando los contratos civiles en laborales cuando corresponda y realizando las afiliaciones y los pagos retroactivos necesarios, puede reducir significativamente el impacto financiero frente a una eventual investigación de la UGPP o una demanda laboral. La prevención es siempre menos costosa que la corrección de incumplimientos ya consolidados en el tiempo.
    p El siguiente caso práctico permite dimensionar las consecuencias económicas y jurídicas que puede enfrentar una organización cuando clasifica de manera incorrecta el tipo de contrato que vincula a una persona con la empresa. La situación que se describe reproduce un escenario frecuente en los juzgados laborales colombianos y tiene como propósito que el aprendiz identifique los indicios de subordinación, calcule el impacto económico del incumplimiento y reconozca las acciones preventivas que habrían evitado la condena:
    .BG01.px-5
      LineaTiempoE.color-primario.mb-4
        .row(titulo="A.")
          .col-lg.mb-4.mb-lg-0
            p Datos del caso
            p Una empresa del sector servicios mantiene vinculado a un profesional mediante contrato de prestación de servicios durante cinco años consecutivos. Durante ese período, el contratista ejecuta funciones de asistente administrativo con las siguientes condiciones:
            ul.lista-ul.mb-0
              li.mb-0
                i.lista-ul__vineta
                | Horario fijo de lunes a viernes de 8:00 a.m. a 5:00 p.m.
              li.mb-0
                i.lista-ul__vineta
                | Puesto de trabajo asignado dentro de las instalaciones de la empresa
              li.mb-0
                i.lista-ul__vineta
                | Instrucciones directas e impartidas por el gerente general.
              li.mb-0
                i.lista-ul__vineta
                | Pago mensual fijo de tres millones de pesos ($3.000.000).
              li.mb-0
                i.lista-ul__vineta
                | Exclusividad total: no presta servicios a ningún otro cliente.
        .row(titulo="B.")
          .col-lg.mb-4.mb-lg-0
            p Indicios de subordinación identificados
            p Al revisar las condiciones de la relación, los jueces laborales y la UGPP identifican la concurrencia de los siguientes indicios que configuran el contrato realidad:
            ul.lista-ul.mb-0
              li.mb-0
                i.lista-ul__vineta
                | Horario fijo impuesto por el contratante. 
              li.mb-0
                i.lista-ul__vineta
                | Espacio físico asignado dentro de la empresa. 
              li.mb-0
                i.lista-ul__vineta
                | Instrucciones detalladas sobre el modo de trabajo. 
              li.mb-0
                i.lista-ul__vineta
                | Exclusividad y dependencia económica total. 
              li.mb-0
                i.lista-ul__vineta
                | Pagos periódicos fijos equivalentes a un salario. 
        .row(titulo="C.")
          .col-lg.mb-4.mb-lg-0
            p Impacto económico para la empresa
            p Con un salario mensual de $3.000.000 y cinco años de relación laboral encubierta, la liquidación judicial incluye:
            ul.lista-ul.mb-0
              li.mb-0
                i.lista-ul__vineta
                | Aportes retroactivos a seguridad social (salud, pensión y ARL) con intereses moratorios por sesenta meses.
              li.mb-0
                i.lista-ul__vineta
                | Prima de servicios: $3.000.000 por cada año trabajado = $15.000.000.
              li.mb-0
                i.lista-ul__vineta
                | Cesantías: $3.000.000 por cada año = $15.000.000.
              li.mb-0
                i.lista-ul__vineta
                | Intereses sobre cesantías: 12 % anual sobre el saldo = $10.800.000.
              li.mb-0
                i.lista-ul__vineta
                | Vacaciones: $1.250.000 por año = $6.250.000.
              li.mb-0
                i.lista-ul__vineta
                | Honorarios de abogados y costos procesales: entre uno y cinco SMLMV por agencias en derecho, más entre el 10 % y el 20 % del valor de las pretensiones reconocidas, conforme a la Ley 1564 de 2012 y el Acuerdo PSAA16-10554 del Consejo Superior de la Judicatura.
        .row(titulo="D.")
          .col-lg.mb-4.mb-lg-0
            p Lección aprendida
            p Este escenario se repite con frecuencia en los juzgados laborales colombianos y es completamente prevenible. Las tres acciones que habrían evitado la condena son:
            ul.lista-ul.mb-0
              li.mb-0
                i.lista-ul__vineta
                | Clasificar correctamente el vínculo desde el inicio, si las condiciones del trabajo implican subordinación, el contrato debe ser laboral.
              li.mb-0
                i.lista-ul__vineta
                | Documentar la autonomía del contratista con actas de entregables, informes de avance y comunicaciones que evidencien la ausencia de subordinación.
              li.mb-0
                i.lista-ul__vineta
                | Revisar periódicamente las condiciones de cada contrato de prestación de servicios para detectar de manera oportuna cualquier situación que configure subordinación.
    p El análisis del contrato de trabajo y del contrato de prestación de servicios, junto con el principio del contrato realidad, proporciona el marco conceptual necesario para abordar la normativa que regula el Sistema de Seguridad Social Integral y las obligaciones que este impone a empleadores y contratantes en cada etapa de la relación laboral.

      
</template>

<script>
export default {
  name: 'Tema1',
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
