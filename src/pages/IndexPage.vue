<template>

  <main class="h-full">
    <div class="grid grid-rows-7 grid-cols-7 gap-4 px-4 py-4">
      <div class="col-start-1 row-start-3 row-end-3 text-xs">
        Full-service creative firm, <br>
        based in Italy (2010)
      </div>
      <div class="col-start-2 row-start-3 row-span-2 flex flex-col justify-start items-center">
        <img src="../assets/img/logo.svg" alt="SF">
      </div>
      <div class="col-start-3 row-span-6 text-xs">
        <div class="pt-3">
          <ul>
            <li v-for="(v, i) in sections" :key="i" class="mb-1">
              <router-link :to="`/s/${v.alias}`">{{ v.name }}</router-link>
            </li>
          </ul>
        </div>
      </div>
      <div class="col-start-4 row-start-3 row-span-3 text-xs flex flex-col justify-start items-center">
        <ul>
          <li v-for="(v, i) in filters" :key="i" class="mb-2">
            <router-link :to="`/f/${v.alias}`">{{ v.name }}</router-link>
          </li>
        </ul>
      </div>
      <div class="col-start-5 row-start-3 row-span-3 text-xs">
        Creative Direction<br/>
        Brand Identity & graphic design<br/>
        Brand Initiative<br/>
        Content Creation<br/>
        Website/E-Commerce Development<br/>
        Product Development & Design<br/>
        Growth Marketing<br/>
        Experiential Activations & Events<br/>
        Panel Discussions & Talks<br/>
        Digital Performance Review<br/>
        Brand Development Strategy
      </div>
      <div class="col-start-6 row-start-1">
        <router-link
            class="bg-sf-white px-8 py-1 rounded-full text-base text-sf-black"
            to="/portfolio"
        >PORTFOLIO</router-link>
      </div>
      <div class="col-start-6 row-start-3 row-span-3">
        <img src="../assets/img/studio.svg" alt="Studio">
      </div>
      <div class="col-start-6 row-start-6 text-sm">
        <ul>
          <li>
            <router-link to="/informations">Informations</router-link>
          </li>
          <li>
            <router-link to="/contacts">Contacts</router-link>
          </li>
        </ul>
      </div>
      <div class="col-start-7"></div>
    </div>
  </main>

</template>

<script setup>
import { sections, filters } from '@/content'
</script>

<style scoped lang="scss">

</style>
