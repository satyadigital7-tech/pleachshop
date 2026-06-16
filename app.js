/* ==========================================
   Pleach Shop Core JS Controller
   ========================================== */

// 1. Static Products Database
const PRODUCTS_DB = [
    {
        id: "p1",
        name: "Temple Architectural Tee",
        category: "T-Shirts",
        price: 1299,
        image: "assets/product_tee.png",
        description: "A premium heavyweight charcoal T-shirt featuring a highly detailed architectural schematic of a classical South Asian monolithic temple tower. Hand-sketched lines screenprinted with durable golden and white metallic inks.",
        rating: 4.9,
        reviews: 245,
        material: "100% Long-Staple Ring-spun Cotton",
        tags: ["temple", "tee", "shirt", "apparel", "wear", "architecture", "gold"]
    },
    {
        id: "p2",
        name: "Imperial Golden Temple Mug",
        category: "Mugs",
        price: 599,
        image: "assets/product_mug.png",
        description: "An elegant, matte black stoneware mug adorned with intricate 24k gold leaf line drawings representing ancient temple column capitals. Perfect for hot beverages with a heavy, comfortable grip.",
        rating: 4.8,
        reviews: 184,
        material: "High-Fire Stoneware Ceramic with Gold Foil",
        tags: ["mug", "cup", "coffee", "ceramic", "tea", "gold", "temple"]
    },
    {
        id: "p3",
        name: "Monolithic Carriage Tote Bag",
        category: "Tote Bags",
        price: 799,
        image: "assets/product_bag.png",
        description: "Heavy-duty organic canvas tote bag featuring an exquisite line drawing of a historical stone temple carriage. Perfect daily utility carrier with reinforced shoulder straps and internal pocket organizer.",
        rating: 4.7,
        reviews: 98,
        material: "14oz Organic Unbleached Cotton Canvas",
        tags: ["tote", "bag", "canvas", "carriage", "stone", "elephant", "travel"]
    },
    {
        id: "p4",
        name: "Sacred Mandala Laptop Skin",
        category: "Laptop Skins",
        price: 499,
        image: "assets/product_skin.png",
        description: "Premium textured laptop skin showcasing intricate sacred geometry and radial mandala designs in high-resolution gold foil detailing. Removable, residue-free backing fits standard 13-16 inch notebooks.",
        rating: 4.9,
        reviews: 112,
        material: "3M Cast Vinyl with Matte Protective Finish",
        tags: ["laptop", "skin", "mandala", "sticker", "accessory", "gold"]
    },
    {
        id: "p5",
        name: "Monolithic Ruins Phone Case",
        category: "Phone Cases",
        price: 399,
        image: "assets/mockup_case.png",
        description: "Heavy-duty protective phone case features abstract geometric contours of temple pillars. Dynamic drop protection overlay with a soft microfiber lining inside.",
        rating: 4.6,
        reviews: 74,
        material: "Recycled Polycarbonate + TPU Shock Bumper",
        tags: ["phone", "case", "mobile", "cover", "protection", "iphone"]
    },
    {
        id: "p6",
        name: "Geometric Mandala Mousepad",
        category: "Laptop Skins",
        price: 299,
        image: "assets/hero_lifestyle.png",
        description: "Ultra-smooth tracking surface with a non-slip natural rubber base. Embellished with classic geometric borders and historical motifs.",
        rating: 4.8,
        reviews: 53,
        material: "Silky Micro-weave Cloth with Stitched Borders",
        tags: ["mousepad", "desk", "office", "mat", "geometric"]
    },
    {
        id: "p7",
        name: "Heritage Mandala Print Tee",
        category: "T-Shirts",
        price: 1399,
        image: "assets/products/image 16.png",
        description: "Premium cotton tee presenting fine floral symmetry and mandala aesthetics.",
        rating: 4.9,
        reviews: 121,
        material: "100% Cotton",
        tags: ["mandala", "tee", "tshirt", "apparel"]
    },
    {
        id: "p8",
        name: "Sanchi Stupa Archway Tee",
        category: "T-Shirts",
        price: 1499,
        image: "assets/products/image 17.png",
        description: "Detailed graphic print of the historic gateways of Sanchi Stupa on premium soft fabric.",
        rating: 4.8,
        reviews: 87,
        material: "100% Long-Staple Cotton",
        tags: ["sanchi", "tee", "architecture", "tshirt"]
    },
    {
        id: "p9",
        name: "Floral Motif Royal Tee",
        category: "T-Shirts",
        price: 1299,
        image: "assets/products/image 22.png",
        description: "Elegant t-shirt displaying stylized botanical design structures from heritage palaces.",
        rating: 4.7,
        reviews: 64,
        material: "Ringspun Cotton Blend",
        tags: ["floral", "palace", "tee", "shirt"]
    },
    {
        id: "p10",
        name: "Geometric Pillar Draft Tee",
        category: "T-Shirts",
        price: 1399,
        image: "assets/products/image 23.png",
        description: "Modern line drawings of temple pillars screenprinted in metallic paint colors.",
        rating: 4.9,
        reviews: 43,
        material: "100% Cotton",
        tags: ["pillar", "draft", "architectural", "tee"]
    },
    {
        id: "p11",
        name: "Sacred Archway Sketch Tee",
        category: "T-Shirts",
        price: 1449,
        image: "assets/products/image 24.png",
        description: "Finely sketched historic gate archways on a lightweight breathable organic canvas tee.",
        rating: 4.8,
        reviews: 59,
        material: "Organic Cotton",
        tags: ["sketch", "arch", "tshirt", "apparel"]
    },
    {
        id: "p12",
        name: "Imperial Palace Stone Mug",
        category: "Mugs",
        price: 649,
        image: "assets/products/image 20.png",
        description: "A matte-finish ceramic mug styled with stone carving linework details.",
        rating: 4.8,
        reviews: 142,
        material: "Ceramic Stoneware",
        tags: ["mug", "ceramic", "stone", "coffee"]
    },
    {
        id: "p13",
        name: "Lotus Petal Line Art Mug",
        category: "Mugs",
        price: 599,
        image: "assets/products/image 25.png",
        description: "Elegant lotus capital pillar details wrapped around high-fire stoneware.",
        rating: 4.7,
        reviews: 79,
        material: "High-Fire Ceramic",
        tags: ["mug", "lotus", "lineart", "ceramic"]
    },
    {
        id: "p14",
        name: "Ancient Columns Ceramic Mug",
        category: "Mugs",
        price: 699,
        image: "assets/products/image 26.png",
        description: "A heavyweight coffee mug with detailed sketches of classical pillars.",
        rating: 4.9,
        reviews: 95,
        material: "Glazed Stoneware Ceramic",
        tags: ["column", "mug", "coffee", "ceramic"]
    },
    {
        id: "p15",
        name: "Sacred Radial Mandala Mug",
        category: "Mugs",
        price: 599,
        image: "assets/products/image 27.png",
        description: "Featuring a radial mandalic outline in golden gold foil print detailing.",
        rating: 4.8,
        reviews: 110,
        material: "Ceramic with Metallic Foiling",
        tags: ["mandala", "mug", "gold", "tea"]
    },
    {
        id: "p16",
        name: "Ajanta Caves Heritage Mug",
        category: "Mugs",
        price: 649,
        image: "assets/products/image 19.png",
        description: "A gorgeous dark glazed ceramic mug featuring historical reliefs.",
        rating: 4.9,
        reviews: 58,
        material: "Glazed Ceramic",
        tags: ["ajanta", "mug", "ceramic", "heritage"]
    },
    {
        id: "p17",
        name: "Monolithic Temple Canvas Tote",
        category: "Tote Bags",
        price: 849,
        image: "assets/products/image 21.png",
        description: "Heavy canvas carrier displaying detailed blueprints of a monolithic shrine.",
        rating: 4.7,
        reviews: 93,
        material: "Heavy cotton canvas",
        tags: ["canvas", "tote", "bag", "temple"]
    },
    {
        id: "p18",
        name: "Lotus Capital Sketch Tote",
        category: "Tote Bags",
        price: 799,
        image: "assets/products/image 28.png",
        description: "Stylish eco-friendly tote bag depicting architectural capital reliefs.",
        rating: 4.8,
        reviews: 72,
        material: "Organic Cotton Canvas",
        tags: ["lotus", "tote", "bag", "canvas"]
    },
    {
        id: "p19",
        name: "Historical Monolith Columns Tote",
        category: "Tote Bags",
        price: 899,
        image: "assets/products/image 29.png",
        description: "Features majestic columns from traditional South Asian temple ruins.",
        rating: 4.9,
        reviews: 61,
        material: "Unbleached Cotton Canvas",
        tags: ["columns", "tote", "ruins", "bag"]
    },
    {
        id: "p20",
        name: "Mandala Patterned Heavy Tote",
        category: "Tote Bags",
        price: 949,
        image: "assets/products/image 30.png",
        description: "Premium large storage tote bag with radial mandalas on both sides.",
        rating: 4.8,
        reviews: 84,
        material: "Heavy-duty 16oz Canvas",
        tags: ["mandala", "heavy", "tote", "bag"]
    },
    {
        id: "p21",
        name: "Ajanta Fresco Royal Tote",
        category: "Tote Bags",
        price: 899,
        image: "assets/products/mockup_11 1.png",
        description: "Artistic historical print layout on a premium thick cotton canvas tote bag.",
        rating: 4.9,
        reviews: 37,
        material: "Cotton Canvas",
        tags: ["ajanta", "tote", "fresco", "bag"]
    },
    {
        id: "p22",
        name: "Sacred Mandala Tough Case",
        category: "Phone Cases",
        price: 449,
        image: "assets/products/bc7a184d6833121b171949a4a57d5ab9 (1) 1.png",
        description: "A highly protective, shock-absorbent shell styled with gold-toned sacred vectors.",
        rating: 4.7,
        reviews: 130,
        material: "Polycarbonate Tough Shell",
        tags: ["mandala", "phone", "case", "tough"]
    },
    {
        id: "p23",
        name: "Temple Pillars Outline Case",
        category: "Phone Cases",
        price: 399,
        image: "assets/products/image 31.png",
        description: "Slim fitting transparent cover printed with structural architectural sketches.",
        rating: 4.8,
        reviews: 104,
        material: "Clear TPU Silicone",
        tags: ["pillars", "phone", "case", "slim"]
    },
    {
        id: "p24",
        name: "Sacred Geometries Matte Case",
        category: "Phone Cases",
        price: 499,
        image: "assets/products/image 32.jpg",
        description: "Premium shockproof cover featuring matte geometric radial illustrations.",
        rating: 4.9,
        reviews: 78,
        material: "Impact-Resistant TPU + Polycarbonate",
        tags: ["mandala", "matte", "phone", "case"]
    },
    {
        id: "p25",
        name: "Ancient Archways Contour Case",
        category: "Phone Cases",
        price: 399,
        image: "assets/products/image 33.png",
        description: "Detailed contours of temple doorways printed in high-density ink overlays.",
        rating: 4.6,
        reviews: 55,
        material: "Flexible Silicone Shell",
        tags: ["archway", "phone", "case", "cover"]
    },
    {
        id: "p26",
        name: "Mughal Jaali Palace Skin",
        category: "Laptop Skins",
        price: 549,
        image: "assets/products/laptop-cover-mockup 1.jpg",
        description: "A textured premium sticker vinyl skin showcasing beautiful royal arch screens.",
        rating: 4.9,
        reviews: 153,
        material: "3M Texture Cast Vinyl",
        tags: ["jaali", "laptop", "skin", "cover"]
    },
    {
        id: "p27",
        name: "Radial Sacred Mandala Skin",
        category: "Laptop Skins",
        price: 499,
        image: "assets/products/laptop-cover-mockup (1) 1.png",
        description: "High resolution golden mandalas with clean symmetry for laptop back covers.",
        rating: 4.8,
        reviews: 92,
        material: "Premium Cast Vinyl",
        tags: ["laptop", "skin", "mandala", "cover"]
    },
    {
        id: "p28",
        name: "Archway Columns Laptop Skin",
        category: "Laptop Skins",
        price: 529,
        image: "assets/products/image 34.png",
        description: "Line art blueprints of traditional temple pillars and arches.",
        rating: 4.7,
        reviews: 80,
        material: "Residue-free 3M Cast Vinyl",
        tags: ["columns", "laptop", "skin", "blueprints"]
    },
    {
        id: "p29",
        name: "Stone Figurine Radial Skin",
        category: "Laptop Skins",
        price: 499,
        image: "assets/products/image 35.png",
        description: "Unique design presenting historical carvings in high definition.",
        rating: 4.8,
        reviews: 47,
        material: "Textured Matte Vinyl",
        tags: ["laptop", "skin", "stone", "carving"]
    },
    
    {
        id: "p31",
        name: "Monolith Blueprint Desk Mat",
        category: "Laptop Skins",
        price: 799,
        image: "assets/products/image 37.png",
        description: "A smooth desk mat illustrating archeological temple blueprints.",
        rating: 4.8,
        reviews: 62,
        material: "Stitched Edge Fabric Desk Pad",
        tags: ["deskmat", "mousepad", "blueprints", "office"]
    },
    {
        id: "p32",
        name: "Lotus Pillars Embroidered Cap",
        category: "Caps",
        price: 699,
        image: "assets/products/side-angle-baseball-cap-mockup-in-white-studio-0026 1.png",
        description: "Embroidery detailing of classic pillar capitals on a clean white baseball cap.",
        rating: 4.8,
        reviews: 140,
        material: "100% Brushed Cotton Twill",
        tags: ["cap", "baseball", "embroidered", "accessory"]
    },
    {
        id: "p33",
        name: "Royal Arch Heritage Cap",
        category: "Caps",
        price: 749,
        image: "assets/products/young-model-wearing-basecall-cap-mockup-in-street-during-the-day-0027 1.png",
        description: "Stylized model cap printed with fine red and gold arch contours.",
        rating: 4.9,
        reviews: 110,
        material: "Premium Cotton Twill",
        tags: ["cap", "baseball", "model", "heritage"]
    },
    {
        id: "p34",
        name: "Mandala Embroidered Cap",
        category: "Caps",
        price: 699,
        image: "assets/products/mockup_18 1.jpg",
        description: "Features a rich center mandala embroidered in gold thread on premium twill.",
        rating: 4.8,
        reviews: 76,
        material: "Embroidered Twill Canvas",
        tags: ["cap", "mandala", "embroidered", "hat"]
    },
    {
        id: "p35",
        name: "Sacred Geometry Casual Cap",
        category: "Caps",
        price: 649,
        image: "assets/products/image 18.jpg",
        description: "Adjustable strapback hat displaying historical sacred geometry designs.",
        rating: 4.7,
        reviews: 59,
        material: "100% Cotton Canvas",
        tags: ["cap", "geometry", "casual", "hat"]
    },
    {
        id: "p36",
        name: "Temple Blueprints Casual Hat",
        category: "Caps",
        price: 699,
        image: "assets/products/image 15.jpg",
        description: "Stylish blueprint sketches of sacred sites detailed on structured panels.",
        rating: 4.8,
        reviews: 48,
        material: "Heavy Cotton Twill",
        tags: ["cap", "blueprints", "hat", "accessory"]
    },
    {
        id: "p37",
        name: "Ancient Motifs Classic Cap",
        category: "Caps",
        price: 699,
        image: "assets/products/image 14.png",
        description: "A comfortable heritage dad hat embroidered with small ancient monuments.",
        rating: 4.9,
        reviews: 32,
        material: "Brushed Twill Cotton",
        tags: ["cap", "monument", "dadhat", "accessory"]
    }
];

// Canvas-specific layout bounds (overlay placement positions on base mockup images)
const STUDIO_CANVAS_CONFIGS = {
    "T-Shirt": {
        baseImage: "assets/mockup_tshirt.png",
        boundary: { top: "25%", left: "28%", width: "44%", height: "44%" },
        blendMode: "multiply",
        defaultPrice: 1299
    },
    "Mug": {
        baseImage: "assets/mockup_mug.png",
        boundary: { top: "24%", left: "20%", width: "24%", height: "46%" },
        blendMode: "multiply",
        defaultPrice: 599
    },
    "Tote Bag": {
        baseImage: "assets/mockup_bag.png",
        boundary: { top: "30%", left: "26%", width: "46%", height: "46%" },
        blendMode: "multiply",
        defaultPrice: 799
    },
    "Phone Case": {
        baseImage: "assets/mockup_case.png",
        boundary: { top: "14%", left: "30%", width: "40%", height: "72%" },
        blendMode: "normal",
        defaultPrice: 399
    },
    "Laptop Skin": {
        baseImage: "assets/product_skin.png",
        boundary: { top: "8%", left: "10%", width: "80%", height: "84%" },
        blendMode: "multiply",
        defaultPrice: 499
    },
    "Baseball Cap": {
        baseImage: "assets/products/side-angle-baseball-cap-mockup-in-white-studio-0026 1.png",
        boundary: { top: "32%", left: "28%", width: "36%", height: "26%" },
        blendMode: "multiply",
        defaultPrice: 699
    }
};

// 2. Application State
let appState = {
    cart: [],
    wishlist: [],
    searchQuery: "",
    selectedStudioProduct: "T-Shirt",
    studioCustomImage: null,
    studioScale: 100,
    studioRotation: 0,
    studioX: 0,
    studioY: 0,
    activeTrendingFilter: "all",
    activeReviewIndex: 0
};

// LocalStorage Persistence Keys
const CART_STORAGE_KEY = "placem_heritage_cart";
const WISHLIST_STORAGE_KEY = "placem_heritage_wishlist";

// DOM References
const mainHeader = document.getElementById("main-header");
const promoBanner = document.getElementById("promo-banner");
const productsGrid = document.getElementById("products-grid");
const searchInput = document.getElementById("product-search-input");
const clearSearchBtn = document.getElementById("clear-search-btn");
const searchOverlay = document.getElementById("search-results-overlay");
const searchQueryDisplay = document.getElementById("search-query-display");
const searchResultsGrid = document.getElementById("search-results-grid");
const closeSearchBtn = document.getElementById("close-search-btn");
const cartToggleBtn = document.getElementById("cart-toggle-btn");
const closeCartBtn = document.getElementById("close-cart-btn");
const cartSidebar = document.getElementById("cart-sidebar");
const cartOverlay = document.getElementById("cart-sidebar-overlay");
const cartItemsContainer = document.getElementById("cart-items-container");
const cartSubtotal = document.getElementById("cart-subtotal");
const cartBadge = document.getElementById("cart-badge");
const cartCountDisplay = document.getElementById("cart-count-display");
const wishlistToggleBtn = document.getElementById("wishlist-toggle-btn");
const wishlistBadge = document.getElementById("wishlist-badge");
const mobileMenuBtn = document.getElementById("mobile-menu-btn");
const navLinks = document.getElementById("nav-links");

// Product Modal References
const productModal = document.getElementById("product-detail-modal-overlay");
const closeProductModalBtn = document.getElementById("close-product-modal-btn");
const modalProductImg = document.getElementById("modal-product-img");
const modalProductCategory = document.getElementById("modal-product-category");
const modalProductName = document.getElementById("modal-product-name");
const modalProductStars = document.getElementById("modal-product-stars");
const modalProductReviewsCount = document.getElementById("modal-product-reviews-count");
const modalProductPrice = document.getElementById("modal-product-price");
const modalProductDesc = document.getElementById("modal-product-desc");
const modalProductMaterial = document.getElementById("modal-product-material");
const modalAddToCartBtn = document.getElementById("modal-add-to-cart-btn");
let activeModalProductId = null;

// Studio References
const canvasOptions = document.querySelectorAll(".canvas-option");
const baseCanvasImg = document.getElementById("base-canvas-image");
const canvasBoundary = document.getElementById("canvas-render-boundary");
const designUpload = document.getElementById("design-upload");
const uploadZone = document.getElementById("upload-zone");
const adjustmentPanel = document.getElementById("adjustment-panel");
const userDesignOverlay = document.getElementById("user-design-overlay");
const customRenderWrapper = document.getElementById("custom-render-wrapper");
const studioTotalPrice = document.getElementById("studio-total-price");
const studioAddToCartBtn = document.getElementById("studio-add-to-cart");

// Studio Sliders
const scaleSlider = document.getElementById("scale-slider");
const rotateSlider = document.getElementById("rotate-slider");
const positionXSlider = document.getElementById("position-x-slider");
const positionYSlider = document.getElementById("position-y-slider");

const scaleVal = document.getElementById("scale-val");
const rotateVal = document.getElementById("rotate-val");
const positionXVal = document.getElementById("position-x-val");
const positionYVal = document.getElementById("position-y-val");

// Reviews References
const reviewsTrack = document.getElementById("reviews-track");
const reviewPrev = document.getElementById("review-prev");
const reviewNext = document.getElementById("review-next");

// Newsletter / Coupons References
const newsletterForm = document.getElementById("newsletter-form");
const newsletterEmail = document.getElementById("newsletter-email");
const couponModal = document.getElementById("coupon-modal-overlay");
const closeCouponModalBtn = document.getElementById("close-coupon-modal-btn");
const copyCouponBtn = document.getElementById("copy-coupon-btn");
const couponCodeText = document.getElementById("coupon-code");

// Miscellaneous Actions
const checkoutBtn = document.getElementById("checkout-btn");
const addLimitedBtn = document.getElementById("add-limited-btn");

// ==========================================
// 3. Initializer Logic
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
    // Load Persisted Data
    loadStateFromStorage();
    
    // Render Components
    renderProductsGrid();
    updateHeaderActions();
    setupPromotionalBannerRotation();
    setupHeaderScrollEffect();
    setupReviewsSlider();
    
    // Event Bindings
    setupSearchEventListeners();
    setupCartDrawerEventListeners();
    setupProductModalEventListeners();
    setupStudioEventListeners();
    setupNewsletterEventListeners();
    setupFilterEventListeners();
    setupMobileMenu();
    setupPromoPopup();
    setupScrollReveal();
    
    // Quick categories and other interactions
    document.querySelectorAll(".shortcut-pill").forEach(pill => {
        pill.addEventListener("click", () => {
            const cat = pill.getAttribute("data-category");
            scrollToSection("trending-products");
            setTrendingFilter(cat);
        });
    });
    
    document.querySelectorAll(".category-card").forEach(card => {
        card.addEventListener("click", () => {
            const cat = card.getAttribute("data-category");
            scrollToSection("trending-products");
            setTrendingFilter(cat);
        });
    });

    document.querySelectorAll(".circle-item").forEach(circle => {
        circle.addEventListener("click", () => {
            const cat = circle.getAttribute("data-category");
            scrollToSection("trending-products");
            setTrendingFilter(cat);
        });
    });

    document.querySelectorAll(".btn-link[data-filter]").forEach(link => {
        link.addEventListener("click", (e) => {
            const filter = link.getAttribute("data-filter");
            setTrendingFilter(filter);
        });
    });

    // Category Slider Navigation Controls
    const catContainer = document.getElementById("category-circles-container");
    const catNext = document.getElementById("cat-next");
    const catPrev = document.getElementById("cat-prev");
    
    if (catContainer && catNext && catPrev) {
        catNext.addEventListener("click", () => {
            catContainer.scrollBy({ left: 130, behavior: "smooth" });
        });
        catPrev.addEventListener("click", () => {
            catContainer.scrollBy({ left: -130, behavior: "smooth" });
        });
    }

    // Categories Grid Slider Navigation Controls
    const catGridContainer = document.querySelector(".categories-viewport");
    const catGridNext = document.getElementById("cat-grid-next");
    const catGridPrev = document.getElementById("cat-grid-prev");
    
    if (catGridContainer && catGridNext && catGridPrev) {
        catGridNext.addEventListener("click", () => {
            const firstCard = catGridContainer.querySelector(".category-card");
            if (firstCard) {
                const cardWidth = firstCard.offsetWidth + 20; // card width + gap
                catGridContainer.scrollBy({ left: cardWidth, behavior: "smooth" });
            }
        });
        catGridPrev.addEventListener("click", () => {
            const firstCard = catGridContainer.querySelector(".category-card");
            if (firstCard) {
                const cardWidth = firstCard.offsetWidth + 20; // card width + gap
                catGridContainer.scrollBy({ left: -cardWidth, behavior: "smooth" });
            }
        });
    }

    if (addLimitedBtn) {
        addLimitedBtn.addEventListener("click", () => {
            addToCart({
                id: "limited-collector",
                name: "Limited Edition Heritage Collector's Set",
                price: 14999,
                image: "assets/limited_edition.png",
                isCustom: false,
                quantity: 1
            });
        });
    }

    if (checkoutBtn) {
        checkoutBtn.addEventListener("click", () => {
            if (appState.cart.length === 0) return;
            // Simulated payment checkout
            alert("Thank you for choosing Pleach Shop. Your mock order has been placed successfully!\n\nOrder Total: " + cartSubtotal.innerText + "\n\nWe have sent a confirmation email details to your address.");
            appState.cart = [];
            saveStateToStorage();
            updateHeaderActions();
            renderCartItems();
            toggleCartDrawer(false);
        });
    }
});

// Helper for smooth scroll
function scrollToSection(id) {
    const el = document.getElementById(id);
    if (el) {
        el.scrollIntoView({ behavior: "smooth" });
    }
}

// ==========================================
// 4. Promotional Banner Rotation
// ==========================================
function setupPromotionalBannerRotation() {
    const items = document.querySelectorAll(".promo-item");
    if (items.length <= 1) return;
    
    let activeIdx = 0;
    setInterval(() => {
        items[activeIdx].classList.remove("active");
        activeIdx = (activeIdx + 1) % items.length;
        items[activeIdx].classList.add("active");
    }, 4500);
}

// ==========================================
// 5. Header Scroll Transitions
// ==========================================
function setupHeaderScrollEffect() {
    window.addEventListener("scroll", () => {
        if (window.scrollY > 40) {
            mainHeader.classList.add("scrolled");
        } else {
            mainHeader.classList.remove("scrolled");
        }
    });
}

// ==========================================
// 6. Products Rendering Engine
// ==========================================
function renderProductsGrid(filter = "all") {
    if (!productsGrid) return;
    productsGrid.innerHTML = "";
    
    const filtered = filter === "all" 
        ? PRODUCTS_DB 
        : PRODUCTS_DB.filter(p => p.category === filter);
        
    if (filtered.length === 0) {
        productsGrid.innerHTML = "<p class='text-center w-full'>No products found in this category.</p>";
        return;
    }
    
    filtered.forEach(p => {
        const isWishlisted = appState.wishlist.includes(p.id);
        const starsHTML = generateStarsHTML(p.rating);
        
        const card = document.createElement("div");
        card.className = "product-card reveal-on-scroll-scale";
        card.innerHTML = `
            <div class="product-image-container">
                <img src="${p.image}" alt="${p.name}" loading="lazy">
                <button class="wishlist-btn ${isWishlisted ? 'active' : ''}" data-id="${p.id}" aria-label="Add to Wishlist">
                    <i class="${isWishlisted ? 'fa-solid' : 'fa-regular'} fa-heart"></i>
                </button>
                <div class="product-overlay">
                    <button class="btn btn-primary quick-add-btn" data-id="${p.id}"><i class="fa-solid fa-cart-plus"></i> Quick Add</button>
                    <button class="btn btn-outline detail-view-btn" data-id="${p.id}">View Details</button>
                </div>
            </div>
            <div class="product-info">
                <div class="product-meta">
                    <span class="product-category">${p.category}</span>
                    <div class="rating-stars">${starsHTML}</div>
                </div>
                <h3 class="product-name">${p.name}</h3>
                <div class="product-price">₹${p.price.toFixed(2)}</div>
            </div>
        `;
        
        // Add card to grid
        productsGrid.appendChild(card);
        
        // Bind product details click on text or image
        card.querySelector(".product-image-container img").addEventListener("click", () => openProductModal(p.id));
        card.querySelector(".product-name").addEventListener("click", () => openProductModal(p.id));
        
        // Quick add action handler
        card.querySelector(".quick-add-btn").addEventListener("click", (e) => {
            e.stopPropagation();
            addToCart({
                id: p.id,
                name: p.name,
                price: p.price,
                image: p.image,
                isCustom: false,
                quantity: 1
            });
        });
        
        // View Details action handler
        card.querySelector(".detail-view-btn").addEventListener("click", (e) => {
            e.stopPropagation();
            openProductModal(p.id);
        });

        // Wishlist click handler
        card.querySelector(".wishlist-btn").addEventListener("click", (e) => {
            e.stopPropagation();
            toggleWishlist(p.id, e.currentTarget);
        });
    });
    observeNewElements();
}

function generateStarsHTML(rating) {
    let html = "";
    const floor = Math.floor(rating);
    for (let i = 1; i <= 5; i++) {
        if (i <= floor) {
            html += `<i class="fa-solid fa-star"></i>`;
        } else if (i - 0.5 === rating) {
            html += `<i class="fa-solid fa-star-half-stroke"></i>`;
        } else {
            html += `<i class="fa-regular fa-star"></i>`;
        }
    }
    return html;
}

// ==========================================
// 7. Product Details Modal
// ==========================================
function setupProductModalEventListeners() {
    if (closeProductModalBtn) {
        closeProductModalBtn.addEventListener("click", () => toggleProductModal(false));
    }
    if (productModal) {
        productModal.addEventListener("click", (e) => {
            if (e.target === productModal) toggleProductModal(false);
        });
    }
    if (modalAddToCartBtn) {
        modalAddToCartBtn.addEventListener("click", () => {
            if (!activeModalProductId) return;
            const p = PRODUCTS_DB.find(prod => prod.id === activeModalProductId);
            if (p) {
                addToCart({
                    id: p.id,
                    name: p.name,
                    price: p.price,
                    image: p.image,
                    isCustom: false,
                    quantity: 1
                });
                toggleProductModal(false);
            }
        });
    }
}

function toggleProductModal(isOpen) {
    if (!productModal) return;
    if (isOpen) {
        productModal.classList.add("open");
        document.body.style.overflow = "hidden";
    } else {
        productModal.classList.remove("open");
        document.body.style.overflow = "";
        activeModalProductId = null;
    }
}

function openProductModal(id) {
    const p = PRODUCTS_DB.find(prod => prod.id === id);
    if (!p) return;
    
    activeModalProductId = id;
    modalProductImg.src = p.image;
    modalProductImg.alt = p.name;
    modalProductCategory.innerText = p.category;
    modalProductName.innerText = p.name;
    modalProductStars.innerHTML = generateStarsHTML(p.rating);
    modalProductReviewsCount.innerText = `(${p.reviews} verified reviews)`;
    modalProductPrice.innerText = `₹${p.price.toFixed(2)}`;
    modalProductDesc.innerText = p.description;
    modalProductMaterial.innerText = p.material;
    
    toggleProductModal(true);
}

// ==========================================
// 8. Search Overlay & Processing
// ==========================================
function setupSearchEventListeners() {
    if (!searchInput) return;
    
    searchInput.addEventListener("input", (e) => {
        const query = e.target.value.trim().toLowerCase();
        appState.searchQuery = query;
        
        if (query.length > 1) {
            clearSearchBtn.classList.add("show");
            searchQueryDisplay.innerText = query;
            renderSearchResults(query);
            toggleSearchOverlay(true);
        } else {
            clearSearchBtn.classList.remove("show");
            toggleSearchOverlay(false);
        }
    });
    
    if (clearSearchBtn) {
        clearSearchBtn.addEventListener("click", () => {
            searchInput.value = "";
            appState.searchQuery = "";
            clearSearchBtn.classList.remove("show");
            toggleSearchOverlay(false);
        });
    }
    
    if (closeSearchBtn) {
        closeSearchBtn.addEventListener("click", () => {
            toggleSearchOverlay(false);
        });
    }
}

function toggleSearchOverlay(isOpen) {
    if (!searchOverlay) return;
    if (isOpen) {
        searchOverlay.classList.add("open");
        document.body.style.overflow = "hidden";
    } else {
        searchOverlay.classList.remove("open");
        document.body.style.overflow = "";
    }
}

function renderSearchResults(query) {
    if (!searchResultsGrid) return;
    searchResultsGrid.innerHTML = "";
    
    const results = PRODUCTS_DB.filter(p => {
        return p.name.toLowerCase().includes(query) || 
               p.category.toLowerCase().includes(query) ||
               p.tags.some(tag => tag.includes(query));
    });
    
    if (results.length === 0) {
        searchResultsGrid.innerHTML = `<p class="text-center w-full" style="grid-column: 1/-1; padding: 40px 0;">No heritage products matched your search query. Try searching for "Temple", "Tote", or "Skin".</p>`;
        return;
    }
    
    results.forEach(p => {
        const card = document.createElement("div");
        card.className = "product-card reveal-on-scroll-scale";
        card.innerHTML = `
            <div class="product-image-container">
                <img src="${p.image}" alt="${p.name}">
                <div class="product-overlay">
                    <button class="btn btn-primary search-add-btn" data-id="${p.id}"><i class="fa-solid fa-cart-plus"></i> Add to Bag</button>
                </div>
            </div>
            <div class="product-info">
                <span class="product-category">${p.category}</span>
                <h3 class="product-name">${p.name}</h3>
                <div class="product-price">₹${p.price.toFixed(2)}</div>
            </div>
        `;
        
        searchResultsGrid.appendChild(card);
        
        card.querySelector(".search-add-btn").addEventListener("click", () => {
            addToCart({
                id: p.id,
                name: p.name,
                price: p.price,
                image: p.image,
                isCustom: false,
                quantity: 1
            });
            toggleSearchOverlay(false);
        });

        // Modal view triggers in search too
        card.querySelector(".product-name").addEventListener("click", () => {
            toggleSearchOverlay(false);
            openProductModal(p.id);
        });
    });
    observeNewElements();
}

// ==========================================
// 9. Shopping Cart Controller (Local Storage)
// ==========================================
function setupCartDrawerEventListeners() {
    if (cartToggleBtn) {
        cartToggleBtn.addEventListener("click", () => toggleCartDrawer(true));
    }
    if (closeCartBtn) {
        closeCartBtn.addEventListener("click", () => toggleCartDrawer(false));
    }
    if (cartOverlay) {
        cartOverlay.addEventListener("click", () => toggleCartDrawer(false));
    }
    document.querySelectorAll(".close-cart-link").forEach(link => {
        link.addEventListener("click", () => toggleCartDrawer(false));
    });
}

function toggleCartDrawer(isOpen) {
    if (!cartSidebar) return;
    if (isOpen) {
        cartSidebar.classList.add("open");
        cartOverlay.classList.add("open");
        document.body.style.overflow = "hidden";
        renderCartItems();
    } else {
        cartSidebar.classList.remove("open");
        cartOverlay.classList.remove("open");
        document.body.style.overflow = "";
    }
}

function addToCart(item) {
    // Check if item already exists (and is not custom)
    const existing = appState.cart.find(c => c.id === item.id && !c.isCustom);
    if (existing && !item.isCustom) {
        existing.quantity += item.quantity;
    } else {
        appState.cart.push(item);
    }
    
    saveStateToStorage();
    updateHeaderActions();
    
    // Open cart drawer immediately to confirm add
    toggleCartDrawer(true);
}

function renderCartItems() {
    if (!cartItemsContainer) return;
    
    const emptyMsg = cartItemsContainer.querySelector(".empty-cart-message");
    
    // Clear dynamic items
    const existingItems = cartItemsContainer.querySelectorAll(".cart-item");
    existingItems.forEach(item => item.remove());
    
    if (appState.cart.length === 0) {
        if (emptyMsg) emptyMsg.classList.remove("hidden");
        cartSubtotal.innerText = "₹0.00";
        return;
    }
    
    if (emptyMsg) emptyMsg.classList.add("hidden");
    let total = 0;
    
    appState.cart.forEach((item, idx) => {
        total += item.price * item.quantity;
        
        const itemCard = document.createElement("div");
        itemCard.className = "cart-item";
        itemCard.innerHTML = `
            <div class="cart-item-img">
                <img src="${item.image}" alt="${item.name}">
            </div>
            <div class="cart-item-details">
                <h4 class="cart-item-name">${item.name}</h4>
                <div class="cart-item-price">₹${item.price.toFixed(2)}</div>
                ${item.isCustom ? `<span class="cart-item-custom-badge"><i class="fa-solid fa-wand-magic-sparkles"></i> AI Personalized</span>` : ''}
                
                <div class="cart-item-actions">
                    <div class="quantity-selector">
                        <button class="qty-btn dec-btn" data-idx="${idx}"><i class="fa-solid fa-minus"></i></button>
                        <span class="qty-val">${item.quantity}</span>
                        <button class="qty-btn inc-btn" data-idx="${idx}"><i class="fa-solid fa-plus"></i></button>
                    </div>
                    <button class="remove-item-btn" data-idx="${idx}"><i class="fa-solid fa-trash-can"></i> Remove</button>
                </div>
            </div>
        `;
        
        cartItemsContainer.appendChild(itemCard);
    });
    
    cartSubtotal.innerText = `₹${total.toFixed(2)}`;
    
    // Bind quantity and remove actions
    cartItemsContainer.querySelectorAll(".dec-btn").forEach(btn => {
        btn.addEventListener("click", (e) => {
            const idx = parseInt(e.currentTarget.getAttribute("data-idx"));
            if (appState.cart[idx].quantity > 1) {
                appState.cart[idx].quantity--;
            } else {
                appState.cart.splice(idx, 1);
            }
            saveStateToStorage();
            updateHeaderActions();
            renderCartItems();
        });
    });
    
    cartItemsContainer.querySelectorAll(".inc-btn").forEach(btn => {
        btn.addEventListener("click", (e) => {
            const idx = parseInt(e.currentTarget.getAttribute("data-idx"));
            appState.cart[idx].quantity++;
            saveStateToStorage();
            updateHeaderActions();
            renderCartItems();
        });
    });
    
    cartItemsContainer.querySelectorAll(".remove-item-btn").forEach(btn => {
        btn.addEventListener("click", (e) => {
            const idx = parseInt(e.currentTarget.getAttribute("data-idx"));
            appState.cart.splice(idx, 1);
            saveStateToStorage();
            updateHeaderActions();
            renderCartItems();
        });
    });
}

function updateHeaderActions() {
    // Cart Count
    const cartCount = appState.cart.reduce((sum, item) => sum + item.quantity, 0);
    if (cartBadge) cartBadge.innerText = cartCount;
    if (cartCountDisplay) cartCountDisplay.innerText = cartCount;
    
    // Wishlist Count
    if (wishlistBadge) wishlistBadge.innerText = appState.wishlist.length;
}

// ==========================================
// 10. Wishlist Logic
// ==========================================
function toggleWishlist(id, btnElement) {
    const idx = appState.wishlist.indexOf(id);
    const icon = btnElement.querySelector("i");
    
    if (idx === -1) {
        appState.wishlist.push(id);
        btnElement.classList.add("active");
        if (icon) {
            icon.className = "fa-solid fa-heart";
        }
    } else {
        appState.wishlist.splice(idx, 1);
        btnElement.classList.remove("active");
        if (icon) {
            icon.className = "fa-regular fa-heart";
        }
    }
    
    saveStateToStorage();
    updateHeaderActions();
}

// ==========================================
// 11. AI Product Preview Studio Logic
// ==========================================
function setupStudioEventListeners() {
    canvasOptions.forEach(opt => {
        opt.addEventListener("click", (e) => {
            canvasOptions.forEach(o => o.classList.remove("active"));
            const currentOpt = e.currentTarget;
            currentOpt.classList.add("active");
            
            const productType = currentOpt.getAttribute("data-product");
            const price = parseFloat(currentOpt.getAttribute("data-price"));
            
            appState.selectedStudioProduct = productType;
            studioTotalPrice.innerText = `₹${price.toFixed(2)}`;
            
            updateStudioCanvasBases();
        });
    });
    
    // File upload triggers
    if (uploadZone && designUpload) {
        uploadZone.addEventListener("click", () => {
            designUpload.click();
        });
        
        designUpload.addEventListener("change", handleStudioFileUpload);
        
        // Drag events
        uploadZone.addEventListener("dragover", (e) => {
            e.preventDefault();
            uploadZone.classList.add("dragover");
        });
        uploadZone.addEventListener("dragleave", () => {
            uploadZone.classList.remove("dragover");
        });
        uploadZone.addEventListener("drop", (e) => {
            e.preventDefault();
            uploadZone.classList.remove("dragover");
            if (e.dataTransfer.files.length > 0) {
                designUpload.files = e.dataTransfer.files;
                handleStudioFileUpload({ target: designUpload });
            }
        });
    }
    
    // Binding Sliders
    if (scaleSlider) {
        scaleSlider.addEventListener("input", (e) => {
            appState.studioScale = e.target.value;
            scaleVal.innerText = `${e.target.value}%`;
            applyUserDesignTransforms();
        });
    }
    if (rotateSlider) {
        rotateSlider.addEventListener("input", (e) => {
            appState.studioRotation = e.target.value;
            rotateVal.innerText = `${e.target.value}°`;
            applyUserDesignTransforms();
        });
    }
    if (positionXSlider) {
        positionXSlider.addEventListener("input", (e) => {
            appState.studioX = e.target.value;
            positionXVal.innerText = `${e.target.value}px`;
            applyUserDesignTransforms();
        });
    }
    if (positionYSlider) {
        positionYSlider.addEventListener("input", (e) => {
            appState.studioY = e.target.value;
            positionYVal.innerText = `${e.target.value}px`;
            applyUserDesignTransforms();
        });
    }
    
    // Add custom product to cart
    if (studioAddToCartBtn) {
        studioAddToCartBtn.addEventListener("click", () => {
            if (!appState.studioCustomImage) return;
            
            const config = STUDIO_CANVAS_CONFIGS[appState.selectedStudioProduct];
            const item = {
                id: `custom-${appState.selectedStudioProduct.toLowerCase()}-${Date.now()}`,
                name: `Custom Designed Pleach Shop ${appState.selectedStudioProduct}`,
                price: config.defaultPrice,
                image: config.baseImage, // Visual base
                isCustom: true,
                customOptions: {
                    scale: appState.studioScale,
                    rotation: appState.studioRotation,
                    x: appState.studioX,
                    y: appState.studioY,
                    designImage: appState.studioCustomImage
                },
                quantity: 1
            };
            
            addToCart(item);
        });
    }
}

function updateStudioCanvasBases() {
    const config = STUDIO_CANVAS_CONFIGS[appState.selectedStudioProduct];
    if (!config) return;
    
    // Update base template image
    baseCanvasImg.src = config.baseImage;
    baseCanvasImg.alt = `Pleach Shop ${appState.selectedStudioProduct} Base Canvas`;
    
    // Update boundary styling
    canvasBoundary.style.top = config.boundary.top;
    canvasBoundary.style.left = config.boundary.left;
    canvasBoundary.style.width = config.boundary.width;
    canvasBoundary.style.height = config.boundary.height;
    
    // Blend mode adjustment for realism
    userDesignOverlay.style.mixBlendMode = config.blendMode;
    if (config.blendMode === "normal" && appState.selectedStudioProduct === "Phone Case") {
        userDesignOverlay.style.opacity = "0.9";
    } else {
        userDesignOverlay.style.opacity = "0.85";
    }
}

function handleStudioFileUpload(e) {
    const file = e.target.files[0];
    if (!file) return;
    
    const reader = new FileReader();
    reader.onload = function(evt) {
        appState.studioCustomImage = evt.target.result;
        userDesignOverlay.src = evt.target.result;
        userDesignOverlay.classList.remove("hidden");
        
        // Show controls & enable add button
        adjustmentPanel.classList.remove("hidden");
        studioAddToCartBtn.classList.remove("disabled");
        studioAddToCartBtn.disabled = false;
        
        // Reset transforms
        resetStudioSliders();
    };
    reader.readAsDataURL(file);
}

function resetStudioSliders() {
    appState.studioScale = 100;
    appState.studioRotation = 0;
    appState.studioX = 0;
    appState.studioY = 0;
    
    if (scaleSlider) scaleSlider.value = 100;
    if (rotateSlider) rotateSlider.value = 0;
    if (positionXSlider) positionXSlider.value = 0;
    if (positionYSlider) positionYSlider.value = 0;
    
    scaleVal.innerText = "100%";
    rotateVal.innerText = "0°";
    positionXVal.innerText = "0px";
    positionYVal.innerText = "0px";
    
    applyUserDesignTransforms();
}

function applyUserDesignTransforms() {
    if (!userDesignOverlay) return;
    
    const scale = appState.studioScale / 100;
    const rotate = appState.studioRotation;
    const x = appState.studioX;
    const y = appState.studioY;
    
    userDesignOverlay.style.transform = `translate(${x}px, ${y}px) rotate(${rotate}deg) scale(${scale})`;
}

// ==========================================
// 12. Reviews Testimonial Slider
// ==========================================
function setupReviewsSlider() {
    const slides = document.querySelectorAll(".review-slide");
    if (slides.length <= 1) return;
    
    if (reviewNext) {
        reviewNext.addEventListener("click", () => slideReview(1));
    }
    if (reviewPrev) {
        reviewPrev.addEventListener("click", () => slideReview(-1));
    }
    
    // Auto slide reviews
    setInterval(() => {
        slideReview(1);
    }, 8000);
}

function slideReview(dir) {
    const slides = document.querySelectorAll(".review-slide");
    const totalSlides = slides.length;
    
    appState.activeReviewIndex = (appState.activeReviewIndex + dir + totalSlides) % totalSlides;
    const offset = -appState.activeReviewIndex * 100;
    
    reviewsTrack.style.transform = `translateX(${offset}%)`;
}

// ==========================================
// 13. Newsletter Subscriptions
// ==========================================
function setupNewsletterEventListeners() {
    if (!newsletterForm) return;
    
    newsletterForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const email = newsletterEmail.value.trim();
        if (email) {
            // Simulated validation and success reveal
            showCouponModal();
            newsletterEmail.value = "";
        }
    });
    
    if (closeCouponModalBtn) {
        closeCouponModalBtn.addEventListener("click", hideCouponModal);
    }
    
    if (couponModal) {
        couponModal.addEventListener("click", (e) => {
            if (e.target === couponModal) hideCouponModal();
        });
    }
    
    if (copyCouponBtn) {
        copyCouponBtn.addEventListener("click", () => {
            navigator.clipboard.writeText(couponCodeText.innerText).then(() => {
                copyCouponBtn.innerHTML = `<i class="fa-solid fa-check"></i> Copied!`;
                setTimeout(() => {
                    copyCouponBtn.innerHTML = `<i class="fa-solid fa-copy"></i> Copy`;
                }, 2000);
            });
        });
    }
}

function showCouponModal() {
    if (couponModal) {
        couponModal.classList.add("open");
        document.body.style.overflow = "hidden";
    }
}

function hideCouponModal() {
    if (couponModal) {
        couponModal.classList.remove("open");
        document.body.style.overflow = "";
    }
}

// ==========================================
// 13b. Promo Popup Modal Controller
// ==========================================
function setupPromoPopup() {
    const promoOverlay = document.getElementById("promo-popup-overlay");
    const closePromoBtn = document.getElementById("close-promo-popup-btn");
    const promoForm = document.getElementById("promo-popup-form");
    const promoEmail = document.getElementById("promo-popup-email");
    const popupDismissedKey = "pleach_promo_popup_dismissed";

    if (!promoOverlay) return;

    // Check if user has already closed/subscribed
    const isDismissed = localStorage.getItem(popupDismissedKey);
    if (!isDismissed) {
        // Show after 4 seconds
        setTimeout(() => {
            // Only show if no other modal is currently open to prevent overlay conflicts
            const isCartOpen = document.getElementById("cart-sidebar") && document.getElementById("cart-sidebar").classList.contains("open");
            const isModalOpen = document.querySelector(".modal-overlay.open");
            if (!isCartOpen && !isModalOpen) {
                promoOverlay.classList.add("open");
                document.body.style.overflow = "hidden";
            }
        }, 4000);
    }

    if (closePromoBtn) {
        closePromoBtn.addEventListener("click", () => {
            promoOverlay.classList.remove("open");
            document.body.style.overflow = "";
            localStorage.setItem(popupDismissedKey, "true");
        });
    }

    if (promoOverlay) {
        promoOverlay.addEventListener("click", (e) => {
            if (e.target === promoOverlay) {
                promoOverlay.classList.remove("open");
                document.body.style.overflow = "";
                localStorage.setItem(popupDismissedKey, "true");
            }
        });
    }

    if (promoForm) {
        promoForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const email = promoEmail.value.trim();
            if (email) {
                // Close promo popup
                promoOverlay.classList.remove("open");
                localStorage.setItem(popupDismissedKey, "true");

                // Show the welcome coupon modal
                showCouponModal();
                promoEmail.value = "";
            }
        });
    }
}

// ==========================================
// 14. Filtering & Category Control
// ==========================================
function setupFilterEventListeners() {
    const filterButtons = document.querySelectorAll(".filter-btn");
    filterButtons.forEach(btn => {
        btn.addEventListener("click", (e) => {
            filterButtons.forEach(b => b.classList.remove("active"));
            const current = e.currentTarget;
            current.classList.add("active");
            
            const filter = current.getAttribute("data-filter");
            appState.activeTrendingFilter = filter;
            renderProductsGrid(filter);
        });
    });
}

function setTrendingFilter(category) {
    const filterButtons = document.querySelectorAll(".filter-btn");
    filterButtons.forEach(btn => {
        const filter = btn.getAttribute("data-filter");
        // Maps Category names to filter buttons
        if (filter.toLowerCase() === category.toLowerCase() || 
           (category === "Tote Bags" && filter === "Tote Bags") ||
           (category === "Laptop Skins" && filter === "Laptop Skins")) {
            btn.click();
        }
    });
}

// ==========================================
// 15. Mobile Menu Trigger
// ==========================================
function setupMobileMenu() {
    if (!mobileMenuBtn || !navLinks) return;
    
    mobileMenuBtn.addEventListener("click", () => {
        navLinks.classList.toggle("open");
        const icon = mobileMenuBtn.querySelector("i");
        if (navLinks.classList.contains("open")) {
            icon.className = "fa-solid fa-xmark";
            navLinks.style.display = "flex";
            navLinks.style.flexDirection = "column";
            navLinks.style.position = "absolute";
            navLinks.style.top = "90px";
            navLinks.style.left = "0";
            navLinks.style.width = "100%";
            navLinks.style.backgroundColor = "var(--color-bg-darkest)";
            navLinks.style.borderBottom = "var(--border-glass)";
            navLinks.style.padding = "20px 5%";
            navLinks.style.gap = "20px";
            navLinks.style.zIndex = "999";
        } else {
            icon.className = "fa-solid fa-bars";
            navLinks.style.display = "";
        }
    });
}

// ==========================================
// 16. State Persistence (Local Storage)
// ==========================================
function loadStateFromStorage() {
    try {
        const cartData = localStorage.getItem(CART_STORAGE_KEY);
        if (cartData) {
            appState.cart = JSON.parse(cartData);
        }
        
        const wishlistData = localStorage.getItem(WISHLIST_STORAGE_KEY);
        if (wishlistData) {
            appState.wishlist = JSON.parse(wishlistData);
        }
    } catch (e) {
        console.error("Could not load cart state from localStorage", e);
    }
}

function saveStateToStorage() {
    try {
        localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(appState.cart));
        localStorage.setItem(WISHLIST_STORAGE_KEY, JSON.stringify(appState.wishlist));
    } catch (e) {
        console.error("Could not save cart state to localStorage", e);
    }
}

// ==========================================
// 17. Scroll Reveal Observer System
// ==========================================
function setupScrollReveal() {
    // Check if IntersectionObserver is supported
    if (!('IntersectionObserver' in window)) {
        // Fallback: make everything visible immediately
        document.querySelectorAll(".reveal-on-scroll, .reveal-on-scroll-scale").forEach(el => {
            el.classList.add("revealed");
        });
        return;
    }

    const observerOptions = {
        root: null,
        threshold: 0.05,
        rootMargin: "0px 0px -40px 0px"
    };

    window.scrollRevealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("revealed");
                window.scrollRevealObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Initial observe call
    observeNewElements();
}

function observeNewElements() {
    if (window.scrollRevealObserver) {
        const revealElements = document.querySelectorAll(".reveal-on-scroll:not(.revealed), .reveal-on-scroll-scale:not(.revealed)");
        revealElements.forEach(el => window.scrollRevealObserver.observe(el));
    }
}
