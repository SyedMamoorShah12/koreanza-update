import { Link } from 'react-router-dom';
import './CategorySection.css';
import eyes from '../assets/Images/Eye/cover-removebg-preview.png'
import lips from '../assets/Images/lip/cove.jpg'
import face from '../assets/Images/face/cover-removebg-preview.png'
import skincare from '../assets/Images/skincaree/tea_tree-removebg-preview.png'

const categories = [
  { id: 1, name: 'Eyes Products', img: eyes },
  { id: 2, name: 'Lip Products', img: lips },
  { id: 3, name: 'Face Products', img: face },
  { id: 4, name: 'Skincare', img: skincare },
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