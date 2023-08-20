function UserProfile({ profile }) {
  return (
    <div className="w-6 h-6 rounded-full overflow-hidden">
      <img className="object-cover" src={profile} alt="프로필" />
    </div>
  );
}

export default UserProfile;
