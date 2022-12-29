import Image from "next/image";

const Logo = (props: any) => {
  const { renderDefault, title } = props;
  return (
    <div className="flex items-center space-x-2">
      <Image src='/logo.webp' alt="Kultura logo" height={50} width={50} className="rounded-full object-cover"/>
      <>{renderDefault(props)}</>
    </div>
  );
};

export default Logo;
