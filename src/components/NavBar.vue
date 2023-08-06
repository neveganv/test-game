<template>
  <v-app-bar elevation="2">
    <v-container>
      <v-row no-gutters align="center">
        <v-app-bar-nav-icon>
          <v-icon @click="$router.push('/')">mdi-nintendo-game-boy</v-icon>
        </v-app-bar-nav-icon>
        <v-app-bar-nav-title> Pixel Game </v-app-bar-nav-title>
        <v-spacer />
        <v-col v-if="$route.name == 'game'" cols="1">
          <v-btn variant="text" size="small" @click="$router.push('/')" block
            >Log out</v-btn
          >
        </v-col>
      </v-row>
    </v-container>
  </v-app-bar>
</template>