<script lang="ts">
    import type { PageData } from "./$types";
    import * as Card from "$lib/components/ui/card";
    import * as Carousel from "$lib/components/ui/carousel";
    import Autoplay from "embla-carousel-autoplay";
    import FeatureCard from "$lib/components/FeatureCard.svelte";
    import MapPin from "lucide-svelte/icons/map-pin";
    import Video from "lucide-svelte/icons/video";
    import interaction1 from "$lib/assets/interaction-1.webp";
    import interaction2 from "$lib/assets/interaction-2.webp";
    import interaction3 from "$lib/assets/interaction-3.webp";

    import WaitlistForm from "./waitlist-form.svelte";

    export let data: PageData;

    let interactionImages = [
        {
            image: interaction1,
            description: "Use our search engines to locate your area",
        },
        {
            image: interaction2,
            description: "Choose a radius of an area you would like to explore",
        },
        {
            image: interaction3,
            description: "Click on a pinpoint to find more about a business",
        },
    ];
</script>

<svelte:head>
    <title>Afind</title>
    <meta name="description" content="Discover, engage, and explore with Afind - your personalized guide to local adventures." />
</svelte:head>

<div class="flex flex-col items-center gap-4 py-32">
    <h1 class="text-5xl text-center font-semibold">Afind</h1>
    <h2 class="text-lg text-center">Discover, engage, and explore with Afind - your personalized guide to local adventures.</h2>
    <p class="text-sm text-center pt-4">Join our waitlist to be notified when Afind releases!</p>
    <WaitlistForm data={data.waitlistForm} />
</div>

<div class="flex flex-col items-center gap-4 mb-16">
    <h2 class="text-2xl text-sky-600 text-center font-semibold">How it works</h2>
    <p class="text-center pb-4">Afind is a cutting-edge mobile application designed to revolutionize the way users discover local businesses and attractions. Our unique approach leverages short-form, AI-driven video recommendations tailored to your preferences and location.</p>
    <Carousel.Root class="w-full max-w-sm flex items-center gap-2" 
        plugins={[
            Autoplay({
                delay: 4000,
            }),
        ]}
    >
        <Carousel.Previous class="shrink-0" />
        <Carousel.Content>
            {#each interactionImages as interactionImage}
                <Carousel.Item>
                    <div class="p-1">
                        <Card.Root>
                            <Card.Content class="flex aspect-square items-center justify-center p-6">
                                <div>
                                    <img src={interactionImage.image} alt="App interaction" />
                                    <p class="text-center">{interactionImage.description}</p>
                                </div>
                            </Card.Content>
                        </Card.Root>
                    </div>
                </Carousel.Item>
            {/each}
        </Carousel.Content>
        <Carousel.Next class="shrink-0" />
    </Carousel.Root>
</div>

<div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
    <FeatureCard title="Hyper-Localized Discoveries" description="Select a radius on our in-app map and receive personalized recommendations from nearby businesses and attractions, dynamically refined by AI based on your interactions.">
        <MapPin slot="icon" class="h-6 w-6 shrink-0 mt-1" />
    </FeatureCard>
    <FeatureCard title="Content-Focused Platform" description="Unlike TikTok's broad content scope, Yelp's reviews, or Google Maps' search functionalities, Afind focuses on inspiring discovery through engaging, hyper-localized short videos.">
        <Video slot="icon" class="h-6 w-6 shrink-0 mt-1" />
    </FeatureCard>
</div>
