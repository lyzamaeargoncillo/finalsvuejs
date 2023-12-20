<template>
  <div class="container">
    <CustomerCard v-for="customer in customers" :key="customer.id" :customer="customer" />
  </div>
</template>

<script setup>
import CustomerCard from '../components/CustomerCard.vue';

const customers = [
  { "id": 1, "name": "John Doe", "email": "john@gmail.com" },
  { "id": 2, "name": "Jane Smith", "email": "jane@gmail.com" },
  { "id": 3, "name": "Michael Johnson", "email": "michael@gmail.com" },
  { "id": 4, "name": "Emily Davis", "email": "emily@gmail.com" },
  { "id": 5, "name": "Brian Wilson", "email": "brian@gmail.com" },
  { "id": 6, "name": "Sarah Brown", "email": "sarah@gmail.com" },
  { "id": 7, "name": "Alex Turner", "email": "alex@gmail.com" },
  { "id": 8, "name": "Megan Miller", "email": "megan@gmail.com" },
  { "id": 9, "name": "Daniel White", "email": "daniel@gmail.com" },
  { "id": 10, "name": "Amanda Taylor", "email": "amanda@gmail.com" },
  { "id": 11, "name": "Christopher Clark", "email": "christopher@gmail.com" },
  { "id": 12, "name": "Olivia Turner", "email": "olivia@gmail.com" },
  { "id": 13, "name": "Joshua Moore", "email": "joshua@gmail.com" },
  { "id": 14, "name": "Sophia King", "email": "sophia@gmail.com" },
  { "id": 15, "name": "William Hall", "email": "william@gmail.com" },
  { "id": 16, "name": "Isabella Scott", "email": "isabella@gmail.com" },
  { "id": 17, "name": "Liam Brown", "email": "liam@gmail.com" },
  { "id": 18, "name": "Emma Wilson", "email": "emma@gmail.com" },
  { "id": 19, "name": "Noah Davis", "email": "noah@gmail.com" },
  { "id": 20, "name": "Ava Miller", "email": "ava@gmail.com" },
  { "id": 21, "name": "Oliver White", "email": "oliver@gmail.com" },
  { "id": 22, "name": "Sophie Taylor", "email": "sophie@gmail.com" },
  { "id": 23, "name": "Ethan Clark", "email": "ethan@gmail.com" },
  { "id": 24, "name": "Chloe Turner", "email": "chloe@gmail.com" },
  { "id": 25, "name": "Lucas Moore", "email": "lucas@gmail.com" },
];
</script>

<style scoped>
.container {
  display: flex;
  flex-wrap: wrap;
}
</style>
