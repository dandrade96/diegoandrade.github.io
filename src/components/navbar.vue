<template>
    <nav class="bg-first-blue fixed w-full shadow-md md:drop-shadow-lg px-2 sm:px-4 py-2.5 dark:bg-first-blue">
  <div class="container flex flex-wrap items-center justify-between mx-auto">
    <a href="/" class="flex items-center">
      <img src="../assets/image/logo.svg" alt="">
    </a>
    <div class="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul class="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-first-blue dark:border-gray-700">
        <li>
          <a href="#home" class="block py-2 pl-3 pr-4 md:bg-transparent md:text-lt  dark:text-lt"><span>I.</span>Home</a>
        </li>
        <li>
          <a href="#skill" class="block py-2 pl-3 pr-4 text-white md:text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"><span>II.</span>Experience</a>
        </li>
        <li>
          <a href="#work" class="block py-2 pl-3 pr-4 text-white md:text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"><span>III.</span>Work</a>
        </li>
        <li>
          <a href="#contact" class="block py-2 pl-3 pr-4 text-white md:text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"><span>IV.</span>Contact</a>
        </li>
        <li>
          <button class="block py-2 pl-3 pr-4 text-lt md:text-lt md:bg-transparent md:border-2 md:border-lt md:hover:border-white md:hover:text-white">Resume</button>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>

<style>
span{
    @apply text-lt
}
</style>