<template>
  <main>
    <section
      class="fixed left-0 right-0 top-20 mx-auto flex flex-col h-screen max-w-[1350px] items-center justify-evenly md:flex-row"
    >
      <div class="space-y-8">
        <h1
          class="space-y-3 text-5xl font-semibold tracking-wide lg:text-7xl xl:text-7xl"
        >
          <span
            class="block bg-gradient-to-r from-violet-900 to-pink-500 bg-clip-text text-transparent"
          >
            Theo Selin
          </span>
          <span class="block">Developer</span>
          <span class="block">Designer</span>
        </h1>

        <div class="flex items-center space-x-10">
          <router-link
            to="/about"
            class="link bg-gradient-to-r from-violet-900 to-pink-500 bg-clip-text text-transparent uppercase"
            >Contact</router-link
          >
          <router-link to="/about" class="link">Learn More</router-link>
        </div>
      </div>

      <div
        class="relative h-[450px] w-full transition-all duration-500 md:inline lg:h-[800px] lg:w-[500px]"
      >
        <img src="../assets/me.png" layout="fill" objectFit="contain" />
      </div>
    </section>
    <div class="static h-[200vh]"></div>
    <div
      class="fixed w-full flex items-center text-white justify-center z-40 h-20 top-[90vh] md:top-[95vh]"
    >
      <font-awesome-icon
        icon="fa-solid fa-arrow-down"
        class="bg-gradient-to-t w-5 h-5 from-violet-900 to-pink-500 rounded-full p-2 animate-bounce"
      />
    </div>
    <section
      class="relative z-40 -mt-[100vh] min-h-screen bg-black/80 backdrop-blur-md"
    >
      <div class="space-y-10">
        <div>Extra info</div>
      </div>
    </section>
  </main>
</template>

<script></script>
