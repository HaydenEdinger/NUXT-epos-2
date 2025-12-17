// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2025-07-15',

    // Enable Nuxt 4 directory structure (Good practice to be explicit)
    future: {
        compatibilityVersion: 4,
    },

    devtools: {
        enabled: true,
        timeline: { enabled: true },
    },

    // Global CSS
    // Tilde (~) automatically points to your 'app' folder in Nuxt 4
    css: ['~/assets/css/main.css'],

    // =========================================================
    // MODULES
    // =========================================================
    modules: [
        // Core & UI
        '@nuxtjs/supabase',
        '@nuxt/ui',
        '@pinia/nuxt',
        '@nuxtjs/i18n',

        // Content & Media
        '@nuxt/content',
        '@nuxt/image',
        'nuxt-tiptap-editor',
        '@nuxtjs/google-fonts',

        // Dev Tools & Integrations
        '@nuxt/eslint',
        '@nuxthq/studio',
        '@nuxtjs/mcp-toolkit',
        '@compodium/nuxt'
    ],

    // =========================================================
    // MODULE CONFIGURATIONS
    // =========================================================

    // Fixes the "prefix_except_default" warning
    i18n: {
        strategy: 'prefix_except_default',
        defaultLocale: 'en',
        locales: ['en', 'fr'], // Add your supported languages here
        detectBrowserLanguage: false, // Optional: Prevents auto-redirect confusion during dev
    },

    supabase: {
        redirect: false,
    },

    studio: {
        enabled: true,
    },

    // Pre-configuration for fonts (good practice to define families early)
    googleFonts: {
        families: {
            Inter: [400, 700],
            // Add other fonts here as needed
        }
    }
})