export default defineNuxtRouteMiddleware((_to, _from) => {
    const user = useSupabaseUser()

    // If the user is NOT logged in, send them to login
    if (!user.value) {
        return navigateTo('/login')
    }
})