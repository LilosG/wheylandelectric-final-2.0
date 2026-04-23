/**
 * Wheyland Electric — Review Nodes
 * =================================
 * Real verbatim Google Business Profile reviews.
 * Source: Google Maps GBP listing, verified March 2026.
 * 5.0 rating, 77 reviews as of March 2026.
 */

export interface ReviewNode {
  "@type": "Review";
  author: { "@type": "Person"; name: string };
  datePublished: string;
  reviewBody: string;
  reviewRating: {
    "@type": "Rating";
    ratingValue: string;
    bestRating: string;
  };
}

export const WHEYLAND_REVIEWS: ReviewNode[] = [
  {
    "@type": "Review",
    author: { "@type": "Person", name: "Lou Sanchez" },
    datePublished: "2026-03-03",
    reviewBody: "Wheyland Electric is amazing! We contacted them via Yelp and received an almost immediate response. Tim was in the area and able to come out within 30 mins. He diagnosed an issue with the breaker panel and fixed the problems right away. He went above and beyond checking to be sure everything in the panel and sub panel was working properly and took the time to show us what he found and what he was doing. Phenomenal service. Would give six stars if we could!",
    reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
  },
  {
    "@type": "Review",
    author: { "@type": "Person", name: "Alex Baylon" },
    datePublished: "2026-01-20",
    reviewBody: "Wheyland Electric did a great job installing my EV charger - super professional and easy to work with. When a fuse issue came up about a month later, they came out fast and took care of it for free. Great communication and they stand behind their work. Highly recommended!",
    reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
  },
  {
    "@type": "Review",
    author: { "@type": "Person", name: "Roger Kathman" },
    datePublished: "2025-11-17",
    reviewBody: "Recently bought an EV but Level 1 charging was impossibly slow. I needed to have a 240 vac outlet installed in my garage for Level 2 charging. Wheyland Electric did the job creatively and avoided the need for a costly sub-panel. Tim arrived on time and worked quickly. Outstanding service at reasonable price. I will definitely hire Wheyland Electric for any future needs. Very happy customer!",
    reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
  },
  {
    "@type": "Review",
    author: { "@type": "Person", name: "araleah solbes" },
    datePublished: "2025-09-22",
    reviewBody: "I highly recommend Wheyland Electric for any electrical work! Tim is not only a skilled and experienced electrician, but also incredibly reliable and hardworking. He takes pride in doing the job right and is someone you can fully trust to be honest, professional, and respectful in your home or business. This is a family-run business that truly cares about their customers. If you are looking for quality work and dependable service, this is the company to call!",
    reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
  },
  {
    "@type": "Review",
    author: { "@type": "Person", name: "Ethel Grant" },
    datePublished: "2025-09-15",
    reviewBody: "We have used Wheyland Electric for at least 15 years! Tim and his team are very honest, very thorough and have very fair pricing. I have used Wheyland Electric for big and small jobs. Extremely satisfied with his work and integrity. When you hire Wheyland Electric to work for you, you will not be disappointed!",
    reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
  },
  {
    "@type": "Review",
    author: { "@type": "Person", name: "C Littlestar" },
    datePublished: "2025-09-22",
    reviewBody: "We had a fantastic experience with Wheyland Electric! Tim the owner installed a beautiful overhead light above our dining table and also added an outlet for our new stove. He problem solved and thought outside the box, streamlined the whole process. Tim and his wife Vanessa went above and beyond any electrical company we have ever worked with. Their whole team was punctual, professional, and extremely detail-oriented. They made sure everything was done safely and neatly, and they left the space spotless when they were finished. We really appreciated their clear communication, fair pricing, and friendly service. Highly recommend them for any electrical work.",
    reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
  },
  {
    "@type": "Review",
    author: { "@type": "Person", name: "Peggy Compton" },
    datePublished: "2025-09-08",
    reviewBody: "Tim and Vanessa were life savers! I needed sub panel replacements and a main panel upgrade by a tight deadline to keep insurance coverage. They relieved my anxieties about meeting the deadline with weeks to spare. Tim has always been so easy to work with and Vanessa gets me on the schedule quickly every time. I highly recommend Wheyland Electric for big and small jobs. You can be confident in the work being done and you will have a great resource for any future needs.",
    reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
  },
  {
    "@type": "Review",
    author: { "@type": "Person", name: "tyler lawson" },
    datePublished: "2025-10-27",
    reviewBody: "We have used Wheyland Electric for several repairs and upgrades around our home over the years, and they have always been fantastic. Tim and the team are consistently on time, courteous, and professional. Their work is high quality, and they take the time to do things right. It is hard to find reliable contractors these days, but Wheyland Electric has earned our trust time and again. I highly recommend them to anyone looking for a great electrician.",
    reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
  },
  {
    "@type": "Review",
    author: { "@type": "Person", name: "Molly Dixon" },
    datePublished: "2025-09-15",
    reviewBody: "Wheyland Electric has completed several projects within my home and each time they did a wonderful job. They are professional, thorough and have terrific customer service. Recent project was to add and relocate outlets. When onsite, they took our original plans and then made suggestions to make it even more seamless which I greatly appreciated. Before they leave, they make sure everything is to your satisfaction. Highly recommend.",
    reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
  },
  {
    "@type": "Review",
    author: { "@type": "Person", name: "Danny D" },
    datePublished: "2025-09-22",
    reviewBody: "Tim and Wheyland Electric have been our go-to guys for 20 years! As a small business owner it is critical to work well with others and Wheyland Electric is spot on. Thanks for always being there!",
    reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
  },
  {
    "@type": "Review",
    author: { "@type": "Person", name: "Susan Goralski" },
    datePublished: "2025-09-08",
    reviewBody: "Tim and Vanessa are the best! They are kind, efficient, communicative, knowledgeable, and very professional! I was in a bind and short on time. They went out of their way to fit me in the schedule and quickly resolve my issue. Very fair on price and very highly recommended!!!",
    reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
  },
  {
    "@type": "Review",
    author: { "@type": "Person", name: "Drew Spaeth" },
    datePublished: "2025-09-22",
    reviewBody: "Tim and Vanessa are wonderful to work with. Tim is super knowledgeable, dependable, a great tradesman, and offers very fair pricing. Vanessa is very attentive, responsive and loves to work with her clients. I cannot say enough positive things about Wheyland Electric. Thank you Tim and Vanessa.",
    reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
  },
];

/**
 * Curated display reviews for the testimonial carousel.
 * Selected for variety: different services, different customer types, different lengths.
 * Minimum rating: 5 stars. All verbatim from Google Business Profile.
 */
export interface DisplayReview {
  author: string;
  text: string;
  rating: number;
  date: string;
  serviceHint?: string;
}

const CAROUSEL_SLUGS = [
  'Lou Sanchez',
  'Peggy Compton',
  'tyler lawson',
  'Roger Kathman',
  'C Littlestar',
  'Ethel Grant',
];

export function getDisplayReviews(): DisplayReview[] {
  return WHEYLAND_REVIEWS
    .filter((r) => CAROUSEL_SLUGS.includes(r.author.name))
    .sort((a, b) => CAROUSEL_SLUGS.indexOf(a.author.name) - CAROUSEL_SLUGS.indexOf(b.author.name))
    .map((r) => ({
      author: r.author.name,
      text: r.reviewBody,
      rating: parseInt(r.reviewRating.ratingValue),
      date: r.datePublished,
    }));
}
