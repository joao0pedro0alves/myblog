import { CallToAction } from '@/components/sections/call-to-action'
import { CustomerStorySection } from '@/components/sections/customer-story-section'
import { FeatureSection } from '@/components/sections/feature-section'
import { HeroSection } from '@/components/sections/hero-section'
import { SupportSection } from '@/components/sections/support-section'

export default function Home() {
  return (
    <article className="flex flex-col">
      <HeroSection />

      <FeatureSection />

      <SupportSection />

      <CustomerStorySection />

      <CallToAction />
    </article>
  )
}
