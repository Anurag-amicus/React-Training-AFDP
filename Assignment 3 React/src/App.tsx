import Button from "./components/Button";
import Card from "./components/Card";
import "./App.css";

function App() {
    return (
        <main className="app">
            <h1>Assignment 3 React</h1>

            <div className="assignment-subtitle">
                ASSIGNMENT 3 — Button (4 variants) &amp; Card (3 variants)
            </div>

            {/* =========================
                SECTION A — BUTTON VARIANTS
            ========================= */}

            <section className="showcase-section">
                <h2>SECTION A — BUTTON VARIANTS</h2>

                <div className="button-showcase">

                    <div className="button-example">
                        <Button>
                            ORDER NOW
                        </Button>

                        <span>Primary</span>
                    </div>

                    <div className="button-example">
                        <Button variant="secondary">
                            VIEW MANUALS
                        </Button>

                        <span>Secondary</span>
                    </div>

                    <div className="button-example">
                        <Button variant="outline">
                            SEARCH
                        </Button>

                        <span>Outline</span>
                    </div>

                    <div className="button-example">
                        <Button variant="danger">
                            REMOVE
                        </Button>

                        <span>Danger</span>
                    </div>

                </div>
            </section>


            {/* =========================
                SECTION B — CARD VARIANTS
            ========================= */}

            <section className="showcase-section card-section">
                <h2>SECTION B — CARD VARIANTS</h2>

                <div className="card-showcase">

                    <div className="card-example">
                        <Card variant="elevated">
                            <div>
                                <h3>Order Now</h3>

                                <p>
                                    Quickly place your order for parts.
                                </p>
                            </div>

                            <Button>
                                ORDER NOW
                            </Button>
                        </Card>

                        <span>Elevated</span>
                    </div>


                    <div className="card-example">
                        <Card variant="bordered">
                            <div>
                                <h3>Aftermarket Products</h3>

                                <p>
                                    Spare parts catalog.
                                </p>
                            </div>

                            <Button>
                                BROWSE PRODUCTS
                            </Button>
                        </Card>

                        <span>Bordered</span>
                    </div>


                    <div className="card-example">
                        <Card variant="flat">
                            <div>
                                <h3>Support</h3>

                                <p>
                                    Technical help center.
                                </p>
                            </div>

                            <Button variant="outline">
                                CONTACT SUPPORT
                            </Button>
                        </Card>

                        <span>Flat</span>
                    </div>

                </div>
            </section>
        </main>
    );
}

export default App;