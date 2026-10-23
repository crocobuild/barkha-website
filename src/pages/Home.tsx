import { Seo } from '@/components/Seo'
import { Hero } from '@/sections/home/Hero'
import { Hello } from '@/sections/home/Hello'
import { HealerPath } from '@/sections/home/HealerPath'
import { HowICanHelp } from '@/sections/home/HowICanHelp'
import { Elements } from '@/sections/home/Elements'
import { Archetypes } from '@/sections/home/Archetypes'
import { Approach } from '@/sections/home/Approach'
import { JournalTeaser } from '@/sections/home/JournalTeaser'
import { Testimonials } from '@/sections/home/Testimonials'
import { Faq } from '@/sections/home/Faq'
import { Remember } from '@/sections/home/Remember'

export default function Home() {
  return (
    <>
      <Seo description="Shamanic healing and holistic coaching with Barkha Punjabi in Vashi, Navi Mumbai and Bandra. Your companion on the journey back to you." />
      <Hero />
      <Hello />
      <HealerPath />
      <HowICanHelp />
      <Elements />
      <Archetypes />
      <Testimonials />
      <Approach />
      <JournalTeaser />
      <Faq />
      <Remember />
    </>
  )
}
