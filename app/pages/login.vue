<script setup lang="ts">
const supabase = useSupabaseClient()
const user = useSupabaseUser()
const email = ref('')
const loading = ref(false)

watchEffect(() => {
  if (user.value) {
    navigateTo('/')
  }
})

const signIn = async () => {
  loading.value = true
  
  const { error } = await supabase.auth.signInWithOtp({
    email: email.value,
    options: {
      emailRedirectTo: 'http://localhost:3000/confirm', // Explicit redirect
    }
  })

  loading.value = false

  if (error) {
    // This will pop up on your screen with the exact reason
    alert('Error: ' + error.message)
  } else {
    // This confirms the email was sent
    alert('Success! Check your email inbox (and Spam folder) for the login link.')
  }
}
</script>

<template>
  <div class="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
    <UCard class="w-full max-w-sm">
      <template #header>
        <h3 class="text-xl font-bold">Welcome Back</h3>
      </template>
      <div class="space-y-4">
        <UFormGroup label="Email">
          <UInput v-model="email" type="email" placeholder="you@example.com" />
        </UFormGroup>
        
        <UButton block color="black" :loading="loading" @click="signIn">
          {{ loading ? 'Sending...' : 'Send Magic Link' }}
        </UButton>
      </div>
    </UCard>
  </div>
</template>