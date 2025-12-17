<script setup lang="ts">
const route = useRoute()
const colorMode = useColorMode()

// 1. Dynamic Page Title
const pageTitle = computed(() => {
  switch (route.path) {
    case '/': return 'Dashboard'
    case '/contacts': return 'Contacts'
    case '/sales': return 'Sales Orders'
    case '/inbox': return 'Inbox'
    default: return 'EPOS'
  }
})

// 2. Dark Mode Toggle
const isDark = computed({
  get () {
    return colorMode.value === 'dark'
  },
  set () {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
  }
})

// 3. Navigation Links
const links = [
  { 
    label: 'Dashboard', 
    to: '/', 
    icon: 'i-heroicons-home' 
  },
  { 
    label: 'Contacts', 
    to: '/contacts', 
    icon: 'i-heroicons-users' 
  },
  { 
    label: 'Sales Orders', 
    to: '/sales', 
    icon: 'i-heroicons-currency-dollar' 
  },
  { 
    label: 'Inbox', 
    to: '/inbox', 
    icon: 'i-heroicons-inbox' 
  }
]
</script>

<template>
  <div class="flex h-screen bg-background text-foreground font-sans">
    
    <aside class="w-72 flex flex-col border-r border-border bg-sidebar/50 backdrop-blur">
      
      <div class="h-24 flex items-center px-8 border-b border-border">
        <span class="text-4xl font-display text-primary">EPOS</span>
      </div>

      <div class="flex-1 px-4 py-6 overflow-y-auto">
        <UNavigationMenu 
          :items="links" 
          orientation="vertical" 
          class="w-full" 
          :ui="{ 
            // THE FIX IS HERE:
            // 1. 'gap-4': Adds space between the Icon and the Label
            // 2. '[&_svg]:w-7 [&_svg]:h-7': Forces the inner icon SVG to be larger
            // 3. 'py-3': Adds vertical spacing (height) to the buttons
            link: 'text-lg py-3 gap-4 [&_svg]:w-7 [&_svg]:h-7 font-medium' 
          }"
        />
      </div>

      <div class="p-6 border-t border-border">
        <div class="text-sm text-muted-foreground">
          Logged in as<br>
          <span class="text-foreground font-medium text-lg">hayden@edingerpress.com</span>
        </div>
      </div>
    </aside>

    <main class="flex-1 flex flex-col overflow-hidden">
      
      <header class="h-24 flex items-center justify-between px-10 border-b border-border bg-background/80 backdrop-blur sticky top-0 z-10">
        
        <h1 class="text-4xl font-display text-foreground">
          {{ pageTitle }}
        </h1>
        
        <div class="flex gap-6 items-center">
           
           <UButton
             :icon="isDark ? 'i-heroicons-moon' : 'i-heroicons-sun'"
             color="neutral"
             variant="outline"
             size="lg"
             square
             class="bg-background ring-1 ring-border"
             @click="isDark = !isDark"
           />

           <UButton 
             icon="i-heroicons-bell" 
             color="neutral" 
             variant="outline" 
             size="lg"
             square
             class="bg-background ring-1 ring-border"
           />
        </div>
      </header>

      <div class="flex-1 overflow-y-auto p-12">
        <slot />
      </div>
      
    </main>

  </div>
</template>