import Tag from './Tag';

type TagStatus = 'info' | 'success' | 'error' | 'warn';
interface StatusTagProps {
  children: React.ReactNode;
  status: TagStatus;
}
export default function StatusTag({ children, status }: StatusTagProps) {
  return (
    <Tag>{children}</Tag>
  );
}