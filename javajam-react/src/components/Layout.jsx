import Header from "./Header";
import Navigation from "./Navigation";
import Footer from "./Footer";

function Layout({activePage, children}){
    return (
        <div className="w-[80%] min-w-[800px] max-w-[960px] mx-auto my-5 border-[6px] border-dotted border-[#b8944f] overflow-hidden">
            <Header />

            <div className="overflow-hidden min-h-[350px] bg-[#ddc9a3]">
                <Navigation activePage={activePage} />

                <main className="ml-[160px] bg-[#faf7ec] px-[25px] pt-[15px] pb-[25px] min-h-[350px]">
                    {children}
                </main>
            </div>

            <Footer />
        </div>
    );
}

export default Layout;