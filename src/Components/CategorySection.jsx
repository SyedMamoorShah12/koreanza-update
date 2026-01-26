import { Link } from 'react-router-dom';
import './CategorySection.css';
import img1 from '../assets/Images/1.jpg'
import img2 from '../assets/Images/2.jpg'
import img3 from '../assets/Images/3.jpg'
import img4 from '../assets/Images/4.jpg'

const categories = [
  { id: 1, name: 'Cosmetics', img: img1 },
  { id: 2, name: 'Perfume', img: img2},
  { id: 3, name: 'Beauty', img: img3 },
  { id: 4, name: 'Other', img: img4 },
];

const CategorySection = () => {
  return (
    <section className="category-section">
      <h2 className="category-title">Shop By Categories</h2>
      <div className="category-grid">
        {categories.map((cat) => (
          <Link to={`/category/${cat.name}`} key={cat.id} className="category-card" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className="category-image-wrapper">
              <img src={cat.img} alt={cat.name} />
            </div>
            <p className="category-name">{cat.name}</p>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CategorySection;