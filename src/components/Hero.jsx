export default function Hero() {
    return (
        <>
            <h1>Coffee Tracker for Coffee <abbr title= "an enthusiast or devotee" > Friends </abbr>!</h1>
            <div className="benifits-list">
                
                <h3 className="font-bolder">Try <span className="text-gradient">Caffeind</span> and start ...</h3>
                <ul>
                    <li>Tracking your coffee consumption</li>
                    <li>Seeing how much you spend on coffee</li>
                    <li>Discovering your favorite coffee</li>
                </ul>
            </div>
            <div className="card info-card">
                <div>
                    <i className = "fa-solid fa-circle-info"></i>
                    <h3>Did you know</h3>
                </div><h5> That caffeine&apos;s half-life ins about 5 hours ?</h5>
                <p> This means that after 5 hours , half the caffeine you consumed is still in your system so if you drink a cup of 200mg og caffeine , 5 hours alter, you will still have 100gm in your system.</p>
            </div>
        </>
    )
}