export type Testimonial = {
  name: string
  /** Paragraphs, verbatim from the reviews on her original site. */
  quote: string[]
  photo: string
  rating: number
  date: string
}

/** Real client words, carried over from barkhapunjabi.com ("What Others Say"). */
export const testimonials: Testimonial[] = [
  {
    name: 'Harman Taneja',
    photo: '/img/reviews/harman-taneja.webp',
    rating: 5,
    date: '2025-05-03',
    quote: [
      'I am incredibly grateful for the healing work that Barkha has done with me. In just four sessions, Through her compassionate and insightful shamanic healing has helped me uncover and heal deep inner child issues that have affected my mental health for years.',
      'Her gentle yet powerful approach has provided me with the tools to release old patterns and embrace self-love and acceptance.',
    ],
  },
  {
    name: 'Anand Sreedhar',
    photo: '/img/reviews/anand-sreedhar.webp',
    rating: 5,
    date: '2025-02-19',
    quote: [
      'I reached out to Barkha around October end, 2024, to understand Shamanism.',
      'In our 1st session, Barkha asked me if something significant had happened in my life when I was 15/16 years old and I was amazed as it was true. And I realized that, a certain event was still impacting my life.',
      'The cord release was wonderful as I could feel the burden of my past being released.',
    ],
  },
  {
    name: 'Swati Singh',
    photo: '/img/reviews/swati-singh.webp',
    rating: 5,
    date: '2023-09-23',
    quote: [
      'Barkha connects with you so well and gives you the confidence and right guidance with the practice of shamanism. I took 7 sessions with her and it was surprising to see how she got a lot of things right and could understand my concerns and situation better without me having to express them.',
    ],
  },
  {
    name: 'Pooja Dhingra',
    photo: '/img/reviews/pooja-dhingra.webp',
    rating: 5,
    date: '2025-08-14',
    quote: [
      'I was chatting with @beepunjabee last night about life in general and something she told me struck a chord...for life, work, love everything....',
      'STOP TRYING TO CONTROL THE OUTCOME',
      'Also she’s awesome, check her page out',
    ],
  },
  {
    name: 'Meghna Saboo',
    photo: '/img/reviews/meghna-saboo.webp',
    rating: 5,
    date: '2023-09-27',
    quote: [
      'Barkha introduced me to the concept of Shamanism. Although, I am always open and receptive to trying out anything new, Barkha made the process seem so scientific to me that I went into it with full belief and it really calmed me down.',
      'It has really worked wonders for me and provided me with a sense of calmness.',
      'For me, this is just the beginning in exploring Shamanism!',
      'I highly recommend it!',
    ],
  },
  {
    name: 'Sonia Chopra',
    photo: '/img/reviews/sonia-chopra.webp',
    rating: 5,
    date: '2023-02-10',
    quote: [
      'I have engaged with Barkha for several Shamanic Healings. The most recent one stands out most for me. Why? Because it was a healing session for my husband and son. And whatever she did in the spirit world, it had a beautiful effect on me!',
      'I had immense gratitude for being alive at that moment.',
      'I highly recommend a Shamanic Healing session with Barkha!',
    ],
  },
]
