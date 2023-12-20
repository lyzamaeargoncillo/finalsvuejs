<template>
  <div class="container">
    <CarCard v-for="car in cars" :key="car.id" :car="car" />
  </div>
</template>

<script setup>
import CarCard from '../components/CarCard.vue';

const cars = [
  { "id": 1, "brand": "Toyota", "model": "Camry", "year": 2022 },
  { "id": 2, "brand": "Honda", "model": "Civic", "year": 2023 },
  { "id": 3, "brand": "Ford", "model": "Fusion", "year": 2022 },
  { "id": 4, "brand": "Chevrolet", "model": "Malibu", "year": 2023 },
  { "id": 5, "brand": "Nissan", "model": "Altima", "year": 2022 },
  { "id": 6, "brand": "BMW", "model": "3 Series", "year": 2023 },
  { "id": 7, "brand": "Mercedes-Benz", "model": "C-Class", "year": 2022 },
  { "id": 8, "brand": "Audi", "model": "A4", "year": 2023 },
  { "id": 9, "brand": "Kia", "model": "Optima", "year": 2022 },
  { "id": 10, "brand": "Hyundai", "model": "Sonata", "year": 2023 },
  { "id": 11, "brand": "Mazda", "model": "Mazda6", "year": 2022 },
  { "id": 12, "brand": "Subaru", "model": "Legacy", "year": 2023 },
  { "id": 13, "brand": "Volkswagen", "model": "Passat", "year": 2022 },
  { "id": 14, "brand": "Buick", "model": "Regal", "year": 2023 },
  { "id": 15, "brand": "Lexus", "model": "ES", "year": 2022 },
  { "id": 16, "brand": "Tesla", "model": "Model 3", "year": 2023 },
  { "id": 17, "brand": "Porsche", "model": "Panamera", "year": 2022 },
  { "id": 18, "brand": "Jaguar", "model": "XF", "year": 2023 },
  { "id": 19, "brand": "Land Rover", "model": "Discovery", "year": 2022 },
  { "id": 20, "brand": "Acura", "model": "TLX", "year": 2023 },
  { "id": 21, "brand": "Infiniti", "model": "Q50", "year": 2022 },
  { "id": 22, "brand": "Genesis", "model": "G80", "year": 2023 },
  { "id": 23, "brand": "Volvo", "model": "S60", "year": 2022 },
  { "id": 24, "brand": "Maserati", "model": "Ghibli", "year": 2023 },
  { "id": 25, "brand": "Alfa Romeo", "model": "Giulia", "year": 2022 },
  { "id": 26, "brand": "Ferrari", "model": "Portofino", "year": 2023 },
  { "id": 27, "brand": "McLaren", "model": "570S", "year": 2022 },
  { "id": 28, "brand": "Bugatti", "model": "Chiron", "year": 2023 },
  { "id": 29, "brand": "Lamborghini", "model": "Huracan", "year": 2022 },
  { "id": 30, "brand": "Rolls-Royce", "model": "Ghost", "year": 2023 },
];
</script>

<style scoped>
.container {
  display: flex;
  flex-wrap: wrap;
}
</style>
