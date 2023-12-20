<template>
  <div class="container">
    <RentalCard v-for="rental in rentals" :key="rental.id" :rental="rental" />
  </div>
</template>

<script setup>
import RentalCard from '../components/RentalsCard.vue';

const rentals = [
  {
    "id": 1,
    "customer_id": 1,
    "car_id": 1,
    "start_date": "2023-01-22",
    "end_date": "2023-01-25",
    // Add more properties as needed
  },
  {
    "id": 2,
    "customer_id": 2,
    "car_id": 2,
    "start_date": "2023-02-08",
    "end_date": "2023-02-15",
    // Add more properties as needed
  },
  {
    "id": 3,
    "customer_id": 3,
    "car_id": 3,
    "start_date": "2023-03-12",
    "end_date": "2023-03-19",
    // Add more properties as needed
  },
  {
    "id": 4,
    "customer_id": 4,
    "car_id": 4,
    "start_date": "2023-04-05",
    "end_date": "2023-04-12",
    // Add more properties as needed
  },
  {
    "id": 5,
    "customer_id": 5,
    "car_id": 5,
    "start_date": "2023-05-22",
    "end_date": "2023-05-29",
    // Add more properties as needed
  },
  {
    "id": 6,
    "customer_id": 6,
    "car_id": 6,
    "start_date": "2023-06-15",
    "end_date": "2023-06-22",
    // Add more properties as needed
  },
  {
    "id": 7,
    "customer_id": 7,
    "car_id": 7,
    "start_date": "2023-07-02",
    "end_date": "2023-07-09",
    // Add more properties as needed
  },
  {
    "id": 8,
    "customer_id": 8,
    "car_id": 8,
    "start_date": "2023-08-18",
    "end_date": "2023-08-25",
    // Add more properties as needed
  },
  {
    "id": 9,
    "customer_id": 9,
    "car_id": 9,
    "start_date": "2023-09-04",
    "end_date": "2023-09-11",
    // Add more properties as needed
  },
  {
    "id": 10,
    "customer_id": 10,
    "car_id": 10,
    "start_date": "2023-10-15",
    "end_date": "2023-10-22",
    // Add more properties as needed
  },
  {
    "id": 11,
    "customer_id": 11,
    "car_id": 11,
    "start_date": "2023-11-08",
    "end_date": "2023-11-15",
    // Add more properties as needed
  },
  {
    "id": 12,
    "customer_id": 12,
    "car_id": 12,
    "start_date": "2023-12-02",
    "end_date": "2023-12-09",
    // Add more properties as needed
  },
  {
    "id": 13,
    "customer_id": 13,
    "car_id": 13,
    "start_date": "2024-01-15",
    "end_date": "2024-01-22",
    // Add more properties as needed
  },
  {
    "id": 14,
    "customer_id": 14,
    "car_id": 14,
    "start_date": "2024-02-08",
    "end_date": "2024-02-15",
    // Add more properties as needed
  },
  {
    "id": 15,
    "customer_id": 15,
    "car_id": 15,
    "start_date": "2024-03-22",
    "end_date": "2024-03-29",
    // Add more properties as needed
  },
  {
    "id": 16,
    "customer_id": 16,
    "car_id": 16,
    "start_date": "2024-04-05",
    "end_date": "2024-04-12",
    // Add more properties as needed
  },
  {
    "id": 17,
    "customer_id": 17,
    "car_id": 17,
    "start_date": "2024-05-18",
    "end_date": "2024-05-25",
    // Add more properties as needed
  },
  {
    "id": 18,
    "customer_id": 18,
    "car_id": 18,
    "start_date": "2024-06-02",
    "end_date": "2024-06-09",
    // Add more properties as needed
  },
  {
    "id": 19,
    "customer_id": 19,
    "car_id": 19,
    "start_date": "2024-07-15",
    "end_date": "2024-07-22",
    // Add more properties as needed
  },
  {
    "id": 20,
    "customer_id": 20,
    "car_id": 20,
    "start_date": "2024-08-08",
    "end_date": "2024-08-15",
    // Add more properties as needed
  },
  {
    "id": 21,
    "customer_id": 21,
    "car_id": 21,
    "start_date": "2024-09-22",
    "end_date": "2024-09-29",
    // Add more properties as needed
  },
  {
    "id": 22,
    "customer_id": 22,
    "car_id": 22,
    "start_date": "2024-10-15",
    "end_date": "2024-10-22",
    // Add more properties as needed
  },
  {
    "id": 23,
    "customer_id": 23,
    "car_id": 23,
    "start_date": "2024-11-08",
    "end_date": "2024-11-15",
    // Add more properties as needed
  },
  {
    "id": 24,
    "customer_id": 24,
    "car_id": 24,
    "start_date": "2024-12-02",
    "end_date": "2024-12-09",
    // Add more properties as needed
  },
  
];
</script>

<style scoped>
.container {
  display: flex;
  flex-wrap: wrap;
}
</style>
