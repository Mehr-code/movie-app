import "../css/Favorites.css";

function Favorities() {
  return (
    <div className="favorites-empty">
      <h2 style={{ direction: "rtl" }}>هیچ فیلم مورد علاقه ای وجود ندارد!</h2>
      <p style={{ direction: "rtl" }}>
        فیلم ها را با زدن دکمه قلب به لیست مورد علاقه ها اضافه کنید تا اینجا
        نمایش داده شوند.
      </p>
    </div>
  );
}

export default Favorities;
