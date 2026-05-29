<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Obligaciones del empleador
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-3.col-8.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/temas/tema3/img1.png' alt='AvatarTop')
      .col-lg-9
        p Las obligaciones del empleador o contratante frente al Sistema de Seguridad Social Integral constituyen uno de los pilares del marco normativo laboral colombiano. Desde el inicio de la relación laboral o contractual, el empleador adquiere la responsabilidad de garantizar que el trabajador quede vinculado al sistema, cumpliendo con los procesos de afiliación y realizando oportunamente los aportes que le corresponden. El incumplimiento de estas obligaciones no solo afecta los derechos fundamentales de los trabajadores, sino que expone al empleador a sanciones económicas, investigaciones administrativas y responsabilidades civiles y penales que pueden comprometer seriamente la estabilidad financiera de la organización.
        .p-4.bgf1
          .row.justify-content-center.align-items-center
            .col-lg-auto.d-none.d-lg-block
              figure
                img(src='@/assets/curso/temas/tema3/img2.svg', style="width:70px", alt='Texto que describa la imagen').mb-2
            .col-lg-10
              p.mb-0 La comprensión integral de estas obligaciones requiere analizar tres dimensiones interrelacionadas, quién es el responsable, qué debe hacerse y cuándo deben cumplirse los plazos legales de afiliación, las fechas límite de la PILA y la oportunidad en el reporte de novedades. El dominio de estas tres dimensiones es lo que distingue al profesional competente en novedades y liquidación de seguridad social de quien simplemente ejecuta tareas rutinarias sin comprender el marco normativo que las sustenta.
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul").mb-4
          .row(titulo="Quién es el responsable")
            .col-lg
              p No toda vinculación laboral genera las mismas obligaciones. La naturaleza del vínculo ya sea contrato de trabajo o contrato de prestación de servicios, determina quién asume la responsabilidad de afiliar, liquidar y pagar los aportes, así como las consecuencias jurídicas que se derivan del incumplimiento en cada caso.
          .row(titulo="Qué debe hacerse")
            .col-lg
              p El empleador debe tramitar la afiliación del trabajador a los cuatro componentes del sistema desde el primer día de la relación laboral, liquidar correctamente los aportes sobre el IBC que corresponde a cada trabajador y reportar oportunamente todas las novedades que afecten la vinculación, el salario o la situación del trabajador frente al sistema.
          .row(titulo="Cuándo deben cumplirse los plazos")
            .col-lg
              p El sistema establece fechas límite precisas para la afiliación, para el pago de los aportes a través de la PILA y para el reporte de novedades como ingresos, retiros, incapacidades y variaciones salariales. El desconocimiento o la inobservancia de estos plazos genera intereses de mora, sanciones administrativas y, en algunos casos, la obligación del empleador de asumir directamente las prestaciones que el sistema hubiera cubierto.
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-9.order-2.order-lg-2
        p El dominio de estas tres dimensiones es lo que distingue al profesional competente en novedades y liquidación de seguridad social de quien simplemente ejecuta tareas rutinarias sin comprender el marco normativo que las sustenta. Actuar con criterio frente a cada una de ellas no solo garantiza el cumplimiento de las obligaciones legales, sino que protege a la organización de riesgos innecesarios y al trabajador de quedar desprotegido ante cualquier contingencia que pueda presentarse durante la vigencia de la relación laboral.
        .p-4.bgf1
          p.mb-0 En las secciones siguientes se desarrolla cada una de estas obligaciones con el nivel de detalle necesario para que puedan aplicarse correctamente en situaciones laborales reales. Se identifican los riesgos asociados a su incumplimiento y se presentan las buenas prácticas que permiten al empleador cumplir de manera responsable con sus deberes frente al sistema de seguridad social colombiano.
      .col-lg-3.col-8.mb-4.mb-lg-0.order-1.order-lg-2
        figure
          img(src='@/assets/curso/temas/tema3/img3.png' alt='AvatarTop') 
    Separador
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 3.1 Empleador y contratante
    p En el sistema de seguridad social colombiano no todos los responsables del pago de aportes tienen la misma naturaleza jurídica. La ley distingue dos figuras con obligaciones diferentes según el tipo de vínculo que establezcan con el trabajador o prestador de servicios:
    .row.justify-content-center.mb-4
      .col-lg-5
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema3/img4.svg' alt='AvatarTop')
          .tarjeta.bgfI02.w-100
            .p-4
              p.text-center #[b Empleador]
              p.text-center Persona natural o jurídica que contrata los servicios de una persona natural mediante un contrato de trabajo, asumiendo los derechos y obligaciones que de esta relación se derivan conforme al Código Sustantivo del Trabajo. El elemento que define al empleador es el poder de subordinación sobre el trabajador: la facultad de impartir órdenes, establecer horarios, determinar el lugar de trabajo y ejercer control disciplinario. En contraprestación, el empleador asume la responsabilidad de pagar el salario pactado, el cual no puede ser inferior al SMLMV, las prestaciones sociales y los aportes a la seguridad social en la proporción que establece la ley.
      .col-lg-5
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema3/img5.svg' alt='AvatarTop')
          .tarjeta.bgfI02.w-100
            .p-4
              p.text-center #[b Contratante]
              p.text-center Persona natural o jurídica que celebra un contrato de prestación de servicios con un contratista independiente. A diferencia del empleador, el contratante no tiene poder de subordinación, no paga prestaciones sociales y no asume la parte del empleador en los aportes de seguridad social. Sin embargo, desde la Ley 1955 de 2019, el contratante tiene la obligación de verificar que el contratista se encuentre al día en sus aportes antes de pagarle los honorarios. Esta obligación de verificación es de suma importancia: si el contratante paga sin verificar y posteriormente se determina que el contratista no cotizó, el contratante puede ser declarado solidariamente responsable por los aportes omitidos.
    .bloque-texto-gg.tarjeta.bgf1.mb-4
      .bloque-texto-gg__texto.p-4
        p Una misma organización puede actuar simultáneamente como empleador frente a sus trabajadores con contrato laboral y como contratante frente a sus consultores y proveedores de servicios especializados. Esta dualidad de roles exige que el área de recursos humanos o nómina mantenga registros claramente diferenciados para cada tipo de vinculación, aplicando correctamente las normas propias de cada figura. La confusión entre roles puede generar errores sistémicos en la liquidación de los aportes que solo se detectan cuando la UGPP inicia una investigación, momento en que las consecuencias suelen ser considerablemente de mayor impacto económico, que si se hubieran corregido oportunamente.
      .bloque-texto-gg__img(
      :style="{'background-image':`url(${require('@/assets/curso/temas/tema3/img6.png')})`}"
      )
    p Una responsabilidad adicional que frecuentemente se subestima es la verificación de la afiliación y el historial de cotizaciones de los trabajadores que venían vinculados mediante contrato de prestación de servicios antes de formalizarse la relación laboral. Al respecto, el empleador debe tener en cuenta las siguientes situaciones:
    .tarjeta--container.row.mb-5
      .col-md.tarjeta.color-primario.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema3/img7.svg', alt='Texto que describa la imagen')
          
        h2.text-center Verificar el historial previo
        p Si un profesional trabajó como contratista durante dos años y es finalmente contratado laboralmente, el empleador debe revisar que durante ese período el trabajador haya cotizado correctamente al sistema. Por ejemplo, si el contratista estuvo seis meses sin cotizar, esos períodos quedarán como vacíos en su historia laboral que podrían afectar el reconocimiento futuro de prestaciones como la pensión de invalidez.
      .col-md.tarjeta.color-secundario.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema3/img8.svg', alt='Texto que describa la imagen')
          
        h2.text-center No asumir responsabilidades anteriores
        p El nuevo empleador no responde por los aportes omitidos en períodos anteriores a la vinculación laboral. Por ejemplo, si el contratista no pagó aportes en salud durante tres meses antes de ser contratado, esa deuda corresponde exclusivamente al contratista y, en su caso, al contratante de ese período.
      .col-md.tarjeta.color-acento-contenido.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema3/img9.svg', alt='Texto que describa la imagen')
          
        h2.text-center Garantizar la continuidad desde el primer día
        p El empleador sí es responsable de que la cobertura del trabajador quede activa desde el día en que inicia la relación laboral. Por ejemplo, si el contrato inicia el 1 de marzo y el empleador demora la afiliación hasta el 15 del mismo mes, cualquier contingencia ocurrida en ese intervalo será de su responsabilidad directa.
    p El conocimiento de estas situaciones evita que el empleador asuma cargas que no le corresponden y, al mismo tiempo, le impide desatender las que sí son de su responsabilidad desde el momento exacto en que se formaliza el vínculo laboral.
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-3.col-8.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/temas/tema3/img10.png', alt='Texto que describa la imagen')
      .col-lg-9
        p Establecida la distinción entre empleador y contratante, y comprendidas las responsabilidades que cada figura asume frente al sistema, el paso siguiente es conocer con precisión cuáles son las afiliaciones que deben tramitarse desde el primer día de la relación laboral. Afiliar correctamente a un trabajador no es un trámite administrativo de carácter opcional ni diferible, es una obligación legal inmediata que activa la protección del trabajador frente a las contingencias de salud, pensión y riesgos laborales. 
        .p-4.bgf4
          p Cada componente del sistema tiene su propia entidad, su propio proceso y sus propios documentos requeridos, razón por la cual el profesional de nómina debe conocer con detalle el procedimiento aplicable a cada uno de ellos para garantizar que ningún trabajador quede desprotegido durante la vigencia del vínculo laboral.
    Separador
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 3.2 Afiliaciones obligatorias: salud, pensión, ARL y caja de compensación
    p La afiliación obligatoria al Sistema de Seguridad Social Integral comprende cuatro componentes que deben tramitarse desde el primer día de la relación laboral. La omisión de cualquiera de ellos constituye un incumplimiento legal que puede acarrear sanciones y responsabilidades directas del empleador frente a las contingencias que sufra el trabajador durante el período no afiliado. Los cuatro componentes son los siguientes:
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul").mb-4
          .row(titulo="Sistema General de Seguridad Social en Salud (EPS)")
            .col-lg
              p El proceso de afiliación inicia con la entrega al trabajador del formulario de afiliación o con el acceso a la plataforma en línea de la EPS seleccionada. El trabajador y sus beneficiarios deben presentar los documentos de identidad y los que acrediten el vínculo familiar, según el caso. Una vez tramitada la afiliación, la EPS tiene 24 horas para activar la cobertura y registrar al afiliado y sus beneficiarios en el sistema. Si el trabajador ya estaba afiliado a otra EPS, el empleador reporta la novedad de ingreso en la PILA y la EPS anterior gestiona el traslado administrativo. 
          .row(titulo="Sistema General de Pensiones (AFP o Colpensiones)")
            .col-lg
              p La afiliación requiere que el trabajador elija entre el RPM y el RAIS. Para los trabajadores que nunca han cotizado al sistema o que no han hecho una elección formal, la ley establece una afiliación por defecto a Colpensiones. El empleador tramita la afiliación ante la entidad seleccionada, aportando copia del documento de identidad del trabajador. Si el trabajador ya está afiliado al sistema pensional, el empleador reporta el ingreso en la PILA ante la misma administradora, sin necesidad de un nuevo proceso de afiliación. Es importante verificar que el número de la cuenta individual o el historial de cotizaciones del trabajador esté actualizado ante la administradora. 
          .row(titulo="Sistema General de Riesgos Laborales (ARL)")
            .col-lg
              p La afiliación es tramitada directamente por el empleador, quien debe registrar a la empresa y a sus trabajadores en la ARL de su elección, indicando la actividad económica, el NIT, la dirección del centro de trabajo y el número de trabajadores. La ARL clasifica la empresa según su actividad económica y asigna la clase de riesgo correspondiente, determinando la tarifa de cotización aplicable.
          .row(titulo="Caja de Compensación Familiar")
            .col-lg
              p La afiliación es obligatoria para todos los empleadores con trabajadores dependientes, con independencia del tamaño de la empresa y del valor de la nómina. Los aportes se calculan sobre el total de la nómina mensual a una tarifa del 4 % y dan derecho al trabajador y su familia a los servicios que cada caja ofrece en salud, educación, recreación, vivienda y crédito.
    p El correcto diligenciamiento de cada uno de estos procesos garantiza que el trabajador quede protegido desde el primer día de la relación laboral. En la siguiente tabla se presenta un resumen comparativo del proceso de afiliación por componente, con indicación de la entidad responsable y los documentos requeridos.
    .BG02.px-5
      .row.justify-content-center.align-items-center.mb-3
        .col-lg-10
          .titulo-sexto.color-acento-contenido
            h5 Tabla 4.
            span Proceso de afiliación por componente del sistema
      .row.justify-content-center.align-items-center.mb-4
        .col-lg-10
          .tabla-a.color-acento-contenido 
            .tabla-a   
              table
                thead
                  tr
                    th Componente
                    th Entidad
                    th Proceso y documentos requeridos
                tbody
                  tr(style="background-color: #FBF7F1;")
                    th Salud (SGSSS)
                    td EPS seleccionada por el trabajador.
                    td Formulario de afiliación del titular y beneficiarios, copia de cédula y documentos del vínculo familiar.
                  tr(style="background-color: #FFFFFF;")
                    th Pensión (SGP)
                    td AFP o Colpensiones según elección del trabajador.
                    td Formulario de afiliación (si no está afiliado) o novedad de ingreso en PILA (si ya está afiliado).
                  tr(style="background-color: #FBF7F1;")
                    th Riesgos Laborales (SGRL)
                    td ARL seleccionada por el empleador.
                    td Registro de la empresa y los trabajadores en la ARL, indicando actividad económica y clase de riesgo.
                  tr(style="background-color: #FFFFFF;")
                    th Caja de Compensación
                    td Caja seleccionada por el empleador.
                    td Afiliación de la empresa y registro de los trabajadores. Aportes del 4% sobre el total de la nómina.
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .p-4.bgf4
          p.MB-0 El proceso de afiliación a los cuatro componentes del sistema no debe entenderse como una serie de trámites independientes que se realizan en momentos distintos. Por el contrario, constituye un proceso integral que el empleador debe gestionar de manera simultánea desde el primer día de la relación laboral, garantizando que el trabajador quede protegido frente a cualquier contingencia de salud, pensión o riesgo laboral desde el momento exacto en que inicia sus funciones. La omisión o el retraso en cualquiera de estas afiliaciones deja al trabajador desprotegido y traslada al empleador la responsabilidad directa de asumir las prestaciones que el sistema hubiera cubierto.
    p Una vez tramitadas las afiliaciones, el siguiente paso es determinar con exactitud cuánto debe aportar cada parte al sistema. Este cálculo no es arbitrario: la ley establece porcentajes precisos, define qué ingresos constituyen la base sobre la cual se liquidan los aportes y fija topes que limitan el monto máximo de cotización. 
    p Comprender estos elementos con claridad es lo que permite al profesional de nómina liquidar correctamente los aportes, anticipar posibles inconsistencias y actuar con seguridad técnica frente a cualquier requerimiento de las entidades de control, aspectos que se abordan a continuación en la distribución de aportes, porcentajes, IBC y topes.                
    Separador
    #t_3_3.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 3.3 Distribución de aportes: porcentajes, IBC y topes
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-8.order-2.order-lg-1
        p El Ingreso Base de Cotización (IBC) es el valor mensual sobre el cual se calculan los porcentajes de aporte al sistema. Para los trabajadores dependientes, el IBC corresponde al salario devengado en el mes, el cual incluye el salario básico, las horas extras, los recargos, las comisiones habituales y cualquier otro pago que constituya salario conforme al artículo 127 del Código Sustantivo del Trabajo. Por el contrario, no hacen parte del IBC los pagos que expresamente no constituyen salario, entre los que se encuentran los siguientes:
        .p-4.bgf1
          ul.lista-ul
            li
              i.fas.fa-user(style="color: #FFB758;")
              p.mb-0 El auxilio de transporte no se incluye en el IBC, independientemente de su valor o de la forma en que se pacte en el contrato.
            li
              i.fas.fa-user(style="color: #FFB758;")
              p.mb-0 Los viáticos que no implican descanso remunerado no constituyen salario y, por tanto, no se suman a la base de cotización.
            li
              i.fas.fa-user(style="color: #FFB758;")
              p.mb-0 Las bonificaciones ocasionales que no son habituales ni retributivas del servicio quedan excluidas del IBC al no tener carácter salarial.
            li
              i.fas.fa-user(style="color: #FFB758;")
              p.mb-0 Los beneficios extralegales pactados expresamente como no salariales en el contrato o en la convención colectiva tampoco hacen parte de la base de cotización.            
      .col-lg-4.col-8.mb-4.mb-lg-0.order-1.order-lg-2
        figure
          img(src='@/assets/curso/temas/tema3/img11.png', alt='Texto que describa la imagen')
    p La correcta identificación de los pagos que integran el IBC y de los que quedan excluidos es una de las competencias técnicas más importantes del profesional de nómina, dado que cualquier inclusión o exclusión indebida afecta directamente el valor de los aportes, las prestaciones económicas del trabajador y la base sobre la cual la UGPP adelanta sus procesos de fiscalización.
    p Para aplicar correctamente la distribución de aportes en la liquidación de nómina, el profesional debe tener en cuenta las siguientes situaciones especiales que con frecuencia generan errores en el cálculo del IBC:
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-7.order-2.order-lg-1
        LineaTiempoD.color-primario
          .row(numero="1" titulo="Salario integral")
            .col-md-12.mb-4.mb-md-0
              p Los trabajadores que devengan un salario integral, equivalente a 10 SMLMV o más, cotizan sobre el 70 % de dicho salario, dado que el 30 % restante corresponde al factor prestacional ya incluido en la remuneración. Liquidar el aporte sobre el 100 % del salario integral en lugar del 70 % es uno de los errores más frecuentes en la liquidación de nómina.
          .row(numero="2" titulo="Trabajadores con múltiples empleadores")
            .col-md-12.mb-4.mb-md-0
              p Cuando un trabajador presta sus servicios a más de un empleador de manera simultánea, cada uno liquida los aportes sobre el IBC que corresponde a su vínculo. No obstante, la suma de todos los IBC no puede superar el tope de 25 SMLMV; si lo supera, el trabajador puede solicitar la devolución de los aportes pagados en exceso.
          .row(numero="3" titulo="Períodos inferiores al mes")
            .col-md-12.mb-4.mb-md-0
              p Cuando el trabajador no labora el mes completo por ingreso, retiro o suspensión del contrato, el IBC se calcula proporcionalmente a los días efectivamente laborados, aplicando la fórmula: IBC diario = IBC mensual ÷ 30.
          .row(numero="4" titulo="Pagos variables")
            .col-md-12.mb-4.mb-md-0
              p Las comisiones, los incentivos por productividad y los pagos por trabajo en días de descanso obligatorio hacen parte del IBC porque son habituales y retributivos del servicio. Su exclusión de la base de cotización constituye subdeclaración y genera diferencias que la UGPP puede detectar al cruzar la información de la PILA con las declaraciones de renta del empleador.
          .row(numero="5" titulo="Fechas límite de pago")
            .col-md-12.mb-4.mb-md-0
              p El pago de los aportes a través de la PILA debe realizarse dentro de los plazos establecidos por la Superintendencia Financiera, los cuales varían según el número de empleados de la empresa. El pago extemporáneo genera intereses de mora y puede activar un proceso de fiscalización por parte de la UGPP.
      .col-lg-3.col-4.mb-4.mb-lg-0.order-1.order-lg-2
        figure
          img(src="@/assets/curso/temas/tema3/img12.png", alt="alt")
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-3.col-8.mb-4.mb-lg-0
        figure
          img(src="@/assets/curso/temas/tema3/img13.png", alt="alt")
      .col-lg-9
        p El conocimiento de estas situaciones especiales permite al profesional de nómina anticipar errores que, de no corregirse antes de la presentación de la PILA, generan inconsistencias en la historia laboral del trabajador y pueden derivar en investigaciones por parte de la UGPP con consecuencias económicas significativas para la organización.
        .p-4.bgf1
          p.mb-0 Con el propósito de facilitar la consulta y verificación de los porcentajes de cotización aplicables a cada componente del sistema, en la tabla 5 se presenta la distribución de los aportes según el responsable del pago, diferenciando la parte que corresponde al empleador de la que corresponde al trabajador, así como los componentes que se calculan sobre el IBC y los que se liquidan sobre el total de la nómina.
    .row.justify-content-center.align-items-center.mb-3
      .col-lg-10
        .titulo-sexto.color-acento-contenido
          h5 Tabla 5.
          span Distribución de los aportes al Sistema de Seguridad Social Integral
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        .tabla-a.color-acento-contenido 
          .tabla-a   
            table
              thead
                tr
                  th Componente
                  th Empleador
                  th Empleador
              tbody
                tr(style="background-color: #FBF7F1;")
                  th Salud (SGSSS)
                  td 8.5% del IBC.
                  td 4% del IBC / Total: 12.5%.
                tr
                  th Pensión (SGP)
                  td 12% del IBC.
                  td 4% del IBC / Total: 16%.
                tr(style="background-color: #FBF7F1;")
                  th Solidaridad Pensional
                  td No aplica.
                  td 1% adicional (IBC > 4 SMLMV).
                tr
                  th Riesgos Laborales (ARL)
                  td 0.522% a 6.960% del IBC.
                  td 0% / Total según clase de riesgo.
                tr(style="background-color: #FBF7F1;")
                  th Caja de Compensación
                  td 4% del total nómina.
                  td No aplica.
                tr
                  th SENA
                  td 2% del total nómina (si nómina ≥ 10 SMLMV).
                  td No aplica.
                tr(style="background-color: #FBF7F1;")
                  th ICBF
                  td 3% del total nómina (si nómina ≥ 10 SMLMV).
                  td No aplica.
    .row.justify-content-center.align-items-center
      .col-lg-9.order-2.order-lg-1
        p La distribución de los aportes evidencia que la responsabilidad del pago no recae exclusivamente sobre el empleador: es una obligación compartida entre las partes de la relación laboral, con porcentajes y bases de cálculo diferenciados según el componente. Conocer con exactitud quién paga qué y sobre qué base es el punto de partida para una liquidación de nómina técnicamente correcta y ajustada a la normativa vigente.
        .row.justify-content-center.align-items-center
            .col-lg-auto.d-none.d-lg-block
              figure
                img(src='@/assets/curso/temas/tema3/img14.svg', style="width:70px", alt='Texto que describa la imagen').mb-2
            .col-lg-10
              p.mb-0 Una vez comprendida esta distribución y los porcentajes aplicables a cada componente del sistema, el siguiente reto del profesional de nómina es garantizar que los eventos que modifican la situación laboral del trabajador durante el período de liquidación queden correctamente registrados y reportados en la PILA. Estos eventos, denominados novedades, determinan el IBC real de cada período, activan o suspenden coberturas y definen quién asume el pago de las prestaciones correspondientes. Su manejo preciso es lo que distingue una liquidación rigurosa de una que expone a la organización a riesgos innecesarios frente a las entidades de control.        
      .col-lg-3.col-8.mb-4.mb-lg-0.order-1.order-lg-2
        figure
          img(src="@/assets/curso/temas/tema3/img15.png", alt="alt")
    Separador
    #t_3_4.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 3.4 Novedades y PILA
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-9.order-2.order-lg-1
        p Las novedades de nómina son eventos que modifican la situación laboral de un trabajador durante un período de liquidación, afectando el valor del IBC, la condición de afiliado al sistema o los responsables del pago de sus prestaciones. Su correcta identificación, registro y reporte en la PILA es fundamental para garantizar que los aportes al sistema reflejen fielmente la realidad de la relación laboral. Cada novedad tiene un código específico en la PILA, un impacto concreto en el IBC del período y una responsabilidad determinada sobre quién paga la prestación correspondiente. El dominio de estos aspectos es la competencia central del experto en novedades y liquidación de seguridad social.
        .bloque-texto-gg.tarjeta.bgf1.mb-4
          .bloque-texto-gg__texto.p-4
            p Las novedades que se describen a continuación representan los eventos más frecuentes en la gestión mensual de la nómina y determinan, en cada caso, el valor del IBC, el código que debe reportarse en la PILA y el actor responsable del pago de la prestación correspondiente:
          .bloque-texto-gg__img(
          :style="{'background-image':`url(${require('@/assets/curso/temas/tema3/img16.svg')})`}"
          )
      .col-lg-3.col-8.mb-4.mb-lg-0.order-1.order-lg-2
        figure
          img(src="@/assets/curso/temas/tema3/img17.svg", alt="alt")
    .BG022.p-5.mb-4
      .tarjeta.slider-custom-bg.p-4
        SlyderA(tipo="b")
          .row.justify-content-center.align-items-center
            .col-md-6.mb-4.mb-lg-0.order-1.order-lg-2
              figure
                img(src='@/assets/curso/temas/tema3/img17_1.svg', alt='Gráfico ilustrativo de uso de programa')
            .col-md-6.mb-4.mb-md-0.order-2.order-lg-1
              h4 La novedad de ingreso (código INI)
              p Debe reportarse en la PILA del mes en que el trabajador inicia la relación laboral, con la fecha exacta de inicio. Si el ingreso ocurre en la mitad del mes, el IBC del período se calcula de manera proporcional a los días laborados. IBC diario = IBC mensual ÷ 30. Esta novedad activa la cobertura del sistema para el nuevo trabajador desde la fecha indicada. Es fundamental que el reporte se realice antes del pago de la PILA para garantizar que el trabajador quede con cobertura activa desde el día de inicio. Un ingreso reportado tarde puede dejar al trabajador sin cobertura durante el período de demora.
          .row.justify-content-center.align-items-center
            .col-md-6.mb-4.mb-lg-0.order-1.order-lg-2
              figure
                img(src='@/assets/curso/temas/tema3/img18.svg', alt='Gráfico ilustrativo de uso de programa')
            .col-md-6.mb-4.mb-md-0.order-2.order-lg-1
              h4 La novedad de retiro (código RET)
              p Debe reportarse en la PILA del mes en que termina la relación laboral, con la fecha exacta de terminación. El IBC del período final se calcula proporcionalmente a los días laborados. Después del retiro, la cobertura de salud del trabajador se mantiene activa durante un período de protección laboral que varía entre uno y tres meses, dependiendo del tiempo de cotización, conforme al artículo 77 de la Ley 1753 de 2015. Esta protección es importante para el trabajador que queda desempleado, pues les garantiza el acceso a servicios de salud mientras busca un nuevo empleo.
          .row.justify-content-center.align-items-center
            .col-md-6.mb-4.mb-lg-0.order-1.order-lg-2
              figure
                img(src='@/assets/curso/temas/tema3/img19.svg', alt='Gráfico ilustrativo de uso de programa')
            .col-md-6.mb-4.mb-md-0.order-2.order-lg-1
              h4 Las novedades de incapacidad
              p Presentan una complejidad particular por el régimen diferenciado según el origen de la contingencia. Las incapacidades por enfermedad común o accidente no laboral durante los primeros dos días son asumidas por el empleador; a partir del tercer día y hasta el día 180, la EPS asume el pago del subsidio equivalente al 66.67% del IBC. Las incapacidades que superen 180 días pueden ser calificadas por las juntas de calificación de invalidez como incapacidad permanente parcial, invalidez o gran invalidez, con las prestaciones correspondientes a cargo del fondo de pensiones. Durante el período de incapacidad, el trabajador continúa cotizando a pensión y ARL sobre el valor del subsidio, pero la EPS es la que realiza el pago a la nómina.
          .row.justify-content-center.align-items-center
            .col-md-6.mb-4.mb-lg-0.order-1.order-lg-2
              figure
                img(src='@/assets/curso/temas/tema3/img19.svg', alt='Gráfico ilustrativo de uso de programa')
            .col-md-6.mb-4.mb-md-0.order-2.order-lg-1
              h4 Las licencias de maternidad y paternidad
              p Constituyen prestaciones económicas de especial protección legal en Colombia, financiadas por la EPS y sujetas a requisitos específicos de cotización. La licencia de maternidad, ampliada a 18 semanas calendario por la Ley 1822 de 2017, debe ser pagada por la EPS al 100 % del IBC; el empleador anticipa el valor a la trabajadora y lo recupera mediante la compensación en la PILA. La licencia de paternidad tiene una duración de ocho días hábiles conforme a la Ley 2114 de 2021 y sigue el mismo mecanismo de pago. Para que la EPS reconozca la licencia de maternidad, la trabajadora debe acreditar el período mínimo de cotización establecido por la ley; si no lo cumple, el empleador asume el costo proporcional a las semanas no cotizadas.
    p El manejo correcto de cada una de estas novedades exige identificar con precisión el código correspondiente, calcular el IBC aplicable al período y reportarlo oportunamente en la PILA. La siguiente tabla presenta de manera consolidada los códigos de novedad más frecuentes en la gestión de nómina, el período de cotización que afectan y el responsable del pago en cada caso.
    .row.justify-content-center.align-items-center.mb-3
      .col-lg-10
        .titulo-sexto.color-acento-contenido
          h5 Tabla 6.
          span Códigos de novedad PILA y su manejo en seguridad social
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        .tabla-a.color-acento-contenido 
          .tabla-a   
            table
              thead
                tr
                  th Código / Novedad
                  th Descripción, período de cotización y responsable del pago
              tbody
                tr(style="background-color: #FBF7F1;")
                  th INI – Ingreso.
                  td Inicio de la relación laboral. Activa cobertura del sistema. IBC proporcional si el ingreso no es el día 1.
                tr    
                  th RET – Retiro.
                  td Terminación laboral. IBC proporcional. Cobertura salud se extiende por período de protección.
                tr(style="background-color: #FBF7F1;")
                  th VSP – Variación salarial permanente.
                  td Cambio definitivo del IBC. Se aplica a partir del período en que ocurre. Impacta directamente el valor de todos los aportes.
                tr
                  th VSN – Variación salarial no permanente.
                  td Cambio transitorio del IBC (ej. bonificación temporal). Solo aplica para el período en que se produce.
                tr(style="background-color: #FBF7F1;")
                  th ING – Incapacidad enfermedad general.
                  td Días 1-2: paga empleador. Días 3-180: paga EPS al 66.67% del IBC. > 180 días: calificación de invalidez.
                tr
                  th LAM – Licencia maternidad.
                  td 18 semanas calendario. Paga EPS al 100% del IBC. El empleador anticipa y compensa en PILA.
                tr(style="background-color: #FBF7F1;")
                  th LAP – Licencia paternidad.
                  td 8 días hábiles. Paga EPS al 100% del IBC. El empleador anticipa y compensa en PILA.
                tr
                  th SLN – Suspensión del contrato.
                  td No se cotiza durante el período de suspensión (huelga, causa de fuerza mayor). Sin IBC en ese período.
                tr(style="background-color: #FBF7F1;")
                  th LNR – Licencia no remunerada.
                  td Período sin pago acordado entre las partes. No genera IBC ni aportes al sistema.
                tr
                  th TAE – Traslado AFP o EPS.
                  td Cambio de entidad administradora. Solo puede realizarse en los períodos permitidos por la ley.
    p.mb-0 El conocimiento de estos códigos y sus implicaciones en la liquidación de la seguridad social no es suficiente si no se acompaña del cumplimiento oportuno de los aportes y el reporte correcto en la PILA. Cuando se presentan omisiones o inexactitudes, la Unidad de Gestión Pensional y Parafiscal ejerce sus facultades de fiscalización, aspecto que se desarrolla en el siguiente subtema.     
    Separador
    #t_3_5.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 3.5 Sanciones y UGPP
    p.mb-4 Comprender la liquidación de aportes y el reporte correcto de novedades en la PILA también implica reconocer las consecuencias del incumplimiento. La Unidad de Gestión Pensional y Parafiscal (UGPP) es la entidad encargada de verificar que empleadores y contratantes cumplan sus obligaciones frente al sistema de protección social, para lo cual cuenta con amplias facultades de fiscalización y sanción.
    .bloque-texto-gg.tarjeta.bgf1.mb-4
          .bloque-texto-gg__texto.p-4
            .row
              .col-lg-auto.d-none.d-lg-block
                figure
                  img(src='@/assets/curso/temas/tema3/img22.svg', style="width:70px", alt='Texto que describa la imagen').mb-2
              .col-lg-12
                p.mb-0 La UGPP cuenta con acceso a múltiples fuentes de información tributaria, laboral y del sistema de seguridad social, lo que le permite identificar con precisión las omisiones e inexactitudes en los reportes de la PILA. Por esta razón, el conocimiento de sus facultades, los procedimientos de investigación y las sanciones aplicables no es opcional para el profesional de nómina, es una competencia indispensable para proteger al trabajador, al empleador y a la organización frente a las consecuencias del incumplimiento.    
          .bloque-texto-gg__img(
          :style="{'background-image':`url(${require('@/assets/curso/temas/tema3/img21.png')})`}"
          )
    p.mb-4 A continuación, se presentan de forma organizada los aspectos principales sobre la función fiscalizadora de la UGPP y las consecuencias del incumplimiento.
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        LineaTiempoD.color-primario
          .row(numero="1" titulo="Naturaleza y funciones de la UGPP")
            .col-md-12.mb-4.mb-md-0
              p Entidad creada por la Ley 1151 de 2007, adscrita al Ministerio de Hacienda y Crédito Público, cuya función principal es adelantar procesos de determinación, cobro y cobro coactivo de los aportes al sistema de protección social que no se hayan pagado o que se hayan liquidado por un valor inferior al debido. Ejemplo: una empresa que liquida los aportes de un trabajador sobre un salario inferior al real puede recibir una liquidación oficial de la UGPP por la diferencia, más los intereses moratorios causados.
          .row(numero="2" titulo="Alcance de la investigación")
            .col-md-12.mb-4.mb-md-0
              p La UGPP puede revisar información de hasta cinco años atrás mediante el cruce de datos provenientes de la Dirección de Impuestos y Aduanas Nacionales (DIAN), el Ministerio del Trabajo, las EPS, las AFP y las ARL. Ejemplo: si una empresa omitió reportar un trabajador durante seis meses, la UGPP detecta la inconsistencia al comparar las declaraciones de renta del empleador con los reportes de la PILA.
          .row(numero="3" titulo="Proceso de investigación")
            .col-md-12.mb-4.mb-md-0
              p Se desarrolla en etapas sucesivas, requerimiento de información, análisis de soportes, requerimiento para declarar o corregir, requerimiento de explicaciones, liquidación oficial y recursos de ley ante la jurisdicción contencioso-administrativa. Ejemplo: un empleador que recibe un requerimiento de información tiene un plazo legal para responder; si no lo hace, la UGPP avanza a la siguiente etapa sin considerar sus argumentos. 
          .row(numero="4" titulo="Sanciones económicas aplicables")
            .col-md-12.mb-4.mb-md-0
              p Comprenden la liquidación oficial de los aportes omitidos, los intereses moratorios desde la fecha en que debieron pagarse, la sanción por inexactitud de hasta el 160 % del mayor valor determinado y multas entre 1 y 20.000 UVT por no entregar información o hacerlo de forma errónea. Ejemplo: una empresa que reportó el IBC de diez trabajadores durante tres años puede enfrentar un pasivo que supera el valor de varios meses de nómina, incluyendo intereses y sanciones. 
          .row(numero="5" titulo="Responsabilidades adicionales")
            .col-md-12.mb-4.mb-md-0
              p El incumplimiento puede generar investigaciones del Ministerio del Trabajo, demandas laborales de los trabajadores afectados y, en ciertos casos, responsabilidad penal cuando el empleador descuenta aportes del salario del trabajador y no los traslada al sistema. Ejemplo: un empleador que retiene el descuento de salud de sus trabajadores y no lo gira a la EPS puede ser investigado penalmente por apropiación de recursos del sistema de seguridad social.
          .row(numero="6" titulo="Corrección voluntaria")
            .col-md-12.mb-4.mb-md-0
              p Cuando el empleador o contratante detecta errores y paga de manera anticipada los aportes omitidos con sus intereses, puede reducir significativamente las consecuencias del incumplimiento, pues la corrección oportuna antes del inicio formal de una investigación evita la aplicación de sanciones más gravosas. Ejemplo: una empresa que identifica en la conciliación mensual una diferencia de $450.000 en aportes y la corrige voluntariamente evita la multa por inexactitud que habría aplicado la UGPP en una investigación formal. 
          .row(numero="7" titulo="Conciliación mensual como control preventivo")
            .col-md-12.mb-4.mb-md-0
              p Comparar periódicamente los aportes liquidados en nómina con los valores efectivamente pagados en la PILA permite detectar diferencias a tiempo, corregir inconsistencias y reducir el riesgo de hallazgos en una eventual investigación. Ejemplo: una empresa que coteja mensualmente su nómina con la PILA detecta que un trabajador con variación salarial siguió cotizando sobre el salario anterior, corrige la novedad VSP y evita una acumulación de diferencias que la UGPP podría cuestionar.
    p.mb-4 Las facultades de la UGPP y la magnitud de las sanciones evidencian que la gestión de la seguridad social no es solo una tarea administrativa, sino una responsabilidad legal de alto impacto para la sostenibilidad de las organizaciones. El dominio de estos procesos proporciona la base necesaria para abordar los casos prácticos en los que se aplican los conceptos normativos a situaciones reales del contexto laboral colombiano.
    .titulo.mb-4(data-aos="fade-left")
      img(src='@/assets/curso/icon.png', alt='Imagen decorativa')
      h5 Sanciones por incumplimiento y función de la UGPP
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema3/img23.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La Unidad de Gestión Pensional y Parafiscal (UGPP) es la entidad del Estado responsable de adelantar las acciones de determinación y cobro de los aportes al sistema de protección social que no hayan sido pagados oportunamente o que hayan sido liquidados en un monto inferior al correcto. Fue creada mediante la Ley 1151 de 2007 y sus facultades de fiscalización le permiten revisar la información de nómina, los contratos, las PILA pagadas, las declaraciones de renta y cualquier otro documento relevante para establecer si un empleador o contratante ha cumplido sus obligaciones. Las investigaciones de la UGPP se basan en el cruce de grandes volúmenes de información proveniente de múltiples fuentes, por lo que su capacidad de detección de irregularidades es considerable.
    p.mb-4 Las sanciones que la UGPP puede imponer comprenden cuatro tipos de consecuencias económicas, que pueden aplicarse de manera simultánea según la gravedad del incumplimiento:
    .row.justify-content-center.mb-4
      .col-lg-3.mb-4.mb-lg-0
        .crd.crd--grayGrad(data-aos="flip-left")
          .bottomCircle
            figure
              img(src="@/assets/curso/temas/tema3/img24.svg", alt="alt")
          h5.text-center Liquidación oficial de aportes
          p.text-center Comprende el valor de los aportes omitidos o reportados por un valor inferior al debido, determinado mediante el cruce de información entre las fuentes disponibles para la UGPP.
      .col-lg-3.mb-4.mb-lg-0
        .crd.crd--grayGrad(data-aos="flip-left")
          .bottomCircle.mb-5
            figure
              img(src="@/assets/curso/temas/tema3/img25.svg", alt="alt")
          h5.text-center Intereses moratorios
          p.text-center Se calculan a la tasa certificada por la UGPP desde la fecha en que debieron pagarse los aportes hasta la fecha efectiva del pago. Su acumulación puede representar un valor significativo cuando el período investigado abarca varios años.
      .col-lg-3.mb-4.mb-lg-0
        .crd.crd--grayGrad(data-aos="flip-left")
          .bottomCircle.mb-5
            figure
              img(src="@/assets/curso/temas/tema3/img26.svg", alt="alt")
          h5.text-center Sanción por inexactitud
          p.text-center Se aplica cuando los aportes fueron declarados por un valor inferior al correcto y puede ascender hasta el 160 % del mayor valor determinado en la liquidación oficial.
      .col-lg-3.mb-4.mb-lg-0
        .crd.crd--grayGrad(data-aos="flip-left")
          .bottomCircle.mb-5
            figure
              img(src="@/assets/curso/temas/tema3/img27.svg", alt="alt")
          h5.text-center Multas por no suministrar información
          p.text-center Se imponen cuando el empleador o contratante no entrega la información requerida o la suministra de forma errónea. Su valor oscila entre 1 y 20.000 UVT según la gravedad de la conducta.
    p La acumulación de estos conceptos puede representar un impacto financiero que excede varias veces el valor de los aportes originalmente omitidos, lo que convierte el cumplimiento oportuno en la estrategia más eficiente para proteger la sostenibilidad de la organización.
    p.mb-4 El proceso de investigación de la UGPP sigue una secuencia de etapas progresivas que el empleador debe conocer para actuar oportunamente en cada momento:
    .row.justify-content-center.mb-4
      .col-xl-3.col-lg-6.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema3/img28.png", alt="alt")
          .crd_hover_txt--body
            h4.mb-3 Requerimiento de información
            p.mb-0 La UGPP solicita documentación sobre la nómina y los aportes para un período específico. El empleador tiene un plazo legal para responder con los soportes requeridos.

      .col-xl-3.col-lg-6.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema3/img29.png", alt="alt")
          .crd_hover_txt--body
            h4.mb-3 Requerimiento de explicaciones
            p.mb-0 Si del análisis de la información se concluyen diferencias, la UGPP presenta las inconsistencias identificadas y da al empleador la oportunidad de explicarlas o corregirlas voluntariamente.

      .col-xl-3.col-lg-6.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema3/img30.png", alt="alt")
          .crd_hover_txt--body
            h4.mb-3 Liquidación oficial de revisión
            p.mb-0 Cuando las explicaciones no son satisfactorias, la UGPP expide este acto administrativo, que determina los aportes adeudados y constituye el título ejecutivo de cobro.
      
      .col-xl-3.col-lg-6.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema3/img31.png", alt="alt")
          .crd_hover_txt--body
            h4.mb-3 Recursos de ley
            p.mb-0 Contra la liquidación oficial proceden los recursos de reposición y apelación en la vía administrativa y, de no prosperar, la acción ante la jurisdicción contencioso-administrativa.
    p Más allá de las actuaciones de la UGPP, el empleador que no cumpla con sus obligaciones de seguridad social puede enfrentar demandas laborales por parte de sus trabajadores, especialmente en casos de accidentes o enfermedades laborales durante períodos de no afiliación, investigaciones del Ministerio del Trabajo que pueden resultar en multas adicionales, y en casos extremos, responsabilidad penal por omisión del agente retenedor. 
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        .p-4.bgf2-1
          .row.justify-content-center.align-items-center
            .col-lg-auto.d-none.d-lg-block
              figure
                img(src='@/assets/curso/temas/tema3/img32.svg', style="width:70px", alt='Texto que describa la imagen').mb-2
            .col-lg-12
              p.text-center.mb-0 Implementar controles internos, mantener documentación soporte y actualizar el conocimiento normativo son las prácticas que distinguen al profesional de nómina competente y protegen a la organización frente a cualquier investigación de la UGPP.
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-9.order-2.order-lg-1
        p La mejor estrategia para enfrentar una investigación de la UGPP es haberla prevenido mediante el cumplimiento riguroso de las obligaciones de nómina. Cuando se detectan inconsistencias antes de recibir una notificación de la entidad, es conveniente optar por la corrección voluntaria, pagar los aportes omitidos con sus intereses moratorios antes de que la UGPP inicie la investigación puede reducir significativamente las sanciones aplicables, pues las multas por inexactitud y las penalidades adicionales no proceden cuando la corrección es voluntaria y oportuna. Esta práctica es, además, un indicador de la cultura de cumplimiento de la organización, que puede ser valorada favorablemente en futuras investigaciones.
      .col-lg-3.col-8.mb-4.mb-lg-0.order-1.order-lg-2
        figure
          img(src='@/assets/curso/temas/tema3/img33.svg', alt='Texto que describa la imagen')
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-3.col-8.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/temas/tema3/img34.svg', alt='Texto que describa la imagen')
      .col-lg-9
        .p-4.bgf1
          p El dominio de los fundamentos normativos, las obligaciones del empleador y las consecuencias del incumplimiento se consolida cuando se aplica a situaciones laborales reales. El tema que se desarrolla a continuación traslada estos conceptos al ejercicio concreto de liquidar aportes, reportar novedades y tomar decisiones correctas en el área de nómina de cualquier organización colombiana.
    
</template>

<script>
export default {
  name: 'Tema3',
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
