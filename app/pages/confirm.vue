<script setup lang="ts">
const user = useSupabaseUser()
const route = useRoute()
const client = useSupabaseClient()

// Status message to show on screen
const status = ref('Initializing...')
const isError = ref(false)

onMounted(async () => {
  // 1. Check if we have a "code" in the URL
  const code = route.query.code?.toString()
  
  if (!code) {
    status.value = 'No login code found in URL.'
    isError.value = true
    return
  }

  status.value = 'Found code. Exchanging for session...'

  // 2. If user is already logged in, redirect
  if (user.value) {
    return navigateTo('/')
  }

  // 3. MANUAL EXCHANGE: This forces the handshake so we can see the error
  const { data, error } = await client.auth.exchangeCodeForSession(code)

  if (error) {
    console.error('Exchange Error:', error)
    status.value = `Login Failed: ${error.message}`
    isError.value = true
  } else {
    status.value = 'Success! Redirecting...'
    // Give Nuxt a moment to update state before moving
    setTimeout(() => navigateTo('/'), 500)
  }
})

// Backup watcher: If the module does its "auto" magic before we do, this catches it.
watch(user, (u) => {
  if (u) navigateTo('/')
})
</script>

<template>
  <div class="flex flex-col items-center justify-center min-h-screen p-6 text-center">
    <h2 class="text-2xl font-bold mb-4" :class="isError ? 'text-red-600' : 'text-gray-900'">
      {{ isError ? 'Error' : 'Logging In' }}
    </h2>
    
    <p class="text-lg text-gray-700 mb-6">{{ status }}</p>

    <div v-if="!isError" class="animate-pulse text-sm text-gray-500">
      Please wait...
    </div>

    <UButton v-if="isError" to="/login" color="black">
      Return to Login
    </UButton>
  </div>
</template>