
import type ExplorerVue from '../courses/Explorer.vue';
<template>
  <div class="our-experiences-container">
    <div class="our-experiences__title">
      <h2>Nuestra Experiencia</h2>
      <div class="our-experiences__title-decorator"></div>
    </div>
    <div class="our-experiences__body">
      <ul class="our-experiences-values">
        <li v-for="(expV, expI) in expValues" :key="`expv-${expI}`">
          <h3>{{ expV.value }}</h3>
          <span>{{ expV.name }}</span>
        </li>
      </ul>
    </div>
    <div class="our-experiences__divider"></div>
    <div class="our-experiences__footer">
      <span class="mb-3">Nuestros docentes participaron en:</span>
      <ul class="our-doc-experiences-values">
        <li v-for="(docExpV, docExpI) in docExp" :key="`expv-${docExpI}`">
          <div class="our-doc-experiences__value">
            <h3>{{ docExpV.value }}</h3>
            <span>{{ docExpV.name }}</span>
          </div>
          <div
            class="our-doc-experiences__divider"
            v-if="docExpI != docExp.length - 1"
          ></div>
        </li>
      </ul>
    </div>
    <svg
      style="position: absolute; top: 0; right: 0"
      width="267"
      height="157"
      viewBox="0 0 267 157"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M-90.7625 5.95312C-73.8685 5.95969 59.9977 5.95312 59.9977 5.95312C55.9422 10.2552 55.2042 14.1642 56.181 23.3138C56.181 23.3138 -75.6916 23.3098 -90.7625 23.3138C-105.833 23.3178 -107.657 5.94656 -90.7625 5.95312Z"
        fill="#F0F0F0"
      />
      <path
        d="M-60.066 129.563C-46.6634 129.57 59.5371 129.563 59.5371 129.563C56.3198 133.866 55.7343 137.775 56.5092 146.924C56.5092 146.924 -48.1097 146.92 -60.066 146.924C-72.0222 146.928 -73.4686 129.557 -60.066 129.563Z"
        fill="#F0F0F0"
      />
      <path
        d="M19.0662 83.6719C28.6721 83.6653 104.788 83.6719 104.788 83.6719C102.483 79.3698 102.063 75.4608 102.618 66.3112C102.618 66.3112 27.6355 66.3152 19.0662 66.3112C10.4969 66.3072 9.46022 83.6784 19.0662 83.6719Z"
        fill="#F0F0F0"
      />
      <path
        d="M116.239 22.2617C133.133 22.2552 267 22.2617 267 22.2617C262.944 17.9597 262.206 14.0507 263.183 4.90103C263.183 4.90103 131.31 4.905 116.239 4.90103C101.169 4.89705 99.3454 22.2683 116.239 22.2617Z"
        fill="#F0F0F0"
      />
      <path
        d="M113.539 146.043C126.942 146.036 233.143 146.043 233.143 146.043C229.925 141.741 229.34 137.832 230.115 128.682C230.115 128.682 125.496 128.686 113.539 128.682C101.583 128.678 100.137 146.05 113.539 146.043Z"
        fill="#F0F0F0"
      />
      <circle cx="-10.2165" cy="77.511" r="16.2757" fill="#F0F0F0" />
      <circle cx="82.5569" cy="16.2757" r="16.2757" fill="#F0F0F0" />
      <circle cx="82.0999" cy="139.975" r="16.2757" fill="#F0F0F0" />
    </svg>
    <svg
      style="position: absolute; bottom: 0; left: 0"
      width="1440"
      height="342"
      viewBox="0 0 1440 342"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M-90.7625 190.953C-73.8685 190.96 59.9977 190.953 59.9977 190.953C55.9422 195.255 55.2042 199.164 56.181 208.314C56.181 208.314 -75.6916 208.31 -90.7625 208.314C-105.833 208.318 -107.657 190.947 -90.7625 190.953Z"
        fill="#F0F0F0"
      />
      <path
        d="M-60.066 314.563C-46.6634 314.57 59.5371 314.563 59.5371 314.563C56.3198 318.866 55.7343 322.775 56.5092 331.924C56.5092 331.924 -48.1097 331.92 -60.066 331.924C-72.0222 331.928 -73.4686 314.557 -60.066 314.563Z"
        fill="#F0F0F0"
      />
      <path
        d="M19.0662 268.672C28.6721 268.665 104.788 268.672 104.788 268.672C102.483 264.37 102.063 260.461 102.618 251.311C102.618 251.311 27.6355 251.315 19.0662 251.311C10.4969 251.307 9.46022 268.678 19.0662 268.672Z"
        fill="#F0F0F0"
      />
      <path
        d="M116.239 207.262C133.133 207.255 267 207.262 267 207.262C262.944 202.96 262.206 199.051 263.183 189.901C263.183 189.901 131.31 189.905 116.239 189.901C101.169 189.897 99.3454 207.268 116.239 207.262Z"
        fill="#F0F0F0"
      />
      <path
        d="M113.539 331.043C126.942 331.036 233.143 331.043 233.143 331.043C229.925 326.741 229.34 322.832 230.115 313.682C230.115 313.682 125.496 313.686 113.539 313.682C101.583 313.678 100.137 331.05 113.539 331.043Z"
        fill="#F0F0F0"
      />
      <circle cx="-10.2165" cy="262.511" r="16.2757" fill="#F0F0F0" />
      <circle cx="82.5569" cy="201.276" r="16.2757" fill="#F0F0F0" />
      <circle cx="82.0999" cy="324.975" r="16.2757" fill="#F0F0F0" />
      <path
        d="M1224.8 6.54883C1234.37 6.5554 1310.23 6.54883 1310.23 6.54883C1307.93 10.8509 1307.51 14.7599 1308.07 23.9095C1308.07 23.9095 1233.34 23.9055 1224.8 23.9095C1216.26 23.9135 1215.22 6.54226 1224.8 6.54883Z"
        fill="#F0F0F0"
      />
      <path
        d="M1236.25 123.193C1243.12 123.2 1297.56 123.193 1297.56 123.193C1295.91 127.495 1295.61 131.404 1296.01 140.554C1296.01 140.554 1242.38 140.55 1236.25 140.554C1230.13 140.558 1229.38 123.187 1236.25 123.193Z"
        fill="#F0F0F0"
      />
      <path
        d="M1282.93 68.5635C1296.34 68.57 1402.54 68.5635 1402.54 68.5635C1399.32 72.8655 1398.73 76.7745 1399.51 85.9242C1399.51 85.9242 1294.89 85.9202 1282.93 85.9242C1270.98 85.9281 1269.53 68.5569 1282.93 68.5635Z"
        fill="#F0F0F0"
      />
      <path
        d="M1362.07 22.6719C1371.67 22.6653 1447.79 22.6719 1447.79 22.6719C1445.48 18.3698 1445.06 14.4608 1445.62 5.31119C1445.62 5.31119 1370.64 5.31516 1362.07 5.31119C1353.5 5.30721 1352.46 22.6784 1362.07 22.6719Z"
        fill="#F0F0F0"
      />
      <path
        d="M1346.77 139.996C1353.41 139.99 1406.07 139.996 1406.07 139.996C1404.47 135.694 1404.18 131.785 1404.57 122.635C1404.57 122.635 1352.7 122.639 1346.77 122.635C1340.84 122.631 1340.12 140.003 1346.77 139.996Z"
        fill="#F0F0F0"
      />
      <circle cx="1332.78" cy="16.511" r="16.2757" fill="#F0F0F0" />
      <circle cx="1320.1" cy="129.419" r="16.2757" fill="#F0F0F0" />
      <circle cx="1425.1" cy="78.9749" r="16.2757" fill="#F0F0F0" />
    </svg>
  </div>
</template>
<script setup>
const expValues = reactive([
  {
    name: "Cursos Realizados",
    value: "+80",
  },
  {
    name: "Cursos Para Instituciones",
    value: "8",
  },
]);
const docExp = reactive([
  {
    name: "Articulos Cientificos",
    value: "+100",
  },
  {
    name: "Guias de practica clinica",
    value: "+30",
  },
  {
    name: "Evaluaciones de tecnología sanitaria",
    value: "10",
  },
]);
</script>
<style lang="scss" scoped>
.our-experiences-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #0393aa;
  padding: 2em;
  position: relative;
  .our-experiences__title {
    display: flex;
    flex-direction: column;
    position: relative;
    h2 {
      color: #f0f0f0;
      font-family: Axiforma;
      font-size: 26px;
    }
    .our-experiences__title-decorator {
      border-radius: 20px;
      opacity: 0.5;
      background: #f0f0f0;
      width: 100%;
      height: 24px;
      position: absolute;
      bottom: 0;
      right: -2em;
    }
  }
  .our-experiences__divider {
    width: 80%;
    height: 1px;
    background: #f0f0f0;
    margin: 0.5em 0;
  }
  .our-experiences__body {
    width: 80%;
    .our-experiences-values {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      li {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        column-gap: 1.5em;
        h3 {
          color: #f0f0f0;
          font-family: Axiforma;
          font-size: 52px;
          font-weight: 700;
        }
        span {
          color: #f0f0f0;
          font-family: Axiforma;
          font-size: 16px;
          font-weight: 300;
        }
      }
    }
  }
  .our-experiences__footer {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #f0f0f0;
    font-family: Axiforma;
    font-weight: 300;
    .our-doc-experiences-values {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      list-style: none;
      column-gap: 2em;
      padding: 0.5em 1.5em;

      li {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        column-gap: 1.5em;
        .our-doc-experiences__value {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          h3 {
            color: #f0f0f0;
            font-family: Axiforma;
            font-size: 26px;
            margin: 0;
            font-weight: 700;
          }
          span {
            color: #f0f0f0;
            font-family: Axiforma;
            font-size: 14px;
            font-weight: 300;
            text-align: center;
          }
        }
        .our-doc-experiences__divider {
          width: 1px;
          height: 50px;
          background: #f0f0f0;
        }
      }
    }
  }
  svg{
    display: none;
    path{
        fill-opacity: 0.3;
    }circle{
        fill-opacity: 0.3;
    
    }
  }
  @media (min-width: 768px) {
    .our-experiences__body{
        .our-experiences-values{
            column-gap: 6em;
            li{
                h3{
                    font-size: 72px;
                }
            }
        }
    }
    .our-doc-experiences-values {
      border: 1px solid #f0f0f0;
      border-radius: 5em;
    }
    .our-experiences__divider {
      width: 80%;
      height: 1px;
      background: #f0f0f0;
      margin: 1em 0;
      display: none;
    }svg{
        display: flex;
    }
  }
}
</style>