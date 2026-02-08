import { useState, useMemo } from 'react';
import { Search, ChevronDown, ChevronRight, Menu, X } from 'lucide-react';
import styles from './DocsSidebar.module.css';

interface DocLink {
  title: string;
  slug: string;
  section: string;
  order: number;
}

interface Props {
  docs: DocLink[];
  currentSlug?: string;
}

const sections: Record<string, string[]> = {
  'Getting Started': ['getting-started', 'installation'],
  'Configuration': ['configuration'],
  'Guides': ['deployment', 'components'],
};

export default function DocsSidebar({ docs, currentSlug }: Props) {
  const [search, setSearch] = useState('');
  const [openSections, setOpenSections] = useState<Record<string, boolean>>(
    Object.fromEntries(Object.keys(sections).map(k => [k, true]))
  );
  const [mobileOpen, setMobileOpen] = useState(false);

  const filtered = useMemo(() => {
    if (!search) return docs;
    const q = search.toLowerCase();
    return docs.filter(d => d.title.toLowerCase().includes(q) || d.slug.toLowerCase().includes(q));
  }, [docs, search]);

  const grouped = useMemo(() => {
    const groups: Record<string, DocLink[]> = {};
    for (const doc of filtered) {
      const section = doc.section || 'Other';
      if (!groups[section]) groups[section] = [];
      groups[section].push(doc);
    }
    for (const key of Object.keys(groups)) {
      groups[key].sort((a, b) => a.order - b.order);
    }
    return groups;
  }, [filtered]);

  const toggleSection = (section: string) => {
    setOpenSections(prev => ({ ...prev, [section]: !prev[section] }));
  };

  const sidebar = (
    <nav className={styles.nav}>
      <div className={styles.searchWrap}>
        <Search size={16} className={styles.searchIcon} />
        <input
          type="text"
          placeholder="Search docs..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className={styles.searchInput}
        />
      </div>

      <div className={styles.sections}>
        {Object.entries(grouped).map(([section, items]) => (
          <div key={section} className={styles.section}>
            <button
              className={styles.sectionTitle}
              onClick={() => toggleSection(section)}
              aria-expanded={openSections[section] !== false}
            >
              {openSections[section] !== false ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
              {section}
            </button>
            {openSections[section] !== false && (
              <ul className={styles.links}>
                {items.map(doc => (
                  <li key={doc.slug}>
                    <a
                      href={`/docs/${doc.slug}`}
                      className={`${styles.link} ${currentSlug === doc.slug ? styles.active : ''}`}
                    >
                      {doc.title}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </nav>
  );

  return (
    <>
      <button
        className={styles.mobileToggle}
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label="Toggle docs menu"
      >
        {mobileOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Desktop */}
      <div className={styles.desktop}>{sidebar}</div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <>
          <div className={styles.overlay} onClick={() => setMobileOpen(false)} />
          <div className={styles.drawer}>{sidebar}</div>
        </>
      )}
    </>
  );
}
