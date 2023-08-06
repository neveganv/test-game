<template>
  <div>
    <v-container class="mt-15">
      <v-row justify="center" class="font-weight-500 font-24">
        Choose Size!
      </v-row>
      <v-row align="center">
        <v-col cols="5">
          <v-text-field
            v-model.number="sizesInput.x_size"
            label="Size X"
            density="compact"
            variant="outlined"
            hide-details
            type="number"
            min="0"
          />
        </v-col>
        <v-col cols="5">
          <v-text-field
            v-model.number="sizesInput.y_size"
            label="Size Y"
            density="compact"
            variant="outlined"
            hide-details
            type="number"
            min="0"
          />
        </v-col>
        <v-col cols="2">
          <v-btn
            variant="tonal"
            elevation="3"
            @click="createPixels()"
            block
            rounded="xl"
            >Go!</v-btn
          >
        </v-col>
      </v-row>

      <div class="square-wrapper mt-5">
        <div class="square-wrapper-row" v-for="i in sizesForDraw.y_size" :key="i">
          <div v-for="i in sizesForDraw.x_size" :key="i" class="square"></div>
        </div>
      </div>
    </v-container>
  </div>
</template>

<script>
import { reactive, ref } from "vue";

export default {
  setup() {
    const sizesInput = reactive({ x_size: 0, y_size: 0 });
    const sizesForDraw = ref({ x_size: 0, y_size: 0 });

    const createPixels = () => {
      sizesForDraw.value.x_size = sizesInput.x_size;
      sizesForDraw.value.y_size = sizesInput.y_size;
    };

    return {
      sizesInput,
      sizesForDraw,
      createPixels,
    };
  },
};
</script>

<style scoped lang="scss">
.square-wrapper {
  min-height: calc(100vh - 280px);
  max-height: calc(100vh - 280px);
  overflow: auto;
  white-space: nowrap;
  &-row {
    height: 36px;
  }
}
.square {
  width: 36px !important;
  height: 36px;
  background-color: rgb(225, 225, 225);
  display: inline-block;
  border: 1px solid rgb(68, 68, 68);
  transition: 0.2s ease-out;
  &:hover {
    background-color: rgb(78, 144, 206);
  }
}
</style>