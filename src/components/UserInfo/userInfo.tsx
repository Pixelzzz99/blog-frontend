import "./UserInfo.scss";

type UserInfoProps = {
  avatarUrl: string;
  fullName: string;
  additionalText: Date | string;
};

export const UserInfo = ({
  avatarUrl,
  fullName,
  additionalText,
}: UserInfoProps) => {
  return (
    <div className="root-user-info">
      <img
        src={avatarUrl || "./noavatar.png"}
        alt={fullName}
        className="avatar"
      />
      <div className="userDetails">
        <span className="userName">{fullName}</span>
        <span className="addtional">{additionalText}</span>
      </div>
    </div>
  );
};
