import { useEffect, useRef, useState } from "react"

type Product = {
  name: string
  house: string
  price: string
  note: string
  image: string
  badge?: string
  studioImage?: boolean  
  imageSize?: "compact" | "balanced" | "generous" | "statement"
}

// const images = {
//   valentino:
//     "https://images.unsplash.com/photo-1761329842950-f3551938e4da?auto=format&fit=crop&w=1200&q=88",
//   tomFord:
//     "https://images.unsplash.com/photo-1654617058572-f1f473581778?auto=format&fit=crop&w=1200&q=88",
//   blue: "https://images.unsplash.com/photo-1705936118918-870095881e61?auto=format&fit=crop&w=1200&q=88",
//   amber:
//     "https://images.unsplash.com/photo-1716857591457-7d7fa45199c6?auto=format&fit=crop&w=1200&q=88",
//   black:
//     "https://images.unsplash.com/photo-1604588638313-882e0e516cfb?auto=format&fit=crop&w=1200&q=88",
//   ck: "https://images.unsplash.com/photo-1607506740059-3772dc2a10b1?auto=format&fit=crop&w=1200&q=88",
//   noir: "https://images.unsplash.com/photo-1651056223915-b709056e0dc5?auto=format&fit=crop&w=1200&q=88",
//   water:
//     "https://images.unsplash.com/photo-1720662746262-377dfee50ad8?auto=format&fit=crop&w=1200&q=88",
// }

// ───────── NEW: folder locations + helper ─────────
const folders = {
  nature: "/products/new/Distinct_by_nature",
  canon: "/products/new/The_designer_canon",
  trending: "/products/new/Trending_now",
}
const img = (folder: string, file: string) => `${folder}/${file}`
// ──────────────────────────────────────────────────

// CHANGED: 10 products, images now come from the Distinct_by_nature folder
const bestSellers: Product[] = [
  {
    name: "Aventus",
    house: "Creed",
    price: "$365",
    note: "Pineapple · Birch · Musk",
    image: img(folders.nature, "aventus.jpg"),
    badge: "House favorite",
    studioImage: true,
  },
  {
    name: "Baccarat Rouge 540",
    house: "Maison Francis Kurkdjian",
    price: "$209.56",
    note: "1.2 oz EDP · Saffron · Amberwood",
    image: img(folders.nature, "baccarat-rouge-540.jpg"),
    studioImage: true,
    imageSize: "statement",
  },
  {
    name: "Power of You",
    house: "Armani Beauty",
    price: "$150",
    note: "Passion fruit · Vanilla · Musk",
    image: img(folders.nature, "power-of-you.jpg"),
    studioImage: true,
  }, // CHECK NAME
  {
    name: "Jadore",
    house: "Christian Dior",
    price: "$160",
    note: "Ylang-ylang · Rose · Jasmine",
    image: img(folders.nature, "jadore.jpg"),
    studioImage: true,
  }, // CHECK NAME
  {
    name: "Acqua di Giò",
    house: "Giorgio Armani",
    price: "$138",
    note: "Marine · Bergamot · Cedar",
    image: img(folders.nature, "acqua-di-gio.jpg"),
    studioImage: true,
  }, // CHECK NAME
  {
    name: "The Most Wanted",
    house: "Azzaro",
    price: "$125",
    note: "Toffee · Cardamom · Amber",
    image: img(folders.nature, "the-most-wanted.jpg"),
    studioImage: true,
  }, // CHECK NAME
  {
    name: "Y",
    house: "Yves Saint Laurent",
    price: "$140",
    note: "Apple · Sage · Cedar",
    image: img(folders.nature, "ysl-y.jpg"),
    studioImage: true,
  },
  {
    name: "The One",
    house: "Dolce & Gabbana",
    price: "$130",
    note: "Grapefruit · Tobacco · Amber",
    image: img(folders.nature, "the-one.jpg"),
    studioImage: true,
  }, // CHECK NAME
  {
    name: "Paradoxe Intense",
    house: "Prada",
    price: "$165",
    note: "Jasmine · Amber · Moss",
    image: img(folders.nature, "prada-paradoxe.jpg"),
    studioImage: true,
  }, // CHECK NAME
  {
    name: "Born in Roma Donna",
    house: "Valentino",
    price: "$150",
    note: "Bourbon vanilla · Jasmine · Woods",
    image: img(folders.nature, "born-in-roma-donna.jpg"),
    studioImage: true,
  }, // CHECK NAME
]

// CHANGED: 10 products, images now come from The_designer_canon folder
const designer: Product[] = [
  {
    name: "CK One",
    house: "Calvin Klein",
    price: "$85",
    note: "Bergamot · Green tea · Musk",
    image: img(folders.canon, "ck-one.jpg"),
    studioImage: true,
    imageSize: "balanced",
  },
  {
    name: "Devotion",
    house: "Dolce & Gabbana",
    price: "$145",
    note: "Candied citrus · Orange blossom · Vanilla",
    image: img(folders.canon, "devotion.png"),
    studioImage: true,
    imageSize: "compact",
  },
  {
    name: "Bubble Bath",
    house: "Maison Margiela",
    price: "$165",
    note: "Soap · Coconut · White musk",
    image: img(folders.canon, "replica-bubble-bath.png"),
    studioImage: true,
    imageSize: "compact",
  },
  {
    name: "Invictus",
    house: "Rabanne",
    price: "$132",
    note: "Grapefruit · Lavender · Cypress",
    image: img(folders.canon, "invictus.png"),
    studioImage: true,
    imageSize: "balanced",
  },
  {
    name: "Good Girl",
    house: "Carolina Herrera",
    price: "$168",
    note: "Tuberose · Tonka · Cocoa",
    image: img(folders.canon, "good-girl.png"),
    studioImage: true,
    imageSize: "compact",
  },
  {
    name: "La Vie Est Belle",
    house: "Lancôme",
    price: "$150",
    note: "Iris · Praline · Vanilla",
    image: img(folders.canon, "la-vie-est-belle.png"),
    studioImage: true,
    imageSize: "generous",
  },
  {
    name: "Flowerbomb",
    house: "Viktor & Rolf",
    price: "$155",
    note: "Jasmine · Orchid · Patchouli",
    image: img(folders.canon, "flowerbomb.jpg"),
    studioImage: true,
    imageSize: "balanced",
  }, // CHECK NAME
  {
    name: "Born in Roma Uomo",
    house: "Valentino",
    price: "$135",
    note: "Mineral · Sage · Vetiver",
    image: img(folders.canon, "born-in-roma-uomo.jpg"),
    studioImage: true,
    imageSize: "balanced",
  }, // CHECK NAME
  {
    name: "Voyage",
    house: "Nautica",
    price: "$60",
    note: "Green leaf · Lotus · Musk",
    image: img(folders.canon, "nautica-voyage.jpg"),
    studioImage: true,
    imageSize: "generous",
  }, // CHECK NAME
  {
    name: "I Will",
    house: "Giorgio Armani",
    price: "$155",
    note: "Bergamot · Amber · Woods",
    image: img(folders.canon, "i-will.png"),
    studioImage: true,
    imageSize: "compact",
  },
]

// CHANGED: 10 products, images now come from Trending_now folder
const trending: Product[] = [
  {
    name: "Yara Elixir",
    house: "Lattafa",
    price: "$75",
    note: "Orchid · Tropical fruit · Vanilla",
    image: img(folders.trending, "yara-elixir.jpg"),
    badge: "Trending now",
    studioImage: true,
  },
  {
    name: "Musamam",
    house: "Lattafa",
    price: "$70",
    note: "Saffron · Oud · Amber",
    image: img(folders.trending, "musamam.jpg"),
    studioImage: true,
  },
  {
    name: "Asad",
    house: "Lattafa",
    price: "$75",
    note: "Pepper · Tobacco · Vanilla",
    image: img(folders.trending, "asad.jpg"),
    studioImage: true,
  }, // CHECK NAME
  {
    name: "9 PM",
    house: "Afnan",
    price: "$68",
    note: "Apple · Cinnamon · Vanilla",
    image: img(folders.trending, "9-pm.jpg"),
    studioImage: true,
  },
  {
    name: "Nitro Red",
    house: "Dumont",
    price: "$55",
    note: "Spice · Citrus · Woods",
    image: img(folders.trending, "nitro-red.jpg"),
    studioImage: true,
  },
  {
    name: "Viva La Juicy",
    house: "Juicy Couture",
    price: "$112",
    note: "Pear · Honeysuckle · Caramel",
    image: img(folders.trending, "viva-la-juicy.jpg"),
    studioImage: true,
  }, // CHECK NAME
  {
    name: "Vanilla Vibes",
    house: "Juliette Has a Gun",
    price: "$135",
    note: "Vanilla · Musk · Sandalwood",
    image: img(folders.trending, "vanilla-vibes.jpg"),
    studioImage: true,
  }, // CHECK NAME
  {
    name: "Not a Perfume",
    house: "Juliette Has a Gun",
    price: "$135",
    note: "Ambroxan · Musk · Cedar",
    image: img(folders.trending, "not-a-perfume.jpg"),
    studioImage: true,
  }, // CHECK NAME
  {
    name: "Cloud",
    house: "Ariana Grande",
    price: "$75",
    note: "Lavender · Coconut · Praline",
    image: img(folders.trending, "cloud.jpg"),
    studioImage: true,
  }, // CHECK NAME
  {
    name: "Pink Sugar",
    house: "Aquolina",
    price: "$60",
    note: "Cotton candy · Caramel · Musk",
    image: img(folders.trending, "pink-sugar.jpg"),
    studioImage: true,
  }, // CHECK NAME
]

const productEditorialLabels: Record<string, string> = {
  Aventus: "LEGACY ICON",
  "Baccarat Rouge 540": "GLOBAL PHENOMENON",
  "Power of You": "CURATOR'S CHOICE",
  Jadore: "RED CARPET CLASSIC",
  "Acqua di Giò": "TIMELESS AQUATIC",
  "The Most Wanted": "AFTER DARK FAVORITE",
  Y: "MODERN ICON",
  "The One": "PRIVATE RESERVE",
  "Paradoxe Intense": "AVANT-GARDE EDIT",
  "Born in Roma Donna": "NOCTURNAL BLOOM",
  "CK One": "TIMLESS CLASSIC",
  Devotion: "GOURMAND ACCORD",
  "Bubble Bath": "OLFACTORY MEMORY",
  Invictus: "VICTORY EDIT",
  "Good Girl": "NOCTURNAL SILHOUETTE",
  "La Vie Est Belle": "MAISON FAVORITE",
  Flowerbomb: "FLORAL MASTERPIECE",
  "Born in Roma Uomo": "NOCTURNAL REBEL",
  Voyage: "FRESH ESSENTIAL",
  "I Will": "PRIVATE RESERVE",
  "Yara Elixir": "SOCIAL PHENOMENON",
  Musamam: "VIRAL SENSATION",
  Asad: "COMMUNITY FAVORITE",
  "9 PM": "THE INTERNET'S CHOICE",
  "Nitro Red": "HYPE EDIT",
  "Viva La Juicy": "ICONIC THROWBACK",
  "Vanilla Vibes": "TRENDING ESSENTIAL",
  "Not a Perfume": "THE PHENOMENON",
  Cloud: "CELEBRITY ICON",
  "Pink Sugar": "NOSTALGIA FAVORITE",
}

const navigation = [
  "Women",
  "Men",
  "Unisex",
  "Designers",
  "Beauty",
  "Bath and Body",
  "Gift Sets",
  "New Arrival",
  "Outlet",
]

const navigationMenus: Record<string, string[]> = {
  Women: ["New arrivals", "Best sellers", "Floral fragrances", "Gift sets"],
  Men: ["New arrivals", "Modern classics", "Woody fragrances", "Gift sets"],
  Unisex: ["Niche discoveries", "Amber scents", "Fresh scents", "Extrait"],
  Designers: ["Italian houses", "French maisons", "Modern icons", "View all"],
  Beauty: ["Skincare", "Makeup", "Fragrance layering", "New in beauty"],
  "Bath and Body": ["Bath rituals", "Body care", "Home fragrance", "Travel"],
  "Gift Sets": ["For her", "For him", "Under $100", "Luxury gifts"],
  "New Arrival": ["Just landed", "New fragrance", "New beauty", "View all"],
  Outlet: ["Last chance", "Fragrance offers", "Beauty offers", "View all"],
}

const navigationHref = (item: string) =>
  item === "Designers"
    ? "#designer"
    : item === "Beauty" ||
        item === "Bath and Body" ||
        item === "Gift Sets"
      ? "#beauty"
      : "#shop"

const scentNotes = [
  {
    name: "Woods",
    description: "Cedar, sandalwood, vetiver",
    image: "/scent/woodscent.avif",
    alt: "Sculptural dark tree bark",
    artClass: "",
  },
  {
    name: "Florals",
    description: "Iris, jasmine, orange blossom",
    image: "/scent/floralscent.avif",
    alt: "Soft flowers photographed in shadow",
    artClass: "",
  },
  {
    name: "Amber",
    description: "Vanilla, resins, warm spice",
    image: "/scent/amberscent.avif",
    alt: "Golden amber and citrine stones",
    artClass: "",
  },
  {
    name: "Citrus",
    description: "Bergamot, lemon, mandarin",
    image: "/scent/citricscent.avif",
    alt: "Citrus fruit covered in luminous droplets",
    artClass: "",
  },
  {
    name: "Gourmand",
    description: "Vanilla, caramel, tonka bean",
    image: "/scent/gormand.avif",
    alt: "A bundle of natural vanilla pods",
    artClass: "",
  },
]

const manifestoSlides = [
  {
    image: "/manifesto/curve-black.jpg",
    alt: "Curve Black fragrance with lavender, violet leaves and leather",
    headline: "Darkness,",
    accent: "tailored.",
    body: "Lavender cools against violet leaf and polished leather—a composition cut with the precision of evening dress.",
  },
  {
    image: "/manifesto/fire-on-ice.jpg",
    alt: "Fire on Ice fragrance surrounded by flame and crystalline ice",
    headline: "Heat,",
    accent: "held in crystal.",
    body: "A study in beautiful contradiction: incandescent spice, mineral clarity and a trail that moves between flame and frost.",
  },
  {
    image: "/manifesto/michael-kors-pour-femme.jpg",
    alt: "Michael Kors Pour Femme with citrus and white florals",
    headline: "Radiance,",
    accent: "with restraint.",
    body: "Mandarin and white petals illuminate a warm, sculpted base—golden in presence, impeccably controlled in expression.",
  },
  {
    image: "/manifesto/dolce-gabbana-the-one.jpg",
    alt: "Dolce and Gabbana The One with citrus and aromatic leaves",
    headline: "Freshness,",
    accent: "made magnetic.",
    body: "Citrus brightness meets aromatic green depth, creating a signature that feels effortless at first and unforgettable thereafter.",
  },
  {
    image: "/manifesto/valentino-born-in-roma.jpg",
    alt: "Valentino Born in Roma framed by jasmine and vanilla",
    headline: "A floral,",
    accent: "with afterglow.",
    body: "Jasmine and bourbon vanilla are drawn into a modern chiaroscuro—luminous, sensual and composed to linger close to the skin.",
  },
  {
    image: "/manifesto/lattafa-khamrah.jpg",
    alt: "Lattafa Khamrah with vanilla, amber and warm gourmand notes",
    headline: "Warmth,",
    accent: "composed in layers.",
    body: "Amber, vanilla and burnished sweetness unfold with measured opulence: generous in texture, never excessive in its finish.",
  },
  {
    image: "/manifesto/lattafa-mashrabya.jpg",
    alt: "Lattafa Mashrabya with tobacco, cinnamon, apple and oud",
    headline: "Spice, smoke,",
    accent: "and ceremony.",
    body: "Tobacco, cinnamon and oud gather around a polished fruit accord, evoking rooms of carved wood, low light and quiet ritual.",
  },
  {
    image: "/manifesto/jean-paul-gaultier-garden.jpg",
    alt: "Jean Paul Gaultier Garden fragrance collection",
    headline: "Three ways",
    accent: "to leave a trace.",
    body: "Aromatic, aquatic and amber woods reveal distinct facets of seduction—each one assured, each one unmistakably its own.",
  },
  {
    image: "/manifesto/calvin-klein-eternity.jpg",
    alt: "Calvin Klein Eternity with rose, lily and sandalwood",
    headline: "A classic,",
    accent: "quietly renewed.",
    body: "Rose and white lily settle over sandalwood with enduring grace—a timeless structure refined for a more intimate age.",
  },
  {
    image: "/manifesto/marc-jacobs-daisy.jpg",
    alt: "Marc Jacobs Daisy fragrance collection beside a lake",
    headline: "Light,",
    accent: "with a point of view.",
    body: "Airy florals and translucent woods capture the ease of open skies, expressed with polish rather than innocence.",
  },
]

function Icon({
  name,
}: {
  name: "search" | "bag" | "user" | "menu" | "arrow" | "heart" | "close"
}) {
  const paths = {
    search: (
      <>
        <circle cx="11" cy="11" r="6.5" />
        <path d="m16 16 4 4" />
      </>
    ),
    bag: (
      <>
        <path d="M5 8h14l-1 13H6L5 8Z" />
        <path d="M9 9V6a3 3 0 0 1 6 0v3" />
      </>
    ),
    user: (
      <>
        <circle cx="12" cy="8" r="3.5" />
        <path d="M5 21a7 7 0 0 1 14 0" />
      </>
    ),
    menu: (
      <>
        <path d="M3 7h18M3 17h18" />
      </>
    ),
    arrow: (
      <>
        <path d="M4 12h15M14 7l5 5-5 5" />
      </>
    ),
    heart: (
      <path d="M20.8 4.7a5.5 5.5 0 0 0-7.8 0L12 5.8l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.8-7.4 1.1-1.1a5.5 5.5 0 0 0-.1-7.8Z" />
    ),
    close: (
      <>
        <path d="m5 5 14 14M19 5 5 19" />
      </>
    ),
  }
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      {paths[name]}
    </svg>
  )
}

function Wordmark({ light = false }: { light?: boolean }) {
  return (
    <a
      className={`wordmark ${light ? "light" : ""}`}
      href="#top"
      aria-label="NY Perfume House home"
    >
      {light ? (
        <span>NY PERFUME HOUSE</span>
      ) : (
        <>
          <span className="luxury-monogram" aria-hidden="true">
            <span>N</span>
            <span>Y</span>
          </span>
          <span className="wordmark-name">NY PERFUME HOUSE</span>
        </>
      )}
    </a>
  )
}

function SeamlessHeroVideo() {
  const firstVideo = useRef<HTMLVideoElement>(null)
  const secondVideo = useRef<HTMLVideoElement>(null)
  const firstBackdrop = useRef<HTMLVideoElement>(null)
  const secondBackdrop = useRef<HTMLVideoElement>(null)
  const transitionTimer = useRef<number | null>(null)
  const transitioning = useRef(false)
  const [activeLayer, setActiveLayer] = useState(0)
  const videoLayers = [
    { foreground: firstVideo, backdrop: firstBackdrop },
    { foreground: secondVideo, backdrop: secondBackdrop },
  ]

  const playVideo = (video: HTMLVideoElement) => {
    void video.play().catch((error: DOMException) => {
      if (error.name !== "AbortError") {
        // Playback can still be blocked by browser policy; the active layer
        // remains visible and can resume on the next media event.
        return
      }
    })
  }

  useEffect(
    () => () => {
      if (transitionTimer.current) window.clearTimeout(transitionTimer.current)
    },
    [],
  )

  const beginCrossfade = (layer: number) => {
    if (layer !== activeLayer || transitioning.current) return
    const currentLayer = videoLayers[layer]
    const currentVideo = currentLayer.foreground.current
    if (
      !currentVideo?.duration ||
      currentVideo.duration - currentVideo.currentTime > 2.4
    )
      return

    const nextLayer = layer === 0 ? 1 : 0
    const nextVideos = videoLayers[nextLayer]
    const nextForeground = nextVideos.foreground.current
    const nextBackdrop = nextVideos.backdrop.current
    if (!nextForeground || !nextBackdrop) return

    transitioning.current = true
    nextForeground.currentTime = 0.04
    nextBackdrop.currentTime = 0.04
    playVideo(nextBackdrop)
    playVideo(nextForeground)
    setActiveLayer(nextLayer)

    transitionTimer.current = window.setTimeout(() => {
      currentLayer.foreground.current?.pause()
      currentLayer.backdrop.current?.pause()
      if (currentLayer.foreground.current)
        currentLayer.foreground.current.currentTime = 0
      if (currentLayer.backdrop.current)
        currentLayer.backdrop.current.currentTime = 0
      transitioning.current = false
    }, 2200)
  }

  return (
    <div className="hero-video-stack">
      {videoLayers.map((videoLayer, layer) => (
        <div
          className={`hero-video-scene ${
            activeLayer === layer ? "active" : ""
          }`}
          key={layer}
        >
          <video
            ref={videoLayer.backdrop}
            className="hero-video-backdrop"
            autoPlay={layer === 0}
            muted
            playsInline
            preload="auto"
            aria-hidden="true"
          >
            <source src="/hero/ny-perfume-house-hero.mp4" type="video/mp4" />
          </video>
          <video
            ref={videoLayer.foreground}
            className="hero-video-foreground"
            autoPlay={layer === 0}
            muted
            playsInline
            preload="auto"
            onTimeUpdate={() => beginCrossfade(layer)}
            onEnded={(event) => {
              const foreground = event.currentTarget
              const backdrop = videoLayer.backdrop.current
              foreground.currentTime = 0
              if (backdrop) backdrop.currentTime = 0
              if (backdrop) playVideo(backdrop)
              playVideo(foreground)
            }}
          >
            <source src="/hero/ny-perfume-house-hero.mp4" type="video/mp4" />
          </video>
        </div>
      ))}
    </div>
  )
}

function SectionHeading({
  eyebrow,
  title,
  link,
}: {
  eyebrow: string
  title: string
  link: string
}) {
  return (
    <div className="section-heading reveal">
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
      </div>
      <a className="text-link" href="#shop">
        {link}
        <Icon name="arrow" />
      </a>
    </div>
  )
}

function ProductCard({
  product,
  onAdd,
}: {
  product: Product
  onAdd: (product: Product) => void
}) {
  const [liked, setLiked] = useState(false)
  return (
    <article className="product-card reveal">
      <div className="product-image-wrap">
        <span className="product-kicker">
          {productEditorialLabels[product.name]}
        </span>
        <button
          className={`heart ${liked ? "active" : ""}`}
          onClick={() => setLiked(!liked)}
          aria-label={`${liked ? "Remove" : "Add"} ${product.name} ${
            liked ? "from" : "to"
          } wishlist`}
        >
          <Icon name="heart" />
        </button>
        <div className="product-image-stage">
          <img
            className={[
              product.studioImage ? "studio-product-image" : "",
              product.imageSize ? `product-image--${product.imageSize}` : "",
            ]
              .filter(Boolean)
              .join(" ")}
            src={product.image}
            alt={`${product.house} ${product.name} fragrance`}
            loading="lazy"
          />
          <button className="quick-add" onClick={() => onAdd(product)}>
            Quick add
          </button>
        </div>
      </div>
      <p className="product-house">{product.house}</p>
      <div className="product-title-row">
        <h3>{product.name}</h3>
        <span>{product.price}</span>
      </div>
      <p className="product-note">{product.note}</p>
    </article>
  )
}

function ProductRow({
  eyebrow,
  title,
  link,
  products,
  onAdd,
}: {
  eyebrow: string
  title: string
  link: string
  products: Product[]
  onAdd: (product: Product) => void
}) {
  const gridRef = useRef<HTMLDivElement>(null)
  const scrollProducts = (direction: -1 | 1) => {
    const grid = gridRef.current
    if (!grid) return
    grid.scrollBy({ left: direction * grid.clientWidth, behavior: "smooth" })
  }

  return (
    <section
      className="product-section product-shell"
      id={eyebrow === "The house edit" ? "shop" : undefined}
    >
      <SectionHeading eyebrow={eyebrow} title={title} link={link} />
      <div className="product-grid" ref={gridRef}>
        {products.map((product) => (
          <ProductCard key={product.name} product={product} onAdd={onAdd} />
        ))}
      </div>
      <div className="product-scroll-control reveal">
        <button
          type="button"
          className="previous"
          onClick={() => scrollProducts(-1)}
          aria-label={`Show previous products in ${title}`}
        >
          <Icon name="arrow" />
        </button>
        <span aria-hidden="true" />
        <button
          type="button"
          onClick={() => scrollProducts(1)}
          aria-label={`Show next products in ${title}`}
        >
          <Icon name="arrow" />
        </button>
      </div>
    </section>
  )
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [cartCount, setCartCount] = useState(0)
  const [toast, setToast] = useState("")
  const [selectedNote, setSelectedNote] = useState("Woods")
  const [noteStart, setNoteStart] = useState(0)
  const [activeManifesto, setActiveManifesto] = useState(0)

  useEffect(() => {
    document.title =
      "NY Perfume House | Luxury Perfume, Niche Fragrance & Beauty"
    const description = document.createElement("meta")
    description.name = "description"
    description.content =
      "Discover luxury designer, niche and extrait fragrances at NY Perfume House. Curated perfumes, beauty, skincare and considered gifts, gathered in New York."
    document.head.appendChild(description)
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach(
          (entry) =>
            entry.isIntersecting && entry.target.classList.add("is-visible"),
        ),
      { threshold: 0.12 },
    )
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el))
    return () => {
      observer.disconnect()
      description.remove()
    }
  }, [])

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    const timer = window.setInterval(
      () =>
        setActiveManifesto(
          (current) => (current + 1) % manifestoSlides.length,
        ),
      6000,
    )
    return () => window.clearInterval(timer)
  }, [activeManifesto])

  const addToCart = (product: Product) => {
    setCartCount((count) => count + 1)
    setToast(`${product.name} added to your bag`)
    window.setTimeout(() => setToast(""), 2600)
  }

  const visibleNotes = Array.from(
    { length: 3 },
    (_, index) => scentNotes[(noteStart + index) % scentNotes.length],
  )
  const manifesto = manifestoSlides[activeManifesto]

  return (
    <main id="top">
      <div className="announcement">
        Complimentary samples with every fragrance order{" "}
        <a href="#shop">Discover more</a>
      </div>
      <header className="header">
        <button
          className="mobile-icon"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
        >
          <Icon name="menu" />
        </button>
        <Wordmark />
        <nav aria-label="Primary navigation">
          {navigation.map((item) => (
            <div className="nav-item" key={item}>
              <a href={navigationHref(item)}>{item}</a>
              <div className="nav-dropdown">
                <p>{item}</p>
                {navigationMenus[item].map((entry) => (
                  <a href={navigationHref(item)} key={entry}>
                    {entry}
                    <Icon name="arrow" />
                  </a>
                ))}
              </div>
            </div>
          ))}
        </nav>
        <div className="header-actions">
          <button onClick={() => setSearchOpen(true)} aria-label="Search">
            <Icon name="search" />
          </button>
          <button className="hide-mobile" aria-label="Account">
            <Icon name="user" />
          </button>
          <button aria-label={`Shopping bag with ${cartCount} items`}>
            <Icon name="bag" />
            {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
          </button>
        </div>
      </header>

      <section className="hero hero-video-only" aria-label="NY Perfume House">
        <SeamlessHeroVideo />
      </section>

      <section className="brand-marquee" aria-label="Featured designer brands">
        <div className="marquee-track">
          {[
            ...[
              "CREED",
              "DOLCE & GABBANA",
              "DIOR",
              "BURBERRY",
              "PRADA",
              "DAVIDOFF",
              "BOND No. 9",
              "VIKTOR & ROLF",
            ],
            ...[
              "CREED",
              "DOLCE & GABBANA",
              "DIOR",
              "BURBERRY",
              "PRADA",
              "DAVIDOFF",
              "BOND No. 9",
              "VIKTOR & ROLF",
            ],
          ].map((brand, index) => (
            <span key={`${brand}-${index}`}>{brand}</span>
          ))}
        </div>
      </section>

      <ProductRow
        eyebrow="The house edit"
        title="Distinct by nature."
        link="Explore all fragrances"
        products={bestSellers}
        onAdd={addToCart}
      />

      <section className="notes-section" id="notes">
        <div className="notes-intro reveal">
          <p className="eyebrow">A fragrance of your own</p>
          <h2>Follow your instinct.</h2>
          <p>
            Begin with a note you love. We’ll lead you to the scents that feel
            unmistakably yours.
          </p>
        </div>
        <div className="notes-grid shell reveal">
          {visibleNotes.map(
            ({ name, description, image, alt, artClass }) => (
            <button
              type="button"
              key={name}
              className={`note-card ${
                selectedNote === name ? "selected" : ""
              }`}
              onClick={() => setSelectedNote(name)}
              aria-pressed={selectedNote === name}
            >
              {artClass ? (
                <span
                  className={`note-art ${artClass}`}
                  role="img"
                  aria-label={alt}
                />
              ) : (
                <img className="note-art" src={image} alt={alt} loading="lazy" />
              )}
              <span className="note-overlay">
                <strong>{name}</strong>
                <small>{description}</small>
                <i>
                  <Icon name="arrow" />
                </i>
              </span>
            </button>
          ))}
        </div>
        <div className="notes-browse shell">
          <span>
            {String(noteStart + 1).padStart(2, "0")} /{" "}
            {String(scentNotes.length).padStart(2, "0")}
          </span>
          <button
            type="button"
            onClick={() =>
              setNoteStart((current) => (current + 1) % scentNotes.length)
            }
            aria-label="Show more fragrance notes"
          >
            <Icon name="arrow" />
          </button>
        </div>
        <div className="note-result reveal">
          <p>Your instinct says</p>
          <strong>{selectedNote}</strong>
          <a href="#shop">
            Explore the edit <Icon name="arrow" />
          </a>
        </div>
      </section>

      <div id="designer">
        <ProductRow
          eyebrow="Icons, reimagined"
          title="The designer canon."
          link="Shop designers"
          products={designer}
          onAdd={addToCart}
        />
      </div>

      <section className="manifesto">
        <div className="manifesto-image reveal">
          <img
            className="manifesto-image-backdrop"
            key={manifesto.image}
            src={manifesto.image}
            alt=""
            aria-hidden="true"
          />
          <img
            className="manifesto-image-foreground"
            key={`${manifesto.image}-foreground`}
            src={manifesto.image}
            alt={manifesto.alt}
          />
        </div>
        <div className="manifesto-copy reveal">
          <div className="manifesto-copy-inner" key={manifesto.image}>
            <p className="eyebrow">The NY standard</p>
            <h2>
              {manifesto.headline}
              <br />
              <em>{manifesto.accent}</em>
            </h2>
            <p>{manifesto.body}</p>
            <a className="text-link light-link" href="#journal">
              Our philosophy <Icon name="arrow" />
            </a>
          </div>
          <div className="manifesto-controls">
            <span>
              {String(activeManifesto + 1).padStart(2, "0")} /{" "}
              {String(manifestoSlides.length).padStart(2, "0")}
            </span>
            <div>
              <button
                type="button"
                className="previous"
                onClick={() =>
                  setActiveManifesto(
                    (current) =>
                      (current - 1 + manifestoSlides.length) %
                      manifestoSlides.length,
                  )
                }
                aria-label="Previous NY Standard story"
              >
                <Icon name="arrow" />
              </button>
              <button
                type="button"
                onClick={() =>
                  setActiveManifesto(
                    (current) => (current + 1) % manifestoSlides.length,
                  )
                }
                aria-label="Next NY Standard story"
              >
                <Icon name="arrow" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <ProductRow
        eyebrow="As seen, saved & shared"
        title="Trending now."
        link="View the viral edit"
        products={trending}
        onAdd={addToCart}
      />

      <section className="beauty shell" id="beauty">
        <SectionHeading
          eyebrow="More to discover"
          title="The beauty cabinet."
          link="Shop all beauty"
        />
        <div className="beauty-grid">
          {[
            [
              "Gifts for her",
              "A considered gesture",
              "/beauty/gifts-for-her.webp",
            ],
            [
              "Gifts for him",
              "The art of giving",
              "/beauty/gifts-for-him.webp",
            ],
            [
              "Skincare",
              "Rituals, refined",
              "/beauty/skincare.webp",
            ],
            [
              "Makeup",
              "Color with character",
              "/beauty/makeup.webp",
            ],
          ].map(([title, subtitle, image]) => (
            <a
              className="beauty-card reveal"
              href="#shop"
              key={title}
            >
              <img src={image} alt={`${title} collection`} loading="lazy" />
              <span>
                <small>{subtitle}</small>
                <strong>{title}</strong>
                <Icon name="arrow" />
              </span>
            </a>
          ))}
        </div>
      </section>

      <section className="journal shell" id="journal">
        <SectionHeading
          eyebrow="The journal"
          title="Beyond the bottle."
          link="View the journal"
        />
        <div className="journal-grid">
          <article className="reveal">
            <img
              src="/blogimage/miumiu.avif"
              alt="White iris flower in soft light"
              loading="lazy"
            />
            <p className="eyebrow">Notes & ingredients</p>
            <h3>The many lives of iris</h3>
            <p>
              Powdery, earthy, cool—how one root becomes a dozen different moods
              in the hands of different houses.
            </p>
            <a className="text-link" href="#journal">
              Read more <Icon name="arrow" />
            </a>
          </article>
          <article className="reveal">
            <img
              src="/blogimage/amberblog.avif"
              alt="Amber fragrance bottle in evening light"
              loading="lazy"
            />
            <p className="eyebrow">The evening edit</p>
            <h3>A fragrance after dark</h3>
            <p>
              Why the scent that suits an evening is rarely the one you reached
              for that morning.
            </p>
            <a className="text-link" href="#journal">
              Read more <Icon name="arrow" />
            </a>
          </article>
        </div>
      </section>

      <section className="services">
        <div>
          <span>01</span>
          <strong>A considered service</strong>
          <p>Complimentary delivery on orders over $100.</p>
        </div>
        <div>
          <span>02</span>
          <strong>Personal consultation</strong>
          <p>Speak with a fragrance specialist.</p>
        </div>
        <div>
          <span>03</span>
          <strong>The details, clearly</strong>
          <p>Simple returns within 30 days.</p>
        </div>
      </section>

      <footer id="footer">
        <div className="newsletter shell">
          <div>
            <p className="eyebrow">An invitation to the house</p>
            <h2>Stay in the know.</h2>
            <p>New arrivals and restocks, by email.</p>
          </div>
          <form onSubmit={(e) => e.preventDefault()}>
            <label className="sr-only" htmlFor="email">
              Your email address
            </label>
            <input
              id="email"
              type="email"
              placeholder="Your email address"
              required
            />
            <button>
              Subscribe <Icon name="arrow" />
            </button>
            <small>
              By subscribing you agree to receive occasional emails. Unsubscribe
              at any time.
            </small>
          </form>
        </div>
        <div className="footer-main shell">
          <div className="footer-brand">
            <Wordmark light />
            <p>
              A house of houses—designer, niche and extrait,
              <br />
              gathered in New York.
            </p>
            <a href="mailto:concierge@nyperfumehouse.com">
              concierge@nyperfumehouse.com
            </a>
            <span>New York, NY</span>
          </div>
          <div>
            <p className="eyebrow">Explore</p>
            <a href="#shop">Women</a>
            <a href="#shop">Men</a>
            <a href="#shop">Unisex</a>
            <a href="#designer">Designers</a>
            <a href="#notes">Niche & Extrait</a>
            <a href="#beauty">Gift Sets</a>
          </div>
          <div>
            <p className="eyebrow">Assistance</p>
            <a href="#footer">Contact</a>
            <a href="#footer">Shipping</a>
            <a href="#footer">Returns</a>
            <a href="#footer">FAQ</a>
            <a href="#footer">Privacy policy</a>
            <a href="#footer">Terms of service</a>
          </div>
        </div>
        <div className="copyright shell">
          <span>© 2026 NY Perfume House · nyperfumehouse.com</span>
          <span>USD $</span>
        </div>
      </footer>

      {menuOpen && (
        <div className="mobile-menu">
          <button onClick={() => setMenuOpen(false)} aria-label="Close menu">
            <Icon name="close" />
          </button>
          <Wordmark light />
          <nav>
            {navigation.map((item) => (
              <details key={item}>
                <summary>
                  {item}
                  <Icon name="arrow" />
                </summary>
                <div>
                  {navigationMenus[item].map((entry) => (
                    <a
                      key={entry}
                      href={navigationHref(item)}
                      onClick={() => setMenuOpen(false)}
                    >
                      {entry}
                    </a>
                  ))}
                </div>
              </details>
            ))}
          </nav>
        </div>
      )}
      {searchOpen && (
        <div className="search-overlay">
          <button
            onClick={() => setSearchOpen(false)}
            aria-label="Close search"
          >
            <Icon name="close" />
          </button>
          <p className="eyebrow">Search the house</p>
          <form onSubmit={(e) => e.preventDefault()}>
            <input
              autoFocus
              aria-label="Search"
              placeholder="What are you looking for?"
            />
            <Icon name="search" />
          </form>
          <p>Try “vanilla”, “new arrivals” or “gift sets”</p>
        </div>
      )}
      {toast && (
        <div className="toast" role="status">
          {toast}
          <span>View bag</span>
        </div>
      )}
    </main>
  )
}
