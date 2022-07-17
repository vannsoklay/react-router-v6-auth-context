import { useAuth } from "../context/useContext";
const Profile = () => {
    const { user }: any = useAuth();
    console.log(user);
    
    return(
        <div>Profile</div>
    )
}

export default Profile;