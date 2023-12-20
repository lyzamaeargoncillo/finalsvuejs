<template>
  <div class="flex min-h-[50vh]">
    <div class="left-sidebar bg-gray-900 flex flex-col">
      <div class="heading p-8 bg-green-900">
        <h1 class="head text-2xl text-green-200 text-center">
          Lyza Mae Argoncillo
        </h1>
        <div class="heade text-xl text-gray-300 text-center">
          Final Project
        </div>
      </div>
      <nav class="nav-links text-gray-300 text-center">
        <a class="nav-link" :class="{ 'active': $route.path === '/Car' }"><RouterLink to="/car">Cars</RouterLink></a>
        <a class="nav-link" :class="{ 'active': $route.path === '/Customer' }"><RouterLink to="/customer">Customer</RouterLink></a>
        <a class="nav-link" :class="{ 'active': $route.path === '/Rentals' }"><RouterLink to="/rentals">Rentals</RouterLink></a>
      </nav>
      <div class="p-8 bg-gray-800 text-gray-500 text-center">
        This is a laboratory file 
        intended for training students
        in the use of VueJS 3 created by
        Benjie B. Lenteria for the 
        students of Mater Dei College <br />
        Copyright &copy; 2023.<br />All rights reversed.
      </div>
    </div>
    <div class="main-content bg-green-200 flex-1">
      <RouterView />
    </div>
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<style scoped>
.left-sidebar {
  width: 320px; 
  height: 100vh;
  overflow-y: auto;
  box-shadow: 2px 0 10px rgba(0, 0, 0, 0.1);
  background: linear-gradient(to right, #ff6b6b, #48dbfb, #feca57);
}
.head, .heade{
  color: black;
}
.heading {
  border-bottom: 2px solid #ffc18c;
  background-color: 	#ffc18c;
}

.nav-links {
  flex: 1;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #e7cfb4;
  align-items: stretch;
}

.nav-link {
  padding: 12px;
  background-color: #84240c;
  color: #ffffff;
  text-decoration: none;
  border-bottom: 1px solid #919191;
  transition: background 0.3s, color 0.3s;
}

.nav-link:hover {
  background: linear-gradient(to right, #2d3748, #4a5568);
  color: #fff;
}

.active {
  background: linear-gradient(to right, #2d3748, #4a5568);
  font-weight: bold;
  border-right: 4px solid #38a169;
}



.main-content {
  border-left: 2px solid #38a169;
  background: linear-gradient(to bottom right, #3f3f3e, #3d3e3c, #323535);
  color: #2d3436;
  background-image: url('https://images.template.net/112480/free-cars-white-background-tbec8.jpg');
  background-size: cover;
}
</style>


