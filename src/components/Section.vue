<script>
import { ref } from 'vue';

export default {
  data() {
    return {
      showFrontend: false,
      showBackend: false,
      showMobile: false,
      progressFronted:0,
      progressBackend:0,
      progressMobile:0,
      html:85,
      css: 70,
      tailwind:35,
      vue:68,
      react:30,
      php: 82.3,
      laravel:63,
      codeigniter:55,
      reactNative: 0,
    }
  },
  methods:{
    toggleFrontend(){
        this.showFrontend = !this.showFrontend
        this.showBackend = false
        this.showMobile = false
    },
    toggleBackend(){
        this.showFrontend = false
        this.showBackend = !this.showBackend
        this.showMobile = false
    },
    toggleMobile(){
        this.showFrontend = false
        this.showBackend = false
        this.showMobile = !this.showMobile
    },
    mediaFrontend(){
        let sumArray = [this.html, this.css, this.tailwind, this.vue, this.react]
        return this.progressFronted = sumArray.reduce(function(soma, i){return soma + i})/sumArray.length
    },
    mediaBackend(){
        let sumArray = [this.php, this.laravel, this.codeigniter]
        return this.progressFronted = sumArray.reduce(function(soma, i){return soma + i})/sumArray.length
    },
    mediaMobile(){
        let sumArray = [this.reactNative]
        return this.progressFronted = sumArray.reduce(function(soma, i){return soma + i})/sumArray.length
    }
  },
  computed(){
    this.mediaFrontend()
  }
}

</script>

<template>
    <div class="container mx-auto pt-10">
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
                <div v-show="mediaFrontend() > 0" class="flex flex-row flex-justify-between w-12/12 ml-10 pt-10">
                    <div class="w-6/12 "><span @click="toggleFrontend" class="cursor-pointer text-blue-lt text-3xl font-semibold font-['Calibre 500']">Frontend</span></div>
                    <progress class="w-6/12" :value="mediaFrontend()" max="100">{progressFronted}%</progress>
                </div>
                <ul v-show="showFrontend" class="w-12/12 text-blue-ft font-bold font-['Calibre 500'] space-y-4" aria-labelledby="dropdownDefaultButton">
                    <li>
                        <div class="flex flex-row flex-justify-between w-12/12 ml-20 pt-1">
                            <div class="w-6/12">HTML</div>
                            <progress class="w-6/12" :value="html" max="100">{html}%</progress>
                        </div>
                    </li>
                    <li>
                        <div class="flex flex-row flex-justify-between w-12/12 ml-20 pt-1">
                            <div class="w-6/12">CSS</div>
                            <progress class="w-6/12" :value="css" max="100">{css}%</progress>
                        </div>
                    </li>
                    <li>
                        <div class="flex flex-row flex-justify-between w-12/12 ml-20 pt-1">
                            <div class="w-6/12">Tailwind css</div>
                            <progress class="w-6/12" :value="tailwind" max="100">{tailwind}%</progress>
                        </div>
                    </li>
                    <li>
                        <div class="flex flex-row flex-justify-between w-12/12 ml-20 pt-1">
                            <div class="w-6/12">Vue.Js</div>
                            <progress class="w-6/12" :value="vue" max="100">{vue}%</progress>
                        </div>
                    </li>
                    <li>
                        <div class="flex flex-row flex-justify-between w-12/12 ml-20 pt-1">
                            <div class="w-6/12">React.Js</div>
                            <progress class="w-6/12" :value="react" max="100">{react}%</progress>
                        </div>
                    </li>
                </ul>
                
                <div v-show="mediaBackend() > 0" class="flex flex-row flex-justify-between w-12/12 ml-10 pt-10">
                    <div  class="w-6/12 "><span @click="toggleBackend" class="cursor-pointer text-blue-lt text-3xl font-semibold font-['Calibre 500']">Backend</span></div>
                    <progress class="w-6/12" :value="mediaBackend()" max="100">{progressBackend}%</progress>
                </div>
                <ul v-show="showBackend" class="w-12/12 text-blue-ft font-bold font-['Calibre 500'] space-y-4">
                    <li>
                        <div class="flex flex-row flex-justify-between w-12/12 ml-20 pt-1">
                            <div class="w-6/12">PHP</div>
                            <progress class="w-6/12" value="80" max="100">30%</progress>
                        </div>
                    </li>
                    <li>
                        <div class="flex flex-row flex-justify-between w-12/12 ml-20 pt-1">
                            <div class="w-6/12">Laravel</div>
                            <progress class="w-6/12" value="60" max="100">30%</progress>
                        </div>
                    </li>
                    <li>
                        <div class="flex flex-row flex-justify-between w-12/12 ml-20 pt-1">
                            <div class="w-6/12">CodeIgniter</div>
                            <progress class="w-6/12" value="50" max="100">30%</progress>
                        </div>
                    </li>
                </ul>

                <div v-show="mediaMobile() > 0" class="flex flex-row flex-justify-between w-12/12 ml-10 pt-10">
                    <div class="w-6/12"><span @click="toggleMobile" class="cursor-pointer text-blue-lt text-3xl font-semibold font-['Calibre 500']">Mobile</span></div>
                    <progress class="w-6/12" :value="mediaMobile()" max="100">{progressMobile}%</progress>

                </div>
                <ul v-show="showMobile" class="w-12/12 space-y-4">
                    <li>
                        <div class="flex flex-row flex-justify-between text-blue-ft w-12/12 ml-20 pt-1">
                            <div class="w-6/12 ">React Native</div>
                            <progress class="w-6/12" :value="reactNative" max="100">{reactNative}%</progress>
                        </div>
                    </li>
                </ul>

                
            </div>

                    

        </section>
        <!-- work -->
        <section id="work">
            <div class="flex flex-col block grid justify-items-stretch content-center h-90 w-12/12 space-y-5 pt-40">
                <p class="text-lt font-['SFMono-Regular'] pb-5">These are my works,</p>
                <div class="flex flex-row w-12/12 h-50 pb-5">
                    <div class="w-1/12"></div>
                    <div class="flex flex-col space-y-6 w-6/12">
                        <h1 class="text-blue-lt font-bold text-3xl font-['Calibre 500']">Dortech Group</h1>
                        <p class="text-blue-ft font-semibold text-xl font-['Calibre 300']">Website created for validation and promotion of the brand and of the services provided by the company.</p>
                        <a href="https://www.dortech-group.com/" class="pt-10 "><span class="text-blue-ft font-semibold text-xs hover:text-lt">View here</span></a>
                    </div>
                    
                    <img src="https://img.dortech-group.com/leque_04.png" alt="" class="flex object-scale-down object-right w-4/12 img-work">
                </div>
                
                <div class="flex flex-row content-center w-12/12">
                    <div class="w-1/12"></div>
                    <img src="https://img.dortech-group.com/LOGO3DX1.png" alt="" class="flex object-scale-down object-left w-4/12 img-work">
                    <div class="flex flex-col space-y-6 w-6/12">
                        <h1 class="text-blue-lt font-bold text-3xl font-['Calibre 500']">GO3DX</h1>
                        <p class="text-blue-ft font-semibold text-xl font-['Calibre 300']">Teaching and validation platform focused on the development of product designers for the industry.</p>
                        <a href="https://www.go3dx.co/" class="pt-10 "><span class="text-blue-ft font-semibold text-xs hover:text-lt">View here</span></a>
                    </div>
                </div>
            </div>
        </section>
        <!-- contact -->
        <section id="contact">
            <div class="flex flex-col grid justify-items-stretch content-center h-full w-10/12 space-y-2">
                <p class="text-lt font-['SFMono-Regular']">And to contact me,</p>
                <div></div>
            </div>
        </section>
    </div>
  
</template>

<style>
  section{
    height: 100vh;
  }
  progress[value]::-webkit-progress-bar{
    background-color: rgba(136, 146, 176, 0.55);
    width: 100%;
    padding: 2px;
    height: 24px;
    border: solid 3px #8892B0;
    border-radius: 50px;
  }

  progress[value]::-webkit-progress-value{
    background-color: #8892B0;
    border-radius: 50px;
  }

  .img-work{
    height: 30vh;
  }
  

</style>
