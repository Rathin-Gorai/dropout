"use client"
import Card from '@/components/Carousel1'
import HeroSection from '@/components/HeroSection'


import TestimonialsSection from '@/components/Data'
import ChartDemo from '@/components/ChartDemo'

export default function Home() {
  return (
    <>
      <Card />
      <HeroSection />
      <hr />
      <ChartDemo/>
      <TestimonialsSection />
    </>
  )
}
