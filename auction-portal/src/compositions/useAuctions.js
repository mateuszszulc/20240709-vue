import { auctionsService } from "@/services/auctions-service"
import { onMounted, ref } from "vue"



export function useAuctions(isPromoted = false) {
    const auctions = ref([])
    const isLoading = ref(false)
    const errorMessage = ref('')

    // Odbierz aukcje i przedstaw wszystkie z tablicy
    onMounted(async () => {
        console.log('LifecycleMethod: mounted!')

        try {
            isLoading.value = true
            const myAuctions = await (isPromoted ? auctionsService.getPromotions() : auctionsService.getAll())
            auctions.value = myAuctions.data
        } catch (e) {
            console.error(e)
            errorMessage.value = e.message
        } finally {
            console.log('I will always fire')
            isLoading.value = false
        }
    })

    return { auctions, isLoading, errorMessage }
}