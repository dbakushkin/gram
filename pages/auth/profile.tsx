import { updateDoc } from "firebase/firestore";
import React, { ChangeEvent, SyntheticEvent } from "react";
import useUserProfile from "../../helpers/useUserProfile";

const Profile = () => {
  const { userProfile, userRef } = useUserProfile();

  if (!userProfile) {
    return <div>Вы не авторизованы</div>;
  }

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    updateDoc(userRef, {
      name: e.target.value,
    });
  };

  return (
    <div>
      <h1>Страница профиля</h1>
      <p>ID: {userProfile.uid}</p>
      {userProfile && (
        <p>
          Имя:{" "}
          <input
            type="text"
            value={userProfile.name}
            onChange={handleNameChange}
          />{" "}
        </p>
      )}
    </div>
  );
};

export default Profile;