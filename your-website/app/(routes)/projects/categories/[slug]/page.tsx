export default function CategoryProjectsPage({ params }: { params: { slug: string } }) {
    return (
      <div>
        <h1>Projects in category: {params.slug}</h1>
      </div>
    );
  }