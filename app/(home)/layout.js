import NavigationBar from "../components/Navigation";

export default function Layout({children}){
    return(
        <div className="w-[95%] mx-auto">
            {children}
        </div>
    )
}