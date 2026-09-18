function App() {
    const handleClick = () => {
        console.log("Hello React button clicked successfully.");
    };

    return (
        <main className="app">
            <header>
                <h1>React assignment 1</h1>
            </header>

            <p>
                lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>

            <button onClick={handleClick}>
                Click Me
            </button>
        </main>
    );
}

export default App;