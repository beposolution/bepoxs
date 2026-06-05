import { MARQUEE_ITEMS } from '../../data/content';
import './Marquee.css';

export default function Marquee() {
  // Duplicate items for seamless infinite scroll
  const items = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track">
        {items.map((item, i) => (
          <span key={i} className="marquee__item">
            <span className="marquee__dot" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
