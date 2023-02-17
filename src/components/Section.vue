<script setup>
import { ref } from 'vue'

</script>

<template>
    <div class="container mx-auto pt-6">
        <!-- Home -->
        <section id="home">
            <div class="flex flex-col grid justify-items-stretch content-center h-full w-11/12 space-y-2">
                <p class="text-lt font-['SFMono-Regular']">Hi, my name is</p>
                <h1 class="text-blue-lt text-7xl font-bold font-['Calibre 500'] pt-3">Diêgo Correia de Andrade.</h1>
                <h3 class="text-blue-ft text-7xl font-bold font-['Calibre 500']">I build things for the web.</h3>
                <h6 class="text-blue-ft text-1xl text-justify font-['Calibre 300'] w-9/12 tracking-[.25em] leading-relaxed py-8">I am a software developer specialized in building and designing digital solutions and experiences. Currently, 
                    I am focused on building accessible and transformative products for the society at 
                    <span class="underline"><a class="hover:text-blue-lt cursor-pointer" href="https://www.dortech-group.com" target="_blank">Dortech</a></span>.</h6>
                <div class="pt-10">
                    <button class="bg-transparent text-lt border-lt rounded w-3/12 hover:text-blue-lt hover:border-blue-lt">Discover my articles</button>
                </div>
            </div>
        </section>
        <!-- Skills -->
        <section id="skill">
            <div class="flex flex-col grid justify-items-stretch content-center h-full w-10/12 space-y-2">
                <p class="text-lt font-['SFMono-Regular']">My skills are...</p>
                <div class="flex flex-row flex-justify-between w-12/12 ml-10 pt-10">
                    <div class="w-6/12 ">Frontend</div>
                    <progress class="w-6/12">30%</progress>

                </div>
                <div class="flex flex-row flex-justify-between w-12/12 ml-10 pt-10">
                    <div class="w-6/12 ">Backend</div>
                    <progress class="w-6/12">30%</progress>

                </div>

                <div class="flex flex-row flex-justify-between w-12/12 ml-10 pt-10">
                    <div class="w-6/12 ">Mobile</div>
                    <progress class="w-6/12">30%</progress>

                </div>


                <ul class="w-12/12">
                        <li>
                            <div class="flex flex-row flex-justify-between w-12/12 ml-20 pt-1">
                                <div class="w-6/12">HTML</div>
                                <progress class="w-6/12">30%</progress>
                            </div>
                        </li>
                        <li><div class="flex flex-row flex-justify-between w-12/12 ml-20 pt-1">
                                <div class="w-6/12 ">CSS</div>
                                <progress class="w-6/12">30%</progress>
                            </div></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
            </div>
        </section>
        <!-- work -->
        <section id="work">
            <div class="flex flex-col grid justify-items-stretch content-center h-full w-10/12 space-y-2">
                <p class="text-lt font-['SFMono-Regular']">My skills teste...</p>
                <h1 class="text-blue-lt text-7xl font-semibold pt-3">DIÊGO CORREIA DE ANDRADE.</h1>
                <h3 class="text-blue-ft text-7xl font-semibold">I build things for the web.</h3>
                <h6 class="text-blue-ft text-2xl text-justify w-11/12 tracking-wider leading-relaxed py-8">I am a software developer specialized in building and designing digital solutions and experiences. Currently, 
                    I am focused on building accessible and transformative products for the society at 
                    <span class="underline"><a class="hover:text-blue-lt cursor-pointer" href="https://www.dortech-group.com" target="_blank">Dortech</a></span>.</h6>
                <button class="bg-transparent text-lt border-lt rounded w-3/12 hover:text-blue-lt hover:border-blue-lt ">Discover my articles</button>
            </div>
        </section>
        <!-- contact -->
        <section id="contact">
            <div class="flex flex-col grid justify-items-stretch content-center h-full w-10/12 space-y-2">
                <p class="text-lt font-['SFMono-Regular']">My skills teste...</p>
                <h1 class="text-blue-lt text-7xl font-semibold pt-3">DIÊGO CORREIA DE ANDRADE.</h1>
                <h3 class="text-blue-ft text-7xl font-semibold">I build things for the web.</h3>
                <h6 class="text-blue-ft text-2xl text-justify w-11/12 tracking-wider leading-relaxed py-8">I am a software developer specialized in building and designing digital solutions and experiences. Currently, 
                    I am focused on building accessible and transformative products for the society at 
                    <span class="underline"><a class="hover:text-blue-lt cursor-pointer" href="https://www.dortech-group.com" target="_blank">Dortech</a></span>.</h6>
                <button class="bg-transparent text-lt border-lt rounded w-3/12 hover:text-blue-lt hover:border-blue-lt ">Discover my articles</button>
            </div>
        </section>
    </div>
  
</template>

<style>
  section{
    height: 100vh;
  }

</style>
