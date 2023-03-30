import Link from "next/link";
import Image from "next/image";

export default function BlogCard({ Blog }) {
  const { title, slug, thumbnail } = Blog.fields;

  return (
    <div className="card">
      <div className="thumbnail">
        <Image
          src={"https:" + thumbnail.fields.file.url}
          layout="fill"
          objectFit={"cover"}
          //     width={thumbnail.fields.file.details.image.width}
          //     height={thumbnail.fields.file.details.image.height}
        />
      </div>
      <div className="content">
        <div className="info">
          <Link href={"/blogs/" + slug}>
            <a><h2>{title}</h2></a>
          </Link>
        </div>
      </div>
      
    </div>
  );
}
