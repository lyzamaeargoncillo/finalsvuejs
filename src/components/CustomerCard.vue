<template>
  <div class="customer-card">
    <div class="card-details">
      <div class="card-row">
        <span class="label">Id:</span>
        <span>{{ customer.id }}</span>
      </div>
      <div class="card-row">
        <span class="label">Name:</span>
        <span>{{ customer.name }}</span>
      </div>
      <div class="card-row">
        <span class="label">Email:</span>
        <span>{{ customer.email }}</span>
      </div>
      <!-- Add more details as needed -->
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  customer: {
    id: Number,
    name: String,
    email: String,
    // Add more properties as needed
  },
});
</script>

<style scoped>
.customer-card {
  display: flex;
  flex-direction: column;
  border: 1px solid #ccc;
  border-radius: 8px;
  max-width: 300px;
  margin-bottom: 20px;
  margin-left: 10px;
  background-color: #ffe0b2;
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
