import ProfileIcon from "./ProfileIcon";

const HomeHeader = () => {
    return (
        <header className="h-16 flex justify-between md:justify-end items-center gap-10  px-5">
            <div className="flex gap-10">
                <span className="  text-teal-50 text-[18px] font-semibold line-height hover:underline cursor-pointer">
                    Gmail
                </span>
                <span className="  text-teal-50 text-[18px] line-height font-semibold hover:underline cursor-pointer">
                    Images
                </span>
               
            </div>
            <ProfileIcon />

            
        </header>
    );
};

export default HomeHeader;
