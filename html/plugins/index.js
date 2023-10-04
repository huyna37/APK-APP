import { ofetch } from 'ofetch'

const fetcher = ofetch.create({
    // set options...
})

export default defineNuxtPlugin(async (nuxtApp) => {
    const config = useRuntimeConfig()
    const customFetch = async (request, options) => {
        const baseURL = config.public.BASE_URL

        const response = await fetcher.raw(request, {
            ...options,
            baseURL
        })

        return response._data
    }
    return {
        provide: {
            customFetch: customFetch
        }
    }
}
)