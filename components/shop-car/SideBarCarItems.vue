
<template>
  <div class="cart-sidebar">
    <div style="position: relative" class="d-flex flex-column my-5">
      <span
        style="
          color: white;
          font-size: 1.5em;
          text-align: center;
          z-index: 5;
          font-weight: 400;
        "
        >Carrito de Compras
        <span class="ml-2" v-if="getCarItems.length > 0"
          >({{ getCarItems.length }} curso(s))</span
        ></span
      >
      <div
        style="
          background: #0393aa;
          width: 60%;
          right: 5em;
          height: 1.5em;
          position: absolute;
          border-radius: 1em;
          bottom: -0.3em;
          z-index: 4;
          opacity: 0.7;
        "
      ></div>
    </div>
    <ul class="cart-items mb-4">
      <li
        class="cart-item d-flex flex-row gap-3"
        v-for="(cartItem, cartIndex) in getCarItems"
        :key="`cart-item-${cartIndex}`"
      >
        <img
          :src="cartItem.img"
          style="width: 150px; height: 100%; border-radius: 1em 0 0 1em"
          alt="car-item-img"
        />
        <div
          style="width: 100%"
          class="cart-item__price d-flex flex-column justify-content-between"
        >
          <svg
            @click="removeItemFromCar(cartItem)"
            style="align-self: flex-end; cursor: pointer"
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
          >
            <path
              d="M6.26055 7.49804L0.260527 1.49645C-0.0868425 1.14899 -0.0868425 0.596157 0.260527 0.264546C0.592164 -0.0829142 1.14471 -0.0829142 1.49211 0.248792L7.49213 6.25038L13.4922 0.248792C13.8395 -0.0829308 14.3921 -0.0829308 14.7395 0.248792C15.0711 0.596253 15.0711 1.14897 14.7395 1.49644L8.73945 7.49803L14.7395 13.4996C15.0868 13.8471 15.0868 14.3999 14.7395 14.7315C14.5658 14.921 14.3447 15 14.1237 15C13.9026 15 13.6816 14.921 13.5079 14.7473L7.50787 8.74568L1.50784 14.7473C1.33415 14.921 1.11311 15 0.892053 15C0.671004 15 0.449944 14.921 0.276259 14.7473C-0.0711098 14.3998 -0.0711098 13.847 0.276259 13.5154L6.26055 7.49804Z"
              fill="#D04036"
            />
          </svg>
          <span class="cart-item__price-title">
            {{ cartItem.title }}
          </span>
          <span class="cart-item__price-pricepen">
            Precio: PEN {{ cartItem.pricePen }}
          </span>
        </div>
      </li>
    </ul>
    <div
      class="price-container d-flex flex-row justify-content-between align-items-center"
    >
      <div class="price-container__values">
        <span class="price-container__title">Total</span>
        <span class="price-container__pricepen">PEN {{ getCarTotal() }}</span>
      </div>
      <div class="btn-white">
        <span style="text-decoration: underline" @click="startProcess"
          >Iniciar proceso de compra</span
        >
      </div>
    </div>
  </div>
</template>
<script>
import { carStore } from "../../store/car/car.store";
import { authStore } from "../../store/auth/auth.store";
import { useRouter } from "vue-router";
export default {
  emits: ["closeCarSideBar"],
  setup(props, ctx) {
    const router = useRouter();

    const isLogged = authStore().isLogged;

    const store = carStore();
    const getCarItems = store.getCarItems;
    const getCarTotal = () => {
      if (getCarItems.length === 0) {
        return 0;
      }
      return getCarItems.reduce((acc, item) => {
        return acc + item.pricePen;
      }, 0);
    };
    const removeItemFromCar = (item) => {
      store.removeCarItem(item);
    };
    const startProcess = () => {
      console.log("start process");

      ctx.emit("closeCarSideBar");
      router.push("/checkout");
    };
    return {
      getCarItems,
      getCarTotal,
      removeItemFromCar,
      startProcess,
    };
  },
};
</script>

<style lang="scss" scoped>
span {
  font-family: "Axiforma";
}
.cart-sidebar {
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  min-width: 35em;
  width: 35em;
  background: #fff;
  z-index: 999;
  transition: transform 0.3s ease-in-out;
  background: #13131a;
  border-radius: 0 0 0 4em;
  .cart-items {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 1em;
    max-height: 70%;
    overflow-y: auto;
    width: 100%;
    .cart-item {
      padding: 1em;
      color: white;
      width: 90%;
      height: 200px;
      border-radius: 15px;
      background: #1c1c24;
      box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.04);

      .cart-item__price {
        margin-top: 1em;
        .cart-item__price-title {
          font-weight: 700;
          font-size: 1.5em;
          word-break: break-word;
        }
        .cart-item__price-pricepen {
          align-self: flex-end;
          font-weight: 700;
          font-size: 1.2em;
          word-break: break-all;
          color: #0393aa;
        }
      }
    }
  }
  .price-container {
    position: fixed;
    bottom: 0;
    padding: 2em 5em 2em 4em;
    width: 30%;
    background: #0393aa;
    border-radius: 0 0 0 5em;
    margin-right: 5em;
    .price-container__values {
      display: flex;
      flex-direction: row;
      gap: 1em;
      span {
        color: white;
        font-weight: 400;
        font-size: 1.2em;
      }
    }
    .btn-white {
      width: 50%;
    }
  }
}
</style>