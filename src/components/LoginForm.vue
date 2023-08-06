<template>
  <v-container class="min-full d-flex align-center justify-center">
    <v-card min-width="500px">
      <v-card-title>Log in</v-card-title>
      <v-card-text class="mt-3">
        <v-col cols="12">
          <v-row>
            <v-text-field
              label="E-mail"
              density="compact"
              variant="outlined"
              v-model="user.email"
              :error-messages="v$.email.$errors[0]?.$message"
            >
            </v-text-field>
          </v-row>
        </v-col>
        <v-col cols="12" class="mt-2">
          <v-row>
            <v-text-field
              label="Password"
              type="password"
              density="compact"
              variant="outlined"
              v-model="user.password"
              :error-messages="v$.password.$errors[0]?.$message"
            >
            </v-text-field>
          </v-row>
        </v-col>
      </v-card-text>
      <v-card-actions>
        <v-row>
          <v-spacer />
          <v-col cols="8">
            <v-btn
              variant="tonal"
              elevation="3"
              @click="onLogin()"
              block
              rounded="xl"
              >Log in</v-btn
            >
          </v-col>
          <v-spacer />
        </v-row>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
import { reactive } from "vue";
import { useVuelidate } from "@vuelidate/core";
import { required, email, helpers, minLength } from "@vuelidate/validators";
import { useRouter } from 'vue-router'

export default {
  setup() {
    const user = reactive({ email: "", password: "" });
  
    const rules = {
      email: {
        required: helpers.withMessage("E-mail field is required!", required),
        email: helpers.withMessage("E-mail is incorrect!", email),
      },
      password: {
        required: helpers.withMessage("Password field is required!", required),
        minLength: helpers.withMessage("The length of the password cannot be less than 6!", minLength(6))
      },
    };

    const v$ = useVuelidate(rules, user);

    const router = useRouter()

    const onLogin = async () => {
      const result = await v$.value.$validate();
      if (result) {
        router.push({name: 'game'})
      }
    };

    return {
      onLogin,
      user,
      v$,
    };
  },
};
</script>