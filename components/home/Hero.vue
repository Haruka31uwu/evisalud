<template>
  <div class="hero-container">
    <div class="hero"></div>
    <div class="hero-content">
     <div class="hero-content-text">
        <h1>
            Aprende de forma dinámica y aplicada a realizar investigación en salud y tomar decisiones basadas en evidencias
        </h1>
        <div class="btn-white">
            <span>Inicia ahora</span>
        </div>
     </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.hero-container {
  position: relative;
  height: 970px;
  .hero {
    height: 100%;
    width: auto;
    background: url("/assets/img/hero.jpg") no-repeat;
    background-size: cover;
    background-position-y: -12em;

    transform: scaleX(-1);
    z-index: 1;
  }
  .hero-content {
    position: absolute;
    width:60%;
    height: 100%;
    top:0;
    background: linear-gradient(90deg, #1F3C90 0%, #00A9C396 100%);
    border-radius: 0px 50% 50% 0px;
    display: flex;
    align-items: center;
  }
  @media (max-width: 1250px) {
    .hero-content {
      width: 100%;
    }
  }
}
</style>