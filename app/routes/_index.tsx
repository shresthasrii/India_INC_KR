import { IconArrowDown, IconArrowRight, IconArrowUpRight, IconCompass, IconMenu2 } from "@tabler/icons-react";
import { useState } from "react";

export function meta() {
  return [
    { title: "Kerala — A Land of Many Stories" },
    { name: "description", content: "Journey through the landscapes, history, culture and living heritage of Kerala." },
  ];
}

const chapters = [
  { number: "01", label: "THE LAND", title: "A land shaped by water", text: "Between the Arabian Sea and the Western Ghats lies a narrow, impossibly green stretch of India. Here, rivers find their way through paddy fields, coconut groves and an intricate network of backwaters before meeting the sea.", detail: "From the mist-covered tea gardens of Munnar to the palm-fringed waterways of Alappuzha, Kerala’s landscapes are as varied as the stories they hold.", image: "https://images.pexels.com/photos/40387748/pexels-photo-40387748.jpeg", alt: "Tea plantations across the rolling hills of Munnar", imageLabel: "MUNNAR, WESTERN GHATS", id: "land" },
  { number: "02", label: "THE PAST", title: "A coast that welcomed the world", text: "For centuries, pepper, cardamom and other spices drew merchants across the seas to Kerala’s Malabar Coast. Ports linked the region to Arabian, African, Chinese and European trading worlds, carrying languages, faiths and ideas along with goods.", detail: "The Chera kingdoms, the Zamorins of Calicut and later Portuguese, Dutch and British encounters each left their mark. In historic Kochi and Kozhikode, the layered past remains visible in waterfront trading quarters, old places of worship and the cosmopolitan food and customs of everyday life.", image: "https://images.pexels.com/photos/19743480/pexels-photo-19743480.jpeg", alt: "The tranquil waters and green banks of Kerala", imageLabel: "THE MALABAR COAST", id: "history" },
  { number: "03", label: "LIVING CULTURE", title: "Where stories come alive", text: "Kathakali turns epic stories into a vivid theatre of painted faces, elaborate costumes, hand gestures and precise eye movements. Accompanied by drums and cymbals, performers bring scenes from the Ramayana and Mahabharata to life in a form refined over generations.", detail: "Culture takes many forms here: Theyyam’s powerful ritual performances in North Malabar; Mohiniyattam’s flowing classical dance; the martial art of Kalaripayattu; and the chenda rhythms of temple festivals. At Onam, pookkalam flower designs, boat races and the shared Onasadya feast make celebration a community tradition.", image: "https://images.pexels.com/photos/34058994/pexels-photo-34058994.jpeg", alt: "Kathakali dancers in traditional costume", imageLabel: "KATHAKALI, KERALA", id: "culture" },
];

const destinations = [
  { name: "Kannur", note: "Northern shores & Theyyam", description: "Discover a northern coast of palm-lined beaches, historic forts and Theyyam, the extraordinary ritual art performed in local shrines.", image: "https://images.pexels.com/photos/29127053/pexels-photo-29127053.jpeg", alt: "Lighthouse on the coast of Kannur", left: "28%", top: "12%" },
  { name: "Kozhikode", note: "Malabar coast & cuisine", description: "Once a celebrated port on the Malabar spice route, Kozhikode pairs a rich maritime past with a food culture famous across Kerala.", image: "https://images.pexels.com/photos/20419967/pexels-photo-20419967.jpeg", alt: "Shorebirds on Kozhikode beach", left: "36%", top: "30%" },
  { name: "Kochi", note: "A historic harbour city", description: "Explore a storied harbour where centuries of spice trade shaped Fort Kochi’s streets, waterfront and layered architectural heritage.", image: "https://images.pexels.com/photos/7397178/pexels-photo-7397178.jpeg", alt: "Traditional fishing nets and ropes", left: "52%", top: "57%" },
  { name: "Munnar", note: "Tea gardens in the high ranges", description: "Wind through cool mountain air and rolling tea estates in the Western Ghats, where high-altitude trails look out over an emerald landscape.", image: "https://images.pexels.com/photos/29175434/pexels-photo-29175434.jpeg", alt: "Tea plantations in the hills", left: "76%", top: "62%" },
  { name: "Alappuzha", note: "Backwaters & houseboats", description: "Glide along quiet canals and the great Vembanad lake, past village life, coconut groves and the houseboats of Kerala’s backwaters.", image: "https://images.pexels.com/photos/19743480/pexels-photo-19743480.jpeg", alt: "Green banks along Kerala's backwaters", left: "59%", top: "75%" },
  { name: "Thiruvananthapuram", note: "Capital city & southern coast", description: "Kerala’s capital brings together the revered Padmanabhaswamy Temple, lively city streets and the beaches and backwaters of the southern coast.", image: "https://images.pexels.com/photos/32429711/pexels-photo-32429711.jpeg", alt: "A tranquil boat ride on the Poovar backwaters", left: "76%", top: "90%" },
];

type Destination = (typeof destinations)[number];

function KeralaMap({ selected, onSelect }: { selected: Destination; onSelect: (place: Destination) => void }) {
  return (
    <div className="map-card" aria-label="Interactive district map of Kerala">
      <div className="map-card-head"><span>EXPLORE THE DISTRICTS</span><IconCompass size={19} stroke={1.3} /></div>
      <div className="map-art">
        <img className="district-map-image" src="https://cdn.builder.io/api/v1/image/assets%2F0c4cdd417b834785b76922d40eb3823b%2Fcb8f9494e6ca4c18910d1ce59790b9e4?format=webp&width=800&height=1200" alt="District map of Kerala, from Kasaragod in the north to Thiruvananthapuram in the south" />
        {destinations.map((place) => (
          <button key={place.name} className={`map-place${selected.name === place.name ? " is-selected" : ""}`} style={{ left: place.left, top: place.top }} onClick={() => onSelect(place)} aria-label={`Explore ${place.name}: ${place.note}`} aria-pressed={selected.name === place.name}>
            <img src={place.image} alt={place.alt} />
            <span className="map-place-label">{place.name}</span>
          </button>
        ))}
      </div>
      <div className="map-card-foot"><span>{selected.name}</span><span>{selected.note}</span></div>
    </div>
  );
}

export default function HomeRoute() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedPlace, setSelectedPlace] = useState<Destination>(destinations[4]!);
  return (
    <div className="kerala-site">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Kerala, home"><span className="brand-mark"><img src="/logo.png" alt="Government of Kerala Emblem" className="brand-logo-img" /></span><span>kerala<span className="brand-period">.</span><small>THE LAND OF STORIES</small></span></a>
        <nav className={menuOpen ? "main-nav is-open" : "main-nav"} aria-label="Main navigation">
          <a href="#land" onClick={() => setMenuOpen(false)}>The land</a><a href="#history" onClick={() => setMenuOpen(false)}>History</a><a href="#culture" onClick={() => setMenuOpen(false)}>Culture</a><a href="#heritage" onClick={() => setMenuOpen(false)}>Heritage</a>
        </nav>
        <a className="header-link" href="#land">Begin the journey <IconArrowUpRight size={16} /></a>
        <button className="menu-toggle" aria-label="Toggle navigation" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}><IconMenu2 size={23}/></button>
      </header>

      <main id="top">
        <section className="hero">
          <img className="hero-image" src={selectedPlace.image} alt={selectedPlace.alt} />
          <div className="hero-shade" />
          <div className="hero-content">
            <div className="hero-copy"><div className="eyebrow light"><span className="eyebrow-line" /> A JOURNEY THROUGH GOD’S OWN COUNTRY</div><p className="malayalam">കേരളം</p><h1>Kerala<span>.</span></h1><div className="hero-place-story" aria-live="polite"><p className="hero-place-name">{selectedPlace.name}<span>{selectedPlace.note}</span></p><p className="hero-description">{selectedPlace.description}</p></div><a href="#introduction" className="explore-link">EXPLORE THE STORY <span><IconArrowDown size={17}/></span></a></div>
            <KeralaMap selected={selectedPlace} onSelect={setSelectedPlace} />
          </div>
          <div className="hero-bottom"><span>SCROLL TO EXPLORE</span><span>AN ODE TO THE LAND & ITS PEOPLE</span><span>01 / 04</span></div>
        </section>

        <section className="intro section-wrap" id="introduction">
          <div className="intro-label"><img src="/logo.png" alt="Government of Kerala Emblem" className="intro-logo-img" /><span>WELCOME TO KERALA<br /><small>INDIA’S SOUTHWEST COAST</small></span></div>
          <div className="intro-copy"><p className="section-kicker">A PLACE LIKE NO OTHER</p><h2>There is a little more<br />to <em>every story.</em></h2><p>Come for the landscapes. Stay for the stories. Kerala is a place where nature, history and tradition flow together, creating a way of life unlike anywhere else.</p><a href="#land" className="text-link">GET TO KNOW KERALA <IconArrowRight size={17}/></a></div>
          <div className="intro-aside"><span>“</span><p>Not just a place on the map, but a feeling that stays with you.</p><small>— THE KERALA STORY</small></div>
        </section>

        <div className="chapter-heading section-wrap"><div><p className="section-kicker">A LAND, MANY STORIES</p><h2>Get to know <em>Kerala.</em></h2></div><p>Four chapters. Countless stories.<br />Take your time exploring.</p></div>
        <div className="chapters">
          {chapters.map((chapter, index) => <section className={`chapter section-wrap ${index % 2 ? "chapter-reverse" : ""}`} id={chapter.id} key={chapter.id}>
            <div className="chapter-image-wrap"><img src={chapter.image} alt={chapter.alt} loading="lazy"/><div className="image-caption"><span>{chapter.imageLabel}</span><span>KERALA, INDIA</span></div></div>
            <div className="chapter-copy"><div className="chapter-number"><span>CHAPTER {chapter.number}</span><span className="chapter-rule"/><span>{chapter.label}</span></div><h2>{chapter.title.split(" ").slice(0, -1).join(" ")} <em>{chapter.title.split(" ").slice(-1)}</em></h2><p>{chapter.text}</p><p>{chapter.detail}</p><a className="text-link" href={index === 0 ? "#history" : index === 1 ? "#culture" : "#heritage"}>CONTINUE THE JOURNEY <IconArrowRight size={17}/></a></div>
          </section>)}
        </div>
        <section className="heritage" id="heritage">
          <div className="heritage-inner">
            <p className="section-kicker">CHAPTER 04 &nbsp; / &nbsp; HERITAGE</p>
            <h2>Tradition, with a<br /><em>life of its own.</em></h2>
            <p>Kerala’s heritage is not sealed away in the past. It lives in homes built for the monsoon, in music carried through festival streets, in recipes shared across generations and in the knowledge of craftspeople, artists and healers.</p>
            <div className="heritage-grid">
              <article><span>01 &nbsp; PERFORMANCE</span><h3>Dance, ritual &amp; rhythm</h3><p>Kathakali’s painted faces tell epic tales through gesture; Mohiniyattam moves with quiet grace. In North Malabar, Theyyam brings sacred stories into community courtyards, while chenda ensembles turn temple festivals into a powerful soundscape.</p></article>
              <article><span>02 &nbsp; ARCHITECTURE</span><h3>Built for place &amp; climate</h3><p>Traditional nalukettu homes gather around an open central courtyard, shaded by sloping tiled roofs that shelter against heavy monsoon rains. Across Kerala, temple, mosque, church and synagogue architecture reflects distinct communities and centuries of exchange.</p></article>
              <article><span>03 &nbsp; FESTIVAL &amp; FOOD</span><h3>A feast made to be shared</h3><p>Onam welcomes the harvest with pookkalam flower carpets, games, boat races and Onasadya: a generous vegetarian feast served on a banana leaf. Regional kitchens also celebrate appam and stew, Malabar biryani, puttu and seasonal seafood.</p></article>
              <article><span>04 &nbsp; LIVING CRAFT</span><h3>Knowledge passed hand to hand</h3><p>Kasavu weavers create the cream-and-gold garments worn for celebrations; coir workers turn coconut fibre into rope and mats. Ayurveda and medicinal plant traditions remain part of Kerala’s wider heritage of care and close attention to nature.</p></article>
            </div>
            <p className="heritage-closing">Across communities and generations, these traditions are made and remade every day. Kerala’s story is still being written.</p>
            <a href="#top" className="heritage-link">BACK TO THE BEGINNING <IconArrowUpRight size={17}/></a>
          </div>
          <div className="heritage-motif" aria-hidden="true"><img src="/logo.png" alt="" className="heritage-motif-img" /></div>
        </section>
      </main>
      <footer className="site-footer"><a className="brand footer-brand" href="#top"><span className="brand-mark"><img src="/logo.png" alt="Government of Kerala Emblem" className="brand-logo-img" /></span><span>kerala<span className="brand-period">.</span><small>THE LAND OF STORIES</small></span></a><p>Made for the curious, inspired by Kerala.</p><span>UNTIL WE MEET AGAIN &nbsp; ↗</span></footer>
    </div>
  );
}
