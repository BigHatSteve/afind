<script lang="ts">
    import * as Accordion from "$lib/components/ui/accordion";
    import FeatureCard from "$lib/components/FeatureCard.svelte";
    import HandCoins from "lucide-svelte/icons/hand-coins";
    import Handshake from "lucide-svelte/icons/handshake";
</script>

<svelte:head>
    <title>About - Afind</title>
    <meta name="description" content="About Afind - Discover, engage, and explore with Afind - your personalized guide to local adventures." />
</svelte:head>

<h1 class="text-4xl font-semibold text-center pt-16 pb-8">About Afind</h1>
<p class="text-xl text-center pb-16">Afind works to find hidden gems within their city through localized and short AI-driven videos. Within a chosen radius, the app recommends businesses or attractions that are tailored to the user's preference over time algorithmically.</p>
<h2 class="text-3xl text-primary font-medium text-center pb-8">FAQ</h2>
<Accordion.Root>
    <Accordion.Item value="item-1">
        <Accordion.Trigger class="text-left">How does the Afind app work?</Accordion.Trigger>
        <Accordion.Content>
            Users select a radius on the map in the app to receive personalized recommendations for restaurants, bars, nightlife spots, and attractions like the Eiffel Tower or Empire State Building. These suggestions evolve over time using algorithms that analyze user interactions with short-form videos, powered by AI to identify and suggest businesses and attractions aligned with user preferences.
        </Accordion.Content>
    </Accordion.Item>
    <Accordion.Item value="item-2">
        <Accordion.Trigger class="text-left">How does Afind make recommendations for me?</Accordion.Trigger>
        <Accordion.Content>
            We utilize our algorithm to identify the businesses you engage with the most, then prioritize showcasing similar businesses in a region of your choice.
        </Accordion.Content>
    </Accordion.Item>
    <Accordion.Item value="item-3">
        <Accordion.Trigger class="text-left">How are businesses selected to show on the map?</Accordion.Trigger>
        <Accordion.Content>
            These businesses are selected to be shown on the map through user input. Once a user uploads a video of the business, they are essentially creating a marker on the app that would represent the location of the business.
        </Accordion.Content>
    </Accordion.Item>
    <Accordion.Item value="item-4">
        <Accordion.Trigger class="text-left">Are creators paid to make recommendations?</Accordion.Trigger>
        <Accordion.Content>
            No, creators don't get paid to make any recommendations to users. However, businesses can pay to advertise themselves if they like a recommendation, generating money for the application.</Accordion.Content>
    </Accordion.Item>
    <Accordion.Item value="item-5">
        <Accordion.Trigger class="text-left">How is Afind different from its competitors?</Accordion.Trigger>
        <Accordion.Content>
            Unlike other apps that provide solutions, Afind focuses on hyper-localized discovery and engagement. Furthermore, this app is highly content-based and its monetization model is dependent on the number of followers. Afind mainly focuses on recommendations, which is different from its competitors that mainly utilize reviews.
        </Accordion.Content>
    </Accordion.Item>
</Accordion.Root>
<h2 class="text-3xl text-primary font-medium text-center pt-16 pb-8">Afind for businesses</h2>
<div class="grid grid-cols-1 md:grid-cols-2 gap-8 pb-16">
    <FeatureCard title="Early monetization for creators" description="Our monetization strategy allows businesses to boost videos that highlight their offerings, providing instant financial rewards for creators and fostering a vibrant content ecosystem. With an 80/20 revenue split favoring creators, Afind incentivizes quality content creation from the start.">
        <HandCoins slot="icon" class="h-6 w-6 shrink-0 mt-1" />
    </FeatureCard>
    <FeatureCard title="Business-friendly engagement" description="By focusing on recommendations rather than reviews, Afind offers businesses a platform to showcase their services through authentic third-party experiences without the fear of manipulated ratings.">
        <Handshake slot="icon" class="h-6 w-6 shrink-0 mt-1" />
    </FeatureCard>
</div>
