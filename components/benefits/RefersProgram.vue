<template>
  <section
    class="d-flex justify-content-center d-flex flex-column justify-content-center align-items-center"
  >
    <div class="section-title">
      <h2>¿Qué es el Programa de referidos?</h2>
      <div class="section-decorator"></div>
    </div>
    <div class="row section-container mt-5" style="width: 80%">
      <div class="col col-12 col-lg-6">
        <div
          style="width: 80%"
          class="d-flex flex-column justify-content-center align-items-center"
        >
          <h3
            style="
              color: #0393aa;
              font-weight: 700;
              font-style: italic;
              font-size: 2.3em;
            "
          >
            !REFIERE Y GANA
          </h3>
          <p class="text-center">
            El programa de referidos es un programa de recompensas para todos
            los miembros de la comunidad de Evialumnos. El cual te permite
            acumular descuentos por cada persona nueva que llegue con tu código;
            es decir,
            <span style="color: #0393aa"
              >a más personas que recomiendes, más descuentos obtendrás
            </span>
            en nuestros cursos.
          </p>
        </div>
      </div>
      <div class="col col-12 col-lg-6">
        <div
          class="d-flex flex-column gap-2"
          style="
            background: #1c1c24;
            box-shadow: 0px -4px 50px 0px rgba(0, 0, 0, 0.2);
            border-radius: 2em;
            padding: 1.5em;
          "
        >
          <span
            > Al registrarte dentro del programa de referidos, podrás obtener
            los siguientes beneficios:</span
          >
          <ul>
            <li>
              Gana 20 soles por cada persona nueva que refieras y se matricule a
              un curso. 
            </li>
            <li>
              Estos 20 soles pueden ser canjeados con descuentos en los cursos y
              son acumulables. 
            </li>
            <li>Obtén material exclusivo vía mailing.</li>
          </ul>
        </div>
      </div>
    </div>
    <div
      class="row section-container mt-5 pt-4"
      style="
        width: 80%;
        background: #0393aa;
        border-radius: 1em;
        box-shadow: 0px 4px 50px 0px rgba(0, 0, 0, 0.5);
      "
    >
      <h3 class="text-center">¿CÓMO SER PARTE DEL PROGRAMA DE REFERIDOS Y GANAR BENEFICIOS?</h3>
      <div class="row mt-3">
        <div class="col col-12 col-lg-4">
          <img
            src="/assets/img/benefits/evi-referido.png"
            style="width: 80%; height: 100%"
          />
        </div>
        <div class="col col-12 col-lg-8 d-flex flex-column justify-content-center align-items-center">
          <div class="time-line d-flex">
            <div class="time-line-item" v-for="item in proccess" :key="item">
              <div class="time-line-item-number d-flex align-items-center" style="min-width: 200px;">
                <span class="d-flex justify-content-center align-items-center " style="width: 40px;height: 40px;border-radius: 50%;background: white; color: black;font-weight: 700;font-size:1.5em;">{{ item.step }}</span>
                <div style="width: 250px ;height: 1px;background: white;" v-if="item.step!=proccess.length"></div>
              </div>
              <div class="time-line-item-content mt-2" style="width:60%;">
                <p class="text-center" style="color:black;font-weight: 700;">{{ item.title }}</p>
              </div>
            </div>
          </div>
          <div class="btn-white mt-5" style="width: 50%;" @click="openRefersModal">
            <span>Llenar Formulario</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
const proccess = reactive([
  {
    step: "1",
    title:
      "Ser miembro de la comunidad de Evialumnos; es decir, haber llevado al menos un curso de EviSalud.",
  },
  {
    step: "2",
    title: "Llena el formulario.",
  },
  {
    step: "3",
    title:
      "Disfruta de tus beneficios, brindando tu código de referido a tus amigos.",
  },
]);
export default {
  emits: ["openRefersModal"],
  setup(props, ctx) {
    const openRefersModal = () => {
      ctx.emit("openRefersModal");
    };
    return {
      proccess,
      openRefersModal
    };
  },
};
</script>
<style scoped>
p,
ul,
span {
  font-family: "Axiforma", sans-serif;
}.time-line-item-number-container{
  min-width: calc(100%-40px);
}
</style>