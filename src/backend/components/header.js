import Link from 'next/link';

const header = () => {
  return (
    <div>
      <div>
        <div>
          <Link href="/admin">Logo</Link>
        </div>
        <div>
          <p>üyelik bilgileri</p>
        </div>
      </div>
    </div>
  );
};

export default header;
