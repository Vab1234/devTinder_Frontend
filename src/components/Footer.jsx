export default function Footer(){
    return(
        <footer className="footer footer-center bg-base-300 text-base-content p-4 fixed bottom-0">
            <aside>
                <p>Copyright © {new Date().getFullYear()} - All right reserved by TinDEV Ltd</p>
            </aside>
        </footer>
    )
}