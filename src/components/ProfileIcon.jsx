import { TbGridDots } from "react-icons/tb";

// import Profile from "../assets/profile-200x200.jpg";
// import ProfileRing from "../assets/profile-ring.svg";

const ProfileIcon = () => {
    return (
        <div className="flex gap-6 ">
            <span className="h-10 w-10 flex items-center justify-center rounded-full cursor-pointer hover:bg-black/[0.05]">
                <TbGridDots size={24} className=" text-white" />
            </span>
            <span className="h-10 w-10 relative flex justify-center items-center">
                <img className="absolute rounded-full" src="https://api.dicebear.com/5.x/initials/svg?seed=Darshan%20Soni"  />
            </span>
        </div>
    );
};

export default ProfileIcon;
