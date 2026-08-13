import './CategoryMenu.css'

const CATEGORIES = [
  { key: 'ghazals', label: 'Ghazals' },
  { key: 'oldHindi', label: '90s Hindi Songs' },
]

// Shows only the two collection names — never the songs inside them.
// Selecting one switches which collection the player pulls from.
function CategoryMenu({ activeCategory, onSelect }) {
  return (
    <div className="category-menu" role="menu" aria-label="Playlist category">
      {CATEGORIES.map(({ key, label }) => {
        const isActive = key === activeCategory
        return (
          <button
            key={key}
            type="button"
            role="menuitemradio"
            aria-checked={isActive}
            className={`category-menu__option${isActive ? ' category-menu__option--active' : ''}`}
            onClick={() => onSelect(key)}
          >
            {label}
          </button>
        )
      })}
    </div>
  )
}

export default CategoryMenu
