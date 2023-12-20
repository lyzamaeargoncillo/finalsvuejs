<template>
    <div class="rental-card">
      <div class="card-details">
        <div class="card-row">
          <span class="label">Id:</span>
          <span>{{ rental.id }}</span>
        </div>
        <div class="card-row">
          <span class="label">Customer ID:</span>
          <span>{{ rental.customer_id }}</span>
        </div>
        <div class="card-row">
          <span class="label">Car ID:</span>
          <span>{{ rental.car_id }}</span>
        </div>
        <div class="card-row">
          <span class="label">Start Date:</span>
          <span>{{ rental.start_date }}</span>
        </div>
        <div class="card-row">
          <span class="label">End Date:</span>
          <span>{{ rental.end_date }}</span>
        </div>
        <!-- Add more details as needed -->
      </div>
    </div>
  </template>
  
  <script setup>
  const props = defineProps({
    rental: {
      id: Number,
      customer_id: Number,
      car_id: Number,
      start_date: String,
      end_date: String,
      // Add more properties as needed
    },
  });
  </script>
  
  <style scoped>
  .rental-card {
    display: flex;
    flex-direction: column;
    border: 1px solid #ccc;
    border-radius: 8px;
    max-width: 300px;
    margin-bottom: 20px;
    margin-left: 10px;
    background-color: #e6ee9c;
  }
  
  .card-details {
    padding: 10px;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
  }
  
  .card-row {
    display: flex;
    justify-content: space-between;
    margin-bottom: 5px;
  }
  
  .label {
    font-weight: bold;
    margin-right: 5px;
  }
  </style>
  