import { EMAIL, EMAIL_LINK } from "../../constants/links";

const EmailLink: React.FC = () => {
  return (
    <a
      href={EMAIL_LINK}
      className="text-accent text-[1.25rem] sm:text-[1.5rem] hover:underline"
    >
      {EMAIL}
    </a>
  );
};

export default EmailLink;
