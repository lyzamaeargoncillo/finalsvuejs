<template>
    <div class="car-card">
      <div class="card-details">
        <div class="card-row">
          <span class="label">Id:</span>
          <span>{{ car.id }}</span>
        </div>
        <div class="card-row">
          <span class="label">Brand:</span>
          <span>{{ car.brand }}</span>
        </div>
        <div class="card-row">
          <span class="label">Model:</span>
          <span>{{ car.model }}</span>
        </div>
        <div class="card-row">
          <span class="label">Year:</span>
          <span>{{ car.year }}</span>
        </div>
        <!-- Add more details as needed -->
      </div>
    </div>
  </template>
  
  <script setup>
  const props = defineProps({
    car: {
      id: Number,
      brand: String,
      model: String,
      year: Number,
      // Add more properties as needed
    },
  });
  </script>
  
  <style scoped>
  .car-card {
    display: flex;
    flex-direction: column;
    border: 1px solid #ccc;
    border-radius: 8px;
    max-width: 300px;
    margin-bottom: 20px;
    margin-left: 10px;
    background-color: #e0f7fa;
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
  