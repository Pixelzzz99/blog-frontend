import "./UserInfo.scss";

type UserInfoProps = {
  avatarUrl: string;
  fullName: string;
  additionalText: string;
};

export const UserInfo = ({
    avatarUrl,
    fullName,
    additionalText,
}:UserInfoProps) => {

  return (
    <div className="root">
      <img
        src={avatarUrl || "./noavatar.png"}
        alt={fullName}
        className="avatar"
      />

    </div>
  );
};
