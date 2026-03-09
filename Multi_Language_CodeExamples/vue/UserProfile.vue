<template>
  <div class="user-profile">
    <img :src="user.avatar" :alt="user.name" />
    <h2>{{ user.name }}</h2>
    <p>{{ user.bio }}</p>
    <p>Email: {{ user.email }}</p>
  </div>
</template>

<script>
export default {
  name: 'UserProfile',
  data() {
    return {
      user: {
        name: 'Jane Doe',
        bio: 'A passionate developer',
        email: 'jane@example.com',
        avatar: 'https://via.placeholder.com/150'
      }
    }
  }
}
</script>

<style scoped>
.user-profile {
  text-align: center;
  padding: 20px;
}
img {
  width: 150px;
  border-radius: 50%;
}
</style>