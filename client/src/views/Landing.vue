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

        <div class="flex items-center space-x-4">
          <router-link
            to="/contact"
            class="relative flex items-center text-center h-10 w-30 transition-all duration-500 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:transition-all before:duration-300 before:opacity-100 before:hover:opacity-0 before:hover:scale-50 after:absolute after:top-0 after:left-0 after:w-full after:h-full after:opacity-0 after:transition-all after:duration-300 after:border after:border-violet-900 after:scale-125 after:hover:opacity-100 after:hover:scale-100"
          >
            <span
              class="relative p-5 uppercase bg-gradient-to-r from-violet-900 to-pink-500 bg-clip-text text-transparent font-bold"
              >Contact</span
            >
          </router-link>
          <router-link to="/about" class="link">Learn More</router-link>
        </div>
      </div>

      <div
        class="relative h-[450px] w-full transition-all duration-500 md:inline lg:h-[800px] lg:w-[500px]"
      >
        <img src="../assets/landing.png" layout="fill" objectFit="contain" />
      </div>
    </section>
    <div class="static h-[200vh]"></div>
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
