<template>
  <main>
    <div class="bg-white dark:bg-[#111111] sm:px-5 md:px-10 lg:rounded-2xl lg:px-20 lg:py-12">
      <div class="section-title">
        <h1 class="dark:text-[white] after:h-[2px] after:bg-[#FA5252]
           after:hidden md:after:inline-block after:relative after:align-middle after:w-[12rem]
           after:left-2 text-5xl font-semibold p-4">Contact
        </h1>
      </div>
      <div class="grid grid-cols-1 lg:grid-cols-3">
        <div class="info col-span-1">
          <div class="info-box flex">
            <span class="w-8">
              <img src="/images/contact/phone-call.png" alt="">
            </span>
            <span class="px-2 flex flex-col justify-center">
              <p class="text-xl font-semibold dark:text-white">Phone:</p>
              <p class="dark:text-[white]"> +84 348 043 ***</p>
            </span>
          </div>
          <div class="info-box flex">
            <span class="w-8">
              <img src="/images/contact/email.png" alt="">
            </span>
            <span class="px-2 flex flex-col justify-center">
              <p class="text-xl font-semibold dark:text-white">Email:</p>
              <p class="dark:text-[white]"> haipham2001vn@gmail.com</p>
            </span>
          </div>
          <div class="info-box flex">
            <span class="w-8">
              <img src="/images/contact/map.png" alt="">
            </span>
            <span class="px-2 flex flex-col justify-center">
              <p class="text-xl font-semibold dark:text-white">Address:</p>
              <p class="dark:text-[white]"> Binh Duong, Vietnam</p>
            </span>
          </div>
        </div>
        <div class="form-contact col-span-2">
          <div
            class="dark:border-[#212425] dark:border-2 mb-16 md:p-[48px] p-4 bg-color-810 rounded-xl dark:bg-[#111111] mb-[30px] md:mb-[60px] bg-[#F8FBFB]">
            <h3 class="text-4xl">
              <span class="text-gray-lite dark:text-[#A6A6A6]">I'm always open to
                discussing product</span>
              <br />
              <span class="font-semibold dark:text-white">design work or
                partnerships.</span>
            </h3>

            <form @submit="onSubmit" id="myForm" action="" method="POST">
              <!-- name input -->
              <div class="relative z-0 w-full mt-[40px] mb-8 group">
                <input v-bind="name" type="text" id="name" name="name"
                  class="block autofill:bg-transparent py-2.5 px-0 w-full text-sm text-gray-lite bg-transparent border-0 border-b-[2px] border-[#B5B5B5] appearance-none dark:text-white dark:border-[#333333] dark:focus:border-[#FF6464] focus:outline-none focus:ring-0 focus:border-[#FF6464] peer"
                  placeholder=" " />
                <label for="name"
                  class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-color-910 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#FF6464] peer-focus:dark:text-[#FF6464] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8">Name
                  *</label>
                <span class="text-xs text-[red]">{{ errors.name }}</span>
              </div>

              <!-- email input  -->
              <div class="relative z-0 w-full mb-8 group">
                <input v-bind="email" type="email" name="user_email"
                  class="block autofill:text-red-900 needed py-2.5 px-0 w-full text-sm text-gray-lite bg-transparent border-0 border-b-[2px] border-[#B5B5B5] appearance-none dark:text-white dark:border-[#333333] dark:focus:border-[#FF6464] focus:outline-none focus:ring-0 focus:border-[#5185D4] peer"
                  placeholder=" " id="user_email" />
                <label for="user_email"
                  class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-color-910 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#5185D4] peer-focus:dark:text-[#FF6464] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8">Email
                  *</label>
                <span class="text-xs text-[red]">{{ errors.email }}</span>
              </div>

              <!-- massage input -->
              <div class="relative z-0 w-full mb-8 group">
                <textarea v-bind="message" type="text" name="message"
                  class="block autofill:bg-yellow-200 py-2.5 px-0 w-full text-sm text-gray-lite bg-transparent border-0 border-b-[2px] border-[#B5B5B5] appearance-none dark:text-white dark:border-[#333333] dark:focus:border-[#FF6464] focus:outline-none focus:ring-0 focus:border-[#CA56F2] peer"
                  placeholder=" " id="message" />
                <label for="message"
                  class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-color-910 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#CA56F2] peer-focus:dark:text-[#FF6464] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8">Message
                  *</label>
                <span class="text-xs text-[red]">{{ errors.message }}</span>
              </div>

              <div
                class="transition-all duration-300 ease-in-out inline-block hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] rounded-lg mt-3">
                <!-- submit buttons -->
                <input type="submit"
                  class="transition ease-in duration-200 font-semibold cursor-pointer border-color-910 hover:border-transparent px-6 py-2 rounded-lg border-[2px] hover:text-white dark:text-white"
                  value="Submit" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { useForm } from 'vee-validate';
import { toTypedSchema } from '@vee-validate/yup';
import * as yup from 'yup';

const { errors, handleSubmit, defineInputBinds } = useForm({
  validationSchema: toTypedSchema(
    yup.object({
      name: yup.string().required(),
      email: yup.string().email().required(),
      message: yup.string().required(),
    })
  ),
});

const name = defineInputBinds('name');
const email = defineInputBinds('email');
const message = defineInputBinds('message');

const onSubmit = handleSubmit(async (values) => {
  const isData = await $fetch('/api/contact', {
    method: 'POST',
    body: values
  }).catch((error) => console.log(error.data))
  if (isData) {
    alert("Send email success")
  } else {
    alert("Error")
  }
});
</script>

<style lang="scss">
.info-box {
  @apply bg-[#FCF4FF] rounded-lg p-8 w-3/4 mb-7
}
</style>
