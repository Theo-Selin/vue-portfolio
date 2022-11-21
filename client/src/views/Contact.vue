<template>
  <main>
    <section
      class="md:top-20 mx-auto flex flex-col h-screen max-w-[1350px] justify-center"
    >
      <div className="">
        <div
          className="mx-auto w-full max-w-[550px] rounded-lg bg-white p-5 md:shadow-lg ring-1 ring-black ring-opacity-5"
        >
          <h1
            class="flex itemx-center justify-center uppercase font-medium text-lg pt-4"
          >
            Contact
          </h1>
          <form ref="form" @submit.prevent="sendEmail" className="py-6 md:px-9">
            <div className="mb-5">
              <label
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Name
                <input
                  type="text"
                  name="name"
                  placeholder="full name"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-violet-400 focus:shadow-md"
                />
              </label>
            </div>

            <div className="mb-5">
              <label
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Email
                <input
                  type="email"
                  name="email"
                  placeholder="contact information"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-violet-400 focus:shadow-md"
                />
              </label>
            </div>

            <div className="mb-5">
              <label
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Company
                <input
                  type="text"
                  name="company"
                  placeholder="company name"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-violet-400 focus:shadow-md"
                />
              </label>
            </div>

            <div className="mb-5">
              <label
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Message
                <textarea
                  name="message"
                  rows="6"
                  placeholder="what's on your mind?"
                  className="w-full resize-none overflow-hidden rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-violet-400 focus:shadow-md"
                />
              </label>
            </div>

            <div class="flex items-center justify-center">
              <button
                type="submit"
                class="link bg-gradient-to-r from-violet-900 to-pink-500 bg-clip-text text-transparent uppercase"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import emailjs from "@emailjs/browser";

export default {
  methods: {
    sendEmail() {
      emailjs
        .sendForm(
          import.meta.env.VITE_SERVICE_ID,
          import.meta.env.VITE_TEMPLATE_ID,
          this.$refs.form,
          import.meta.env.VITE_PUBLIC_KEY
        )
        .then(
          (result) => {
            console.log("SUCCESS!", result.text);
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
    },
  },
};
</script>
