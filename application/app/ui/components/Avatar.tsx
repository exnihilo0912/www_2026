import Image from "next/image";
interface AvatarProps {
  src?: string;
  width?: number;
  height?: number;
}
export default function Avatar({ src}: AvatarProps) {
  return (
    <div className="size-[60] md:size-[90] rounded-full bg-stone-200 overflow-hidden">
      {src && <Image
        src={src}
        alt="avatar"
        className="object-cover w-full h-full"
        width="60"
        height="60"
        sizes="(max-width: 768px) 60px, 90px"
        loading="eager"
      />}
    </div>
  );
}