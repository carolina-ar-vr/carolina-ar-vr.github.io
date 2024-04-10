<template>
  <div>
    <!-- Executive Board Section -->
    <section class="py-12">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold mb-8">Executive Board</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <!-- Executive Board Members -->
          <div v-for="member in executiveBoard" :key="member.id" class="bg-white rounded-lg shadow-md p-6">
            <h3 class="text-xl font-semibold mb-2">{{ member.name }}</h3>
            <p>{{ member.position }}</p>
            <p>{{ member.bio }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Additional Team Section -->
    <section class="py-12">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold mb-8">Additional Team</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <!-- Additional Team Members -->
          <div v-for="member in additionalTeam" :key="member.id" class="bg-white rounded-lg shadow-md p-6">
            <h3 class="text-xl font-semibold mb-2">{{ member.name }}</h3>
            <p>{{ member.position }}</p>
            <p>{{ member.bio }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang = ts>
export default {
  data() {
    return {
      executiveBoard: [
        {
          id: 1,
          name: "John Doe",
          position: "President",
          bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        },
        // Add more executive board members as needed
      ],
      additionalTeam: [
        {
          id: 1,
          name: "Jane Smith",
          position: "Developer",
          bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        },
        // Add more additional team members as needed
      ]
    };
  }
};
</script >

<style>
</style>
